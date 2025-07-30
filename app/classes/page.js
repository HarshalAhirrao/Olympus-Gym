"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <section className="bg-black text-white min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold text-center mb-6">
                    Explore Our Classes
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    From beginners to pros — find the perfect class to fuel your fitness goals and keep your routine exciting.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {classes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1e1e1e] p-5 rounded-xl hover:shadow-xl transition-all group">
                            <div className="overflow-hidden rounded-xl mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                     className="rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out  object-cover w-full h-[200px]"

                                    
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
