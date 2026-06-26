import type { Metadata, Viewport } from "next";

const siteConfig = {
  title: "АРМАДА — Асоціація виробників безпілотних систем",
  description: "Об’єднання українських компаній, що створюють провідні безпілотні системи та рішення для мілітарної, аграрної та інших індустрій.",
  url: "https://www.armada.net.ua",
  ogImage: "https://www.armada.net.ua/og-image.png",
};

export const viewport: Viewport = {
  themeColor: "#eab308",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ARMADA`,
  },
  description: siteConfig.description,
  keywords: ["UAV", "UAS", "БПЛА", "Дрони", "Україна", "Оборона", "Асоціація", "Армія дронів"],
  authors: [{ name: "ARMADA Association" }],
  creator: "ARMADA Association",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "ARMADA",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@armada_ua",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
