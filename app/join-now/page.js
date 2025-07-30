"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Toast from "../components/Toast";
const plans = [
    {
        title: "Starter",
        price: "₹999/mo",
        description: "Perfect for those starting out on their fitness journey.",
        features: ["Weekly Workout Plan", "Email Support", "Access to App"],
        highlight: false,
        button: "Get Started",
    },
    {
        title: "Pro",
        price: "₹1499/mo",
        description: "Step up with accountability and nutrition tracking.",
        features: ["All Starter Features", "Zoom Check-ins", "Diet Guidance"],
        highlight: true,
        button: "Start Now",
    },
    {
        title: "Elite",
        price: "₹1999/mo",
        description: "For those wanting 1-on-1 personal coaching and adjustments.",
        features: ["All Pro Features", "1-on-1 Coaching", "Custom Macros + Support"],
        highlight: false,
        button: "Go Elite",
    },
];

export default function JoinNowPage() {
    const [showToast, setShowToast] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");

    const handleSelectPlan = (planTitle) => {
        setSelectedPlan(planTitle);
    };

    return (
        <>
            <Toast show={showToast} onClose={() => setShowToast(false)} />

            <main className="bg-black text-white px-6 py-20 min-h-screen">
                {/* Hero Section */}
                <motion.div className="text-center max-w-4xl mx-auto mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Online Training</h1>
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">Get fit from anywhere with personalized coaching, flexible plans, and real accountability.</p>
                </motion.div>

                {/* Plan Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-24">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`rounded-2xl p-8 border flex flex-col justify-between text-center transition-transform duration-300 hover:scale-[1.02] ${
                                plan.highlight ? "bg-[#1d1d1d] border-red-500 shadow-red-500/20 shadow-xl scale-[1.02]" : "bg-[#121212] border-gray-700"
                            }`}>
                            {plan.highlight && <p className="text-red-400 text-xs font-semibold uppercase mb-2">Most Popular</p>}
                            <div>
                                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                                <p className="text-3xl font-extrabold text-red-400 mb-3">{plan.price}</p>
                                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                                <ul className="text-sm text-gray-300 text-left space-y-2">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-green-400">✔</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={() => handleSelectPlan(plan.title)} className="mt-8 py-2 px-6 rounded-full text-sm font-medium bg-red-500 hover:bg-red-600 transition w-full">
                                {plan.button}
                            </button>
                        </motion.div>
                    ))}
                </section>

                {/* Callback Form */}
                <section className="max-w-3xl mx-auto bg-[#1a1a1a] border border-gray-700 rounded-2xl p-8 shadow-lg">
                    <motion.h2 className="text-3xl font-semibold mb-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        Request a Callback
                    </motion.h2>
                    <form className="grid gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="px-4 py-3 rounded-md bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-3 rounded-md bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="px-4 py-3 rounded-md bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <select
                            value={selectedPlan}
                            onChange={(e) => setSelectedPlan(e.target.value)}
                            className="px-4 py-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select a Plan</option>
                            <option value="Starter">Starter</option>
                            <option value="Pro">Pro</option>
                            <option value="Elite">Elite</option>
                        </select>
                        <button type="button" onClick={() => setShowToast(true)} className="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-100 transition">
                            Submit
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
}
