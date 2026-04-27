"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "../context/LocaleContext";

export type CorteInfo = {
  id: string;
  nombre: string;
  peso?: string;
  descripcion: string;
  imagen: string;
};

type CutModalProps = {
  corte: CorteInfo | null;
  onClose: () => void;
};

export function CutModal({ corte, onClose }: CutModalProps) {
  const { t } = useLocale();
  const [imageSrc, setImageSrc] = useState("/images/carne1.png");

  useEffect(() => {
    if (!corte) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [corte, onClose]);

  useEffect(() => {
    if (!corte) return;
    setImageSrc(corte.imagen);
  }, [corte]);

  if (!corte) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-label={t("common.close")}
      />
      {/* Modal: en mobile ocupa casi toda la altura y hace scroll */}
      <div className="relative flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl bg-zinc-900 shadow-2xl ring-1 ring-white/10 sm:max-h-[90vh] sm:max-w-lg sm:rounded-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          aria-label={t("common.close")}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative aspect-[4/3] w-full shrink-0 bg-black">
          <Image
            src={imageSrc}
            alt={corte.nombre}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
            onError={() => setImageSrc("/images/carne1.png")}
          />
        </div>
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8">
          <h2 id="modal-title" className="heading-caslon text-h2 font-normal tracking-wide text-white">
            {corte.nombre}
          </h2>
          {corte.peso && (
            <p className="mt-1 text-btn font-medium text-[#6a1613]">{corte.peso}</p>
          )}
          <p className="mt-3 text-body leading-relaxed text-white/90">
            {corte.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}
