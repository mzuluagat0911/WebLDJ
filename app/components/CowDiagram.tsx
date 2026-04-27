"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLocale } from "../context/LocaleContext";
import type { CorteInfo } from "./CutModal";
import { CutModal } from "./CutModal";

const HOTSPOT_CONFIG: Array<{ id: string; left: number; top: number; cortesKey: string; corteId: string; imagePath: string }> = [
  { id: "paleta", left: 29, top: 47, cortesKey: "ojoBife", corteId: "ojo-bife", imagePath: "/images/cortes/ojo-bife.jpg" },
  { id: "costillas", left: 41, top: 44, cortesKey: "tomahawk", corteId: "tomahawk", imagePath: "/images/cortes/tomahawk.jpg" },
  { id: "tomahawk", left: 52, top: 43, cortesKey: "tiraAsado", corteId: "tira-asado", imagePath: "/images/cortes/tira-asado.jpg" },
  { id: "vacio", left: 40, top: 56, cortesKey: "entrana", corteId: "entrana", imagePath: "/images/cortes/entrana.jpg" },
  { id: "t-bone", left: 57, top: 36, cortesKey: "bifeChorizo", corteId: "bife-chorizo", imagePath: "/images/cortes/bife-chorizo.jpg" },
  { id: "lomo", left: 66, top: 35, cortesKey: "tbone", corteId: "t-bone", imagePath: "/images/cortes/t-bone.jpg" },
  { id: "vientre", left: 53, top: 63, cortesKey: "lomo", corteId: "lomo", imagePath: "/images/cortes/lomo.jpg" },
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
        <div className="relative aspect-[560/480] w-full min-h-[220px] sm:min-h-[280px] lg:min-h-0">
          <Image
            src="/images/vaca.png"
            alt="Diagrama de cortes: tocá cada zona para conocer el corte"
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
                className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#6a1613] text-white shadow-md transition hover:scale-110 hover:bg-[#55110f] focus-visible:ring-2 focus-visible:ring-[#6a1613] focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-900 sm:h-8 sm:w-8"
                style={{ left: `${left}%`, top: `${top}%` }}
                aria-label={`Ver información de ${corte.nombre}`}
              >
                <span className="text-base font-light leading-none sm:text-base">+</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <CutModal corte={selectedCorte} onClose={() => setSelectedCorte(null)} />
    </>
  );
}
