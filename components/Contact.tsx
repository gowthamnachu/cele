"use client";

import { motion } from "framer-motion";
import StaggeredText from "./StaggeredText";
import Magnetic from "./Magnetic";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="h-[1px] w-8 bg-white/20" />
                            <p className="text-muted uppercase tracking-[0.4em] text-[10px] font-black">
                                Connect
                            </p>
                        </motion.div>

                        <StaggeredText
                            text="Let's Create Impact Together."
                            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-16"
                        />

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <p className="text-muted text-[10px] uppercase tracking-[0.3em] font-black mb-4">Email Inquiry</p>
                                <a href="mailto:celebsyncmarketing@gmail.com" className="text-2xl md:text-3xl font-light hover:text-white/60 transition-colors">
                                    celebsyncmarketing@gmail.com
                                </a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <p className="text-muted text-[10px] uppercase tracking-[0.3em] font-black mb-4">Direct Office</p>
                                <a href="tel:+919515858308" className="text-2xl md:text-3xl font-light hover:text-white/60 transition-colors">
                                    +91 9515858308
                                </a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                <p className="text-muted text-[10px] uppercase tracking-[0.3em] font-black mb-4">Location</p>
                                <p className="text-2xl md:text-3xl font-light">Hyderabad, India</p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-black p-12 md:p-16 border border-white/5 relative shadow-2xl"
                    >
                        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-muted">Legal Name / Brand</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Nike Global"
                                    className="w-full bg-transparent border-b border-white/10 pb-4 text-white focus:border-white transition-all outline-none text-lg font-light"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-muted">Business Email</label>
                                <input
                                    type="email"
                                    placeholder="john@nike.com"
                                    className="w-full bg-transparent border-b border-white/10 pb-4 text-white focus:border-white transition-all outline-none text-lg font-light"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-muted">Project Focus</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Celebrity", "Influencer", "Content", "Launch"].map(type => (
                                        <div key={type} className="flex items-center gap-2">
                                            <input type="checkbox" className="accent-white" />
                                            <span className="text-xs text-muted uppercase tracking-widest font-bold">{type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-muted">Brief Message</label>
                                <textarea
                                    rows={2}
                                    placeholder="Describe your vision..."
                                    className="w-full bg-transparent border-b border-white/10 pb-4 text-white focus:border-white transition-all outline-none text-lg font-light resize-none"
                                />
                            </div>
                            <Magnetic>
                                <div className="pt-6">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-8 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-neutral-200 transition-all shadow-2xl relative group"
                                    >
                                        Initiate Connection
                                        <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </motion.button>
                                </div>
                            </Magnetic>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
