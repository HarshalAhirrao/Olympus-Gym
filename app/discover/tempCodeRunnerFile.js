"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        title: "Train Anytime, Anywhere",
        desc: "Access workouts on your schedule, whether you're at home, traveling, or at the park.",
        img: "/img/anytime.png",
        icon: "🌍",
    },
    {
        title: "Expert-Led Coaching",
        desc: "Get guided by certified professionals to ensure safe and effective progress.",
        img: "/img/coach.png",
        icon: "🎓",
    },
    {
        title: "Tailored Meal Plans",
        desc: "Enjoy nutrition guidance that adapts to your body and fitness goals.",
        img: "/img/meal.jpg",
        icon: "🥗",
    },
    {
        title: "Interactive Progress Tracking",
        desc: "Monitor your workouts, measurements, and transformation in one dashboard.",
        img: "/img/tracking.jpg",
        icon: "📊",
    },
];

export default function DiscoverPage() {
    return (
        <main className="bg-black text-white min-h-screen py-20 px-6 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        🚀 Discover Olympus
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-5">
                        Discover Olympus{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Online</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Olympus Online Training brings elite fitness coaching right to your screen. Explore our features, connect with our community, and transform at your pace.
                    </p>
                </motion.section>

                {/* Features Grid */}
                <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#0f0f0f] rounded-2xl p-6 h-full">
                                <div className="relative aspect-[16/9] w-full mb-5 overflow-hidden rounded-xl">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
