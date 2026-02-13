"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

interface Props {
    project: Project;
    nextProject: Project;
}

export default function ProjectDetailClient({ project, nextProject }: Props) {
    return (
        <>
            <CustomCursor />
            <Navbar />

            <main>
                {/* ── Fullscreen Hero ─── */}
                <section className="relative h-screen w-full overflow-hidden">
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-20 pb-16 lg:pb-24 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="font-inter text-[10px] tracking-[5px] uppercase text-[#D4AF37]/70 mb-4">
                                {project.tag}
                            </p>
                            <h1 className="font-playfair text-[clamp(40px,8vw,100px)] text-white leading-[0.95] font-normal tracking-[-0.02em]">
                                {project.title}
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* ── Project Details ─── */}
                <section className="bg-background transition-colors duration-500 py-24 lg:py-32">
                    <div className="px-8 lg:px-20 max-w-6xl mx-auto">
                        {/* Meta grid */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-16 border-b border-border"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <div>
                                <p className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/50 mb-2">
                                    Location
                                </p>
                                <p className="font-inter text-foreground text-sm tracking-wide">
                                    {project.location}
                                </p>
                            </div>
                            <div>
                                <p className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/50 mb-2">
                                    Year
                                </p>
                                <p className="font-inter text-foreground text-sm tracking-wide">
                                    {project.year}
                                </p>
                            </div>
                            <div>
                                <p className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/50 mb-2">
                                    Type
                                </p>
                                <p className="font-inter text-foreground text-sm tracking-wide">
                                    {project.type}
                                </p>
                            </div>
                            <div>
                                <p className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/50 mb-2">
                                    Status
                                </p>
                                <p className="font-inter text-foreground text-sm tracking-wide">
                                    Completed
                                </p>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            className="max-w-3xl mb-24"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="font-inter text-muted-foreground text-[15px] leading-[2] tracking-wide">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    className={`relative overflow-hidden group ${i === 0 ? "md:col-span-2" : ""
                                        } ${i === 0
                                            ? "aspect-[16/9]"
                                            : "aspect-[4/3]"
                                        }`}
                                    data-cursor-lens
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: i * 0.05 }}
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} — Image ${i + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Next Project ─── */}
                <section className="bg-background transition-colors duration-500 border-t border-border">
                    <Link
                        href={`/works/${nextProject.slug}`}
                        className="group block py-20 lg:py-28 px-8 lg:px-20"
                    >
                        <motion.div
                            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>
                                <p className="font-inter text-[10px] tracking-[5px] uppercase text-gold/50 mb-4">
                                    Next Project
                                </p>
                                <h2 className="font-playfair text-[clamp(32px,5vw,56px)] text-foreground leading-[1.08] group-hover:text-gold transition-colors duration-500">
                                    {nextProject.title}
                                </h2>
                                <p className="font-inter text-muted-foreground text-sm mt-2 tracking-wide">
                                    {nextProject.location} — {nextProject.year}
                                </p>
                            </div>

                            <motion.div
                                className="flex items-center gap-3 text-gold"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                                <span className="font-inter text-[11px] tracking-[3px] uppercase">
                                    View
                                </span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </Link>
                </section>

                {/* ── Back to all works ─── */}
                <div className="bg-background transition-colors duration-500 border-t border-border px-8 lg:px-20 py-10">
                    <div className="max-w-6xl mx-auto">
                        <Link
                            href="/#works"
                            className="inline-flex items-center gap-3 group"
                        >
                            <ArrowLeft className="w-4 h-4 text-gold group-hover:-translate-x-1 transition-transform duration-300" />
                            <span className="gold-underline font-inter text-gold text-xs tracking-[3px] uppercase">
                                All Projects
                            </span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
