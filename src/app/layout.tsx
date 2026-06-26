"use client";

import React, { useState, createContext, useContext } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Locale } from "@/lib/i18n/translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

// Create a context to share locale between layout and pages
export const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>({
  locale: "uk",
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, setLocale] = useState<Locale>("uk");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <html
        lang={locale}
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      >
        <body className="bg-background text-foreground antialiased selection:bg-yellow-500/30">
          {children}
        </body>
      </html>
    </LocaleContext.Provider>
  );
}
