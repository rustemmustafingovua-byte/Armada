"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ArrowLeft,
  Lightbulb,
  Workflow,
  Wrench,
  Rocket,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/Providers";

const Feature = ({ icon: Icon, title, description, delay }: { icon: LucideIcon, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-yellow-500/30 transition-all group"
  >
    <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-all">
      <Icon size={32} className="text-yellow-500 group-hover:text-black transition-all" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function HubPage() {
  const { locale } = useLocale();

  return (
    <main className="bg-[#050505] min-h-screen py-32 px-4">
      <div className="container mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> {locale === "uk" ? "Назад до послуг" : "Back to Services"}
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-black uppercase tracking-widest mb-6 border border-yellow-500/20">
                Engineers&apos; Hub
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              Хаб <br />
              <span className="text-yellow-500">{locale === "uk" ? "Інженерів" : "of Engineers"}</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-10">
                {locale === "uk"
                    ? "Унікальна платформа для обміну компетенціями, де виробники безпілотних систем можуть тимчасово залучати потрібних фахівців з інших компаній для вирішення критичних задач."
                    : "A unique platform for competence exchange, where UAS manufacturers can temporarily involve specialists from other companies to solve critical tasks."
                }
            </p>
            <div className="flex gap-4">
                <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-black hover:bg-yellow-400 transition-all">
                    {locale === "uk" ? "Долучитись до Хабу" : "Join the Hub"}
                </button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-10 bg-yellow-500/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative aspect-square bg-white/5 border border-white/10 rounded-[4rem] flex items-center justify-center overflow-hidden">
                <Cpu size={240} className="text-yellow-500/20" strokeWidth={0.5} />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-yellow-500/10 rounded-full m-20"
                />
                <div className="absolute bottom-12 left-12 bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                    <p className="text-yellow-500 font-black text-3xl mb-1">50+</p>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Учасників</p>
                </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
            <Feature
                icon={Lightbulb}
                title={locale === "uk" ? "Обмін ідеями" : "Idea Exchange"}
                description={locale === "uk" ? "Спільний пошук інноваційних рішень для складних технологічних викликів." : "Joint search for innovative solutions to complex technological challenges."}
                delay={0.1}
            />
            <Feature
                icon={Workflow}
                title={locale === "uk" ? "Оптимізація процесів" : "Process Optimization"}
                description={locale === "uk" ? "Впровадження кращих практик виробництва та проектування систем." : "Implementation of best manufacturing and system design practices."}
                delay={0.2}
            />
            <Feature
                icon={Wrench}
                title={locale === "uk" ? "Технічна підтримка" : "Technical Support"}
                description={locale === "uk" ? "Допомога у розробці та налагодженні електроніки та софту." : "Assistance in developing and debugging electronics and software."}
                delay={0.3}
            />
            <Feature
                icon={Rocket}
                title={locale === "uk" ? "Прискорення R&D" : "Accelerated R&D"}
                description={locale === "uk" ? "Скорочення часу на розробку завдяки залученню досвідчених кадрів." : "Reducing development time by involving experienced personnel."}
                delay={0.4}
            />
        </div>

        <section className="bg-yellow-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-20 -mt-20 blur-3xl" />
             <h2 className="text-4xl md:text-6xl font-black text-black mb-8 relative z-10">Маєте унікальні компетенції?</h2>
             <p className="text-black/70 text-xl max-w-2xl mx-auto mb-12 font-medium relative z-10">
                Допоможіть іншим виробникам прискорити перемогу, поділившись своїм досвідом у Хабі Інженерів.
             </p>
             <button className="bg-black text-yellow-500 px-12 py-6 rounded-full text-2xl font-black hover:opacity-90 transition-all relative z-10 shadow-2xl">
                Зареєструвати фахівця
             </button>
        </section>
      </div>
    </main>
  );
}
