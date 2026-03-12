import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  variant?: "default" | "overHero";
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const isOverHero = variant === "overHero";
  return (
    <header
      className={`border-b border-white/10 bg-black/90 backdrop-blur-sm z-10 ${
        isOverHero ? "absolute left-0 right-0 top-0" : "sticky top-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-10 lg:py-5">
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
        <nav className="hidden gap-10 text-xs font-semibold uppercase tracking-[0.2em] sm:flex lg:gap-12 lg:text-[13px] lg:tracking-[0.25em]">
          <Link href="/nuestras-carnes" className="text-white/95 transition hover:text-white">
            Nuestras carnes
          </Link>
          <Link href="/menu" className="text-white/95 transition hover:text-white">
            El menú
          </Link>
          <Link href="/nuestra-historia" className="text-white/95 transition hover:text-white">
            Nuestra historia
          </Link>
          <Link href="/eventos" className="text-white/95 transition hover:text-white">
            Eventos
          </Link>
          <Link href="/prensa" className="text-white/95 transition hover:text-white">
            Prensa
          </Link>
        </nav>
        <button className="hidden rounded bg-red-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-red-500 sm:inline-flex lg:px-8 lg:py-3 lg:text-[13px]">
          Delivery
        </button>
      </div>
    </header>
  );
}
