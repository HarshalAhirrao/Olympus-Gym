"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false,
            direction: "vertical",
            gestureDirection: "vertical",
        });

        // ✅ Define the raf function
        function raf(time, number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        // ✅ Start the animation frame
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null; // logic-only provider
}
