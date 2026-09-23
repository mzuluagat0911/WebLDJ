"use client";

import { useLocale } from "../context/LocaleContext";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ReviewsCarousel, type Review } from "../components/ReviewsCarousel";
import { GOOGLE_REVIEWS_URL } from "../lib/site";

const PRENSA_LINKS: { medio: string; url: string }[] = [
  {
    medio: "EL CRONISTA",
    url: "https://www.cronista.com/contenido-patrocinado/lo-de-jesus-delivery-el-fenomeno-gastronomico-que-transformo-el-delivery-en-una-experiencia-premium/",
  },
  {
    medio: "PERFIL",
    url: "https://www.perfil.com/noticias/empresas-y-protagonistas/palermo-brinda-al-atardecer-la-experiencia-que-reune-mas-de-100-malbec-en-una-noche-unica.phtml",
  },
  {
    medio: "CUISINE",
    url: "https://cuisine.com.ar/lo-de-jesus-en-tu-casa-el-delivery-premium-que-apuesta-por-los-clasicos/",
  },
  {
    medio: "LA NACIÓN",
    url: "https://www.lanacion.com.ar/sabado/un-clasico-de-palermo-de-1953-el-almacen-de-barrio-que-se-transformo-en-el-templo-de-la-carne-y-el-nid05122025/",
  },
  {
    medio: "NOTICIAS",
    url: "https://noticias.perfil.com/noticias/vida-gourmet/vino-y-gastronomia-las-ferias-que-llegan-a-palermo.phtml",
  },
  {
    medio: "LA VOZ",
    url: "https://www.lavoz.com.ar/voy-de-viaje/argentina/el-invierno-se-disfruta-en-lo-de-jesus-la-parrilla-y-bodegon-para-sentirse-en-casa/",
  },
  {
    medio: "CLARÍN",
    url: "https://www.clarin.com/informacion-general/1953-clasico-restaurante-palermo-ahora-descuentos-imperdibles-30-famosa-parrilla_0_O3aNLVpU7G.html",
  },
  {
    medio: "TIME OUT",
    url: "https://www.timeout.com/es/buenos-aires/lo-de-jesus-dario-gualtieri-parrilla-restaurant-palermo-carne-brasas",
  },
];

const CITAS_KEYS = ["cita1", "cita2", "cita3", "cita4", "cita5", "cita6", "cita7", "cita8"] as const;

const RESEÑAS: Review[] = [
  {
    nombre: "Valeria Martins",
    estrellas: 5,
    color: "#8B5E3C",
    texto:
      "Excelente cena vivimos el sábado 5 de septiembre, Emiliano nos recibió sin reserva y éramos 10, algo muy difícil de lograr un sábado a la noche. Nos ubicó en seguida y con muy buena onda! Los mozos Maxi y Javier unos genios. Entradas increíbles, asado y pastas muy ricos. Sin duda recomendados y volveremos!",
  },
  {
    nombre: "Katherine Quant",
    estrellas: 4,
    color: "#4A5568",
    texto:
      "Nos atendieron súper rápido y nos colocaron en una mesa que pedimos. Pedimos dos cortes de carnes para tres y fue suficiente. Las empanadas estaban ok, pero los postres estaban deliciosos!",
  },
  {
    nombre: "Alejandra Ortiz",
    estrellas: 5,
    color: "#6B4E71",
    texto:
      "Excelente servicio de Viviana. Comimos provoleta, entraña y vino. El pan de la casa, delicioso.",
  },
  {
    nombre: "Jenny Aoun Miguel",
    estrellas: 5,
    color: "#2F4F4F",
    texto:
      "From the moment we walked in, the experience at Lo de Jesús was outstanding. Charlie’s attention was exceptional—warm, attentive, and genuinely welcoming. We started with freshly baked bread straight out of the oven, followed by a perfectly prepared provoleta.",
  },
  {
    nombre: "Lucas Biglia",
    estrellas: 5,
    color: "#2E7D32",
    texto:
      "Todo en el lugar es un 10. Desde el momento de la recepción hasta que te vas. La amabilidad del mozo me sorprendió gratamente. Pocas veces me atendieron tan bien. Totalmente recomendado.",
  },
  {
    nombre: "Violeta Galvez",
    estrellas: 5,
    color: "#6a1613",
    texto:
      "El lugar que elegimos siempre! Excelente calidad de comida y servicio! La calidez del personal es muy linda, siempre te hacen sentir especial. Hoy nos atiende Jonathan y lo estamos pasando genial!",
  },
  {
    nombre: "Tamara Mendoza",
    estrellas: 5,
    color: "#5C4033",
    texto:
      "Fuimos a cenar con amigas y la experiencia fue increíble. La carne estaba en su punto justo (muy recomendada la entraña y el asado) y las entradas como las mollejitas y la provoleta son imperdibles. Servicio impecable. ¡Súper recomendado!",
  },
];

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

            <div className="mt-8 sm:mt-12 lg:mt-16">
              <ReviewsCarousel reviews={RESEÑAS} />
            </div>

            <div className="mt-10 text-center sm:mt-14 lg:mt-16">
              <p className="text-body text-zinc-700">
                {t("prensa.opinion")}
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
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
