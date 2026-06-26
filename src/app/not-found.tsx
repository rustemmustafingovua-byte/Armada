"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#050505] min-h-screen flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] z-0" />

      <div className="text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-[12rem] md:text-[15rem] font-black text-white/5 leading-none select-none">
                404
            </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="-mt-20 md:-mt-32"
        >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Сторінку не знайдено</h2>
            <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
                Здається, цей дрон полетів занадто далеко. Поверніться на головну базу.
            </p>

            <Link href="/">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-black text-lg flex items-center gap-2 mx-auto transition-all shadow-2xl">
                    <ArrowLeft size={20} /> Повернутись додому
                </button>
            </Link>
        </motion.div>
      </div>
    </main>
  );
}
