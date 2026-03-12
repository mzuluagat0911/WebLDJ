"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export function MenuContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr_0.9fr] lg:gap-12 lg:items-start">
          {/* Imagen izquierda: mesa con vinos y carnes */}
          <div className="relative order-2 aspect-[3/4] overflow-hidden rounded-lg lg:order-1 lg:aspect-[3/5]">
            <Image
              src="/images/Eventos1.jpg"
              alt="Mesa con vinos y carnes a la parrilla - Lo de Jesús"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority
            />
          </div>

          {/* Bloque central: título, texto y botón */}
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:py-8">
            <h1 className="heading-caslon text-h1 font-normal tracking-[0.18em] text-white text-center lg:text-left">
              EL MENÚ
            </h1>
            <p className="mt-6 max-w-xl text-left text-body leading-relaxed text-white/95 lg:mt-8">
              Nuestro menú celebra lo mejor de los productos locales, orgánicos y de estación, bajo el concepto farm to table. Cada plato es creado con especial cuidado para acompañar nuestras carnes a la parrilla y maridar a la perfección con los vinos de las bodegas más prestigiosas de Argentina. Este menú lleva el sello y talento del aclamado chef Darío Gualtieri, quien asesora y supervisa cada detalle.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="/nuestras-carnes"
                className="inline-flex min-h-[48px] items-center justify-center rounded bg-white px-10 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Ver menú
              </Link>
            </div>
          </div>

          {/* Imagen derecha: chef con nombre */}
          <div className="relative order-3 aspect-[3/4] overflow-hidden rounded-lg lg:aspect-[3/5]">
            <Image
              src="/images/mesero.jpg"
              alt="Darío Gualtieri - Chef asesor de Lo de Jesús"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 28vw, 100vw"
            />
            <div className="absolute top-4 right-4 rounded bg-black/60 px-4 py-2.5 backdrop-blur-sm sm:top-6 sm:right-6 sm:px-5 sm:py-3">
              <p className="text-body font-semibold tracking-wide text-white">
                Darío Gualtieri
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
