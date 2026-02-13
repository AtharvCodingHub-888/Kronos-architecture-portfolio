"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "@/data/projects";

export default function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

    return (
        <section
            ref={scrollRef}
            className="relative z-10 py-36 overflow-hidden bg-background transition-colors duration-500"
            id="services"
        >
            <motion.div
                className="px-8 lg:px-20 mb-20"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-inter text-[10px] tracking-[6px] uppercase text-gold/45 mb-4">
                    04 / Services
                </p>
                <div className="w-12 h-[1px] bg-gold/25 mb-14" />
                <h2 className="font-playfair text-[clamp(36px,5vw,64px)] leading-[1.08] font-normal tracking-[-0.02em]">
                    What We&nbsp;
                    <span className="italic text-gold">Offer</span>
                </h2>
            </motion.div>

            <motion.div className="flex gap-0 pl-8 lg:pl-20" style={{ x }}>
                {SERVICES.map((s, i) => (
                    <motion.div
                        key={s.title}
                        className="flex-shrink-0 w-[400px] relative group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gold/15" />
                        <div className="p-10 h-full flex flex-col">
                            <p className="font-inter text-[10px] tracking-[2px] text-gold/25 mb-10">
                                {s.num}
                            </p>
                            <h3 className="font-playfair text-[22px] text-foreground mb-4 tracking-[-0.01em]">
                                {s.title}
                            </h3>
                            <p className="font-inter text-muted-foreground text-[13px] leading-[1.85] tracking-wide flex-grow">
                                {s.desc}
                            </p>
                        </div>
                        {i === SERVICES.length - 1 && (
                            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gold/15" />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="flex items-center justify-center mt-16 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <div className="w-8 h-[1px] bg-gold/15" />
                <p className="font-inter text-[9px] tracking-[5px] uppercase text-muted-foreground/30">
                    Scroll to explore
                </p>
                <div className="w-8 h-[1px] bg-gold/15" />
            </motion.div>
        </section>
    );
}
