 "use client";
 
 import Image from "next/image";
import { useLocale } from "../context/LocaleContext";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

 const TIMELINE = [
   { year: "1953", yearKey: "1953", side: "left" as const, image: "/images/01.png", imageAlt: "Interior del almacén en sus inicios, Palermo" },
   { year: "2002", yearKey: "2002", side: "right" as const, image: "/images/02.jpeg", imageAlt: "Carnes a las brasas en Lo de Jesús" },
   { year: "2008", yearKey: "2008", side: "left" as const, image: "/images/03.jpeg", imageAlt: "Parrilla y brasas en Lo de Jesús" },
   { year: "2016", yearKey: "2016", side: "right" as const, image: "/images/malbequeria.png", imageAlt: "Vinos y Malbec en Lo de Jesús" },
   { year: "HOY", yearKey: "hoy", side: "left" as const, image: "/images/salon.jpg", imageAlt: "Salón y terraza de Lo de Jesús hoy" },
 ];

export function NuestraHistoriaContent() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-10 lg:py-24">
        <h1 className="heading-caslon text-center text-h1 font-normal tracking-[0.12em] text-black sm:tracking-[0.2em]">
          {t("historia.pageTitle")}
        </h1>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-zinc-800 hidden lg:block" />

          <ul className="space-y-12 sm:space-y-16 lg:space-y-24">
            {TIMELINE.map((item) => {
              const copy = t(`historia.timeline.${item.yearKey}`);
              return (
                <li
                  key={item.year}
                  className="relative grid min-h-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center"
                >
                  <div aria-hidden className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-zinc-800 shadow-md hidden lg:block" />

                  {item.side === "left" ? (
                    <>
                      <div className="flex flex-col gap-3 sm:gap-4 lg:pr-8 xl:pr-12">
                        <p className="text-h2 font-bold tracking-tight text-zinc-900">{item.year}</p>
                        <p className="max-w-lg text-left text-body leading-relaxed text-zinc-700">{copy}</p>
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 sm:rounded-xl lg:aspect-[3/2]">
                        <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 sm:rounded-xl lg:aspect-[3/2]">
                        <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                      </div>
                      <div className="flex flex-col gap-3 sm:gap-4 lg:pl-8 xl:pl-12">
                        <p className="text-h2 font-bold tracking-tight text-zinc-900 lg:text-right">{item.year}</p>
                        <p className="max-w-lg text-left text-body leading-relaxed text-zinc-700 lg:ml-auto lg:text-right">{copy}</p>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
