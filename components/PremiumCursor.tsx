"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function PremiumCursor() {
    const [mounted, setMounted] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Position of the actual mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring-smoothed trailing position
    const cursorX = useSpring(mouseX, { damping: 30, stiffness: 150, mass: 0.5 });
    const cursorY = useSpring(mouseY, { damping: 30, stiffness: 150, mass: 0.5 });

    useEffect(() => {
        setMounted(true);
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 12);
            mouseY.set(e.clientY - 12);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            );
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    // Prevent hydration mismatch by returning null during server-side rendering
    if (!mounted) return null;

    // Skip cursor on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
                opacity: isVisible ? 1 : 0,
            }}
            className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        >
            <motion.div
                animate={{
                    scale: isPointer ? 3 : 1,
                    backgroundColor: isPointer ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)",
                }}
                className="w-full h-full rounded-full"
            />

            {/* Velocity Ring */}
            <motion.div
                animate={{
                    scale: isPointer ? 4 : 1.5,
                    opacity: isPointer ? 0.2 : 0,
                }}
                className="absolute inset-0 border border-white rounded-full bg-white/20"
            />
        </motion.div>
    );
}
