"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
    { label: "Works", href: "#works" },
    { label: "Studio", href: "#studio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id.replace("#", ""));
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "navbar-glass" : "bg-transparent"
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <nav className="flex items-center justify-between px-6 lg:px-16 py-5">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <span className="font-playfair text-xl tracking-[0.15em] text-foreground group-hover:text-gold transition-colors duration-300">
                            KRONOS
                        </span>
                    </Link>

                    {/* Center Nav Links — Desktop */}
                    <div className="hidden lg:flex items-center gap-12">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="gold-underline font-inter text-[11px] tracking-[3px] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Right side — Theme + CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <ThemeToggle />
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="px-6 py-3 border border-gold text-gold font-inter text-[10px] tracking-[3px] uppercase hover:bg-gold hover:text-black transition-all duration-400 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Book Consultation</span>
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="flex lg:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="text-foreground p-1"
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </nav>
            </motion.header>

            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                links={NAV_LINKS}
                onNavigate={scrollTo}
            />
        </>
    );
}
