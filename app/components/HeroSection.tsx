"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { useLocale } from "../context/LocaleContext";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <SiteHeader variant="overHero" />

      {/* Banner a pantalla completa */}
      <div className="relative h-screen w-full">
        <Image
          src="/images/Bannerprincipal.jpg"
          alt={t("hero.bannerAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/40" />

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="heading-caslon text-3xl font-normal sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-base lg:mt-6 lg:max-w-2xl lg:text-lg lg:leading-relaxed xl:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="pointer-events-auto mt-8 lg:mt-10">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded bg-[#6a1613] px-12 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#55110f] lg:px-14 lg:py-4 lg:text-[13px]"
            >
              {t("hero.reserva")}
            </Link>
          </div>
        </div>
      </div>

      <div id="70-anos" className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:max-w-7xl lg:px-10 lg:pb-24 lg:pt-28">
        <div className="grid items-center gap-12 bg-black lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="heading-caslon text-3xl font-normal sm:text-4xl lg:text-4xl xl:text-5xl xl:leading-tight">
              {t("hero.anni1")}
              <br />
              {t("hero.anni2")}
            </h2>
            <Link
              href="/nuestra-historia"
              className="rounded border border-white px-10 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black lg:px-12 lg:py-3.5 lg:text-[13px]"
            >
              {t("hero.historia")}
            </Link>
          </div>
          <div className="relative aspect-[3/4] min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[400px] lg:min-h-0">
            <Image
              src="/images/mesero.jpg"
              alt={t("hero.waiterAlt")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
