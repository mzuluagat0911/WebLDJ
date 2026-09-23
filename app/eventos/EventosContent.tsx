"use client";

import Image from "next/image";
import { useLocale } from "../context/LocaleContext";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SalonCarousel } from "../components/SalonCarousel";
import { EVENTOS_EMAIL } from "../lib/site";

const TIPOS_IDS = ["jornadas", "degustacion", "almuerzos", "cocktail"] as const;
const TIPOS_ICONS: Record<(typeof TIPOS_IDS)[number], string> = {
  jornadas: "/images/Eventos/icons/jornadas.png",
  degustacion: "/images/Eventos/icons/degustacion.png",
  almuerzos: "/images/Eventos/icons/almuerzos.png",
  cocktail: "/images/Eventos/icons/cocktail.png",
};

const EVENTOS_IMG = "/images/Eventos";

const SALONES_CONFIG = [
  { id: "salon-lo-de-jesus", key: "salon1", images: [`${EVENTOS_IMG}/SalónLodeJesús.jpeg`] },
  { id: "vereda", key: "salon2", images: [`${EVENTOS_IMG}/Vereda.jpeg`] },
  { id: "jardin", key: "salon3", images: [`${EVENTOS_IMG}/Jardín.jpg`] },
  { id: "galeria-bodegas", key: "salon4", images: [`${EVENTOS_IMG}/GaleríadelasBodegas.jpeg`] },
  { id: "salon-balcones", key: "salon5", images: [`${EVENTOS_IMG}/SalóndelosBalcones.jpeg`] },
  { id: "jardin-invierno", key: "salon6", images: [`${EVENTOS_IMG}/JardíndeInvierno.jpg`] },
];

export function EventosContent() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-black sm:min-h-[80vh] lg:min-h-[85vh]">
          <div className="absolute inset-0">
            <Image src={`${EVENTOS_IMG}/patio evento.jpg`} alt="" fill className="object-cover grayscale" priority sizes="100vw" />
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
              href={`mailto:${EVENTOS_EMAIL}`}
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded border-2 border-black bg-black px-8 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 sm:mt-8 sm:px-12 sm:py-4"
            >
              {t("eventos.consultanos")}
            </a>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-50/50 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl lg:px-10">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0">
              {TIPOS_IDS.map((id) => (
                <div
                  key={id}
                  className="flex h-full w-full min-w-0 flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-zinc-200/80 sm:rounded-2xl sm:p-7 lg:p-6"
                >
                  <div className="flex h-16 w-full min-h-16 items-center justify-center sm:min-h-[4.5rem]">
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16" aria-hidden>
                      <Image
                        src={TIPOS_ICONS[id]}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 w-full text-pretty text-btn font-semibold uppercase leading-snug tracking-[0.15em] text-black">
                    {t(`eventos.${id}`)}
                  </h3>
                  <a
                    href={`mailto:${EVENTOS_EMAIL}`}
                    className="mt-6 inline-flex w-full min-h-[44px] max-w-[14rem] items-center justify-center rounded border border-black bg-black px-5 py-2.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 sm:mt-8"
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
