import Image from "next/image";
import Link from "next/link";

export function MeatEventsSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:max-w-7xl lg:gap-24 lg:px-10">
        {/* Nuestras carnes */}
        <div id="nuestras-carnes" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-visible sm:min-h-[340px] lg:min-h-[420px]">
            <Image
              src="/images/carne1.png"
              alt="Plato de carne de Lo de Jesús"
              width={560}
              height={560}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full object-contain object-center"
            />
          </div>
          <div className="space-y-5 text-left text-black lg:space-y-6">
            <h2 className="heading-caslon text-3xl font-normal sm:text-4xl lg:text-4xl xl:text-5xl">
              NUESTRAS CARNES
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-700 sm:text-base lg:max-w-lg lg:text-lg lg:leading-relaxed">
              Elegimos cuidadosamente cada corte que llega a tu mesa. Nuestro
              sommelier de carnes verifica en origen que cada corte cumpla con
              estrictos estándares de calidad, asegurando su trazabilidad en
              todo el proceso.
            </p>
            <button className="mt-4 inline-flex items-center justify-center rounded border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-black hover:text-white lg:px-10 lg:py-3.5 lg:text-[13px]">
              Conocer más
            </button>
          </div>
        </div>

        {/* Eventos - dos imágenes */}
        <div id="eventos" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5 text-left text-black lg:space-y-6">
            <h2 className="heading-caslon text-3xl font-normal sm:text-4xl lg:text-4xl xl:text-5xl">
              EVENTOS
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-zinc-700 sm:text-base lg:max-w-lg lg:text-lg lg:leading-relaxed">
              Nuestros espacios versátiles se adaptan a eventos corporativos y
              sociales, con propuestas diseñadas para cada ocasión.
            </p>
            <Link
              href="/eventos"
              className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded border border-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-black hover:text-white lg:px-10 lg:py-3.5 lg:text-[13px]"
            >
              Ver más
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="relative aspect-[3/5] overflow-hidden rounded-2xl bg-black">
              <Image
                src="/images/Eventos1.jpg"
                alt="Eventos en Lo de Jesús - mesa y vinos"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 272px, 50vw"
              />
            </div>
            <div className="relative aspect-[3/5] overflow-hidden rounded-2xl bg-black">
              <Image
                src="/images/Eventos2.jpg"
                alt="Eventos en Lo de Jesús - invitados"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 272px, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
