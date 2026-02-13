"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Studio() {
    return (
        <section className="relative z-10 section-padding bg-background transition-colors duration-500" id="studio">
            <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-inter text-[10px] tracking-[6px] uppercase text-gold/45 mb-4">
                    02 / The Studio
                </p>
                <div className="w-12 h-[1px] bg-gold/25" />
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4">
                {/* Left — Visual */}
                <motion.div
                    className="lg:w-1/2 relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="aspect-[3/4] lg:aspect-auto lg:h-[660px] relative overflow-hidden bg-muted/20" data-cursor-lens>
                        <img
                            src="/images/architect_portrait.png"
                            alt="Lead Architect"
                            className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-8 left-8">
                        <p className="font-inter text-[10px] tracking-[4px] uppercase text-gold/50">
                            Lead Architect
                        </p>
                        <p className="font-playfair text-xl text-white mt-1">
                            Alexander Voss
                        </p>
                    </div>
                </motion.div>

                {/* Right — Philosophy */}
                <motion.div
                    className="lg:w-1/2 flex flex-col justify-center lg:pl-20 py-16 lg:py-0"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-playfair text-[clamp(36px,5vw,64px)] leading-[1.08] font-normal tracking-[-0.02em] mb-8">
                        Our
                        <br />
                        <span className="italic text-gold">Philosophy</span>
                    </h2>

                    <div className="space-y-6 max-w-lg">
                        <p className="font-inter text-muted-foreground text-sm leading-[1.85] tracking-wide">
                            At KRONOS, we believe architecture is the dialogue between human
                            ambition and the raw poetry of materials. Every structure we
                            conceive is an act of defiance against the ordinary — a bold
                            statement carved in concrete, glass, and light.
                        </p>
                        <p className="font-inter text-muted-foreground text-sm leading-[1.85] tracking-wide">
                            Founded in 2009, our studio has shaped iconic skylines across four
                            continents. We don&apos;t follow trends. We set them. Our commitment to
                            brutalist minimalism has earned us recognition from the world&apos;s
                            most prestigious architectural institutions.
                        </p>

                        <div className="pt-6">
                            <p className="font-inter text-muted-foreground/40 text-[10px] tracking-[5px] uppercase mb-6">
                                Awards &amp; Recognition
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Pritzker Prize 2023", "AIA Gold Medal", "RIBA Stirling Prize", "Dezeen Awards"].map(
                                    (a) => (
                                        <div key={a} className="border-l border-gold/20 pl-4 py-2">
                                            <p className="font-inter text-foreground/80 text-xs tracking-wide">
                                                {a}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <motion.a
                            href="#works"
                            className="inline-flex items-center gap-3 group mt-8"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            <span className="gold-underline font-inter text-gold text-xs tracking-[3px] uppercase">
                                View Our Works
                            </span>
                            <ArrowRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
