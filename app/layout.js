import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
                <Footer />
            </body>
        </html>
    );
}
