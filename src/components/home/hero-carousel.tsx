"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { HeroSlide, ImageData } from "@/constants";

const slideAccents = [
  "from-fuchsia-700/75 via-zinc-950/65 to-sky-800/65",
  "from-amber-950/80 via-zinc-950/70 to-purple-900/55",
  "from-sky-950/80 via-purple-950/60 to-emerald-900/60",
  "from-zinc-950/90 via-amber-950/70 to-sky-900/70",
];

type HeroCarouselProps = {
  slides: HeroSlide[];
  fallbackImage: ImageData;
};

export function HeroCarousel({ slides, fallbackImage }: HeroCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  const slide = slides[activeSlide];

  if (!slide) return null;

  function goToPrevious() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-zinc-950">
      {slides.map((item, index) => {
        const image = item.image.src ? item.image : fallbackImage;

        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              src={image.src}
              alt={item.image.alt || image.alt}
              fill
              sizes="100vw"
              className={`${
                image.src === fallbackImage.src
                  ? "object-contain p-16 sm:p-24"
                  : "object-cover"
              }`}
              priority={index === 0}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slideAccents[index % slideAccents.length]}`}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(234,179,8,0.28),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.24),transparent_26%)]" />
          </div>
        );
      })}

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10">
        <div className="max-w-4xl rounded-lg border border-white/15 bg-zinc-950/45 p-6 text-white shadow-2xl shadow-zinc-950/40 backdrop-blur-md sm:p-8 lg:p-10">
          <div className="mb-9 inline-flex rounded-full border border-amber-300/60 px-4 py-2 text-xs font-bold tracking-[0.35em] text-amber-300 uppercase">
            {slide.label}
          </div>
          <p className="max-w-3xl text-xl font-semibold text-white/80 sm:text-2xl">
            {slide.eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-6xl leading-[0.92] font-semibold text-balance sm:text-7xl lg:text-8xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {slide.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-400 text-base text-zinc-950 hover:bg-amber-300"
            >
              <Link href={slide.primaryCta.href}>{slide.primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-base text-white hover:bg-white hover:text-zinc-950"
            >
              <Link href={slide.secondaryCta.href}>
                {slide.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute right-5 bottom-6 left-5 flex flex-col gap-4 sm:right-8 sm:left-8 lg:right-10 lg:left-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-2">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`rounded-full border px-4 py-2 text-xs font-bold tracking-[0.22em] uppercase transition ${
                  index === activeSlide
                    ? "border-amber-300 bg-amber-300/15 text-amber-200"
                    : "border-white/25 bg-zinc-950/25 text-white/70 hover:border-white/55 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex size-12 items-center justify-center rounded-full border border-white/25 bg-zinc-950/35 text-white backdrop-blur transition hover:bg-white hover:text-zinc-950"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((current) => !current)}
              className="flex h-12 items-center gap-2 rounded-full border border-amber-300/50 bg-zinc-950/35 px-5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-zinc-950"
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? (
                <Play className="size-4" aria-hidden="true" />
              ) : (
                <Pause className="size-4" aria-hidden="true" />
              )}
              {isPaused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex size-12 items-center justify-center rounded-full border border-white/25 bg-zinc-950/35 text-white backdrop-blur transition hover:bg-white hover:text-zinc-950"
              aria-label="Next slide"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
