"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

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

const MessageIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
);

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                toast.success("Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                const { error } = await res.json();
                toast.error(error || "Failed to send message.");
            }
        } catch (err) {
            toast.error("Unexpected error. Please try again later.");
        }

        setLoading(false);
    };

    return (
        <section className="min-h-screen px-6 py-20 bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-2xl w-full">
                {/* Heading */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        ✉️ Contact Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">Got a question? Let us know and we&apos;ll reach out!</p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                    <div className="bg-[#0f0f0f] rounded-2xl p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <UserIcon />
                                </div>
                                <input
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <MailIcon />
                                </div>
                                <input
                                    name="email"
                                    placeholder="Email Address"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <div className="absolute left-4 top-4">
                                    <MessageIcon />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 transition-all duration-200 resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`mt-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                                    loading
                                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                                        : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
                                }`}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
