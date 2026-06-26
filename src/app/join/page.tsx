"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, User, Globe, Briefcase } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/Providers";

const steps = [
  { id: 1, name: "Company Info", icon: Building2 },
  { id: 2, name: "Contact Person", icon: User },
  { id: 3, name: "Specialization", icon: Briefcase },
];

export default function JoinPage() {
  const { locale } = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    contactName: "",
    email: "",
    phone: "",
    specialization: "",
    description: ""
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <main className="bg-[#050505] min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> {locale === "uk" ? "Назад на головну" : "Back to Home"}
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            {locale === "uk" ? "Стати учасником" : "Join Armada"}
          </h1>
          <p className="text-gray-400 text-xl font-light">
            {locale === "uk"
              ? "Долучайтесь до найбільшої асоціації виробників БПЛА в Україні."
              : "Become part of the largest UAV manufacturers association in Ukraine."
            }
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            <motion.div
                className="absolute top-1/2 left-0 h-0.5 bg-yellow-500 -translate-y-1/2 z-0"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step) => {
                const Icon = step.icon;
                return (
                    <div key={step.id} className="relative z-10">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border-2 ${currentStep >= step.id ? "bg-yellow-500 border-yellow-500 text-black" : "bg-[#050505] border-white/10 text-gray-500"}`}>
                            <Icon size={24} />
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16">
            <AnimatePresence mode="wait">
                {currentStep === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-black text-white mb-8">
                            {locale === "uk" ? "Інформація про компанію" : "Company Information"}
                        </h3>
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-500 mb-2 ml-4">Company Name</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-500 transition-all"
                                placeholder="ARMADA Tech LLC"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-500 mb-2 ml-4">Website / Portfolio</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-500 transition-all"
                                placeholder="https://..."
                            />
                        </div>
                    </motion.div>
                )}

                {currentStep === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-black text-white mb-8">
                            {locale === "uk" ? "Контактна особа" : "Contact Person"}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-black uppercase text-gray-500 mb-2 ml-4">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-500 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase text-gray-500 mb-2 ml-4">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-500 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-500 mb-2 ml-4">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-500 transition-all"
                            />
                        </div>
                    </motion.div>
                )}

                {currentStep === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-black text-white mb-8">
                            {locale === "uk" ? "Діяльність та рішення" : "Specialization & Solutions"}
                        </h3>
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-500 mb-2 ml-4">Primary Focus</label>
                            <select className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-500 transition-all appearance-none">
                                <option>UAV Manufacturing</option>
                                <option>Electronic Warfare (EW)</option>
                                <option>Software / AI</option>
                                <option>Components / Logistics</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-500 mb-2 ml-4">Brief Description</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-500 transition-all resize-none"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between gap-4">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-8 py-4 rounded-2xl bg-white/5 text-white font-bold disabled:opacity-0 transition-all"
                >
                    {locale === "uk" ? "Назад" : "Back"}
                </button>

                {currentStep < steps.length ? (
                    <button
                        onClick={nextStep}
                        className="px-8 py-4 rounded-2xl bg-yellow-500 text-black font-black flex items-center gap-2 hover:bg-yellow-400 transition-all"
                    >
                        {locale === "uk" ? "Далі" : "Next"} <ArrowRight size={20} />
                    </button>
                ) : (
                    <button
                        className="px-12 py-4 rounded-2xl bg-yellow-500 text-black font-black flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                    >
                        {locale === "uk" ? "Подати заявку" : "Submit Application"} <CheckCircle2 size={20} />
                    </button>
                )}
            </div>
        </div>
      </div>
    </main>
  );
}
