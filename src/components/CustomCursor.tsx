"use client";

import { useState, useEffect } from "react";
import {
    useMotionValue,
    useSpring,
    motion,
} from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
    const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });
    const [hoveringImage, setHoveringImage] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Disable custom cursor on touch devices and small screens
        const mq = window.matchMedia("(pointer: coarse)");
        if (mq.matches || window.innerWidth < 1024) {
            setIsTouch(true);
            return;
        }

        const move = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        const overImg = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (
                t.tagName === "IMG" ||
                t.closest(".bento-item") ||
                t.closest("[data-cursor-lens]")
            ) {
                setHoveringImage(true);
            }
        };
        const outImg = () => setHoveringImage(false);

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", overImg);
        window.addEventListener("mouseout", outImg);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", overImg);
            window.removeEventListener("mouseout", outImg);
        };
    }, [cursorX, cursorY]);

    if (isTouch) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
                width: hoveringImage ? 120 : 16,
                height: hoveringImage ? 120 : 16,
                backgroundColor: hoveringImage
                    ? "rgba(212,175,55,0.12)"
                    : "rgba(245,245,240,0.9)",
                mixBlendMode: "difference",
                border: hoveringImage ? "1px solid rgba(212,175,55,0.3)" : "none",
                transition:
                    "width 0.4s cubic-bezier(.16,1,.3,1), height 0.4s cubic-bezier(.16,1,.3,1), background-color 0.4s ease, border 0.3s ease",
            }}
        />
    );
}
