import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Church,
  Globe,
  HeartHandshake,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  aboutPage,
  branchPastors,
  churchIdentity,
  getLeaderById,
  ministryArms,
} from "@/constants";
import type { Person } from "@/constants";

export const metadata: Metadata = {
  title: aboutPage.metadata.title,
  description: aboutPage.metadata.description,
};

const beliefIcons = {
  word: BookOpen,
  jesus: Sparkles,
  spirit: HeartHandshake,
  church: Church,
};

function PersonPortrait({ person }: { person: Person }) {
  const hasPortrait = Boolean(person.image.src);

  return (
    <div className="relative aspect-square overflow-hidden rounded-lg border border-amber-200 bg-[#fff7df]">
      <Image
        src={person.image.src || churchIdentity.logo.src}
        alt={person.image.alt || person.name}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 92vw"
        className={
          hasPortrait
            ? "object-contain object-top"
            : "object-contain p-14 opacity-35"
        }
      />
      {!hasPortrait && (
        <span className="absolute right-4 bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-center text-sm font-semibold text-zinc-700 backdrop-blur-sm">
          Official portrait coming soon
        </span>
      )}
    </div>
  );
}

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

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M15.7 3c.3 2.2 1.6 3.6 3.8 3.8v3.1a8.2 8.2 0 0 1-3.8-1.1v5.8a6.1 6.1 0 1 1-5.3-6V12a2.8 2.8 0 1 0 2.1 2.7V3h3.2Z"
      />
    </svg>
  );
}

export default function AboutPage() {
  const prophet = getLeaderById("prophet-isaiah-macwealth");
  const districtLeader = getLeaderById("apostle-derrick-utake");
  const divisionLeader = getLeaderById("rev-owen-igharo");
  const oneSound = ministryArms.find(
    (ministry) => ministry.id === "onesound-charity",
  );

  return (
    <main className="bg-[#fffdf7] text-zinc-950">
      <section className="relative isolate overflow-hidden border-b border-amber-200 bg-[#fff7df] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Image
          src={churchIdentity.logo.src}
          alt=""
          width={420}
          height={420}
          className="pointer-events-none absolute top-1/2 right-0 -z-10 hidden -translate-y-1/2 opacity-10 lg:block"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-amber-700 uppercase">
            {aboutPage.hero.eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-6xl leading-none font-semibold text-balance sm:text-7xl lg:text-8xl">
            {aboutPage.hero.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-700 sm:text-2xl">
            {aboutPage.hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-11 bg-zinc-950 px-5 text-white">
              <Link href={aboutPage.hero.primaryCta.href}>
                {aboutPage.hero.primaryCta.label}
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-amber-400 bg-white px-5"
            >
              <a
                href={aboutPage.hero.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
              >
                {aboutPage.hero.secondaryCta.label}
                <MessageCircle data-icon="inline-end" className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase">
                {aboutPage.overview.eyebrow}
              </p>
              <h2 className="font-display mt-5 text-5xl leading-none font-semibold text-balance sm:text-6xl">
                {aboutPage.overview.title}
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-9 text-zinc-700">
              {aboutPage.overview.introduction}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[aboutPage.overview.vision, aboutPage.overview.mission].map(
              (item, index) => (
                <article
                  key={item.title}
                  className={`rounded-lg border p-7 sm:p-9 ${
                    index === 0
                      ? "border-amber-200 bg-[#fff7df]"
                      : "border-sky-200 bg-sky-50"
                  }`}
                >
                  <h3 className="font-display text-4xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-zinc-700">
                    {item.description}
                  </p>
                </article>
              ),
            )}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.overview.beliefs.map((belief) => {
              const Icon =
                beliefIcons[belief.id as keyof typeof beliefIcons] || Church;

              return (
                <article
                  key={belief.id}
                  className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-6 text-3xl font-semibold">
                    {belief.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-600">
                    {belief.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase">
            {aboutPage.leadership.eyebrow}
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-5xl leading-none font-semibold text-balance sm:text-6xl">
            {aboutPage.leadership.title}
          </h2>

          {prophet && (
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
              <article className="grid gap-8 rounded-lg border border-amber-200 bg-[#fff7df] p-5 sm:p-7 md:grid-cols-[0.75fr_1.25fr] md:items-center">
                <PersonPortrait person={prophet} />
                <div className="pb-2">
                  <p className="text-sm font-bold tracking-[0.25em] text-amber-700 uppercase">
                    {prophet.role}
                  </p>
                  <h3 className="font-display mt-4 text-5xl leading-none font-semibold">
                    {prophet.name}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-zinc-700">
                    {prophet.fullBio}
                  </p>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-zinc-950 p-7 text-white">
                <div className="relative mx-auto aspect-square w-full max-w-52 overflow-hidden rounded-lg bg-white/8">
                  <Image
                    src={churchIdentity.logo.src}
                    alt="Gospel Pillars Church logo placeholder"
                    fill
                    sizes="208px"
                    className="object-contain p-10 opacity-45"
                  />
                </div>
                <div className="mt-8">
                  <p className="text-sm font-bold tracking-[0.25em] text-amber-300 uppercase">
                    Prophet and Wife
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-semibold">
                    {aboutPage.leadership.wifePlaceholder.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/70">
                    {aboutPage.leadership.wifePlaceholder.description}
                  </p>
                </div>
              </article>
            </div>
          )}

          {districtLeader && (
            <article className="mt-6 grid gap-6 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:grid-cols-[0.45fr_1fr] sm:items-stretch">
              <div className="relative min-h-68 overflow-hidden rounded-lg border border-amber-200 bg-[#fff7df]">
                <Image
                  src={districtLeader.image.src || churchIdentity.logo.src}
                  alt={districtLeader.image.alt || districtLeader.name}
                  fill
                  sizes="(min-width: 640px) 35vw, 92vw"
                  className={
                    districtLeader.image.src
                      ? "object-cover object-top"
                      : "object-contain p-14 opacity-35"
                  }
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                  {districtLeader.role}
                </p>
                <h3 className="font-display mt-3 text-4xl leading-none font-semibold">
                  {districtLeader.name}
                </h3>
                <p className="mt-5 leading-7 text-zinc-600">
                  {districtLeader.fullBio}
                </p>
              </div>
            </article>
          )}

          {divisionLeader && (
            <article className="mt-6 grid gap-6 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr_0.45fr] sm:items-stretch">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                  {divisionLeader.role}
                </p>
                <h3 className="font-display mt-3 text-3xl leading-none font-semibold">
                  {divisionLeader.name}
                </h3>
                <p className="mt-4 leading-7 text-zinc-600">
                  {divisionLeader.fullBio}
                </p>
              </div>
              <div className="relative min-h-48 overflow-hidden rounded-lg border border-amber-200 bg-[#fff7df]">
                <Image
                  src={divisionLeader.image.src || churchIdentity.logo.src}
                  alt={divisionLeader.image.alt || divisionLeader.name}
                  fill
                  sizes="(min-width: 640px) 35vw, 92vw"
                  className={
                    divisionLeader.image.src
                      ? "object-cover object-top"
                      : "object-contain p-14 opacity-35"
                  }
                />
                {!divisionLeader.image.src && (
                  <span className="absolute right-4 bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-center text-sm font-semibold text-zinc-700 backdrop-blur-sm">
                    Official portrait coming soon
                  </span>
                )}
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="bg-[#fff7df] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-amber-700 uppercase">
                {aboutPage.pastors.eyebrow}
              </p>
              <h2 className="font-display mt-5 text-5xl leading-none font-semibold text-balance sm:text-6xl">
                {aboutPage.pastors.title}
              </h2>
            </div>
            <p className="text-xl leading-8 text-zinc-700">
              {aboutPage.pastors.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {branchPastors.map((pastor) => (
              <article
                key={pastor.id}
                className="overflow-hidden rounded-lg border border-amber-200 bg-white shadow-sm"
              >
                <div className="relative h-40 bg-linear-to-br from-white via-amber-50 to-sky-100">
                  <Image
                    src={pastor.image.src || churchIdentity.logo.src}
                    alt={pastor.image.alt || pastor.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                    className="object-contain p-9 opacity-35"
                  />
                </div>
                <div className="border-t border-amber-100 p-5">
                  <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                    {pastor.role.replace(" Branch Pastor", "")}
                  </p>
                  <h3 className="font-display mt-2 text-3xl font-semibold">
                    {pastor.name}
                  </h3>
                  <p className="mt-2 text-zinc-600">Branch Pastor</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {oneSound && (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-amber-300 bg-linear-to-br from-zinc-950 via-zinc-900 to-amber-900 text-white shadow-2xl shadow-amber-950/15">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="text-sm font-bold tracking-[0.3em] text-amber-300 uppercase">
                  {aboutPage.ministry.eyebrow}
                </p>
                <h2 className="font-display mt-5 text-5xl leading-none font-semibold sm:text-6xl">
                  {oneSound.name}
                </h2>
                <p className="mt-5 text-xl font-semibold text-amber-200">
                  Led by {oneSound.leader.name}
                </p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                  {oneSound.summary} {oneSound.description}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-6 border-t border-white/15 bg-white/6 p-7 sm:p-10 lg:border-t-0 lg:border-l">
                <p className="text-sm font-bold tracking-[0.25em] text-amber-300 uppercase">
                  Connect with OneSound
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={oneSound.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-white/80 transition hover:text-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                      <Globe className="size-4" />
                    </span>
                    <span className="text-sm">onesoundcharity.org</span>
                  </a>
                  <a
                    href={`tel:${oneSound.phone}`}
                    className="flex items-center gap-3 text-white/80 transition hover:text-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                      <Phone className="size-4" />
                    </span>
                    <span className="text-sm">{oneSound.phone}</span>
                  </a>
                  {oneSound.whatsapp && (
                    <a
                      href={oneSound.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-white/80 transition hover:text-white"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                        <MessageCircle className="size-4" />
                      </span>
                      <span className="text-sm">WhatsApp</span>
                    </a>
                  )}
                  <a
                    href={oneSound.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-white/80 transition hover:text-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                      <InstagramIcon />
                    </span>
                    <span className="text-sm">onesoundcharityuk</span>
                  </a>
                  <a
                    href={oneSound.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-white/80 transition hover:text-white"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                      <FacebookIcon />
                    </span>
                    <span className="text-sm">Onesound Charity UK</span>
                  </a>
                  {oneSound.social.tiktok && (
                    <a
                      href={oneSound.social.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-white/80 transition hover:text-white"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                        <TikTokIcon />
                      </span>
                      <span className="text-sm">OneSound Charity UK</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-emerald-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] text-emerald-800 uppercase">
              {aboutPage.cta.eyebrow}
            </p>
            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-none font-semibold text-balance sm:text-6xl">
              {aboutPage.cta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
              {aboutPage.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild className="h-11 bg-zinc-950 px-5 text-white">
              <Link href={aboutPage.cta.primaryCta.href}>
                {aboutPage.cta.primaryCta.label}
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-emerald-300 bg-white px-5"
            >
              <a
                href={aboutPage.cta.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
              >
                {aboutPage.cta.secondaryCta.label}
                <MessageCircle data-icon="inline-end" className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
