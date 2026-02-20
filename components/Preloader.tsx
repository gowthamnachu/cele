"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Handle window load event
        const handleLoad = () => {
            // Add a slight delay for a smoother feel
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative w-48 h-48 md:w-64 md:h-64"
                    >
                        <Image
                            src="/logo.gif"
                            alt="Loading..."
                            fill
                            priority
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Subtle Loading Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] font-black text-white"
                    >
                        Initializing Excellence
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
