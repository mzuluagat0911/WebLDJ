"use client";

import Image from "next/image";
import { useLocale } from "../context/LocaleContext";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SalonCarousel } from "../components/SalonCarousel";

const iconClass = "h-12 w-12 sm:h-14 sm:w-14 text-black";

const TIPOS_IDS = ["jornadas", "degustacion", "almuerzos", "cocktail"] as const;
const ICONOS = [
  <svg key="j" className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="d" className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V9" /><path d="M8 9h8l-1 11H9L8 9z" /><path d="M7 8c0-2.2 2.2-4 5-4s5 1.8 5 4" /></svg>,
  <svg key="a" className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M7 2v8a3 3 0 006 0V2" /><path d="M7 10v12M9 10v12M11 10v12" /><path d="M15 2v6.5a3.5 3.5 0 01-7 0V2" /><path d="M11.5 8.5L10 22M18.5 8.5L20 22" /></svg>,
  <svg key="c" className={iconClass} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8" /><path d="M12 12v10" /><path d="M19 5L12 12 5 5" /><path d="M5 5h14" /></svg>,
];

const SALONES_CONFIG = [
  { id: "salon-lo-de-jesus", key: "salon1", images: ["/images/salon.jpg"] },
  { id: "vereda", key: "salon2", images: ["/images/Eventos2.jpg"] },
  { id: "jardin", key: "salon3", images: ["/images/Eventos1.jpg"] },
  { id: "galeria-bodegas", key: "salon4", images: ["/images/Eventos1.jpg"] },
  { id: "salon-balcones", key: "salon5", images: ["/images/salon.jpg"] },
  { id: "jardin-invierno", key: "salon6", images: ["/images/Eventos2.jpg"] },
];

export function EventosContent() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-black sm:min-h-[80vh] lg:min-h-[85vh]">
          <div className="absolute inset-0">
            <Image src="/images/Eventos1.jpg" alt="" fill className="object-cover grayscale" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
            <h1 className="heading-caslon text-h1 font-normal tracking-[0.12em] text-white sm:tracking-[0.2em]">
              {t("eventos.title")}
            </h1>
            <a
              href="#tipos-eventos"
              className="mt-6 flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/40 text-white/90 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:mt-8"
              aria-label={t("eventos.scrollAria")}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        <section id="tipos-eventos" className="border-t border-zinc-200 bg-white py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="heading-caslon text-h2 font-normal tracking-[0.1em] text-black sm:tracking-[0.15em]">
              {t("eventos.tiposTitle")}
            </h2>
            <p className="mt-4 text-body leading-relaxed text-zinc-700 sm:mt-6">
              {t("eventos.tiposDesc")}
            </p>
            <a
              href="mailto:eventos@lodejesus.com"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded border-2 border-black bg-black px-8 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 sm:mt-8 sm:px-12 sm:py-4"
            >
              {t("eventos.consultanos")}
            </a>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-50/50 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl lg:px-10">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-8">
              {TIPOS_IDS.map((id, i) => (
                <div key={id} className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm sm:rounded-2xl sm:p-8">
                  <div className="text-zinc-800">{ICONOS[i]}</div>
                  <h3 className="mt-4 text-btn font-semibold uppercase tracking-[0.15em] text-black">
                    {t(`eventos.${id}`)}
                  </h3>
                  <a
                    href="mailto:eventos@lodejesus.com"
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded border border-black bg-black px-6 py-2.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2"
                  >
                    {t("eventos.masInfo")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-white py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl lg:px-10">
            <h2 className="heading-caslon text-center text-h2 font-normal tracking-[0.1em] text-black sm:tracking-[0.15em]">
              {t("eventos.salonesTitle")}
            </h2>

            <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16 lg:mt-20 lg:space-y-24">
              {SALONES_CONFIG.map((salon, i) => (
                <div
                  key={salon.id}
                  className={`grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h3 className="heading-caslon text-h3-cita font-normal tracking-[0.1em] text-black">
                      {t(`eventos.${salon.key}`)}
                    </h3>
                    <div className="mt-2 h-px w-24 bg-black" />
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <SalonCarousel images={salon.images} alt={t(`eventos.${salon.key}`)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
