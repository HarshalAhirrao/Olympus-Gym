"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Toast from "../components/Toast";

const plans = [
    {
        title: "Starter",
        price: "₹999",
        period: "/mo",
        description: "Perfect for those starting out on their fitness journey.",
        features: ["Weekly Workout Plan", "Email Support", "Access to App"],
        highlight: false,
        button: "Get Started",
    },
    {
        title: "Pro",
        price: "₹1499",
        period: "/mo",
        description: "Step up with accountability and nutrition tracking.",
        features: ["All Starter Features", "Zoom Check-ins", "Diet Guidance"],
        highlight: true,
        button: "Start Now",
    },
    {
        title: "Elite",
        price: "₹1999",
        period: "/mo",
        description: "For those wanting 1-on-1 personal coaching and adjustments.",
        features: ["All Pro Features", "1-on-1 Coaching", "Custom Macros + Support"],
        highlight: false,
        button: "Go Elite",
    },
];

const CheckIcon = () => (
    <svg
        className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0116.5 0" />
    </svg>
);

const MailIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

const PlanIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>
);

export default function JoinNowPage() {
    const [showToast, setShowToast] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const formRef = useRef(null);

    const handleSelectPlan = (planTitle) => {
        setSelectedPlan(planTitle);
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <>
            <Toast show={showToast} onClose={() => setShowToast(false)} />

            <main className="bg-black text-white min-h-screen relative overflow-hidden">
                {/* Background glow decorations */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[128px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

                <div className="relative z-10 px-6 py-20">
                    {/* Hero Section */}
                    <motion.div
                        className="text-center max-w-4xl mx-auto mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        {/* Badge */}
                        <motion.span
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}>
                            <span>🏋️</span> Online Training Programs
                        </motion.span>

                        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                            Transform Your Body{" "}
                            <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                                From Anywhere
                            </span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Get fit with personalized coaching, flexible plans, and real accountability — all from the comfort of your home.
                        </p>
                    </motion.div>

                    {/* Plan Cards */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-28">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className={`group relative rounded-2xl p-[1px] ${
                                    plan.highlight
                                        ? "bg-gradient-to-b from-red-500 via-red-500/40 to-transparent"
                                        : "bg-gradient-to-b from-white/10 to-transparent"
                                }`}>
                                {/* Inner card */}
                                <div
                                    className={`relative rounded-2xl p-8 flex flex-col justify-between h-full ${
                                        plan.highlight
                                            ? "bg-gradient-to-b from-red-500/10 via-[#141414] to-[#0a0a0a]"
                                            : "bg-[#0f0f0f]"
                                    }`}>
                                    {/* Highlight glow */}
                                    {plan.highlight && (
                                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-red-500/20 blur-[80px] rounded-full pointer-events-none" />
                                    )}

                                    <div className="relative z-10">
                                        {plan.highlight && (
                                            <span className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-4">
                                                Most Popular
                                            </span>
                                        )}

                                        <h3 className="text-xl font-bold mb-2 text-white">{plan.title}</h3>

                                        <div className="flex items-baseline gap-1 mb-3">
                                            <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                                            <span className="text-sm text-gray-500">{plan.period}</span>
                                        </div>

                                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">{plan.description}</p>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2.5 text-sm text-gray-300">
                                                    <CheckIcon /> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => handleSelectPlan(plan.title)}
                                        className={`relative z-10 w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                            plan.highlight
                                                ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
                                                : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                                        }`}>
                                        {plan.button}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </section>

                    {/* Divider */}
                    <div className="max-w-md mx-auto mb-20">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                    </div>

                    {/* Callback Form */}
                    <section ref={formRef} className="max-w-2xl mx-auto mb-10">
                        <motion.div
                            className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}>
                            <div className="bg-[#0f0f0f] rounded-2xl p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Request a Callback</h2>
                                    <p className="text-sm text-gray-500">Fill in your details and we'll get in touch shortly.</p>
                                </div>

                                <form className="grid gap-4">
                                    {/* Name */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                            <UserIcon />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                            <MailIcon />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                            <PhoneIcon />
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Plan Select */}
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                            <PlanIcon />
                                        </div>
                                        <select
                                            value={selectedPlan}
                                            onChange={(e) => setSelectedPlan(e.target.value)}
                                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200 appearance-none cursor-pointer">
                                            <option value="" className="bg-[#1a1a1a]">
                                                Select a Plan
                                            </option>
                                            <option value="Starter" className="bg-[#1a1a1a]">
                                                Starter — ₹999/mo
                                            </option>
                                            <option value="Pro" className="bg-[#1a1a1a]">
                                                Pro — ₹1499/mo
                                            </option>
                                            <option value="Elite" className="bg-[#1a1a1a]">
                                                Elite — ₹1999/mo
                                            </option>
                                        </select>
                                        {/* Custom dropdown arrow */}
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="button"
                                        onClick={() => setShowToast(true)}
                                        className="mt-2 w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/30 cursor-pointer">
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </main>
        </>
    );
}
