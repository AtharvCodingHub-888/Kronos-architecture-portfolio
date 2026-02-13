"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-gold/40 transition-colors duration-300 group"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
            >
                <Moon className="w-4 h-4 text-gold" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : -180,
                    scale: theme === "light" ? 1 : 0,
                    opacity: theme === "light" ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
            >
                <Sun className="w-4 h-4 text-gold" />
            </motion.div>
        </button>
    );
}
