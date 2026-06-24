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

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/social-icons";
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

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aboutPage.overview.statements.map((item, index) => {
              const colors = [
                "border-amber-200 bg-[#fff7df]",
                "border-sky-200 bg-sky-50",
                "border-emerald-200 bg-emerald-50",
              ];
              return (
                <article
                  key={item.title}
                  className={`rounded-lg border p-7 sm:p-9 ${colors[index % colors.length]}`}
                >
                  <h3 className="font-display text-4xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-zinc-700">
                    {item.description}
                  </p>
                </article>
              );
            })}
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

              <article className="relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950">
                <Image
                  src="/assets/prophet-and-wife.jpeg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 92vw"
                  className="object-cover blur-md brightness-[0.3]"
                  aria-hidden="true"
                />
                <Image
                  src="/assets/prophet-and-wife.jpeg"
                  alt="Prophet Isaiah Macwealth and wife"
                  fill
                  sizes="(min-width: 1024px) 30vw, 92vw"
                  className="object-cover p-1"
                />
                <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-zinc-950/80 to-transparent p-5">
                  <p className="text-sm font-bold tracking-[0.25em] text-amber-300 uppercase">
                    Prophet and Wife
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
              <div className="relative min-h-52 overflow-hidden rounded-lg border border-amber-200 bg-zinc-950">
                {divisionLeader.image.src ? (
                  <>
                    <Image
                      src={divisionLeader.image.src}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 35vw, 92vw"
                      className="object-cover blur-md brightness-[0.3]"
                      aria-hidden="true"
                    />
                    <Image
                      src={divisionLeader.image.src}
                      alt={divisionLeader.image.alt || divisionLeader.name}
                      fill
                      sizes="(min-width: 640px) 35vw, 92vw"
                      className="object-contain p-1"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={churchIdentity.logo.src}
                      alt={divisionLeader.name}
                      fill
                      sizes="(min-width: 640px) 35vw, 92vw"
                      className="object-contain p-14 opacity-35"
                    />
                    <span className="absolute right-4 bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-center text-sm font-semibold text-zinc-700 backdrop-blur-sm">
                      Official portrait coming soon
                    </span>
                  </>
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
                <div className="relative h-52 bg-[#fff7df]">
                  {pastor.image.src ? (
                    <>
                      <Image
                        src={pastor.image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                        className="object-cover blur-md brightness-[0.3]"
                        aria-hidden="true"
                      />
                      <Image
                        src={pastor.image.src}
                        alt={pastor.image.alt || pastor.name}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                        className="object-contain p-2"
                      />
                    </>
                  ) : (
                    <Image
                      src={churchIdentity.logo.src}
                      alt={pastor.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                      className="object-contain p-9 opacity-35"
                    />
                  )}
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
              <div className="flex flex-col justify-center border-b border-white/15 sm:flex-row lg:border-r lg:border-b-0">
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
                {/* {oneSound.leader.image.src && (
                  <div className="relative mx-auto aspect-3/4 w-full max-w-40 overflow-hidden rounded-lg border border-white/15">
                    <Image
                      src={oneSound.leader.image.src}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover blur-sm brightness-[0.3]"
                      aria-hidden="true"
                    />
                    <Image
                      src={oneSound.leader.image.src}
                      alt={oneSound.leader.image.alt || oneSound.leader.name}
                      fill
                      sizes="160px"
                      className="object-contain p-1"
                    />
                  </div>
                )} */}
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
