"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const services = [
    {
        title: "Global Endorsements",
        description: "High-impact associations with A-list talent for traditional and digital brand positioning.",
        index: "01",
        tag: "Celebrity"
    },
    {
        title: "Precision Influence",
        description: "Multi-layered campaigns across Nano, Micro, and Macro ecosystems with proprietary tracking.",
        index: "02",
        tag: "Strategy"
    },
    {
        title: "Creative Direction",
        description: "Strategic production for Instagram Reels, YouTube, and viral short-form media ecosystems.",
        index: "03",
        tag: "Content"
    },
    {
        title: "Meta Management",
        description: "End-to-end orchestration of digital presence and elite creator collaborations.",
        index: "04",
        tag: "Platform"
    },
    {
        title: "Predictive Analytics",
        description: "Deep-learning performance tracking and ROI modeling for every human activation.",
        index: "05",
        tag: "Data"
    },
    {
        title: "Cultural Bridge",
        description: "Full-scale brand identity development through the lens of digital influence.",
        index: "06",
        tag: "Identity"
    },
];

function SpotlightCard({ service, index }: { service: any; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 120 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 120 });

    const background = useTransform(
        [springX, springY],
        ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`
    );

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            className="group relative p-6 py-10 sm:p-10 md:p-12 lg:p-16 border-b border-r border-white/5 overflow-hidden bg-[#0a0a0a] min-h-[350px] sm:min-h-[450px] md:min-h-[500px]"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 lg:group-hover:opacity-100 transition duration-500"
                style={{ background }}
                variants={{
                    visible: { opacity: 0.5 },
                    hidden: { opacity: 0 }
                }}
            />

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <span className="text-[10px] font-black tracking-[0.4em] text-white/10 group-hover:text-white transition-colors">
                            {service.index}
                        </span>
                        <span className="px-3 py-1 border border-white/5 text-[8px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:border-white/20 transition-colors">
                            {service.tag}
                        </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-4 sm:mb-6 md:mb-8 group-hover:translate-x-3 transition-transform duration-700 break-words">
                        {service.title.split(' ')[0]} <br />
                        <span className="text-white/20 group-hover:text-white transition-colors duration-700">
                            {service.title.split(' ')[1]}
                        </span>
                    </h3>
                    <p className="text-white/40 text-[13px] sm:text-sm md:text-[13px] lg:text-sm leading-relaxed max-w-xs font-light transition-colors group-hover:text-white/60">
                        {service.description}
                    </p>
                </div>

                <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 opacity-30 group-hover:opacity-100 transition-all transform translate-y-0 lg:translate-y-6 lg:group-hover:translate-y-0 duration-700">
                    <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-white cursor-pointer"
                    >
                        Initiate Strategy <span className="text-xl">⇀</span>
                    </motion.div>
                </div>
            </div>

            {/* Extreme Glass Reveal */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-50 lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-1000" />
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-24 sm:py-32 md:py-40 bg-black relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-16 md:mb-32">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/30 uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[10px] font-black mb-6 md:mb-8"
                    >
                        Core Competencies
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-[-0.04em] leading-[0.95] md:leading-[0.85] text-white"
                    >
                        Strategic <br /><span className="text-white/10">Orchestration</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 border-t border-l border-white/5">
                    {services.map((service, index) => (
                        <SpotlightCard key={service.index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
