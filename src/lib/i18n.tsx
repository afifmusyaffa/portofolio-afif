"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "id" | "en";

export type Localized<T = string> = {
  id: T;
  en: T;
};

type LocaleContextValue = {
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "afif-portfolio-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    // One-time sync from an external system (persisted preference / browser
    // language) into React state on mount — not derived from props/state.
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    const resolved =
      stored === "id" || stored === "en"
        ? stored
        : window.navigator.language?.toLowerCase().startsWith("id")
        ? "id"
        : "en";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage/navigator on mount
    setLocaleState(resolved);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggleLocale = () => setLocale(locale === "id" ? "en" : "id");

  const value: LocaleContextValue = { locale, toggleLocale, setLocale };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  const { locale } = useLocale();
  return function t<T>(value: Localized<T>): T {
    return value[locale];
  };
}
