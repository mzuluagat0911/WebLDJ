"use client";

import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { CHEF_NAME, MENU_PDF_URL } from "../lib/site";

const MENU_IMG = "/images/Menu";

export function MenuContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr_0.9fr] lg:gap-12 lg:items-start">
          <div className="relative order-2 aspect-[3/4] overflow-hidden rounded-lg lg:order-1 lg:aspect-[3/5]">
            <Image
              src={`${MENU_IMG}/magenizquierda.jpg`}
              alt="Mesa con vinos y carnes a la parrilla - Lo de Jesús"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority
            />
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2 lg:py-8">
            <h1 className="heading-caslon text-h1 font-normal tracking-[0.18em] text-white text-center lg:text-left">
              EL MENÚ
            </h1>
            <p className="mt-6 max-w-xl text-left text-body leading-relaxed text-white/95 lg:mt-8">
              Nuestro menú celebra lo mejor de los productos locales, orgánicos y de estación, bajo el concepto farm to table. Cada plato es creado con especial cuidado para acompañar nuestras carnes a la parrilla y maridar a la perfección con los vinos de las bodegas más prestigiosas de Argentina. Este menú lleva el sello y talento del aclamado chef {CHEF_NAME}, quien asesora y supervisa cada detalle.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={MENU_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded bg-white px-10 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Ver menú
              </a>
              <a
                href={MENU_PDF_URL}
                download
                className="inline-flex min-h-[48px] items-center justify-center rounded border border-white/40 px-8 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Descargar PDF
              </a>
            </div>
          </div>

          <div className="relative order-3 aspect-[3/4] overflow-hidden rounded-lg lg:aspect-[3/5]">
            <Image
              src={`${MENU_IMG}/Imagenderecha.jpg`}
              alt={`${CHEF_NAME} - Chef asesor de Lo de Jesús`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 28vw, 100vw"
            />
            <div className="absolute top-4 right-4 rounded bg-black/60 px-4 py-2.5 backdrop-blur-sm sm:top-6 sm:right-6 sm:px-5 sm:py-3">
              <p className="text-body font-semibold tracking-wide text-white">
                {CHEF_NAME}
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
