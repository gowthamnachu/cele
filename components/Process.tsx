"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "Brand Brief & Goal Setting",
        description: "Aligning on campaign objectives, target audience, and brand voice.",
    },
    {
        title: "Influencer Shortlisting",
        description: "Data-driven selection from our extensive network of creators.",
    },
    {
        title: "Content Strategy & Approval",
        description: "Creative direction and vetting to ensure brand alignment.",
    },
    {
        title: "Campaign Execution",
        description: "Seamless launch and real-time management across platforms.",
    },
    {
        title: "Performance Tracking & Reports",
        description: "In-depth analysis and ROI assessment for future scaling.",
    },
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="process" className="py-24 bg-accent relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted uppercase tracking-[0.3em] text-[10px] font-bold mb-4"
                    >
                        How We Work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Our Process
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Animated Timeline Line */}
                    <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white -translate-x-1/2 origin-top z-10"
                    />

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-black border-[1px] border-white z-20 -translate-x-1/2 rounded-full" />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-24 text-left md:text-right" : "md:pl-24"}`}
                                >
                                    <span className="text-muted font-bold tracking-widest text-[10px] uppercase mb-2 block">Step {index + 1}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-muted text-base max-w-md mx-auto md:mx-0">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <p className="text-muted font-medium italic">
                        "We ensure smooth coordination and timely delivery."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
