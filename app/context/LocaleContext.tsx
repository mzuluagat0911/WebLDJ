"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

import en from "../../messages/en.json";
import es from "../../messages/es.json";
import pt from "../../messages/pt.json";

export type Locale = "es" | "pt" | "en";

const messages: Record<Locale, Record<string, unknown>> = { es, pt, en };

const STORAGE_KEY = "ldj-locale";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en" || stored === "es") return stored;
  return "es";
}

function getNested(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    current = (current as Record<string, unknown>)?.[key];
  }
  return current;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale === "es" ? "es" : newLocale === "pt" ? "pt" : "en";
    }
  }, []);

  useEffect(() => {
    if (mounted) document.documentElement.lang = locale === "es" ? "es" : locale === "pt" ? "pt" : "en";
  }, [locale, mounted]);

  const t = useCallback(
    (key: string) => {
      const value = getNested(messages[locale] as Record<string, unknown>, key);
      return typeof value === "string" ? value : key;
    },
    [locale]
  );

  const tArray = useCallback(
    (key: string) => {
      const value = getNested(messages[locale] as Record<string, unknown>, key);
      return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tArray }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
