"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "Online Training Client",
        feedback: "Joining this program changed my life. The routines are realistic, and the coaches actually care. I'm finally consistent.",
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
        name: "Simran D'Souza",
        role: "Fitness Beginner",
        feedback: "They never made me feel judged or overwhelmed. The support is incredible, and I'm already seeing results.",
        img: "/img/section5.png",
    },
];

const QuoteIcon = () => (
    <svg className="w-8 h-8 text-red-500/20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

export default function TestimonialsPage() {
    return (
        <section className="bg-black text-white px-6 py-20 min-h-screen relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        ⭐ Success Stories
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        What Our Members{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Say</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Real people. Real results. Here&apos;s what our online fitness community is saying.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#0f0f0f] rounded-2xl p-7 h-full">
                                {/* Quote icon */}
                                <div className="mb-4">
                                    <QuoteIcon />
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{item.feedback}&rdquo;</p>

                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover border border-white/10"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                                        <p className="text-xs text-gray-500">{item.role}</p>
                                    </div>
                                </div>
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
                    <p className="text-gray-500 mb-5 text-sm">Want to be our next success story?</p>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                        <Link
                            href="/join-now"
                            className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-10 py-3.5 rounded-xl text-sm shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300">
                            Start Your Journey
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
