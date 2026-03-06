"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Section3 = () => {
    return (
        <section className="w-full bg-black py-20 px-6 text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
                {/* Text Side */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        📞 Get in Touch
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Us</span>
                    </h1>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-10">
                        Ready to take the first step towards your fitness goals? Reach out to our team, and we&apos;ll guide you through the process of joining our gym.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/join-now"
                                className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-xl text-sm text-center shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300">
                                Join Now
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <button
                                onClick={() => toast("🚧 This feature is coming soon!")}
                                className="bg-white/5 cursor-pointer border border-white/10 text-white font-semibold px-8 py-3 rounded-xl text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                Schedule a Tour
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                    className="md:w-1/2 flex justify-center relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-orange-500/5 rounded-2xl blur-[30px] pointer-events-none" />
                        <Image
                            src="/img/section3.png"
                            alt="Trainer assisting gym member"
                            style={{ height: "auto" }}
                            width={550}
                            height={350}
                            className="rounded-2xl shadow-2xl object-cover relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Section3;
