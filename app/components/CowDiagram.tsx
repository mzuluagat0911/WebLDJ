"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLocale } from "../context/LocaleContext";
import type { CorteInfo } from "./CutModal";
import { CutModal } from "./CutModal";

const HOTSPOT_CONFIG: Array<{ id: string; left: number; top: number; cortesKey: string; corteId: string }> = [
  { id: "paleta", left: 24, top: 40, cortesKey: "bifeChorizo", corteId: "bife-chorizo" },
  { id: "costillas", left: 38, top: 38, cortesKey: "ojoBife", corteId: "ojo-bife" },
  { id: "tomahawk", left: 44, top: 44, cortesKey: "tomahawk", corteId: "tomahawk" },
  { id: "vacio", left: 44, top: 56, cortesKey: "tiraAsado", corteId: "tira-asado" },
  { id: "t-bone", left: 56, top: 34, cortesKey: "tbone", corteId: "t-bone" },
  { id: "lomo", left: 66, top: 32, cortesKey: "lomo", corteId: "lomo" },
  { id: "vientre", left: 56, top: 64, cortesKey: "entrana", corteId: "entrana" },
];

export function CowDiagram() {
  const { t } = useLocale();
  const [selectedCorte, setSelectedCorte] = useState<CorteInfo | null>(null);

  const hotspots = useMemo(() => {
    return HOTSPOT_CONFIG.map(({ id, left, top, cortesKey, corteId }) => ({
      id,
      left,
      top,
      corte: {
        id: corteId,
        nombre: t(`cortesModal.${cortesKey}.nombre`),
        peso: t(`cortesModal.${cortesKey}.peso`),
        descripcion: t(`cortesModal.${cortesKey}.descripcion`),
        imagen: "/images/carne1.png",
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
                className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#5C2D2B] text-white shadow-md transition hover:scale-110 hover:bg-[#722f2d] focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-900 sm:h-8 sm:w-8"
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
