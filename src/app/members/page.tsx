"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/translations";

const MemberCard = ({ name, type, delay }: { name: string, type: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-yellow-500/50 transition-all group flex flex-col justify-between"
  >
    <div>
        <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-yellow-500" size={24} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500/50 bg-yellow-500/5 px-2 py-1 rounded">
                Verified Member
            </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">{name}</h3>
        <p className="text-gray-500 text-sm font-light uppercase tracking-tighter">{type}</p>
    </div>
    <button className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-white transition-colors text-xs font-bold">
        VIEW PROFILE <ExternalLink size={12} />
    </button>
  </motion.div>
);

export default function MembersPage() {
  const [locale] = useState<Locale>("uk");

  const members = [
    { name: "DeViro", type: "Unmanned Systems" },
    { name: "Tech Force Ukraine", type: "Defense Solutions" },
    { name: "3D Tech", type: "Innovative Manufacturing" },
    { name: "Banderol", type: "FPV Solutions" },
    { name: "The Phoenix Group", type: "Defense Tech" },
    { name: "SMTCS Lab", type: "Engineering & Design" },
    { name: "Blackbird FPV", type: "Combat Drones" },
    { name: "Sky Tactics", type: "Tactical Systems" },
    { name: "Buntar", type: "Defense Software" },
    { name: "Sky Riper", type: "High-speed UAVs" },
    { name: "Drone Security", type: "Counter-UAS" },
    { name: "Viyriy", type: "Long-range Systems" }
  ];

  return (
    <main className="bg-[#050505] min-h-screen py-32 px-4">
      <div className="container mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> {locale === "uk" ? "Назад на головну" : "Back to Home"}
        </Link>

        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8">
              {locale === "uk" ? "Наші Учасники" : "Our Members"}
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              {locale === "uk"
                  ? "Об’єднання найсильніших гравців ринку безпілотних технологій України. Разом ми створюємо майбутнє оборонної індустрії."
                  : "An alliance of the strongest players in Ukraine's unmanned technology market. Together, we are building the future of the defense industry."
              }
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <MemberCard key={idx} {...member} delay={idx * 0.05} />
          ))}

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-yellow-500 p-8 rounded-3xl flex flex-col justify-center items-center text-center cursor-pointer hover:bg-yellow-400 transition-colors group"
          >
            <Zap size={48} className="text-black mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black text-black mb-2">Стати частиною АРМАДИ</h3>
            <p className="text-black/70 text-sm font-bold">Приєднайтесь до спільноти виробників</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
