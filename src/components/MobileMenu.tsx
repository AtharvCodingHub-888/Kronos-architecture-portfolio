"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { label: string; href: string }[];
    onNavigate: (href: string) => void;
}

const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
};

const menuVariants = {
    closed: { x: "100%" },
    open: {
        x: "0%",
        transition: { type: "spring", damping: 30, stiffness: 300 },
    },
};

const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.15 + i * 0.08,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function MobileMenu({
    isOpen,
    onClose,
    links,
    onNavigate,
}: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-[200] lg:hidden"
                        variants={overlayVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        onClick={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        className="fixed inset-0 z-[201] lg:hidden bg-background flex flex-col"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5">
                            <span className="font-playfair text-xl tracking-[0.15em] text-foreground">
                                KRONOS
                            </span>
                            <button
                                onClick={onClose}
                                className="text-foreground p-1"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-10">
                            {links.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    custom={i}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                    onClick={() => onNavigate(link.href)}
                                    className="font-playfair text-4xl text-foreground tracking-wide gold-underline"
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            {/* CTA */}
                            <motion.button
                                custom={links.length}
                                variants={linkVariants}
                                initial="closed"
                                animate="open"
                                onClick={() => onNavigate("#contact")}
                                className="mt-6 px-10 py-4 border border-gold text-gold font-inter text-[11px] tracking-[3px] uppercase hover:bg-gold hover:text-black transition-all duration-300"
                            >
                                Book Consultation
                            </motion.button>
                        </div>

                        {/* Footer accent */}
                        <div className="px-6 py-8 text-center">
                            <p className="font-inter text-[9px] tracking-[5px] uppercase text-muted-foreground/40">
                                Architecture Studio — Est. 2009
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
