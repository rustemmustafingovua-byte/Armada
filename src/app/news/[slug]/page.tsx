"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/Providers";

export default function NewsDetailPage() {
  const { locale } = useLocale();

  return (
    <main className="bg-[#050505] min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/news" className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> {locale === "uk" ? "Назад до новин" : "Back to News"}
        </Link>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center gap-6 mb-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg"><Calendar size={16} /> 03 Червня, 2026</span>
                <span className="flex items-center gap-2 text-yellow-500 bg-yellow-500/5 px-3 py-1 rounded-lg"><Tag size={16} /> Проєкти</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
                {locale === "uk"
                    ? "Презентація проєкту «КРИТИЧНО ЗАХИЩЕНО» у Києві"
                    : "'CRITICALLY PROTECTED' project presentation in Kyiv"
                }
            </h1>

            <div className="relative h-[400px] md:h-[500px] rounded-[3rem] bg-white/5 border border-white/10 mb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Tag size={200} className="text-yellow-500" />
                </div>
            </div>

            <div className="prose prose-invert prose-yellow max-w-none">
                <p className="text-gray-300 text-xl leading-relaxed mb-8 font-light italic border-l-4 border-yellow-500 pl-6">
                    {locale === "uk"
                        ? "Асоціація АРМАДА презентувала інноваційний підхід до захисту критичної інфраструктури від сучасних повітряних загроз."
                        : "ARMADA Association presented an innovative approach to protecting critical infrastructure from modern aerial threats."
                    }
                </p>

                <div className="text-gray-400 text-lg leading-relaxed space-y-6 font-light">
                    <p>
                        Київ став майданчиком для обговорення найважливіших питань безпеки. Проєкт «КРИТИЧНО ЗАХИЩЕНО» спрямований на створення багаторівневої системи захисту, що включає як радіоелектронну боротьбу, так і фізичне знищення цілей за допомогою БПЛА-перехоплювачів.
                    </p>
                    <p>
                        Під час презентації було продемонстровано перші результати випробувань систем на полігонах. Учасники асоціації об’єднали зусилля для швидкого масштабування виробництва необхідних компонентів.
                    </p>
                </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Поділитись:</span>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all">
                           <Share2 size={18} />
                        </button>
                    </div>
                </div>

                <Link href="/news">
                    <button className="flex items-center gap-2 text-yellow-500 font-bold hover:underline">
                        Переглянути всі новини <Share2 size={16} />
                    </button>
                </Link>
            </div>
        </motion.div>
      </div>
    </main>
  );
}
