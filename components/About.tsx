"use client";

import { motion } from "framer-motion";
import StaggeredText from "./StaggeredText";

export default function About() {
    return (
        <section id="about" className="py-40 bg-[#020202] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="h-[1px] w-8 bg-white/20" />
                        <p className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-black">
                            The Paradigm
                        </p>
                    </motion.div>

                    <StaggeredText
                        text="Crafting Culture through Connection."
                        className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-white"
                    />
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:auto-rows-[250px]">
                    {/* Main Strategy Card - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-3 md:row-span-2 relative group overflow-hidden bg-neutral-900 border border-white/5 p-12 flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 block">Strategy</span>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6">Data-Driven Intelligence</h3>
                            <p className="text-white/50 font-light leading-relaxed max-w-md">
                                We leverage multi-layered social metrics and proprietary ROI modeling to ensure every creator association is a calculated success.
                            </p>
                        </div>
                        {/* Visual element */}
                        <div className="absolute top-10 right-10 w-32 h-32 border border-white/[0.05] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                    </motion.div>

                    {/* Network Card - Tall */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 lg:col-span-2 md:row-span-2 bg-[#080808] border border-white/5 p-12 flex flex-col justify-between group"
                    >
                        <div>
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 block">Network</span>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tight">The creator ecosystem.</h3>
                        </div>
                        <div className="space-y-6">
                            <p className="text-white/50 font-light leading-relaxed">
                                Direct access to 300+ A-list celebrities and cultural pioneers.
                            </p>
                            <div className="h-40 w-full overflow-hidden relative">
                                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-xl flex items-center justify-center">
                                    <span className="text-6xl font-black text-white/[0.03] animate-pulse">ELITE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Card - Small */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 lg:col-span-1 bg-white p-12 flex flex-col justify-center items-center text-center group"
                    >
                        <span className="text-[60px] font-black text-black leading-none mb-2 tracking-tighter">98%</span>
                        <span className="text-[9px] font-black text-black/40 uppercase tracking-[0.2em]">Retention Rate</span>
                    </motion.div>

                    {/* Vision Card - Horizontal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-4 lg:col-span-1 bg-neutral-900 border border-white/5 p-12 group flex flex-col justify-center"
                    >
                        <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-muted transition-colors">Our Vision</h3>
                        <p className="text-white/40 text-sm mt-4 font-light">Transforming attention into equity.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
