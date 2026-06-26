"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/Providers";

const NewsItem = ({ title, excerpt, date, tag, delay, locale }: { title: string, excerpt: string, date: string, tag: string, delay: number, locale: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group grid md:grid-cols-[1fr_2fr] gap-8 py-12 border-b border-white/5 last:border-0"
    >
        <div className="relative h-48 md:h-auto rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent" />
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={14} /> {date}</span>
                <span className="flex items-center gap-1 text-yellow-500"><Tag size={14} /> {tag}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-yellow-500 transition-colors">
                {title}
            </h3>
            <p className="text-gray-400 font-light text-lg mb-6 leading-relaxed">
                {excerpt}
            </p>
            <button className="flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                {locale === "uk" ? "Читати далі" : "Read More"} <ArrowRight size={20} className="text-yellow-500" />
            </button>
        </div>
    </motion.div>
);

export default function NewsPage() {
  const { locale } = useLocale();

  const ukNews = [
    {
        title: "Презентація проєкту «КРИТИЧНО ЗАХИЩЕНО» у Києві",
        excerpt: "3 червня у Києві Асоціація виробників безпілотних систем та супутніх технологій «АРМАДА» провела презентацію проєкту «КРИТИЧНО ЗАХИЩЕНО». Він присвячений створенню практичних механізмів захисту об’єктів критичної інфраструктури від повітряних загроз.",
        date: "03 Червня, 2026",
        tag: "Проєкти"
    },
    {
        title: "Україна формує нову архітектуру захисту критичної інфраструктури",
        excerpt: "У Києві відбувся форум Security 2.0, присвячений захисту критичної інфраструктури. Заключна панель “Критично захищено: критичний діалог”, організована у партнерстві із Асоціацією “Армада”.",
        date: "28 Травня, 2026",
        tag: "Форуми"
    },
    {
        title: "Асоціація АРМАДА та Global Drone Academy стали партнерами",
        excerpt: "Домовленість передбачає спільне напрацювання методики та прийомів навчання на ті чи інші безпілотні системи та побудову моделі взаємодії між виробниками та навчальним центром.",
        date: "15 Травня, 2026",
        tag: "Партнерство"
    },
    {
        title: "Що АРМАДА пропонує виробникам безпілотних систем?",
        excerpt: "Якщо ви виробник /розробник продуктів чи супровідних рішень, пов’язаних із застосуванням безпілотних систем, АРМАДА допоможе залучити потрібних фахівців.",
        date: "10 Травня, 2026",
        tag: "Допомога"
    }
  ];

  const enNews = [
    {
        title: "'CRITICALLY PROTECTED' project presentation in Kyiv",
        excerpt: "On June 3, the ARMADA Association held a presentation of the 'CRITICALLY PROTECTED' project in Kyiv. It is dedicated to creating practical protection mechanisms.",
        date: "June 03, 2026",
        tag: "Projects"
    },
    {
        title: "Ukraine forms a new architecture for critical infrastructure protection",
        excerpt: "The Security 2.0 forum was held in Kyiv, dedicated to the protection of critical infrastructure.",
        date: "May 28, 2026",
        tag: "Forums"
    },
    {
        title: "ARMADA Association and Global Drone Academy become partners",
        excerpt: "The agreement provides for the joint development of training methods for various unmanned systems.",
        date: "May 15, 2026",
        tag: "Partnership"
    },
    {
        title: "What does ARMADA offer to manufacturers of unmanned systems?",
        excerpt: "If you are a manufacturer or developer of products related to the use of unmanned systems, ARMADA will help involve specialists.",
        date: "May 10, 2026",
        tag: "Support"
    }
  ];

  const news = locale === "uk" ? ukNews : enNews;

  return (
    <main className="bg-[#050505] min-h-screen py-32 px-4">
      <div className="container mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> {locale === "uk" ? "Назад на головну" : "Back to Home"}
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            {locale === "uk" ? "Новини Асоціації" : "Association News"}
          </h1>
        </div>

        <div className="flex flex-col">
            {news.map((item, idx) => (
                <NewsItem key={idx} {...item} delay={idx * 0.1} locale={locale} />
            ))}
        </div>
      </div>
    </main>
  );
}
