import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Olympus Gym | Online Fitness Training",
    description: "Train with Olympus — expert-led online workouts, coaching, and fitness programs. Transform your body and mind from anywhere.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <LenisProvider />
                <Navbar />
                <Toaster position="top-right" />
                {children}
                <SpeedInsights />
                <Footer />
            </body>
        </html>
    );
}
