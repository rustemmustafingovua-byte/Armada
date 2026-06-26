"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Locale } from "@/lib/i18n/translations";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ opacity: isMounted ? 1 : 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LocaleContext.Provider>
  );
}
