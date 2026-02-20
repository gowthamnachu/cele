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
            document.body.style.touchAction = "none";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
            document.documentElement.style.overflow = "";
        };
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

            {/* ─── Premium Mobile Sidebar ─── */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#050505",
                        zIndex: 100,
                        display: "flex",
                        flexDirection: "row",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        touchAction: "none",
                    }}
                >
                    {/* Left Accent Stripe */}
                    <div
                        style={{
                            width: "4px",
                            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)",
                            flexShrink: 0,
                        }}
                    />

                    {/* Main Content Area */}
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            padding: "0 28px",
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        {/* Subtle radial glow for depth */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-20%",
                                right: "-30%",
                                width: "80%",
                                height: "60%",
                                background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }}
                        />

                        {/* Header — Navigation Label + Close Button */}
                        <div
                            style={{
                                height: "80px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexShrink: 0,
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span
                                    style={{
                                        width: "5px",
                                        height: "5px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(255,255,255,0.3)",
                                        display: "inline-block",
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: "10px",
                                        fontWeight: 900,
                                        color: "rgba(255,255,255,0.25)",
                                        textTransform: "uppercase" as const,
                                        letterSpacing: "0.3em",
                                    }}
                                >
                                    Navigation
                                </span>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s, border-color 0.3s",
                                    padding: 0,
                                }}
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L13 13M13 1L1 13"
                                        stroke="rgba(255,255,255,0.5)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* ─── Nav Links ─── */}
                        <div
                            style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "4px",
                                paddingRight: "12px",
                            }}
                        >
                            {navLinks.map((link, i) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "16px",
                                        padding: "14px 0",
                                        fontSize: "1.75rem",
                                        fontWeight: 900,
                                        textTransform: "uppercase" as const,
                                        letterSpacing: "-0.03em",
                                        color: "#ffffff",
                                        textDecoration: "none",
                                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                                        transition: "opacity 0.3s",
                                    }}
                                >
                                    {/* Step Number */}
                                    <span
                                        style={{
                                            fontSize: "9px",
                                            fontWeight: 700,
                                            color: "rgba(255,255,255,0.12)",
                                            letterSpacing: "0.1em",
                                            minWidth: "24px",
                                        }}
                                    >
                                        0{i + 1}
                                    </span>

                                    {/* Dot Separator */}
                                    <span
                                        style={{
                                            width: "3px",
                                            height: "3px",
                                            borderRadius: "50%",
                                            backgroundColor: "rgba(255,255,255,0.08)",
                                            flexShrink: 0,
                                        }}
                                    />

                                    {/* Link Name */}
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>

                        {/* ─── Footer Section ─── */}
                        <div
                            style={{
                                flexShrink: 0,
                                paddingTop: "20px",
                                paddingBottom: "32px",
                                borderTop: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            {/* Live Clocks */}
                            <div style={{ display: "flex", gap: "40px", marginBottom: "24px" }}>
                                <div>
                                    <p
                                        style={{
                                            fontSize: "7px",
                                            fontWeight: 800,
                                            color: "rgba(255,255,255,0.15)",
                                            textTransform: "uppercase" as const,
                                            letterSpacing: "0.25em",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        ● Local Time
                                    </p>
                                    <p style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em" }}>
                                        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontSize: "7px",
                                            fontWeight: 800,
                                            color: "rgba(255,255,255,0.15)",
                                            textTransform: "uppercase" as const,
                                            letterSpacing: "0.25em",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        ● GMT
                                    </p>
                                    <p style={{ fontSize: "18px", fontWeight: 900, color: "rgba(255,255,255,0.5)", letterSpacing: "-0.02em" }}>
                                        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "UTC" })}
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    window.location.href = "#contact";
                                }}
                                style={{
                                    width: "100%",
                                    padding: "18px 0",
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                    fontSize: "9px",
                                    fontWeight: 900,
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "0.35em",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s",
                                }}
                            >
                                Start Your Campaign →
                            </button>

                            {/* Brand Mark */}
                            <p
                                style={{
                                    marginTop: "16px",
                                    textAlign: "center",
                                    fontSize: "7px",
                                    fontWeight: 700,
                                    color: "rgba(255,255,255,0.06)",
                                    textTransform: "uppercase" as const,
                                    letterSpacing: "0.4em",
                                }}
                            >
                                Celeb Sync © {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
