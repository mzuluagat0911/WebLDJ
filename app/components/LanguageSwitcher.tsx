"use client";

import { useLocale } from "../context/LocaleContext";
import type { Locale } from "../context/LocaleContext";

const LOCALES: { locale: Locale; flag: string; label: string }[] = [
  { locale: "es", flag: "🇪🇸", label: "Español" },
  { locale: "pt", flag: "🇧🇷", label: "Português" },
  { locale: "en", flag: "🇺🇸", label: "English" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1.5">
      {LOCALES.map(({ locale: l, flag, label }) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          title={label}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
            locale === l ? "ring-2 ring-white/40 ring-offset-2 ring-offset-black" : "opacity-80"
          }`}
          aria-label={label}
          aria-pressed={locale === l}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
