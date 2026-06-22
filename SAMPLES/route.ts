import { readFile } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

const CONTACT_TEMPLATE_PATH = path.join(process.cwd(), "src", "mailTemplate", "contact-us.html");
const LAMBDA_URL = "https://35ftlqstrt43wzewwojiblpp2m0hrrbe.lambda-url.eu-west-1.on.aws/";
const MINISTRY_NAME = "Gospel Pillars Church Toronto";
const LOGO_URL = "https://ohip-public.s3.eu-west-1.amazonaws.com/gpcLogo.png";
const GENERAL_EMAIL = "info@gospelpillarscanada.ca";
const BRANCH_EMAILS = {
  toronto: "toronto@gospelpillarscanada.ca",
  edmonton: "edmonton@gospelpillarscanada.ca",
  oshawa: "oshawa@gospelpillarscanada.ca",
} as const;

type BranchSlug = keyof typeof BRANCH_EMAILS;

type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  preferredLocation?: string;
  message: string;
};

function isBranchSlug(value: string): value is BranchSlug {
  return value in BRANCH_EMAILS;
}

function sanitize(value: string) {
  return value.trim();
}

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function validatePayload(payload: unknown): ContactFormPayload {
  if (!payload || typeof payload !== "object") {
    throw new Error("Invalid form submission.");
  }

  const parsed = payload as Record<string, unknown>;
  const name = typeof parsed.name === "string" ? sanitize(parsed.name) : "";
  const email = typeof parsed.email === "string" ? sanitize(parsed.email) : "";
  const phone = typeof parsed.phone === "string" ? sanitize(parsed.phone) : "";
  const preferredLocation = typeof parsed.preferredLocation === "string" ? sanitize(parsed.preferredLocation) : "";
  const message = typeof parsed.message === "string" ? sanitize(parsed.message) : "";

  if (!name || !email || !phone || !message) {
    throw new Error("Please complete your name, email, phone number, and message.");
  }

  if (preferredLocation && !isBranchSlug(preferredLocation)) {
    throw new Error("Invalid preferred location selected.");
  }

  return { name, email, phone, preferredLocation, message };
}

async function renderContactEmail(payload: ContactFormPayload) {
  const template = await readFile(CONTACT_TEMPLATE_PATH, "utf8");
  const submittedAt = new Date().toLocaleString("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const preferredLocationLabel = payload.preferredLocation
    ? payload.preferredLocation.charAt(0).toUpperCase() + payload.preferredLocation.slice(1)
    : "Not specified";

  return template
    .replaceAll("{LOGO_URL}", LOGO_URL)
    .replaceAll("{MINISTRY_NAME}", MINISTRY_NAME)
    .replaceAll("{NAME}", escapeHtml(payload.name))
    .replaceAll("{EMAIL}", escapeHtml(payload.email))
    .replaceAll("{PHONE_NUMBER}", escapeHtml(payload.phone))
    .replaceAll("{PREFERRED_LOCATION}", escapeHtml(preferredLocationLabel))
    .replaceAll("{MESSAGE}", escapeHtml(payload.message))
    .replaceAll("{SUBMITTED_AT}", escapeHtml(submittedAt));
}

function buildRecipientList(preferredLocation?: string) {
  const recipients = new Set<string>([GENERAL_EMAIL]);

  if (preferredLocation && isBranchSlug(preferredLocation)) {
    recipients.add(BRANCH_EMAILS[preferredLocation]);
  }

  return Array.from(recipients);
}

function prepareLambdaPayload(payload: ContactFormPayload, body: string) {
  return {
    to: buildRecipientList(payload.preferredLocation),
    subject: `New Contact Form Submission - ${payload.name}`,
    body,
    senderName: `GPC Toronto Website`,
  };
}

export async function POST(request: Request) {
  try {
    const payload = validatePayload(await request.json());
    const body = await renderContactEmail(payload);
    const lambdaPayload = prepareLambdaPayload(payload, body);

    const lambdaResponse = await fetch(LAMBDA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lambdaPayload),
      cache: "no-store",
    });

    if (!lambdaResponse.ok) {
      console.log("lambdaResponse", lambdaResponse);
      const responseText = await lambdaResponse.text();
      console.error("Lambda request failed", lambdaResponse.status, responseText);
      return NextResponse.json({ error: "We could not send your message right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log("Error", error);
    const message = error instanceof Error ? error.message : "We could not send your message right now.";
    const status = message.startsWith("Please complete") || message.startsWith("Invalid") ? 400 : 500;

    if (status === 500) {
      console.error("Contact form submission failed", error);
    }

    return NextResponse.json({ error: message }, { status });
  }
}
