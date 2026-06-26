"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import { Locale } from "@/lib/i18n/translations";

export const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>({
  locale: "uk",
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("uk");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("armada-locale") as Locale;
    if (saved && (saved === "uk" || saved === "en")) {
      setLocale(saved);
    }
    setIsMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("armada-locale", newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      <div style={{ opacity: isMounted ? 1 : 0 }}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}
