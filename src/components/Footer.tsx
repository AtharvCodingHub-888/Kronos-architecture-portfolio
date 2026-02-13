"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
} from "framer-motion";

export default function Footer() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"],
    });

    const fillHeight = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <footer
            ref={sectionRef}
            className="relative z-10 min-h-[80vh] flex flex-col justify-between overflow-hidden bg-card transition-colors duration-500"
        >
            {/* Force solid background */}
            <div className="absolute inset-0 bg-card z-0" />

            <div className="container mx-auto px-6 py-20 flex-grow flex flex-col justify-center items-center relative z-10">
                <div className="relative w-full text-center">
                    {/* Outline Layer */}
                    <h2 className="footer-kronos-outline font-playfair font-bold leading-none select-none pointer-events-none absolute inset-0 flex items-center justify-center">
                        KRONOS
                    </h2>

                    {/* Fill Layer (Liquid Gold) */}
                    <motion.h2
                        className="footer-kronos-fill font-playfair font-bold leading-none select-none relative z-10 bg-gradient-to-b from-[#b8860b] via-[#ffd700] to-[#b8860b] bg-clip-text text-transparent"
                        style={{
                            clipPath: useMotionTemplate`inset(${fillHeight}% 0 0 0)`,
                            filter: "drop-shadow(0 0 15px rgba(212,175,55,0.5))",
                        }}
                    >
                        KRONOS
                    </motion.h2>
                </div>
            </div>

            {/* Footer links */}
            <div className="border-t border-border px-8 lg:px-20 py-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <a href="#works" className="gold-underline font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Works
                        </a>
                        <a href="#studio" className="gold-underline font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Studio
                        </a>
                        <a href="#services" className="gold-underline font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Services
                        </a>
                        <a href="#contact" className="gold-underline font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Contact
                        </a>
                    </div>

                    <p className="font-inter text-[10px] tracking-[4px] text-muted-foreground/40 uppercase">
                        © 2024 KRONOS Architecture. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
