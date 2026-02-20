"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Magnetic from "./Magnetic";
import StaggeredText from "./StaggeredText";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-black pt-20"
        >
            {/* Immersive Visual Center */}
            <motion.div
                style={{ y, scale, opacity }}
                className="absolute inset-0 z-0 flex items-center justify-center"
            >
                <div className="relative w-full h-full max-w-[1400px] max-h-[800px]">
                    {/* Central Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[180px]" />

                    {/* Logo Watermark Background */}
                    <motion.div
                        style={{
                            y: useTransform(scrollYProgress, [0, 1], [0, -300]),
                            rotate: useTransform(scrollYProgress, [0, 1], [0, 25]),
                            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-[0.05] select-none pointer-events-none"
                    >
                        <Image
                            src="/logo-bg.svg"
                            alt=""
                            fill
                            className="object-contain filter invert brightness-0"
                        />
                    </motion.div>

                    {/* Floating Organic Shapes (Premium CSS alternative to images) */}
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-0 left-1/4 w-[500px] h-[500px] border border-white/[0.03] rounded-[40%] blur-[2px]"
                    />
                    <motion.div
                        animate={{
                            rotate: [360, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] border border-white/[0.02] rounded-[30%] blur-[1px]"
                    />

                    {/* Luxury Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
                        style={{
                            backgroundImage: "radial-gradient(circle at center, transparent, black)",
                        }}
                    />
                </div>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full"
                >
                    <div className="inline-flex items-center gap-4 mb-8 md:mb-12">
                        <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <p className="text-white/40 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] font-black">
                            Established Global Agency
                        </p>
                        <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-white/20 via-white/20 to-transparent rotate-180" />
                    </div>

                    <div className="max-w-7xl w-full px-4 md:px-0">
                        <StaggeredText
                            text="Digital Influence Redefined."
                            className="text-[1.8rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black leading-[1.1] md:leading-[0.85] tracking-tighter md:tracking-[-0.05em] text-white uppercase mb-8 md:mb-10 w-full"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="text-xs sm:text-base md:text-lg lg:text-xl text-white/40 max-w-xl font-light leading-relaxed mb-10 md:mb-16 px-4 md:px-0"
                    >
                        We curate elite human connections. Bridging the gap between the world's most iconic brands and culture-defining voices.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full sm:w-auto px-6 sm:px-0">
                        <Magnetic>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 }}
                                className="group relative px-8 py-4 md:px-16 md:py-7 overflow-hidden w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-white group-hover:bg-neutral-200 transition-colors" />
                                <span className="relative text-black font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] z-10">
                                    Explore Strategy
                                </span>
                            </motion.button>
                        </Magnetic>
                        <Magnetic>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                className="group relative px-8 py-4 md:px-16 md:py-7 border border-white/20 hover:border-white transition-all overflow-hidden w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
                                <span className="relative text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] z-10">
                                    Our Portfolio
                                </span>
                            </motion.button>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>

            {/* Extreme Premium Navigation Indicators */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-8"
            >
                <div className="space-y-4">
                    <p className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase">Social</p>
                    <div className="flex flex-col gap-2">
                        {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                            <a key={social} href="#" className="text-[10px] font-black tracking-widest text-white/40 hover:text-white transition-colors">{social}</a>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6"
            >
                <div className="text-right">
                    <p className="text-[9px] font-black tracking-[0.3em] text-white/20 uppercase mb-1">Scroll</p>
                    <p className="text-[10px] font-black tracking-widest text-white/60">TO EXPLORE</p>
                </div>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>
        </section>
    );
}
