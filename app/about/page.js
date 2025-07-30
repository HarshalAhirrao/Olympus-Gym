"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function about() {
    return (
        <section className="min-h-screen bg-black text-white px-4 py-20">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
                {/* Text Content */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-blue-400 text-sm uppercase tracking-widest mb-3">Who We Are</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Your Fitness Journey</h1>
                    <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                        Olympus isn&apos;t just another online gym — it's a movement. Our mission is to deliver transformative, accessible fitness experiences through expert-led online training.
                        Whether you're just starting or leveling up, we&apos;re here to fuel your evolution.
                    </p>
                    <p className="text-gray-500 text-sm md:text-base mb-10">
                        Backed by certified trainers, cutting-edge programming, and a community that motivates — Olympus is your fitness family online.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/join-now" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition text-sm font-medium">
                            Join Now
                        </Link>
                        <Link href="/testimonials" className="border border-gray-500 text-gray-300 px-6 py-2 rounded hover:bg-neutral-900 transition text-sm font-medium">
                            Member Stories
                        </Link>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="md:w-1/2">
                    <Image
                        src="/img/section5.png" // Replace with your actual image
                        alt="About Olympus Gym"
                        width={550}
                        height={500}
                        className=""
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
