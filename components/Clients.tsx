"use client";

import { motion } from "framer-motion";

const clients = [
    { name: "Brand A", logo: "BRAND A" },
    { name: "Brand B", logo: "BRAND B" },
    { name: "Brand C", logo: "BRAND C" },
    { name: "Brand D", logo: "BRAND D" },
    { name: "Brand E", logo: "BRAND E" },
    { name: "Brand F", logo: "BRAND F" },
    { name: "Brand G", logo: "BRAND G" },
    { name: "Brand H", logo: "BRAND H" },
];

export default function Clients() {
    return (
        <section id="clients" className="py-24 bg-black">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted uppercase tracking-[0.3em] text-[10px] font-bold mb-4"
                    >
                        Trusted By
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Industry Giants
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                                backgroundColor: "rgba(255,255,255,0.05)",
                                scale: 1.02
                            }}
                            className="h-32 md:h-40 border border-white/5 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all cursor-default group"
                        >
                            <span className="text-xl md:text-2xl font-black text-white/20 group-hover:text-white transition-colors tracking-tighter">
                                {client.logo}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
