"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const classes = [
    {
        title: "HIIT Training",
        image: "/img/C_HIIT.png",
        desc: "High-Intensity Interval Training to burn calories and boost endurance.",
    },
    {
        title: "Yoga & Flexibility",
        image: "/img/C_yoga.png",
        desc: "Improve flexibility, balance, and reduce stress with expert-led sessions.",
    },
    {
        title: "Strength Training",
        image: "/img/C_strength.png",
        desc: "Build muscle and increase strength with progressive routines.",
    },
    {
        title: "Functional Fitness",
        image: "/img/C_stability.png",
        desc: "Enhance daily movement and stability with full-body functional workouts.",
    },
    {
        title: "Core Blast",
        image: "/img/C_core.png",
        desc: "Sculpt and strengthen your abs with targeted core sessions.",
    },
    {
        title: "Mobility Recovery",
        image: "/img/C_mobility.png",
        desc: "Loosen up and reduce injury risk through guided mobility routines.",
    },
];

export default function ClassesPage() {
    return (
        <section className="bg-black text-white min-h-screen py-20 px-6 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        🎯 Our Programs
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Explore Our{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Classes</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        From beginners to pros — find the perfect class to fuel your fitness goals and keep your routine exciting.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#0f0f0f] rounded-2xl p-5 h-full">
                                <div className="overflow-hidden rounded-xl mb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        className="rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out object-cover w-full h-[200px]"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <p className="text-gray-500 mb-5 text-sm">Ready to start your transformation?</p>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                        <Link
                            href="/join-now"
                            className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-10 py-3.5 rounded-xl text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300">
                            Join Now
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
