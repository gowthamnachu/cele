"use client";

import { motion } from "framer-motion";
import StaggeredText from "./StaggeredText";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-40 bg-[#020202] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6 md:mb-10"
                    >
                        <div className="h-[1px] w-8 bg-white/20" />
                        <p className="text-white/40 uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[10px] font-black">
                            The Paradigm
                        </p>
                    </motion.div>

                    <StaggeredText
                        text="Crafting Culture through Connection."
                        className="text-[2.8rem] sm:text-5xl md:text-8xl font-black leading-[0.9] md:leading-[0.9] tracking-tighter uppercase text-white"
                    />
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6 xl:auto-rows-[250px]">
                    {/* Main Strategy Card - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-3 xl:row-span-2 relative group overflow-hidden bg-neutral-900 border border-white/5 p-8 md:p-14 xl:p-12 flex flex-col justify-end min-h-[400px] md:min-h-[450px] xl:min-h-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative z-10">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 block">Strategy</span>
                            <h3 className="text-[1.25rem] sm:text-3xl md:text-5xl lg:text-4xl xl:text-3xl font-black text-white uppercase tracking-tight mb-4 md:mb-6">Data-Driven Intelligence</h3>
                            <p className="text-sm md:text-lg lg:text-base text-white/50 font-light leading-relaxed max-w-2xl xl:max-w-md">
                                We leverage multi-layered social metrics and proprietary ROI modeling to ensure every creator association is a calculated success.
                            </p>
                        </div>
                        {/* Visual element */}
                        <div className="absolute top-10 right-10 w-24 h-24 md:w-32 xl:w-32 border border-white/[0.05] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                    </motion.div>

                    {/* Network Card - Tall */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 xl:row-span-2 bg-[#080808] border border-white/5 p-8 md:p-10 xl:p-12 flex flex-col justify-between group min-h-[400px] md:min-h-[500px] xl:min-h-0"
                    >
                        <div>
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 block">Network</span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black text-white uppercase tracking-tight">The creator ecosystem.</h3>
                        </div>
                        <div className="space-y-6">
                            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                                Direct access to 300+ A-list celebrities and cultural pioneers.
                            </p>
                            <div className="h-32 sm:h-40 md:h-64 xl:h-40 w-full overflow-hidden relative">
                                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-xl flex items-center justify-center">
                                    <span className="text-3xl sm:text-5xl md:text-4xl lg:text-3xl xl:text-5xl font-black text-white/[0.03] animate-pulse">ELITE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Card - Square-ish on md, 1/4 on xl */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1 bg-white p-8 md:p-10 xl:p-12 flex flex-col justify-center items-center text-center group min-h-[250px] md:min-h-0"
                    >
                        <span className="text-[40px] sm:text-[50px] md:text-[80px] lg:text-[70px] xl:text-[50px] font-black text-black leading-none mb-2 tracking-tighter">98%</span>
                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-black/40 uppercase tracking-[0.2em]">Retention Rate</span>
                    </motion.div>

                    {/* Vision Card - Horizontal on md/lg */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-1 bg-neutral-900 border border-white/5 p-8 md:p-12 xl:p-8 flex flex-col justify-center min-h-[150px] md:min-h-[200px] xl:min-h-0"
                    >
                        <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-lg font-black text-white uppercase tracking-tight group-hover:text-muted transition-colors">Our Vision</h3>
                        <p className="text-white/40 text-sm md:text-lg lg:text-base xl:text-xs mt-4 font-light leading-relaxed">Transforming attention into equity for the world&apos;s most disruptive brands.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
