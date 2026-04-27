import Link from "next/link";

export function FloatingReservaButton() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-50 sm:bottom-8 sm:right-6">
      <Link
        href="/"
        className="pointer-events-auto inline-flex min-h-[48px] items-center justify-center rounded bg-[#6a1613] px-12 py-3.5 text-center text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#55110f] focus-visible:ring-2 focus-visible:ring-[#6a1613] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-14 lg:px-16 lg:py-4"
      >
        Hacé tu reserva
      </Link>
    </div>
  );
}

