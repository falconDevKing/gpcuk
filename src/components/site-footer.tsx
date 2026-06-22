import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  appContact,
  churchIdentity,
  footerContent,
  footerCta,
  giving,
  navigation,
  planVisitWhatsAppUrl,
  toTelephoneHref,
} from "@/constants";

export function SiteFooter() {
  const address = appContact.officeAddress;
  const addressLines = [
    address.venueName,
    address.line1,
    address.line2,
    [address.city, address.postcode].filter(Boolean).join(" "),
    address.country,
  ].filter(Boolean);

  return (
    <footer className="bg-white px-5 py-16 text-zinc-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-amber-300/50 bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-900 p-7 text-white shadow-2xl shadow-amber-950/15 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.35em] text-amber-300 uppercase">
                {footerCta.eyebrow}
              </p>
              <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-semibold text-balance sm:text-5xl">
                {footerCta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                {footerCta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild className="bg-amber-400 text-zinc-950">
                <a href={planVisitWhatsAppUrl} target="_blank" rel="noreferrer">
                  Plan Your Visit
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
              {giving.enabled && giving.url ? (
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-zinc-950"
                >
                  <Link href={giving.url}>{giving.label}</Link>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  disabled
                  className="border-white/30 bg-white/10 text-white"
                >
                  {giving.unavailableLabel}
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-zinc-200 py-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <h3 className="font-display text-4xl font-semibold">
              {churchIdentity.name}
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              {footerContent.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-2xl font-semibold">Explore</h4>
            <nav className="mt-5 grid gap-3 text-zinc-600">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-zinc-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-2xl font-semibold">Connect</h4>
            <div className="mt-5 grid gap-3 text-zinc-600">
              {appContact.publicEmail && (
                <a
                  href={`mailto:${appContact.publicEmail}`}
                  className="inline-flex items-center gap-2 transition hover:text-zinc-950"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {appContact.publicEmail}
                </a>
              )}
              {appContact.prayerEmail && (
                <a
                  href={`mailto:${appContact.prayerEmail}`}
                  className="inline-flex items-center gap-2 transition hover:text-zinc-950"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {appContact.prayerEmail}
                </a>
              )}
              {appContact.phoneDisplay && (
                <a
                  href={toTelephoneHref(appContact.phoneHref)}
                  className="inline-flex items-center gap-2 transition hover:text-zinc-950"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {appContact.phoneDisplay}
                </a>
              )}
              {addressLines.length > 0 && (
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 size-4 shrink-0" aria-hidden="true" />
                  <address className="not-italic">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {footerContent.copyrightName}. All
            rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {footerContent.legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
