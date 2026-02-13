"use client";

import { motion } from "framer-motion";

const PUBLICATIONS = [
    "ArchDaily",
    "Dezeen",
    "Architectural Digest",
    "Designboom",
];

export default function FeaturedIn() {
    return (
        <section className="relative z-10 py-20 bg-background transition-colors duration-500 overflow-hidden">
            <motion.div
                className="px-8 lg:px-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8 }}
            >
                {/* Top gold line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

                <p className="text-center font-inter text-[9px] tracking-[6px] uppercase text-muted-foreground/40 mb-10">
                    Featured In
                </p>

                <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16">
                    {PUBLICATIONS.map((pub, i) => (
                        <motion.div
                            key={pub}
                            className="flex items-center gap-8 md:gap-16"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                            {i > 0 && (
                                <div className="w-[1px] h-6 bg-gold/20 hidden md:block" />
                            )}
                            <span className="font-playfair text-lg md:text-xl text-muted-foreground/40 tracking-wide hover:text-gold/60 transition-colors duration-300">
                                {pub}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom gold line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-12" />
            </motion.div>
        </section>
    );
}
