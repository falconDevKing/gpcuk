import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Music2, Phone, Users } from "lucide-react";

import { HeroCarousel } from "@/components/home/hero-carousel";
import { Button } from "@/components/ui/button";
import {
  appContact,
  branches,
  churchExperiences,
  churchIdentity,
  formatServiceTime,
  galleryItems,
  getLeaderById,
  heroSlides,
  homepageSections,
  nationwideServiceTimes,
  prophetFeature,
  toTelephoneHref,
  welcomeContent,
  wordForTheYear,
} from "@/constants";
import type { ExperienceIcon } from "@/constants";

const experienceIcons: Record<ExperienceIcon, typeof Music2> = {
  music: Music2,
  people: Users,
  community: HeartHandshake,
};

const experienceColors = {
  amber: "from-amber-300 via-yellow-100 to-white",
  sky: "from-sky-300 via-cyan-100 to-white",
  emerald: "from-emerald-300 via-lime-100 to-white",
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 8.5h2.2V5.2c-.4-.1-1.7-.2-3.2-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.5V17h3.3v7h4v-7h3.3l.5-3.6h-3.8v-2.7c0-1 .3-2.2 2.2-2.2Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.1a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z"
      />
    </svg>
  );
}

export default function Home() {
  const prophet = getLeaderById(prophetFeature.personId);
  const featuredGallery = galleryItems.filter((item) => item.featured);

  return (
    <main className="min-h-screen bg-[#fffdf7] text-zinc-950">
      <HeroCarousel slides={heroSlides} fallbackImage={churchIdentity.logo} />

      <section className="bg-[#efe4c8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-lg border border-amber-300/50 bg-linear-to-br from-zinc-950 via-zinc-900 to-amber-900 p-7 text-white shadow-2xl shadow-amber-950/15 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-bold tracking-[0.45em] text-amber-300 uppercase">
                  {welcomeContent.eyebrow}
                </p>
                <h2 className="font-display mt-5 max-w-2xl text-5xl leading-none font-semibold text-balance sm:text-6xl">
                  {welcomeContent.title}
                </h2>
              </div>
              <p className="max-w-3xl text-xl leading-9 font-semibold text-white/78">
                {welcomeContent.description}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {nationwideServiceTimes.map((service) => (
              <article
                key={service.id}
                className="rounded-lg bg-linear-to-br from-zinc-950 via-zinc-900 to-amber-700 p-6 text-white shadow-xl shadow-amber-950/10"
              >
                <p className="text-sm font-bold tracking-[0.35em] text-amber-300 uppercase">
                  {service.name}
                </p>
                <h3 className="font-display mt-3 text-6xl font-semibold">
                  {formatServiceTime(service.startTime)}
                </h3>
                <p className="mt-5 text-lg leading-7 font-semibold text-white/82">
                  {service.description}
                </p>
              </article>
            ))}

            <article className="rounded-lg bg-linear-to-br from-zinc-950 via-zinc-900 to-amber-700 p-6 text-white shadow-xl shadow-amber-950/10">
              <p className="text-sm font-bold tracking-[0.35em] text-amber-300 uppercase">
                Planning a Visit?
              </p>
              <h3 className="font-display mt-3 text-5xl font-semibold">
                We are here to help
              </h3>
              <p className="mt-5 text-lg leading-7 font-semibold text-white/82">
                Call {appContact.phoneDisplay} or email {appContact.publicEmail}
                &nbsp; for branch and service information.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#efe4c8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-lg border border-amber-200 bg-white/85 p-8 shadow-xl shadow-amber-950/10 sm:p-10">
            <p className="text-sm font-bold tracking-[0.35em] text-amber-700 uppercase">
              {wordForTheYear.eyebrow}
            </p>
            <h2 className="font-display mt-5 max-w-xl text-5xl leading-none font-semibold text-balance sm:text-6xl">
              {wordForTheYear.year}: {wordForTheYear.title}
            </h2>
            {wordForTheYear.description && (
              <p className="mt-6 text-lg leading-8 text-zinc-700">
                {wordForTheYear.description}
              </p>
            )}
            <p className="mt-7 text-lg leading-8 text-zinc-700">
              {wordForTheYear.scriptureText}
            </p>
            <p className="mt-4 text-sm font-bold tracking-[0.22em] text-amber-700 uppercase">
              {wordForTheYear.scriptureReference}
            </p>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-lg border border-amber-200 bg-zinc-950 shadow-2xl shadow-amber-950/10 sm:min-h-107.5">
            <Image
              src={wordForTheYear.image.src || churchIdentity.logo.src}
              alt={wordForTheYear.image.alt || churchIdentity.logo.alt}
              fill
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {prophet && (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative h-105 max-h-[70vh] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-xl shadow-zinc-950/10 sm:h-125 lg:h-140">
              <Image
                src={prophet.image.src || churchIdentity.logo.src}
                alt={prophet.image.alt || churchIdentity.logo.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-contain object-top"
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.35em] text-amber-700 uppercase">
                {prophet.role}
              </p>
              <h2 className="font-display mt-5 max-w-3xl text-5xl leading-none font-semibold text-balance sm:text-6xl">
                {prophet.name}
              </h2>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
                {prophetFeature.description}
              </p>
              <Button asChild className="mt-8 bg-zinc-950 text-white">
                <Link href={prophetFeature.learnMoreHref}>
                  Learn More
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#fff7df] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-amber-700 uppercase">
                {homepageSections.branches.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-5xl leading-none font-semibold text-balance sm:text-6xl">
                {homepageSections.branches.title}
              </h2>
            </div>
            <p className="text-xl leading-8 text-zinc-700">
              {homepageSections.branches.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((branch) => {
              const branchImage = branch.image.src
                ? branch.image
                : churchIdentity.logo;

              return (
                <article
                  key={branch.id}
                  className="group relative min-h-97.5 overflow-hidden rounded-lg border border-amber-200 bg-zinc-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={branchImage.src}
                    alt={branch.image.alt || branchImage.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
                    className={`transition duration-500 group-hover:scale-105 ${
                      branch.image.src ? "object-cover" : "object-contain p-12"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/10" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-4xl font-semibold">
                      {branch.name}
                    </h3>

                    <address className="mt-4 space-y-1 text-sm text-white/80 not-italic">
                      {branch.address.venueName && (
                        <p className="font-semibold text-white">
                          {branch.address.venueName}
                        </p>
                      )}
                      {branch.address.line1 && <p>{branch.address.line1}</p>}
                      {branch.address.line2 && <p>{branch.address.line2}</p>}
                      {(branch.address.city || branch.address.postcode) && (
                        <p>
                          {[branch.address.city, branch.address.postcode]
                            .filter(Boolean)
                            .join(" ")}
                        </p>
                      )}
                    </address>

                    {branch.phoneDisplay && (
                      <a
                        href={toTelephoneHref(branch.phoneHref)}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-amber-300"
                      >
                        <Phone className="size-4" aria-hidden="true" />
                        {branch.phoneDisplay}
                      </a>
                    )}

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <Button
                        asChild
                        variant="link"
                        className="h-auto px-0 text-amber-300 hover:text-amber-200"
                      >
                        <Link href={`/locations#${branch.slug}`}>
                          View Location
                          <ArrowRight
                            data-icon="inline-end"
                            className="size-4"
                          />
                        </Link>
                      </Button>

                      {(branch.social.facebook || branch.social.instagram) && (
                        <div className="flex items-center gap-2">
                          {branch.social.facebook && (
                            <a
                              href={branch.social.facebook}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${branch.city} branch Facebook page`}
                              className="flex size-9 items-center justify-center rounded-full border border-white/25 bg-zinc-950/45 text-white transition hover:border-amber-300 hover:bg-amber-300 hover:text-zinc-950"
                            >
                              <FacebookIcon />
                            </a>
                          )}
                          {branch.social.instagram && (
                            <a
                              href={branch.social.instagram}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${branch.city} branch Instagram page`}
                              className="flex size-9 items-center justify-center rounded-full border border-white/25 bg-zinc-950/45 text-white transition hover:border-amber-300 hover:bg-amber-300 hover:text-zinc-950"
                            >
                              <InstagramIcon />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {featuredGallery.length > 0 && (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold tracking-[0.22em] text-amber-700 uppercase">
                  {homepageSections.gallery.eyebrow}
                </p>
                <h2 className="font-display mt-3 max-w-3xl text-5xl leading-none font-semibold text-balance sm:text-6xl">
                  {homepageSections.gallery.title}
                </h2>
              </div>
              <Button asChild variant="outline" className="w-fit bg-white">
                <Link href="/gallery">
                  View Gallery
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="auto-rows-65 mt-10 grid gap-4 md:grid-cols-3">
              {featuredGallery.map((item) => {
                const image = item.image.src ? item.image : churchIdentity.logo;

                return (
                  <article
                    key={item.id}
                    className={`group relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 shadow-sm ${
                      item.layout === "wide" ? "md:col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={item.image.alt || image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 92vw"
                      className={`transition duration-500 group-hover:scale-105 ${
                        image.src === churchIdentity.logo.src
                          ? "object-contain p-12"
                          : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/35 to-transparent" />
                    <div className="absolute right-0 bottom-0 left-0 p-5 text-white">
                      <h3 className="font-display text-3xl font-semibold">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mt-2 text-sm font-semibold text-white/75">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.22em] text-emerald-700 uppercase">
              {homepageSections.experiences.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-5xl leading-none font-semibold text-balance sm:text-6xl">
              {homepageSections.experiences.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {churchExperiences.map((experience) => {
              const Icon = experienceIcons[experience.icon];

              return (
                <article
                  key={experience.id}
                  className={`rounded-lg border border-zinc-200 bg-linear-to-br p-7 shadow-sm ${experienceColors[experience.color]}`}
                >
                  <div className="mb-20 flex size-14 items-center justify-center rounded-lg bg-white/85 shadow-sm">
                    <Icon className="size-7 text-zinc-950" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-4xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-zinc-700">
                    {experience.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
