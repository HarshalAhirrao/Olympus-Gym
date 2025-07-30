"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "Online Training Client",
        feedback: "Joining this program changed my life. The routines are realistic, and the coaches actually care. I’m finally consistent.",
        img: "/img/section5.png",
    },
    {
        name: "Meera Kapoor",
        role: "Weight Loss Journey",
        feedback: "I never thought virtual coaching could be this personal. Weekly calls and custom plans kept me motivated and accountable.",
        img: "/img/section5.png",
    },
    {
        name: "Rahul Verma",
        role: "Busy Professional",
        feedback: "Fits perfectly into my hectic schedule. Short, powerful workouts + diet tracking is exactly what I needed.",
        img: "/img/section5.png",
    },
    {
        name: "Simran D’Souza",
        role: "Fitness Beginner",
        feedback: "They never made me feel judged or overwhelmed. The support is incredible, and I’m already seeing results.",
        img: "/img/section5.png",
    },
];

export default function TestimonialsPage() {
    return (
        <section className="bg-black text-white px-6 py-20 min-h-screen">
            <div className="max-w-6xl mx-auto text-center">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">What Our Members Say</h1>
                    <p className="text-gray-400 text-base md:text-lg mb-16 max-w-xl mx-auto">Real people. Real results. Here’s what our online fitness community is saying.</p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-[#121212] border border-[#222] rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-4">
                                <Image src={item.img} alt={item.name} width={50} height={50} className="rounded-full object-cover border border-gray-600 group-hover:shadow-md transition" />
                                <div className="text-left">
                                    <h3 className="font-semibold text-white">{item.name}</h3>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm italic leading-relaxed">“{item.feedback}”</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                {/* <motion.div className="mt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <p className="text-gray-400 mb-4">Have a story to share?</p>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-all duration-300">Leave a Review</button>
                </motion.div> */}
            </div>
        </section>
    );
}
