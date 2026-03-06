"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Section4 = () => {
    return (
        <section className="w-full py-20 px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
                {/* Image */}
                <motion.div
                    className="w-full hidden md:flex md:w-1/2 justify-center relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-2xl blur-[30px] pointer-events-none" />
                        <Image src="/img/section4.png" alt="Gym Training" width={400} height={450} className="rounded-2xl h-auto w-auto relative z-10" priority />
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        🎯 Our Classes
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                        Classes &{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Training</span>
                    </h1>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                        Unlock your full potential with our diverse range of classes and training programs. From high-intensity HIIT sessions that will push your limits to low-impact yoga classes that
                        promote flexibility and mindfulness, our schedule caters to all fitness levels and preferences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <button
                                onClick={() => toast("🚧 This feature is coming soon!")}
                                className="bg-white/5 cursor-pointer border border-white/10 text-white font-semibold px-8 py-3 rounded-xl text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                View Schedule
                            </button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/membership"
                                className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-xl text-sm text-center shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300">
                                Join Now
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Section4;
