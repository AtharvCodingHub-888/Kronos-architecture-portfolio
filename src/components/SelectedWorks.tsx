"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

function ParallaxImage({
    src,
    alt,
    speed = 0.15,
}: {
    src: string;
    alt: string;
    speed?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

    return (
        <div ref={ref} className="absolute inset-0 overflow-hidden">
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-[130%] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ y }}
            />
        </div>
    );
}

export default function SelectedWorks() {
    return (
        <section className="relative z-10 section-padding bg-background transition-colors duration-500" id="works">
            <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-inter text-[10px] tracking-[6px] uppercase text-gold/45 mb-4">
                    03 / Selected Works
                </p>
                <div className="w-12 h-[1px] bg-gold/25 mb-16" />
                <h2 className="font-playfair text-[clamp(36px,5vw,64px)] leading-[1.08] font-normal tracking-[-0.02em]">
                    Curated
                    <br />
                    <span className="italic text-gold">Portfolio</span>
                </h2>
            </motion.div>

            <motion.div
                className="bento-grid"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
                {PROJECTS.map((p, i) => (
                    <motion.div
                        key={p.slug}
                        className="bento-item relative overflow-hidden cursor-pointer group"
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.97 },
                            show: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                            },
                        }}
                    >
                        <Link href={`/works/${p.slug}`} className="absolute inset-0 z-[3]">
                            <span className="sr-only">View {p.title}</span>
                        </Link>
                        <ParallaxImage
                            src={p.heroImage}
                            alt={p.title}
                            speed={i % 2 === 0 ? 0.12 : 0.2}
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500 z-[1]" />

                        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]">
                            <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="font-inter text-[10px] tracking-[4px] uppercase text-[#D4AF37]/80 mb-2">
                                    {p.tag} &mdash; {p.year}
                                </p>
                                <h3 className="font-playfair text-xl lg:text-2xl text-white">
                                    {p.title}
                                </h3>
                                <p className="font-inter text-white/50 text-xs mt-1">
                                    {p.location}
                                </p>
                            </div>
                        </div>

                        <span className="absolute top-4 right-4 font-inter text-[10px] text-[#D4AF37]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
