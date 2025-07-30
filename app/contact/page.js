"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

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
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen px-6 py-20 bg-black text-white flex items-center justify-center">
            <div className="max-w-2xl w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get in Touch</h1>
                <p className="text-gray-400 mb-10 text-center">Got a question? Let us know and we’ll reach out!</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        name="email"
                        placeholder="Email Address"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded font-semibold transition ${loading ? "bg-gray-700 text-gray-300 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 text-white"}`}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </motion.section>
    );
}
