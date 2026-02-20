"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image"; // Moved to top
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
];

const locations = ["Mumbai", "London", "Dubai"];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
        setIsScrolled(latest > 50);
        lastScrollY.current = latest;
    });

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={isHidden && !isOpen ? "hidden" : "visible"}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out px-6 md:px-12",
                    isScrolled || isOpen
                        ? "bg-black/40 backdrop-blur-xl py-4 border-b border-white/5"
                        : "bg-transparent py-8"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Magnetic>
                            <motion.div
                                className="relative w-32 h-8 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image
                                    src="/logo.svg"
                                    alt="Celeb Sync Logo"
                                    fill
                                    className="object-contain filter invert"
                                />
                            </motion.div>
                        </Magnetic>

                        {/* Global Locations Branding */}
                        <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-12">
                            {locations.map((loc) => (
                                <div key={loc} className="flex items-center gap-2">
                                    <div className="w-[3px] h-[3px] bg-white/20 rounded-full" />
                                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">{loc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Links with Sliding Highlight placeholder (Simplified Highlight for build stability) */}
                    <div className="hidden md:flex items-center space-x-10 relative">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative group py-2"
                            >
                                {link.name}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"
                                />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <Magnetic>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:block px-8 py-3 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors"
                            >
                                Start Campaign
                            </motion.button>
                        </Magnetic>

                        {/* Mobile Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-white p-2 relative z-[70]"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between items-end">
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                                    className="h-[1px] bg-white block"
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="h-[1px] bg-white block w-3/4"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -10, width: "100%" } : { rotate: 0, y: 0, width: "1/2" }}
                                    className="h-[1px] bg-white block w-1/2"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay with Circular Mask */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 90% 5%)" }}
                        animate={{ clipPath: "circle(150% at 90% 5%)" }}
                        exit={{ clipPath: "circle(0% at 90% 5%)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-black z-50 flex flex-col p-12 overflow-hidden"
                    >
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl font-black uppercase tracking-tighter text-white hover:text-muted transition-colors flex items-center gap-6 group"
                                    >
                                        <span className="text-[14px] font-black text-white/10 group-hover:text-white/40 transition-colors">0{i + 1}</span>
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-12 border-t border-white/10 pt-12">
                            <div className="space-y-4">
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Live Global Time</p>
                                <div className="flex gap-8">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Local</p>
                                        <p className="text-xl font-black text-white">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">GMT</p>
                                        <p className="text-xl font-black text-white">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' })}</p>
                                    </div>
                                </div>
                            </div>

                            <Magnetic>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-12 py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em]"
                                >
                                    Initiate Connection
                                </button>
                            </Magnetic>
                        </div>

                        {/* Background branding element */}
                        <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-[0.02] text-[40vw] font-black tracking-tighter select-none leading-none rotate-90">
                            CELEB
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
