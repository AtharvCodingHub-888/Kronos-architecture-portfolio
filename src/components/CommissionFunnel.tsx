"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare, FileText } from "lucide-react";

const STEPS = [
    {
        icon: Send,
        step: "01",
        title: "Submit Inquiry",
        desc: "Share your vision, site, and programme requirements through our secure brief form.",
    },
    {
        icon: MessageSquare,
        step: "02",
        title: "15-Min Consultation",
        desc: "A principal architect will discuss feasibility, approach, and creative alignment.",
    },
    {
        icon: FileText,
        step: "03",
        title: "Proposal Within 48 Hours",
        desc: "Receive a tailored scope, timeline, and fee proposal for your private commission.",
    },
];

export default function CommissionFunnel() {
    return (
        <section className="relative z-10 py-32 bg-background transition-colors duration-500 overflow-hidden">
            <div className="px-8 lg:px-20 max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-inter text-[10px] tracking-[6px] uppercase text-gold/45 mb-4">
                        05 / Commission
                    </p>
                    <div className="w-12 h-[1px] bg-gold/25 mx-auto mb-14" />
                    <h2 className="font-playfair text-[clamp(32px,4.5vw,56px)] leading-[1.08] font-normal tracking-[-0.02em]">
                        Start a Private
                        <br />
                        <span className="italic text-gold">Commission</span>
                    </h2>
                    <p className="font-inter text-muted-foreground text-sm mt-6 tracking-wide max-w-md mx-auto leading-relaxed">
                        We accept a limited number of commissions each year to ensure every
                        project receives our undivided creative attention.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {STEPS.map((s, i) => (
                        <motion.div
                            key={s.step}
                            className="relative text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            {/* Connecting line between steps */}
                            {i < STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-12 -right-4 lg:-right-6 w-8 lg:w-12 h-[1px] bg-gold/20" />
                            )}

                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center mb-8 group-hover:border-gold/50 transition-colors duration-500">
                                    <s.icon className="w-8 h-8 text-gold/60 group-hover:text-gold transition-colors duration-500" />
                                </div>
                                <p className="font-inter text-[10px] tracking-[3px] text-gold/40 mb-3 uppercase">
                                    Step {s.step}
                                </p>
                                <h3 className="font-playfair text-xl text-foreground mb-3 tracking-[-0.01em]">
                                    {s.title}
                                </h3>
                                <p className="font-inter text-muted-foreground text-[13px] leading-[1.85] tracking-wide max-w-xs">
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
