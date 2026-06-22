import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import {
  appContact,
  churchIdentity,
  contactPage,
  toTelephoneHref,
} from "@/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.description,
};

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  // whatsapp: "WhatsApp",
  tiktok: "TikTok",
};

export default function ContactPage() {
  const address = appContact.officeAddress;
  const socialLinks = Object.entries(appContact.social).filter(
    (entry): entry is [keyof typeof socialLabels, string] => Boolean(entry[1]),
  );

  return (
    <main className="flex-1 bg-[#fffdf7] text-zinc-950">
      <section className="border-b border-amber-200 bg-linear-to-br from-amber-100 via-white to-sky-100 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.28em] text-amber-700 uppercase">
            {contactPage.eyebrow}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-6xl leading-none font-semibold text-balance sm:text-7xl">
            {contactPage.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
            {contactPage.description}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <a
            href={`mailto:${appContact.publicEmail}`}
            className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
          >
            <Mail className="size-7 text-amber-600" aria-hidden="true" />
            <p className="mt-5 text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
              General enquiries
            </p>
            <p className="font-display mt-2 text-2xl font-semibold break-all group-hover:text-amber-700">
              {appContact.publicEmail}
            </p>
          </a>

          <a
            href={`mailto:${appContact.prayerEmail}`}
            className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
          >
            <Mail className="size-7 text-sky-600" aria-hidden="true" />
            <p className="mt-5 text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Prayer requests
            </p>
            <p className="font-display mt-2 text-2xl font-semibold break-all group-hover:text-sky-700">
              {appContact.prayerEmail}
            </p>
          </a>

          <a
            href={toTelephoneHref(appContact.phoneHref)}
            className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
          >
            <Phone className="size-7 text-emerald-600" aria-hidden="true" />
            <p className="mt-5 text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Call our UK team
            </p>
            <p className="font-display mt-2 text-3xl font-semibold group-hover:text-emerald-700">
              {appContact.phoneDisplay}
            </p>
          </a>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-950/5 sm:p-9">
            <p className="text-sm font-bold tracking-[0.25em] text-amber-700 uppercase">
              Contact form
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
              {contactPage.formHeading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              {contactPage.formHelper}
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="self-start rounded-lg border border-amber-300/40 bg-linear-to-br from-zinc-950 via-zinc-900 to-amber-900 p-7 text-white shadow-xl shadow-amber-950/15 sm:p-9">
            <p className="text-sm font-bold tracking-[0.25em] text-amber-300 uppercase">
              Visit {churchIdentity.shortName}
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold">
              {contactPage.visitHeading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              {contactPage.visitDescription}
            </p>

            <div className="mt-8 grid gap-6 border-y border-white/15 py-7">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 size-5 shrink-0 text-amber-300"
                  aria-hidden="true"
                />
                <address className="text-white/80 not-italic">
                  {address.venueName && (
                    <span className="block font-semibold text-white">
                      {address.venueName}
                    </span>
                  )}
                  {address.line1 && (
                    <span className="block">{address.line1}</span>
                  )}
                  {address.line2 && (
                    <span className="block">{address.line2}</span>
                  )}
                  <span className="block">
                    {[address.city, address.postcode].filter(Boolean).join(" ")}
                  </span>
                  {address.country && (
                    <span className="block">{address.country}</span>
                  )}
                </address>
              </div>

              <a
                href={toTelephoneHref(appContact.phoneHref)}
                className="flex items-center gap-3 text-white/80 transition hover:text-amber-300"
              >
                <Phone className="size-5 text-amber-300" aria-hidden="true" />
                {appContact.phoneDisplay}
              </a>

              {appContact.whatsappLink && (
                <a
                  href={appContact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/80 transition hover:text-amber-300"
                >
                  <MessageCircle
                    className="size-5 text-amber-300"
                    aria-hidden="true"
                  />
                  Chat with us on WhatsApp
                </a>
              )}
            </div>

            <Button asChild className="mt-7 bg-amber-400 text-zinc-950">
              <Link href="/locations">
                Explore Our Locations
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>

            {socialLinks.length > 0 && (
              <div className="mt-8">
                <p className="text-sm font-bold tracking-[0.2em] text-white/55 uppercase">
                  Follow and connect
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map(([network, href]) => (
                    <a
                      key={network}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/80 transition hover:border-amber-300 hover:text-amber-300"
                    >
                      {socialLabels[network]}
                      <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
