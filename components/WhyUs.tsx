"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
    {
        number: "01",
        title: "Elite Celebrity Access",
        description: "Unrivaled network of A-list celebrities and top-tier influencers across every major industry vertical.",
    },
    {
        number: "02",
        title: "Data-Driven Strategy",
        description: "Every campaign is backed by deep analytics, ensuring your brand connects with the right audience at the right time.",
    },
    {
        number: "03",
        title: "End-to-End Execution",
        description: "From concept to viral moment, we handle creative, logistics, and amplification seamlessly.",
    },
    {
        number: "04",
        title: "Measurable ROI",
        description: "Transparent reporting with clear metrics. We deliver results you can see, not just feel.",
    },
    {
        number: "05",
        title: "Global Reach, Local Precision",
        description: "International scale paired with hyper-local cultural intelligence for campaigns that truly resonate.",
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="relative py-32 bg-black overflow-hidden">
            {/* Background SVG Image — Iconified & Centered */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <div className="relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] opacity-[0.15]">
                    <Image
                        src="/whychooseus.svg"
                        alt=""
                        fill
                        className="object-contain filter invert brightness-0"
                    />
                    {/* Centered Radial Blur for Depth */}
                    <div className="absolute inset-0 bg-white/[0.02] blur-[100px] rounded-full" />
                </div>
                {/* Global Fade Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-muted uppercase tracking-[0.4em] text-[10px] font-black mb-4"
                    >
                        Why Choose Us
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
                    >
                        The Celeb Sync
                        <br />
                        <span className="text-white/30">Difference.</span>
                    </motion.h2>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/5">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6 }}
                            className="group relative p-8 border border-white/5 bg-black/40 backdrop-blur-sm hover:bg-white/[0.03] transition-colors duration-500"
                        >
                            {/* Number */}
                            <p className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-6">
                                {reason.number}
                            </p>
                            {/* Title */}
                            <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-white transition-colors">
                                {reason.title}
                            </h3>
                            {/* Description */}
                            <p className="text-sm text-white/40 font-light leading-relaxed">
                                {reason.description}
                            </p>
                            {/* Hover line */}
                            <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-white/20 transition-all duration-700" />
                        </motion.div>
                    ))}

                    {/* CTA card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="relative p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-between"
                    >
                        <p className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-6">
                            Ready to Scale?
                        </p>
                        <div>
                            <p className="text-2xl font-black uppercase tracking-tighter leading-tight mb-8">
                                Let's Build
                                <br />
                                Something
                                <br />
                                Iconic.
                            </p>
                            <a
                                href="#contact"
                                className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-black bg-white px-6 py-4 hover:bg-neutral-200 transition-colors"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
