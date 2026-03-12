import Link from "next/link";
import { InstagramFeedWidget } from "./InstagramFeedWidget";

export function SocialPressSection() {
  return (
    <section className="bg-black pt-16 pb-0 sm:pt-20 sm:pb-0 lg:pt-28 lg:pb-0">
      <div className="mx-auto max-w-6xl space-y-20 px-4 pb-16 sm:px-6 sm:pb-20 lg:max-w-7xl lg:space-y-24 lg:px-10 lg:pb-24">
        <div className="space-y-10 lg:space-y-12">
          <header className="text-center">
            <h2 className="heading-caslon text-3xl font-normal text-white sm:text-4xl lg:text-4xl xl:text-5xl">
              INSTAGRAM
            </h2>
          </header>
          <InstagramFeedWidget />
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/lodejesus/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded border border-white bg-transparent px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black lg:px-12 lg:py-3.5 lg:text-[13px]"
            >
              Ver Instagram
            </a>
          </div>
        </div>

      </div>

      <div id="prensa" className="w-full bg-white py-20 text-center text-black lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:max-w-4xl lg:px-12">
          <h2 className="heading-caslon text-3xl font-normal sm:text-4xl lg:text-4xl xl:text-5xl">
            PRENSA
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-relaxed">
            &quot;Estuve ya dos veces en ese espacio único, incomparable en el
            corazón de Palermo. Lo de Jesus fue en sus inicios, el siglo
            pasado un despacho de bebidas y almacén, como había tanto en el
            viejo Palermo borgeano.&quot;
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            El Gourmet
          </p>
            <div className="mt-8 lg:mt-10">
              <Link
                href="/prensa"
                className="inline-flex min-h-[48px] items-center justify-center rounded border border-black bg-black px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 lg:px-12 lg:py-4 lg:text-[13px]"
              >
                Ver prensa
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
