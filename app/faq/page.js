"use client";

import { motion } from "framer-motion";
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
        answer: "If you have any questions or made a payment by mistake, don't worry — we’ll get in touch with you as soon as possible. This is just a demo project, but if it were real, you’d hear from us right away!",
    },
    {
        question: "Are the prices real?",
        answer: "Nope! Pricing is just a mock to make the site feel realistic. Don’t pay for anything here!",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="bg-black text-white min-h-screen px-6 py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
                <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto text-sm md:text-base">Here's everything you need to know about this fitness-themed portfolio site.</p>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border border-gray-700 rounded-lg p-4 bg-[#1a1a1a]">
                            <button onClick={() => toggle(index)} className="w-full text-left flex justify-between items-center font-medium text-white">
                                <span>{faq.question}</span>
                                <span className="text-red-400">{openIndex === index ? "−" : "+"}</span>
                            </button>

                            {openIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm text-gray-400 mt-3 leading-relaxed">
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
