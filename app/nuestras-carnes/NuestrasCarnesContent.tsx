"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../context/LocaleContext";
import { CowDiagram } from "../components/CowDiagram";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export function NuestrasCarnesContent() {
  const { t, tArray } = useLocale();
  const cortesList = tArray("carnes.cortesList");

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="relative min-h-[70vh] w-full overflow-hidden sm:min-h-[80vh] lg:min-h-[85vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/Nuestras%20carnes.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[80vh] sm:px-6 sm:py-20 lg:min-h-[85vh] lg:py-24">
          <h1 className="heading-caslon text-h1 font-normal tracking-[0.12em] text-white sm:tracking-[0.2em]">
            {t("carnes.pageTitle")}
          </h1>
          <p className="mt-4 max-w-2xl px-1 text-body leading-relaxed text-white/95 sm:mt-6 sm:px-0 lg:mt-8">
            {t("carnes.heroDesc")}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:gap-6 lg:mt-12">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded bg-[#6a1613] px-8 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#55110f] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-12 lg:px-14 lg:py-4"
            >
              {t("carnes.reserva")}
            </Link>
            <a
              href="#nuestros-cortes"
              className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/40 text-white/90 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label={t("carnes.scrollAria")}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="nuestros-cortes" className="w-full bg-zinc-900 py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="order-2 lg:order-1">
              <h2 className="heading-caslon text-h1 font-normal tracking-[0.12em] text-white text-left sm:tracking-[0.2em]">
                {t("carnes.sectionTitle")}
              </h2>
              <p className="mt-3 max-w-lg text-left text-body leading-relaxed tracking-normal text-white/90 sm:mt-4 lg:mt-5">
                {t("carnes.sectionDesc")}
              </p>
              <ul className="mt-6 space-y-1.5 pl-5 text-body leading-relaxed tracking-normal text-white/95 marker:text-[#6a1613] sm:mt-8 lg:mt-10">
                {cortesList.map((corte) => (
                  <li key={corte} className="list-disc">
                    {corte}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 flex min-h-[240px] items-center justify-center overflow-visible rounded-lg bg-zinc-800/50 p-4 sm:min-h-[280px] sm:rounded-xl sm:p-6 lg:order-2 lg:min-h-[380px] lg:p-8">
              <CowDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-zinc-50 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-body font-medium uppercase tracking-widest text-zinc-500">
            {t("carnes.reservaMesa")}
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded bg-[#6a1613] px-10 py-3.5 text-center text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#55110f] focus-visible:ring-2 focus-visible:ring-[#6a1613] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 sm:px-16 lg:px-20 lg:py-4.5"
          >
            {t("carnes.reserva")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
