import { readFile } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import {
  appContact,
  branches,
  churchIdentity,
  getBranchById,
} from "@/constants";
import type { ContactFormPayload } from "@/constants";

const CONTACT_TEMPLATE_PATH = path.join(
  process.cwd(),
  "src",
  "mailTemplate",
  "contact-us.html",
);
const LAMBDA_URL =
  "https://35ftlqstrt43wzewwojiblpp2m0hrrbe.lambda-url.eu-west-1.on.aws/";
const LOGO_URL = "https://ohip-public.s3.eu-west-1.amazonaws.com/gpcLogo.png";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 40,
  message: 5000,
};

function sanitize(value: string): string {
  return value.trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readString(
  parsed: Record<string, unknown>,
  field: keyof ContactFormPayload,
): string {
  return typeof parsed[field] === "string"
    ? sanitize(parsed[field] as string)
    : "";
}

function validatePayload(payload: unknown): ContactFormPayload {
  if (!payload || typeof payload !== "object") {
    throw new Error("Invalid form submission.");
  }

  const parsed = payload as Record<string, unknown>;
  const name = readString(parsed, "name");
  const email = readString(parsed, "email");
  const phone = readString(parsed, "phone");
  const preferredLocation = readString(parsed, "preferredLocation");
  const message = readString(parsed, "message");

  if (!name || !email || !phone || !message) {
    throw new Error(
      "Please complete your name, email, phone number, and message.",
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    phone.length > MAX_LENGTHS.phone ||
    message.length > MAX_LENGTHS.message
  ) {
    throw new Error("One or more fields exceed the allowed length.");
  }

  if (
    preferredLocation &&
    !branches.some((branch) => branch.id === preferredLocation)
  ) {
    throw new Error("Invalid preferred branch selected.");
  }

  return { name, email, phone, preferredLocation, message };
}

async function renderContactEmail(payload: ContactFormPayload) {
  const template = await readFile(CONTACT_TEMPLATE_PATH, "utf8");
  const submittedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: churchIdentity.timezone,
  });
  const preferredBranch = payload.preferredLocation
    ? getBranchById(payload.preferredLocation)?.name || "Not specified"
    : "Not specified";

  return template
    .replaceAll("{LOGO_URL}", LOGO_URL)
    .replaceAll("{MINISTRY_NAME}", churchIdentity.name)
    .replaceAll("{NAME}", escapeHtml(payload.name))
    .replaceAll("{EMAIL}", escapeHtml(payload.email))
    .replaceAll("{PHONE_NUMBER}", escapeHtml(payload.phone))
    .replaceAll("{PREFERRED_LOCATION}", escapeHtml(preferredBranch))
    .replaceAll("{MESSAGE}", escapeHtml(payload.message))
    .replaceAll("{SUBMITTED_AT}", escapeHtml(submittedAt));
}

export async function POST(request: Request) {
  try {
    const rawPayload = (await request.json()) as Record<string, unknown>;

    if (readString(rawPayload, "company")) {
      return NextResponse.json({ ok: true });
    }

    const payload = validatePayload(rawPayload);
    const body = await renderContactEmail(payload);

    if (!appContact.contactFormRecipientEmail) {
      console.error("Contact form recipient email is not configured.");
      return NextResponse.json(
        { error: "We could not send your message right now." },
        { status: 500 },
      );
    }

    const lambdaResponse = await fetch(LAMBDA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: [appContact.contactFormRecipientEmail],
        subject: `New Contact Form Submission - ${payload.name}`,
        body,
        senderName: "GPC UK Website",
      }),
      cache: "no-store",
    });

    if (!lambdaResponse.ok) {
      const responseText = await lambdaResponse.text();
      console.error(
        "Contact Lambda request failed",
        lambdaResponse.status,
        responseText,
      );
      return NextResponse.json(
        { error: "We could not send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "We could not send your message right now.";
    const isValidationError =
      message.startsWith("Please") ||
      message.startsWith("Invalid") ||
      message.startsWith("One or more");

    if (!isValidationError) {
      console.error("Contact form submission failed", error);
    }

    return NextResponse.json(
      { error: message },
      { status: isValidationError ? 400 : 500 },
    );
  }
}
