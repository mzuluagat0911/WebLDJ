"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale, type Locale } from "../context/LocaleContext";

type SiteHeaderProps = {
  variant?: "default" | "overHero";
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const isOverHero = variant === "overHero";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const navLinks = [
    { href: "/nuestras-carnes", label: t("nav.carnes") },
    { href: "/menu", label: t("nav.menu") },
    { href: "/nuestra-historia", label: t("nav.historia") },
    { href: "/eventos", label: t("nav.eventos") },
    { href: "/prensa", label: t("nav.prensa") },
  ];
  const locales: Array<{ code: Locale; label: string; flag: string }> = [
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "pt", label: "PT", flag: "🇧🇷" },
  ];

  return (
    <header
      className={`border-b border-white/10 bg-black/90 backdrop-blur-sm z-10 ${
        isOverHero ? "absolute left-0 right-0 top-0" : "sticky top-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6 lg:max-w-7xl lg:gap-4 lg:px-8 lg:py-4">
        <Link
          href="/"
          className="relative block h-12 w-40 shrink-0 sm:h-14 sm:w-48 lg:h-14 lg:w-48 transition-opacity hover:opacity-90 focus:opacity-90 min-h-[44px]"
          aria-label={t("common.goHome")}
        >
          <Image
            src="/images/blancologo.svg"
            alt=""
            fill
            className="object-contain object-left"
            priority
            sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          aria-label={t("nav.mainAria")}
        >
          <ul className="mx-auto flex max-w-full flex-nowrap items-center justify-center gap-x-4 text-[11px] font-semibold uppercase tracking-[0.14em] xl:gap-x-5 xl:text-xs xl:tracking-[0.16em]">
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <Link href={link.href} className="block py-1 text-white/95 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-white/40 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 lg:hidden"
            aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? t("nav.close") : t("nav.menuLabel")}
          </button>
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              className="inline-flex min-h-[40px] min-w-[6.75rem] items-center justify-center rounded bg-[#6a1613] px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#55110f] xl:min-w-[7.25rem] xl:text-xs"
            >
              {t("nav.delivery")}
            </button>
            <div className="flex items-center gap-1 rounded border border-white/20 px-1.5 py-1">
              {locales.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLocale(item.code)}
                  className={`flex min-h-[30px] min-w-[30px] items-center justify-center rounded px-1.5 text-base leading-none transition ${
                    locale === item.code ? "bg-white/20" : "hover:bg-white/15"
                  }`}
                  aria-label={`${t("nav.changeLanguage")} ${item.label}`}
                  aria-pressed={locale === item.code}
                >
                  <span aria-hidden>{item.flag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="border-t border-white/10 bg-black px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                className="rounded px-2 py-2 text-white/95 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-2 rounded bg-[#6a1613] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#55110f]">
              {t("nav.delivery")}
            </button>
            <div className="mt-2 flex items-center justify-center gap-2 border-t border-white/10 pt-3">
              {locales.map((item) => (
                <button
                  key={`mobile-locale-${item.code}`}
                  type="button"
                  onClick={() => setLocale(item.code)}
                  className={`flex min-h-[36px] min-w-[44px] items-center justify-center rounded border px-2 py-1 text-lg leading-none transition ${
                    locale === item.code
                      ? "border-white bg-white/20"
                      : "border-white/30 hover:bg-white/10"
                  }`}
                  aria-label={`${t("nav.changeLanguage")} ${item.label}`}
                  aria-pressed={locale === item.code}
                >
                  <span aria-hidden>{item.flag}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
