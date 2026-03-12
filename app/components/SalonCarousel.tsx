"use client";

import Image from "next/image";
import { useState } from "react";

type SalonCarouselProps = {
  images: string[];
  alt: string;
};

export function SalonCarousel({ images, alt }: SalonCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = images[index % images.length];

  if (!images.length) return null;

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-200">
        <Image
          src={current}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-zinc-800 shadow transition hover:bg-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:left-2 sm:h-10 sm:w-10"
            aria-label="Foto anterior"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-zinc-800 shadow transition hover:bg-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:right-2 sm:h-10 sm:w-10"
            aria-label="Foto siguiente"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
