"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLocale } from "../context/LocaleContext";
import type { CorteInfo } from "./CutModal";
import { CutModal } from "./CutModal";

const CORTES_IMG = "/images/Cortes de carne";

// Posiciones según el croquis (lomo alto cerca de la oreja → cola; asado/entraña abajo).
const HOTSPOT_CONFIG: Array<{ id: string; left: number; top: number; cortesKey: string; corteId: string; imagePath: string }> = [
  { id: "ojo-bife", left: 36, top: 18, cortesKey: "ojoBife", corteId: "ojo-bife", imagePath: `${CORTES_IMG}/06 ojodebife.jpg` },
  { id: "tomahawk", left: 41, top: 20, cortesKey: "tomahawk", corteId: "tomahawk", imagePath: `${CORTES_IMG}/04 tomahawk.jpg` },
  { id: "bife-chorizo", left: 53, top: 23, cortesKey: "bifeChorizo", corteId: "bife-chorizo", imagePath: `${CORTES_IMG}/03 bifechorizo.jpg` },
  { id: "t-bone", left: 68, top: 28, cortesKey: "tbone", corteId: "t-bone", imagePath: `${CORTES_IMG}/05 tbone.jpg` },
  { id: "lomo", left: 72, top: 38, cortesKey: "lomo", corteId: "lomo", imagePath: `${CORTES_IMG}/01 lomo.jpg` },
  { id: "tira-asado", left: 52, top: 42, cortesKey: "tiraAsado", corteId: "tira-asado", imagePath: `${CORTES_IMG}/02 tira de asado.jpg` },
  { id: "entrana", left: 58, top: 44, cortesKey: "entrana", corteId: "entrana", imagePath: `${CORTES_IMG}/07 entraña.jpg` },
];

export function CowDiagram() {
  const { t } = useLocale();
  const [selectedCorte, setSelectedCorte] = useState<CorteInfo | null>(null);

  const hotspots = useMemo(() => {
    return HOTSPOT_CONFIG.map(({ id, left, top, cortesKey, corteId, imagePath }) => ({
      id,
      left,
      top,
      corte: {
        id: corteId,
        nombre: t(`cortesModal.${cortesKey}.nombre`),
        peso: t(`cortesModal.${cortesKey}.peso`),
        descripcion: t(`cortesModal.${cortesKey}.descripcion`),
        imagen: imagePath,
      } as CorteInfo,
    }));
  }, [t]);

  return (
    <>
      <div className="relative w-full max-w-[560px] overflow-visible rounded-lg bg-transparent">
        <div className="relative aspect-[410/326] w-full min-h-[220px] sm:min-h-[280px] lg:min-h-0">
          <Image
            src="/images/vaca.png"
            alt={t("carnes.diagramAlt")}
            fill
            quality={100}
            className="object-contain object-center select-none pointer-events-none"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0">
            {hotspots.map(({ id, left, top, corte }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedCorte(corte)}
                className="group absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-transparent transition hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#6a1613] focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-900"
                style={{ left: `${left}%`, top: `${top}%` }}
                aria-label={`${t("carnes.diagramAriaPrefix")} ${corte.nombre}`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6a1613] text-white shadow-md transition group-hover:bg-[#55110f] sm:h-7 sm:w-7">
                  <span className="text-sm font-light leading-none sm:text-base">+</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <CutModal corte={selectedCorte} onClose={() => setSelectedCorte(null)} />
    </>
  );
}
