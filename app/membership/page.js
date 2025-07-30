"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        title: "Starter",
        price: "₹999/mo",
        highlight: false,
        description: "Get started with basic access to workouts and the community.",
        features: ["Basic Workouts", "Community Access", "Email Support"],
        link: "/join-now",
        button: "Get Started",
    },
    {
        title: "Pro",
        price: "₹1499/mo",
        highlight: true,
        description: "For those ready to commit to real transformation.",
        features: ["Unlimited Classes", "Weekly Live Sessions", "Nutrition Plans", "Priority Email Support"],
        link: "/join-now",
        button: "Start Free Trial",
    },
    {
        title: "Elite",
        price: "₹1999/mo",
        highlight: false,
        description: "1-on-1 coaching and fully tailored programs for athletes.",
        features: ["Everything in Pro", "1-on-1 Personal Trainer", "Video Feedback", "Dedicated Coach Access"],
        link: "/join-now",
        button: "Go Elite",
    },
];

export default function MembershipPage() {
    return (
        <section className="bg-black text-white min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-bold mb-6">
                    Membership Plans
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-400 max-w-2xl mx-auto mb-14">
                    Choose the plan that fits your goals — whether you're a beginner or looking to go pro, Olympus has you covered.
                </motion.p>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`flex flex-col justify-between p-8 rounded-2xl border transition-all ${
                                plan.highlight ? "bg-[#1d1d1d] border-yellow-500 shadow-yellow-500/20 shadow-xl scale-[1.02]" : "bg-[#1a1a1a] border-[#333]"
                            } hover:scale-[1.02]`}>
                            {plan.highlight && <p className="text-yellow-400 text-xs font-semibold uppercase mb-3">Most Popular</p>}
                            <div>
                                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                                <p className="text-3xl font-extrabold mb-3">{plan.price}</p>
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
                                className={`mt-8 py-2 px-6 rounded-full text-sm font-medium transition text-center ${
                                    plan.highlight ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-white text-black hover:bg-gray-200"
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
