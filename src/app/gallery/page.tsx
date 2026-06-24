import type { Metadata } from "next";
import Image from "next/image";

import { galleryPage, galleryPhotos } from "@/constants";

export const metadata: Metadata = {
  title: galleryPage.metadata.title,
  description: galleryPage.metadata.description,
};

export default function GalleryPage() {
  return (
    <main className="bg-[#fffdf7] text-zinc-950">
      <section className="border-b border-amber-200 bg-[#fff7df] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-amber-700 uppercase">
            {galleryPage.hero.eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-6xl leading-none font-semibold text-balance sm:text-7xl lg:text-8xl">
            {galleryPage.hero.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-700 sm:text-2xl">
            {galleryPage.hero.description}
          </p>
        </div>
      </section>

      <section className="bg-[#efe4c8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4">
          {galleryPhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="group break-inside-avoid overflow-hidden rounded-lg border border-amber-300/50 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={800}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="block w-full transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
