"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
    { label: "Expert Creators", value: 300, suffix: "+" },
    { label: "High-Tier Campaigns", value: 150, suffix: "+" },
    { label: "Conversion Reach", value: 25, suffix: "M+" },
    { label: "Brand Equity Index", value: 98, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2500;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Metrics() {
    return (
        <section className="py-40 bg-black relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 text-center">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className="group"
                        >
                            <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-700">
                                <Counter value={metric.value} suffix={metric.suffix} />
                            </div>
                            <div className="text-muted tracking-[0.4em] uppercase text-[9px] font-black group-hover:text-white transition-colors duration-500">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative center light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
