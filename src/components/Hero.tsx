"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LiquidButton from "./LiquidButton";

export default function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 800], [0, 300]);

    return (
        <section className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
            {/* ── Cinematic Video Background (desktop only) ─── */}
            <div className="absolute inset-0 z-0">
                {/* Video — hidden on mobile for performance */}
                <video
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover hidden md:block"
                />
                {/* Mobile fallback — static image */}
                <div
                    className="absolute inset-0 w-full h-full md:hidden bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')",
                    }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            </div>

            {/* ── Content ─── */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div style={{ y }}>
                    <motion.p
                        className="font-inter text-[#D4AF37]/50 text-[10px] tracking-[8px] uppercase mb-10"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        Architecture Studio &mdash; Est. 2009
                    </motion.p>

                    <h1 className="font-playfair hero-headline text-white leading-[0.9]">
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="block"
                        >
                            DEFINING
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="block italic text-[#D4AF37]"
                        >
                            SKYLINES
                        </motion.div>
                    </h1>
                </motion.div>

                <motion.p
                    className="font-inter text-white/60 text-sm md:text-[15px] max-w-lg mx-auto mt-8 leading-[1.9] tracking-wide"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                >
                    Where brutalist precision meets timeless elegance.
                    <br className="hidden md:block" />
                    We sculpt spaces that transcend convention.
                </motion.p>

                <motion.div
                    className="mt-14"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{
                        opacity: 1,
                        y: [0, -8, 0],
                    }}
                    transition={{
                        opacity: { delay: 1.1, duration: 0.7 },
                        y: {
                            delay: 2,
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    style={{
                        filter: "drop-shadow(0 0 18px rgba(212,175,55,0.15))",
                    }}
                >
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(212,175,55,0.0)",
                                "0 0 30px rgba(212,175,55,0.18)",
                                "0 0 20px rgba(212,175,55,0.0)",
                            ],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="rounded-sm"
                    >
                        <LiquidButton onClick={() => scrollTo("works")}>
                            Explore Works
                        </LiquidButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
            >
                <span className="font-inter text-[9px] tracking-[5px] uppercase text-white/30">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                >
                    <ChevronDown className="w-4 h-4 text-[#D4AF37]/40" />
                </motion.div>
            </motion.div>

            <motion.p
                className="absolute right-8 top-1/2 -translate-y-1/2 z-20 font-inter text-[9px] tracking-[5px] uppercase text-white/20 [writing-mode:vertical-rl] rotate-180 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
            >
                KRONOS Architecture
            </motion.p>
        </section>
    );
}
