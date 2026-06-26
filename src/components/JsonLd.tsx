"use client";

import React from "react";
import { useLocale } from "@/components/Providers";

export const JsonLd = () => {
    const { locale } = useLocale();

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ARMADA Association",
        "url": "https://www.armada.net.ua",
        "logo": "https://www.armada.net.ua/logo.png",
        "description": locale === "uk"
            ? "Асоціація виробників безпілотних систем України."
            : "Association of Unmanned Systems Manufacturers of Ukraine.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kyiv",
            "addressCountry": "UA"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+380-96-036-0000",
            "contactType": "office",
            "email": "office@armada.net.ua"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
