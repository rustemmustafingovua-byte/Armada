"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SplashScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                            ARMADA<span className="text-yellow-500">.</span>
                        </span>
                    </motion.div>

                    <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                            initial={{ left: "-100%" }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-yellow-500 w-1/2"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-gray-500 text-xs font-black uppercase tracking-[0.3em]"
                    >
                        Initializing Systems
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
