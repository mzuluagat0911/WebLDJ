"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  variant?: "default" | "overHero";
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const isOverHero = variant === "overHero";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/nuestras-carnes", label: "Nuestras carnes" },
    { href: "/menu", label: "El menú" },
    { href: "/nuestra-historia", label: "Nuestra historia" },
    { href: "/eventos", label: "Eventos" },
    { href: "/prensa", label: "Prensa" },
  ];

  return (
    <header
      className={`border-b border-white/10 bg-black/90 backdrop-blur-sm z-10 ${
        isOverHero ? "absolute left-0 right-0 top-0" : "sticky top-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:max-w-7xl lg:gap-6 lg:px-10 lg:py-5">
        <Link
          href="/"
          className="relative block h-12 w-40 shrink-0 sm:h-14 sm:w-48 lg:h-16 lg:w-56 transition-opacity hover:opacity-90 focus:opacity-90 min-h-[44px]"
          aria-label="Lo de Jesús - Ir al inicio"
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
          className="hidden min-w-0 flex-1 items-center justify-center sm:flex"
          aria-label="Principal"
        >
          <ul className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] md:gap-x-6 lg:gap-x-7 lg:text-[13px] lg:tracking-[0.22em]">
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
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-white/40 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:hidden"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "Cerrar" : "Menú"}
          </button>
          <button
            type="button"
            className="hidden min-h-[44px] min-w-[7.5rem] items-center justify-center rounded bg-[#6a1613] px-5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#55110f] sm:inline-flex lg:min-w-[8.25rem] lg:px-6 lg:py-3 lg:text-[13px]"
          >
            Delivery
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="border-t border-white/10 bg-black px-4 py-4 sm:hidden">
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
              Delivery
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
