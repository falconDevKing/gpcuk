"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { branches, contactPage } from "@/constants";
import type { ContactFormPayload } from "@/constants";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const inputClasses =
  "h-12 w-full rounded-lg border border-zinc-300 bg-white px-4 text-base text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/20";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload: ContactFormPayload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      preferredLocation: String(formData.get("preferredLocation") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error || "We could not send your message right now.",
        );
      }

      formRef.current?.reset();
      setStatus({
        type: "success",
        message: contactPage.successMessage,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6">
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px" }}
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="font-semibold text-zinc-800">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="font-semibold text-zinc-800">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="phone" className="font-semibold text-zinc-800">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={40}
            autoComplete="tel"
            className={inputClasses}
            placeholder="Your phone number"
          />
        </div>
        {contactPage.branchSelectionEnabled && (
          <div className="grid gap-2">
            <label
              htmlFor="preferredLocation"
              className="font-semibold text-zinc-800"
            >
              Preferred branch <span className="font-normal">(optional)</span>
            </label>
            <select
              id="preferredLocation"
              name="preferredLocation"
              className={inputClasses}
              defaultValue=""
            >
              <option value="">No branch selected</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="font-semibold text-zinc-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={7}
          className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-amber-500 focus:ring-3 focus:ring-amber-500/20"
          placeholder="How can we help?"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-6 text-zinc-500">
          By submitting this form, you agree that our UK team may contact you
          about your enquiry.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="bg-zinc-950 text-base text-white hover:bg-zinc-800"
        >
          {isSubmitting ? contactPage.submittingLabel : contactPage.submitLabel}
          <Send data-icon="inline-end" className="size-4" />
        </Button>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {status.type !== "idle" && (
          <p
            className={`flex items-center gap-2 rounded-lg px-4 py-3 font-semibold ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {status.type === "success" && (
              <CheckCircle2 className="size-5" aria-hidden="true" />
            )}
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
