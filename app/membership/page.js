"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CheckIcon = () => (
    <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

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
        <section className="bg-black text-white min-h-screen py-20 px-6 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Heading */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
                        💎 Choose Your Plan
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Membership{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Plans</span>
                    </h1>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-500 max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
                    Every plan is custom-built for your body, lifestyle, and goals — so you get the exact coaching you need, when you need it.
                </motion.p>

                {/* Plans */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className={`relative rounded-2xl p-[1px] ${
                                plan.highlight
                                    ? "bg-gradient-to-b from-red-500 via-red-500/40 to-transparent"
                                    : "bg-gradient-to-b from-white/10 to-transparent"
                            }`}>
                            <div
                                className={`relative rounded-2xl p-8 flex flex-col justify-between h-full text-left ${
                                    plan.highlight
                                        ? "bg-gradient-to-b from-red-500/10 via-[#141414] to-[#0a0a0a]"
                                        : "bg-[#0f0f0f]"
                                }`}>
                                {/* Glow on highlight */}
                                {plan.highlight && (
                                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-red-500/20 blur-[80px] rounded-full pointer-events-none" />
                                )}

                                <div className="relative z-10">
                                    {plan.highlight && (
                                        <span className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-4">
                                            Most Popular
                                        </span>
                                    )}

                                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                                    <p className="text-sm font-medium text-red-400 mb-4">{plan.price}</p>
                                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">{plan.description}</p>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                                                <CheckIcon /> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href={plan.link}
                                    className={`relative z-10 w-full py-3 px-6 rounded-xl text-sm font-semibold text-center transition-all duration-300 block ${
                                        plan.highlight
                                            ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
                                            : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                                    }`}>
                                    {plan.button}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
