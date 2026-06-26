"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  BookOpen,
  FlaskConical,
  FileText,
  ShieldCheck,
  HardHat,
  ArrowLeft,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/translations";

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: LucideIcon, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group"
  >
    <div className="w-20 h-20 bg-yellow-500/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-black transition-all">
      <Icon size={40} className="text-yellow-500 group-hover:text-black transition-all" />
    </div>
    <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
    <p className="text-gray-400 font-light leading-relaxed text-lg">{description}</p>
  </motion.div>
);

export default function ServicesPage() {
  const [locale] = useState<Locale>("uk");

  const ukServices = [
    { icon: HardHat, title: "Хаб інженерів", description: "Унікальна програма обміну досвідом та спільного залучення фахівців для вирішення складних інженерних задач." },
    { icon: Truck, title: "Логістика комплектуючих", description: "Оптимізація ланцюгів постачання, спільні закупівлі та перевірені постачальники з усього світу." },
    { icon: BookOpen, title: "Навчання операторів", description: "Професійна підготовка операторів безпілотних систем за стандартами НАТО та на основі бойового досвіду." },
    { icon: FlaskConical, title: "Тестування та полігони", description: "Надання доступу до випробувальних майданчиків для перевірки систем у реальних та наближених до бойових умовах." },
    { icon: FileText, title: "Технічна документація", description: "Допомога у розробці та написанні повного пакету технічної документації для ваших виробів." },
    { icon: ShieldCheck, title: "Сертифікація та кодифікація", description: "Консультаційний супровід процедури отримання ТУ, сертифікації та номенклатурного коду НАТО." }
  ];

  const enServices = [
    { icon: HardHat, title: "Engineers' Hub", description: "Unique experience exchange program and joint involvement of specialists for complex engineering tasks." },
    { icon: Truck, title: "Components Logistics", description: "Supply chain optimization, joint procurement, and verified global suppliers." },
    { icon: BookOpen, title: "Operator Training", description: "Professional UAS operator training according to NATO standards and based on combat experience." },
    { icon: FlaskConical, title: "Testing & Polygons", description: "Providing access to testing sites for evaluating systems in real and simulated combat conditions." },
    { icon: FileText, title: "Technical Documentation", description: "Assistance in developing and writing a full package of technical documentation for your products." },
    { icon: ShieldCheck, title: "Certification & Codification", description: "Consulting support for obtaining TS, certification, and NATO stock numbers." }
  ];

  const services = locale === "uk" ? ukServices : enServices;

  return (
    <main className="bg-[#050505] min-h-screen py-32 px-4">
      <div className="container mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> {locale === "uk" ? "Назад на головну" : "Back to Home"}
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            {locale === "uk" ? "Послуги та допомога" : "Services & Support"}
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl font-light leading-relaxed">
            {locale === "uk"
                ? "Асоціація надає всебічну підтримку своїм учасникам на кожному етапі — від концепту до серійного виробництва та кодифікації."
                : "The Association provides comprehensive support to its members at every stage — from concept to mass production and codification."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </main>
  );
}
