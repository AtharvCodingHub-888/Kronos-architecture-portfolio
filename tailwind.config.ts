import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                gold: "#D4AF37",
                "gold-dark": "#B8960C",
                "gold-light": "#E8D48B",
                muted: "var(--color-muted)",
                "muted-foreground": "var(--color-muted-foreground)",
                border: "var(--color-border)",
                card: "var(--color-card)",
                "card-foreground": "var(--color-card-foreground)",
            },
            fontFamily: {
                playfair: ["var(--font-playfair)"],
                inter: ["var(--font-inter)"],
            },
            animation: {
                "fade-up": "fadeUp 0.8s ease-out forwards",
                "fade-in": "fadeIn 1s ease-out forwards",
                "slide-in-left": "slideInLeft 0.8s ease-out forwards",
                "slide-in-right": "slideInRight 0.8s ease-out forwards",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(40px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-60px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(60px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
