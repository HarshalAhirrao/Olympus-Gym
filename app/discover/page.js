"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DiscoverPage() {
    const features = [
        {
            title: "Train Anytime, Anywhere",
            desc: "Access workouts on your schedule, whether you're at home, traveling, or at the park.",
            img: "/img/anytime.png",
        },
        {
            title: "Expert-Led Coaching",
            desc: "Get guided by certified professionals to ensure safe and effective progress.",
            img: "/img/coach.png",
        },
        {
            title: "Tailored Meal Plans",
            desc: "Enjoy nutrition guidance that adapts to your body and fitness goals.",
            img: "/img/meal.jpg",
        },
        {
            title: "Interactive Progress Tracking",
            desc: "Monitor your workouts, measurements, and transformation in one dashboard.",
            img: "/img/tracking.jpg",
        },
    ];

    return (
        <main className="bg-black text-white min-h-screen py-20 px-6">
            {/* Hero Section */}
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Olympus Online</h1>
                <p className="text-gray-400 text-base md:text-lg">
                    Olympus Online Training brings elite fitness coaching right to your screen. Explore our features, connect with our community, and transform at your pace.
                </p>
            </motion.section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-[#111] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="relative aspect-[16/9] w-full mb-4 overflow-hidden rounded-lg">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mt-24 max-w-xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">Start Your Journey Today</h2>
                <p className="text-gray-400 mb-6 text-sm md:text-base">Join Olympus and unlock your potential through flexible, impactful online coaching.</p>
                <Link href="/join-now">
                    <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition">Join Now</button>
                </Link>
            </motion.section>
        </main>
    );
}
