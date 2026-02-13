import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    title: "KRONOS — Defining Skylines | Award-Winning Architecture Studio",
    description:
        "KRONOS is an ultra-luxury architecture studio redefining modern living through brutalist elegance, minimalist precision, and visionary design.",
    keywords: [
        "Architecture",
        "Luxury Design",
        "Brutalist",
        "Minimalist",
        "Interiors",
        "KRONOS",
    ],
    metadataBase: new URL("https://kronosarch.com"),
    openGraph: {
        title: "KRONOS — Defining Skylines",
        description:
            "Award-winning architecture studio. Brutalist elegance meets minimalist precision.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable} dark`} suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var t = localStorage.getItem('kronos-theme');
                                    if (t === 'light') {
                                        document.documentElement.classList.remove('dark');
                                        document.documentElement.classList.add('light');
                                    } else {
                                        document.documentElement.classList.add('dark');
                                        document.documentElement.classList.remove('light');
                                    }
                                } catch(e) {
                                    document.documentElement.classList.add('dark');
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body className="bg-background text-foreground font-inter antialiased">
                <ThemeProvider>
                    <div className="noise-overlay" aria-hidden="true" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
