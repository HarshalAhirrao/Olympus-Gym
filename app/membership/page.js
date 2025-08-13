"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        title: "Kickstart Coaching",
        price: "Custom tailored for you",
        highlight: false,
        description: "Your first step to a fitter, stronger you — simple, focused, and built for lasting habits.",
        features: ["1-on-1 live sessions twice a week", "Personalized workout roadmap", "Basic nutrition guidance"],
        link: "/contact",
        button: "Get Started",
    },
    {
        title: "Total Transformation",
        price: "Custom tailored for you",
        highlight: true,
        description: "All-in coaching for body, mind, and lifestyle — results you can see and feel.",
        features: ["Up to 4 live sessions weekly", "Complete workout & nutrition plan", "Weekly progress reviews"],
        link: "/contact",
        button: "Start My Transformation",
    },
    {
        title: "Athlete Performance",
        price: "Custom tailored for you",
        highlight: false,
        description: "Elite-level programming to push your limits and maximize performance.",
        features: ["Sports-specific training", "Performance nutrition strategy", "Form analysis & feedback"],
        link: "/contact",
        button: "Train Like an Athlete",
    },
];

export default function MembershipPage() {
    return (
        <section className="bg-black text-white min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-bold mb-4">
                    Membership Plans
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-400 max-w-2xl mx-auto mb-14 text-sm md:text-base">
                    Every plan is custom-built for your body, lifestyle, and goals — so you get the exact coaching you need, when you need it.
                </motion.p>

                {/* Plans */}
                <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={`flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                                plan.highlight ? "bg-gradient-to-b from-yellow-500/10 to-[#1d1d1d] border-yellow-500 shadow-lg shadow-yellow-500/20" : "bg-[#1a1a1a] border-[#333]"
                            }`}>
                            {plan.highlight && <p className="text-yellow-400 text-xs font-semibold uppercase mb-3 tracking-wide">Most Popular</p>}

                            <div>
                                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                                <p className="text-lg font-medium text-blue-400 mb-4">{plan.price}</p>
                                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                                <ul className="space-y-2 text-left text-sm text-gray-300">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-green-400">✔</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={plan.link}
                                className={`mt-8 py-3 px-6 rounded-full text-sm font-semibold text-center transition-all duration-200 ${
                                    plan.highlight ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-blue-500 text-white hover:bg-blue-400"
                                }`}>
                                {plan.button}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
