"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { UpcomingEvent } from "@/constants";

type EventsCarouselProps = {
  events: UpcomingEvent[];
};

export function EventsCarousel({ events }: EventsCarouselProps) {
  const [active, setActive] = useState(0);
  const hasMultiple = events.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % events.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [hasMultiple, events.length]);

  const event = events[active];
  if (!event) return null;

  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg sm:h-[550px]">
      {events.map((item, index) => (
        <div
          key={item.id + index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={item.image.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover blur-md brightness-[0.25]"
            aria-hidden="true"
          />
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 768px) 80vw, 92vw"
            className="object-contain p-4 sm:p-8"
            priority={index === 0}
          />
        </div>
      ))}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() =>
              setActive((c) => (c - 1 + events.length) % events.length)
            }
            className="absolute top-1/2 left-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-zinc-950/50 text-white backdrop-blur transition hover:bg-white hover:text-zinc-950 sm:left-5 sm:size-12"
            aria-label="Previous event"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setActive((c) => (c + 1) % events.length)}
            className="absolute top-1/2 right-3 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-zinc-950/50 text-white backdrop-blur transition hover:bg-white hover:text-zinc-950 sm:right-5 sm:size-12"
            aria-label="Next event"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {events.map((item, index) => (
              <button
                key={item.id + index}
                type="button"
                onClick={() => setActive(index)}
                className={`size-2.5 rounded-full transition ${
                  index === active
                    ? "bg-amber-400"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
