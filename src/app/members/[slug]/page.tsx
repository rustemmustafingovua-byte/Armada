"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, ShieldCheck, Zap, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/Providers";
import { useParams } from "next/navigation";

export default function MemberDetailPage() {
  const { locale } = useLocale();
  const params = useParams();
  const slug = params.slug as string;

  // Generic data mapping for demo
  const memberName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="bg-[#050505] min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link href="/members" className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> {locale === "uk" ? "Назад до учасників" : "Back to Members"}
        </Link>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
            >
                <div className="aspect-square bg-white/5 border border-white/10 rounded-[3rem] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ShieldCheck size={120} className="text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors" />
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all">
                        <Globe size={20} /> Visit Website
                    </button>
                    <button className="w-full bg-white/5 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/10">
                        <Mail size={20} /> Contact Sales
                    </button>
                </div>

                <div className="pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4">Follow:</p>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all">
                            <ExternalLink size={20} />
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase rounded-full border border-yellow-500/20">
                        Association Member
                    </span>
                    <span className="text-gray-500 text-sm font-bold tracking-tighter uppercase">ID: ARM-2026-PRO</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-black text-white mb-8">{memberName}</h1>

                <div className="prose prose-invert prose-yellow max-w-none mb-16">
                    <p className="text-gray-400 text-xl leading-relaxed font-light">
                        {locale === "uk"
                            ? `${memberName} є одним з ключових розробників інноваційних рішень у сфері безпілотних систем. Компанія спеціалізується на створенні висотехнологічних комплексів для виконання спеціальних завдань.`
                            : `${memberName} is one of the key developers of innovative solutions in the field of unmanned systems. The company specializes in creating high-tech complexes for special missions.`
                        }
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                        <Zap className="text-yellow-500 mb-4" size={32} />
                        <h4 className="text-white font-black text-xl mb-2">Напрямок</h4>
                        <p className="text-gray-500">Виробництво БПЛА літакового типу, системи зв&apos;язку.</p>
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                        <ShieldCheck className="text-yellow-500 mb-4" size={32} />
                        <h4 className="text-white font-black text-xl mb-2">Експертиза</h4>
                        <p className="text-gray-500">Понад 5 років на ринку, сертифіковане виробництво.</p>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-black text-white mb-10">Останні розробки</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/5 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 group-hover:text-yellow-500 transition-colors">
                                        <ExternalLink size={20} />
                                    </div>
                                    <span className="text-white font-bold">Project Alpha-{(i * 7)} System</span>
                                </div>
                                <span className="text-gray-500 text-xs font-black uppercase">Technical Specs</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </main>
  );
}
