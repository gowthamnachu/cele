"use client";

import { motion } from "framer-motion";

const reasons = [
    {
        number: "01",
        title: "Curated influencers based on brand fit",
        description: "We don't just find followers; we find voices that align with your brand's core values.",
    },
    {
        number: "02",
        title: "Transparent pricing & execution",
        description: "Total clarity from the first brief to the final invoice. No hidden costs, just results.",
    },
    {
        number: "03",
        title: "Strong engagement-focused strategy",
        description: "Our campaigns are engineered to create conversations, not just impressions.",
    },
    {
        number: "04",
        title: "Pan-India creator network",
        description: "Access to authentic voices across every region and language in India.",
    },
    {
        number: "05",
        title: "Dedicated campaign managers",
        description: "A single point of contact to ensure seamless coordination and expert execution.",
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-accent">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-muted uppercase tracking-[0.3em] text-[10px] font-bold mb-4"
                        >
                            The Celeb Sync Edge
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold leading-tight"
                        >
                            Why Brands <br />
                            <span className="text-muted">Choose Us</span>
                        </motion.h2>
                    </div>

                    <div className="space-y-12">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.number}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex gap-8 group"
                            >
                                <div className="text-4xl md:text-6xl font-bold text-white/5 group-hover:text-white/20 transition-colors duration-500 shrink-0">
                                    {reason.number}
                                </div>
                                <div className="space-y-3 pt-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                                        {reason.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed max-w-md">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
