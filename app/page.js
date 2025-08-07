"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

import Lenis from "@studio-freight/lenis";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Slower and smoother
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // More natural easing
            smooth: true,
            smoothTouch: true, // You can set true for smoother touch
            direction: "vertical",
            gestureDirection: "vertical",
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        
        </>
    );
}
