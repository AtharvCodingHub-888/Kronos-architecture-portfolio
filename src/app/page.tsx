"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Studio from "@/components/Studio";
import SelectedWorks from "@/components/SelectedWorks";
import FeaturedIn from "@/components/FeaturedIn";
import Services from "@/components/Services";
import CommissionFunnel from "@/components/CommissionFunnel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.6,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);
}

export default function Home() {
    useLenis();

    return (
        <>
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <Studio />
                <SelectedWorks />
                <FeaturedIn />
                <Services />
                <CommissionFunnel />
                <ContactSection />
                <Footer />
            </main>
        </>
    );
}
