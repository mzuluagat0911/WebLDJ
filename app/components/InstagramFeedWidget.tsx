"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MediaItem = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  thumbnail_url?: string;
};

const PLACEHOLDER_IMAGES = [
  "/images/Bannerprincipal.jpg",
  "/images/3edf87153b06937f7158a31548e7a30ce1c8486f.png",
  "/images/Nuestras%20carnes.jpg",
  "/images/Eventos1.jpg",
  "/images/Eventos2.jpg",
  "/images/Nuestras%20carnes.jpg",
];

export function InstagramFeedWidget() {
  const [media, setMedia] = useState<MediaItem[] | null>(null);

  useEffect(() => {
    fetch("/api/instagram-feed")
      .then((res) => res.json())
      .then((data: { media: MediaItem[] }) => {
        if (data.media?.length) setMedia(data.media);
      })
      .catch(() => setMedia([]));
  }, []);

  const items = media?.length
    ? media
        .filter((m) => m.media_type === "IMAGE" || m.media_type === "VIDEO")
        .slice(0, 6)
    : null;

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-3 gap-1.5 sm:gap-2 lg:max-w-5xl lg:gap-3">
      {items
        ? items.map((item) => (
            <a
              key={item.id}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                src={
                  item.media_type === "VIDEO" && item.thumbnail_url
                    ? item.thumbnail_url
                    : item.media_url
                }
                alt={item.caption?.slice(0, 100) ?? "Instagram Lo de Jesús"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 256px, 33vw"
                unoptimized
              />
            </a>
          ))
        : PLACEHOLDER_IMAGES.map((src, i) => (
            <div
              key={`placeholder-${i}`}
              className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                src={src}
                alt={`Instagram Lo de Jesús ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 256px, 33vw"
              />
            </div>
          ))}
    </div>
  );
}
