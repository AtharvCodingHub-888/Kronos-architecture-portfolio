"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PROJECT_TYPES = [
    "Residential Villa",
    "Cultural Space",
    "Commercial",
    "Interior Design",
    "Landscape Architecture",
    "Urban Masterplan",
    "Other",
];

const BUDGET_RANGES = [
    "₹50L – ₹1Cr",
    "₹1Cr – ₹5Cr",
    "₹5Cr – ₹10Cr",
    "₹10Cr+",
    "Undisclosed",
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to send inquiry.");
            }

            setSubmitted(true);
        } catch (err: unknown) {
            setError(
                err instanceof Error ? err.message : "Something went wrong. Please try again."
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative z-10 section-padding bg-background transition-colors duration-500" id="contact">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-inter text-[10px] tracking-[6px] uppercase text-gold/45 mb-4">
                        06 / Contact
                    </p>
                    <div className="w-12 h-[1px] bg-gold/25 mb-14" />
                    <h2 className="font-playfair text-[clamp(36px,5vw,64px)] leading-[1.08] font-normal tracking-[-0.02em]">
                        Begin Your
                        <br />
                        <span className="italic text-gold">Vision</span>
                    </h2>
                    <p className="font-inter text-muted-foreground text-sm mt-6 tracking-wide max-w-md leading-relaxed">
                        Every great building starts with a conversation. Tell us about your
                        project, and we&apos;ll respond within 24 hours.
                    </p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6">
                            <span className="text-gold text-2xl">✓</span>
                        </div>
                        <h3 className="font-playfair text-2xl text-foreground mb-3">
                            Inquiry Sent Successfully
                        </h3>
                        <p className="font-inter text-muted-foreground text-sm">
                            We will respond within 24 hours to discuss your project.
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <label className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/60 mb-2 block">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Alexander Voss"
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/60 mb-2 block">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="alexander@studio.com"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <label className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/60 mb-2 block">
                                    Project Type
                                </label>
                                <select
                                    name="projectType"
                                    required
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    aria-label="Project Type"
                                    className="form-select"
                                >
                                    <option value="" disabled>
                                        Select project type
                                    </option>
                                    {PROJECT_TYPES.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/60 mb-2 block">
                                    Budget Range
                                </label>
                                <select
                                    name="budget"
                                    required
                                    value={formData.budget}
                                    onChange={handleChange}
                                    aria-label="Budget Range"
                                    className="form-select"
                                >
                                    <option value="" disabled>
                                        Select budget range
                                    </option>
                                    {BUDGET_RANGES.map((b) => (
                                        <option key={b} value={b}>
                                            {b}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="font-inter text-[10px] tracking-[3px] uppercase text-muted-foreground/60 mb-2 block">
                                Project Brief
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe your vision, site conditions, programme requirements…"
                                className="form-input resize-none"
                            />
                        </div>

                        {error && (
                            <p className="font-inter text-red-500 text-sm tracking-wide">
                                {error}
                            </p>
                        )}

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={sending}
                                className="liquid-btn group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="liquid-btn-fill" />
                                <span className="relative z-10 flex items-center gap-3">
                                    {sending ? "Sending…" : "Request Consultation"}
                                </span>
                            </button>
                        </div>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
