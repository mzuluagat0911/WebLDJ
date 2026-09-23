"use client";

import { useEffect, useState } from "react";

export type Review = {
  nombre: string;
  estrellas: number;
  texto: string;
  color?: string;
};

type ReviewsCarouselProps = {
  reviews: Review[];
  intervalMs?: number;
};

function Estrellas({ n }: { n: number }) {
  return (
    <div className="flex justify-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < n ? "text-amber-400" : "text-zinc-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function initials(nombre: string) {
  return nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full min-h-[280px] flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm sm:min-h-[300px] sm:rounded-2xl sm:p-6 lg:p-7">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white sm:h-16 sm:w-16"
        style={{ backgroundColor: review.color ?? "#52525b" }}
      >
        {initials(review.nombre)}
      </div>
      <p className="mt-4 font-semibold text-black">{review.nombre}</p>
      <div className="mt-2">
        <Estrellas n={review.estrellas} />
      </div>
      <p className="mt-4 line-clamp-6 text-body leading-relaxed text-zinc-700">
        &quot;{review.texto}&quot;
      </p>
    </article>
  );
}

export function ReviewsCarousel({ reviews, intervalMs = 5000 }: ReviewsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  useEffect(() => {
    if (total <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [total, paused, intervalMs]);

  if (total === 0) return null;

  const visible = [0, 1, 2].map((offset) => reviews[(index + offset) % total]);

  return (
    <div
      className="relative mx-auto max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        {visible.map((review, i) => (
          <div
            key={`${review.nombre}-${(index + i) % total}`}
            className={`transition-opacity duration-500 ${
              i === 2 ? "hidden lg:block" : i === 1 ? "hidden sm:block" : ""
            }`}
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2" aria-hidden>
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-zinc-800" : "bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Ir a reseña ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
