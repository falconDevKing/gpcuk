import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import {
  branches,
  churchIdentity,
  formatServiceTime,
  getBranchServiceTimes,
  getPastorById,
  locationsPage,
  toTelephoneHref,
} from "@/constants";

export const metadata: Metadata = {
  title: locationsPage.metadata.title,
  description: locationsPage.metadata.description,
};

function getDirectionsUrl(branch: (typeof branches)[number]): string {
  if (branch.directionsUrl) return branch.directionsUrl;
  const parts = [
    branch.address.venueName,
    branch.address.line1,
    branch.address.city,
    branch.address.postcode,
  ].filter(Boolean);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parts.join(", "))}`;
}

export default function LocationsPage() {
  return (
    <main className="bg-[#fffdf7] text-zinc-950">
      <section className="border-b border-amber-200 bg-[#fff7df] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-amber-700 uppercase">
            {locationsPage.hero.eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-6xl leading-none font-semibold text-balance sm:text-7xl lg:text-8xl">
            {locationsPage.hero.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-700 sm:text-2xl">
            {locationsPage.hero.description}
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {branches.map((branch, index) => {
              const serviceTimes = getBranchServiceTimes(branch);
              const pastor = getPastorById(branch.pastorId);
              const branchImage = branch.image.src
                ? branch.image
                : churchIdentity.logo;
              const hasPhoto = Boolean(branch.image.src);
              const flipped = Math.floor(index / 2) % 2 === 1;

              return (
                <article
                  key={branch.id}
                  id={branch.slug}
                  className={`grid overflow-hidden rounded-lg border border-amber-200 bg-white shadow-sm ${flipped ? "sm:grid-cols-[0.55fr_0.45fr]" : "sm:grid-cols-[0.45fr_0.55fr]"}`}
                >
                  <div
                    className={`relative min-h-48 bg-[#fff7df] sm:min-h-0 ${flipped ? "sm:order-last" : ""}`}
                  >
                    <Image
                      src={branchImage.src}
                      alt={branch.image.alt || branchImage.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 35vw, 92vw"
                      className={
                        hasPhoto
                          ? "object-cover"
                          : "object-contain p-10 opacity-30"
                      }
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-bold tracking-[0.25em] text-amber-700 uppercase">
                      {branch.city}
                    </p>
                    <h2 className="font-display mt-1.5 text-2xl font-semibold">
                      {branch.name}
                    </h2>
                    {pastor && (
                      <p className="mt-1 text-sm font-semibold text-amber-700">
                        Pastor: {pastor.name}
                      </p>
                    )}

                    <div className="mt-4 grid gap-3 border-t border-amber-100 pt-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                          Address
                        </p>
                        <address className="mt-1.5 space-y-0.5 text-sm text-zinc-700 not-italic">
                          {branch.address.venueName && (
                            <p className="font-semibold text-zinc-900">
                              {branch.address.venueName}
                            </p>
                          )}
                          {branch.address.line1 && (
                            <p>{branch.address.line1}</p>
                          )}
                          {branch.address.line2 && (
                            <p>{branch.address.line2}</p>
                          )}
                          {(branch.address.city || branch.address.postcode) && (
                            <p>
                              {[branch.address.city, branch.address.postcode]
                                .filter(Boolean)
                                .join(" ")}
                            </p>
                          )}
                        </address>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                          Contact
                        </p>
                        <div className="mt-1.5 space-y-1">
                          {branch.phoneDisplay && (
                            <a
                              href={toTelephoneHref(branch.phoneHref)}
                              className="flex items-center gap-2 text-sm text-zinc-700 transition hover:text-amber-700"
                            >
                              <Phone
                                className="size-3.5 text-amber-600"
                                aria-hidden="true"
                              />
                              {branch.phoneDisplay}
                            </a>
                          )}
                          {branch.whatsapp && (
                            <a
                              href={branch.whatsapp}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-sm text-zinc-700 transition hover:text-amber-700"
                            >
                              <MessageCircle
                                className="size-3.5 text-amber-600"
                                aria-hidden="true"
                              />
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {(branch.social.facebook || branch.social.instagram) && (
                      <div className="mt-4 border-t border-amber-100 pt-4">
                        <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                          Media Handles
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {branch.social.facebook && (
                            <a
                              href={branch.social.facebook}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 transition hover:border-amber-300 hover:text-amber-700"
                            >
                              <FacebookIcon />
                              Facebook
                            </a>
                          )}
                          {branch.social.instagram && (
                            <a
                              href={branch.social.instagram}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 transition hover:border-amber-300 hover:text-amber-700"
                            >
                              <InstagramIcon />
                              Instagram
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 border-t border-amber-100 pt-4">
                      <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                        Service Times
                      </p>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        {serviceTimes.map((service) => (
                          <div
                            key={service.id}
                            className="flex items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2"
                          >
                            <Clock
                              className="size-3.5 shrink-0 text-amber-600"
                              aria-hidden="true"
                            />
                            <div>
                              <p className="text-sm font-semibold text-zinc-900">
                                {service.name}
                              </p>
                              <p className="text-xs text-zinc-500">
                                {formatServiceTime(service.startTime)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {branch.mapEmbedUrl && (
                      <div className="mt-4 border-t border-amber-100 pt-4">
                        <p className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                          Google Map
                        </p>
                        <div className="mt-2 overflow-hidden rounded-lg border border-zinc-200">
                          <iframe
                            src={branch.mapEmbedUrl}
                            width="100%"
                            height="180"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${branch.name} map`}
                          />
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2 border-t border-amber-100 pt-4">
                      <Button
                        asChild
                        size="sm"
                        className="bg-zinc-950 text-white"
                      >
                        <a
                          href={getDirectionsUrl(branch)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MapPin
                            data-icon="inline-start"
                            className="size-3.5"
                          />
                          Get Directions
                          <ExternalLink
                            data-icon="inline-end"
                            className="size-3"
                          />
                        </a>
                      </Button>
                      {branch.whatsapp && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-amber-300 bg-white"
                        >
                          <a
                            href={branch.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Plan Your Visit
                            <MessageCircle
                              data-icon="inline-end"
                              className="size-3.5"
                            />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-emerald-800 uppercase">
              {locationsPage.cta.eyebrow}
            </p>
            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-none font-semibold text-balance sm:text-6xl">
              {locationsPage.cta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
              {locationsPage.cta.description}
            </p>
          </div>
          <div>
            <Button asChild className="h-11 bg-zinc-950 px-5 text-white">
              <a
                href={locationsPage.cta.primaryCta.href}
                target="_blank"
                rel="noreferrer"
              >
                {locationsPage.cta.primaryCta.label}
                <MessageCircle data-icon="inline-end" className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
