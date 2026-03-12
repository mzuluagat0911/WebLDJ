import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-10 lg:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:gap-16">
          <Link
            href="/"
            className="relative block h-11 w-36 shrink-0 sm:h-12 sm:w-44 lg:h-16 lg:w-56 transition-opacity hover:opacity-90 focus:opacity-90 min-h-[44px]"
            aria-label="Lo de Jesús - Ir al inicio"
          >
            <Image
              src="/images/blancologo.svg"
              alt=""
              fill
              className="object-contain object-left"
              sizes="(min-width: 1024px) 224px, (min-width: 640px) 176px, 144px"
            />
          </Link>
          <div className="flex flex-col items-center gap-3 text-center text-xs sm:flex-row sm:gap-12 sm:text-left sm:text-[13px] lg:gap-16 lg:text-sm lg:tracking-wide">
            <p className="text-white/90">Lo de Jesús, Gurruchaga 1406</p>
            <p className="text-white/90">Lunes a Domingo 12:00 pm - 01:00 am</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center sm:items-end sm:text-right text-xs sm:text-[13px] lg:gap-4 lg:text-sm">
            <a href="tel:+5491139431734" className="text-white/90 transition hover:text-white">
              +54 9 113 943 1734
            </a>
            <a
              href="https://www.instagram.com/lodejesus/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 transition hover:text-white"
            >
              @lodejesus
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
