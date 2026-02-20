"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <div className="relative w-20 h-20">
                            <Image
                                src="/logo.svg"
                                alt="Celeb Sync Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-muted text-xs tracking-widest uppercase font-bold">Strategic Influencer Marketing</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#" className="text-muted hover:text-white transition-colors"><FaInstagram size={20} /></a>
                        <a href="#" className="text-muted hover:text-white transition-colors"><FaTwitter size={20} /></a>
                        <a href="#" className="text-muted hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                        <a href="#" className="text-muted hover:text-white transition-colors"><FaYoutube size={20} /></a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-muted text-xs font-medium">© {new Date().getFullYear()} Celeb Sync Agency.</p>
                        <p className="text-muted text-[10px] mt-1 font-bold tracking-widest uppercase">All Rights Reserved.</p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/[0.03] text-center"
                >
                    <p className="text-[10px] text-white/10 uppercase tracking-[1em] font-black">
                        POWERED BY IMPACT
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
