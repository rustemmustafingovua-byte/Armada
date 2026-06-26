"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/components/Providers";

export const ContactForm = () => {
    const { locale } = useLocale();
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate API call
        setTimeout(() => setStatus("success"), 1500);
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-yellow-500/30 p-12 rounded-[2.5rem] text-center"
            >
                <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-yellow-500" size={40} />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                    {locale === "uk" ? "Повідомлення надіслано!" : "Message Sent!"}
                </h3>
                <p className="text-gray-400 font-light">
                    {locale === "uk" ? "Ми зв'яжемося з вами найближчим часом." : "We will get back to you shortly."}
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-yellow-500 font-bold hover:underline"
                >
                    {locale === "uk" ? "Надіслати ще раз" : "Send another message"}
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-4">
                        {locale === "uk" ? "Ваше ім'я" : "Full Name"}
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 outline-none transition-all placeholder:text-gray-700"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-4">
                        {locale === "uk" ? "Email" : "Email Address"}
                    </label>
                    <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 outline-none transition-all placeholder:text-gray-700"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
            </div>
            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-4">
                    {locale === "uk" ? "Компанія" : "Company Name"}
                </label>
                <input
                    type="text"
                    placeholder="Global Systems Inc."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 outline-none transition-all placeholder:text-gray-700"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-4">
                    {locale === "uk" ? "Повідомлення" : "Your Message"}
                </label>
                <textarea
                    required
                    rows={5}
                    placeholder={locale === "uk" ? "Розкажіть про ваш проект..." : "Tell us about your project..."}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 outline-none transition-all placeholder:text-gray-700 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
            </div>
            <button
                disabled={status === "sending"}
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-black px-8 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-yellow-500/20"
            >
                {status === "sending" ? (
                    locale === "uk" ? "Відправка..." : "Sending..."
                ) : (
                    <>
                        {locale === "uk" ? "Надіслати запит" : "Send Request"}
                        <Send size={24} />
                    </>
                )}
            </button>
        </form>
    );
};
