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

const locations = ["Hyderabad"];

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
                                className="relative w-12 h-12 md:w-14 md:h-14 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image
                                    src="/logo.svg"
                                    alt="Celeb Sync Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                    priority
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
                            className="md:hidden text-white p-2 relative z-[110]"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between items-end">
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                                    className="h-[1.5px] bg-white block"
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="h-[1.5px] bg-white block w-3/4"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -10, width: "100%" } : { rotate: 0, y: 0, width: "1/2" }}
                                    className="h-[1.5px] bg-white block"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ backgroundColor: "#0a0a0a" }}
                        className="fixed top-0 left-0 right-0 bottom-0 z-[100] flex flex-col"
                    >
                        {/* Spacer for navbar */}
                        <div className="h-24 flex-shrink-0" />

                        {/* Nav Links */}
                        <div className="flex-1 flex flex-col justify-center px-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + i * 0.08 }}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 text-4xl font-black uppercase tracking-tight text-white"
                                >
                                    <span className="text-xs text-white/20 mr-4">0{i + 1}</span>
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Footer area */}
                        <div className="flex-shrink-0 px-8 pb-10">
                            <div className="border-t border-white/10 pt-6 mb-6">
                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mb-1">Local</p>
                                        <p className="text-base font-black text-white">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mb-1">GMT</p>
                                        <p className="text-base font-black text-white">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })}</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em]"
                            >
                                Start Campaign
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
