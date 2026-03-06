"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 text-center md:text-left">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        🏛️ Who We Are
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Empowering Your{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Fitness Journey</span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed">
                        Olympus isn&apos;t just another online gym — it&apos;s a movement. Our mission is to deliver transformative, accessible fitness experiences through expert-led online training.
                        Whether you&apos;re just starting or leveling up, we&apos;re here to fuel your evolution.
                    </p>
                    <p className="text-gray-500 text-sm md:text-base mb-10 leading-relaxed">
                        Backed by certified trainers, cutting-edge programming, and a community that motivates — Olympus is your fitness family online.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/join-now"
                                className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-xl text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300">
                                Join Now
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/testimonials"
                                className="inline-block bg-white/5 border border-white/10 text-white font-semibold px-8 py-3 rounded-xl text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                Member Stories
                            </Link>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="flex gap-8 justify-center md:justify-start mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}>
                        {[
                            { value: "500+", label: "Active Members" },
                            { value: "15+", label: "Expert Trainers" },
                            { value: "3+", label: "Years of Impact" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="md:w-1/2 flex justify-center relative">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-orange-500/5 rounded-2xl blur-[30px] pointer-events-none" />
                        <Image
                            src="/img/section5.png"
                            alt="About Olympus Gym"
                            width={550}
                            height={500}
                            className="relative z-10 rounded-2xl"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
