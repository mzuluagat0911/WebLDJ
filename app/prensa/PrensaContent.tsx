"use client";

import { useLocale } from "../context/LocaleContext";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const PRENSA_LINKS: { medio: string; url: string }[] = [
  { medio: "EL CRONISTA", url: "https://www.cronista.com/contenido-patrocinado/la-malbequeria-dos-imperdibles-citas-con-el-vino-en-palermo/" },
  { medio: "LA NACIÓN", url: "https://www.lanacion.com.ar/sabado/un-clasico-de-palermo-de-1953-el-almacen-de-barrio-que-se-transformo-en-el-templo-de-la-carne-y-el-nid05122025/" },
  { medio: "ELLE", url: "https://elle.clarin.com/estilo-de-vida/gourmet/malbec-vino-malbequeria_0_rGf7i8Yfyz.html" },
];

const CITAS_KEYS = ["cita1", "cita2", "cita3"] as const;

const TESTIMONIOS = [
  { nombre: "Lizandro Rodriguez" },
  { nombre: "María Fernández" },
  { nombre: "Carlos Méndez" },
];

function Estrellas({ n }: { n: number }) {
  return (
    <div className="flex justify-center gap-0.5" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function PrensaContent() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-10 lg:py-24">
          <h1 className="heading-caslon text-h1 font-normal tracking-[0.1em] text-black sm:tracking-[0.15em]">
            {t("prensa.title")}
          </h1>

          <div className="mt-10 divide-y divide-zinc-200 sm:mt-14 lg:mt-20">
            {CITAS_KEYS.map((citaKey, i) => (
              <div key={citaKey} className="py-8 first:pt-0 sm:py-10 lg:py-14">
                <p className="text-btn font-bold uppercase tracking-[0.2em] text-black">
                  {PRENSA_LINKS[i]?.medio}
                </p>
                <p className="mt-3 max-w-3xl text-h3-cita leading-relaxed text-zinc-700 sm:mt-4">
                  &quot;{t(`prensa.${citaKey}`)}&quot;
                </p>
                <div className="mt-4 sm:mt-6">
                  <a
                    href={PRENSA_LINKS[i]?.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center rounded bg-black px-8 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 sm:px-10 sm:py-4 lg:px-12"
                  >
                    {t("prensa.verNota")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-50/50 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl lg:px-10">
            <h2 className="heading-caslon text-center text-h2 font-normal tracking-[0.1em] text-black sm:tracking-[0.15em]">
              {t("prensa.comensalesTitle")}
            </h2>

            <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8 lg:mt-16 lg:gap-10">
              {TESTIMONIOS.map((test) => (
                <article
                  key={test.nombre}
                  className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-sm sm:rounded-2xl sm:p-6 lg:p-8"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-lg font-semibold text-zinc-600 sm:h-16 sm:w-16">
                    {test.nombre.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <p className="mt-4 font-semibold text-black">{test.nombre}</p>
                  <Estrellas n={5} />
                  <p className="mt-4 text-body leading-relaxed text-zinc-700">
                    {t("prensa.testimonio")}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center sm:mt-14 lg:mt-16">
              <p className="text-body text-zinc-700">
                {t("prensa.opinion")}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded bg-black px-8 py-3.5 text-btn font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 sm:mt-5 sm:px-12 sm:py-4"
              >
                {t("prensa.escribirResena")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
