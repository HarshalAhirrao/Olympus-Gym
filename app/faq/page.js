"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "Is Olympus Gym a real service?",
        answer: "No, Olympus is a personal portfolio project created to demonstrate design and development skills. It's not a real business.",
    },
    {
        question: "Can I sign up for real training?",
        answer: "Please don't share real payment or sensitive information. This project is for showcase purposes only.",
    },
    {
        question: "Will I be contacted if I submit the contact form?",
        answer: "If you have any questions or made a payment by mistake, don't worry — we'll get in touch with you as soon as possible. This is just a demo project, but if it were real, you'd hear from us right away!",
    },
    {
        question: "Are the prices real?",
        answer: "Nope! Pricing is just a mock to make the site feel realistic. Don't pay for anything here!",
    },
];

const ChevronIcon = ({ isOpen }) => (
    <svg
        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="bg-black text-white min-h-screen px-6 py-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        ❓ FAQ
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Questions</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Here&apos;s everything you need to know about this fitness-themed portfolio site.
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#0f0f0f] rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full text-left flex justify-between items-center p-5 cursor-pointer">
                                    <span className="font-medium text-white text-sm md:text-base pr-4">{faq.question}</span>
                                    <ChevronIcon isOpen={openIndex === index} />
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}>
                                            <div className="px-5 pb-5">
                                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                                                <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
