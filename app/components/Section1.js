"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Section1() {
    const router = useRouter();

    return (
        <section className="relative bg-black text-white w-full min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 py-20 md:py-0">
                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 text-center md:text-left">
                    {/* Badge */}
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}>
                        <span>⚡</span> Elevate Your Fitness Journey
                    </motion.span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
                        Unlock Your{" "}
                        <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                            Strength
                        </span>
                    </h1>

                    {/* Mobile hero image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:hidden flex justify-center my-8">
                        <Image src="/img/first.png" alt="Fitness Hero" height={350} width={350} style={{ height: "auto" }} priority className="object-contain" />
                    </motion.div>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
                        Welcome to our state-of-the-art gym, where we redefine the boundaries of physical excellence. Immerse yourself in a transformative experience that combines cutting-edge
                        training.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push("/membership")}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 cursor-pointer text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/30">
                            Join Now
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push("/discover")}
                            className="bg-white/5 cursor-pointer border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            Discover
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push("/membership")}
                            className="bg-white/5 cursor-pointer border border-white/10 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            Explore Membership
                        </motion.button>
                    </div>

                    {/* Stats row */}
                    <motion.div
                        className="flex gap-8 justify-center md:justify-start mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}>
                        {[
                            { value: "500+", label: "Members" },
                            { value: "10+", label: "Programs" },
                            { value: "98%", label: "Satisfaction" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Desktop hero image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="hidden md:flex md:w-1/2 justify-center items-center relative">
                    {/* Glow behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-orange-500/5 rounded-full blur-[60px] pointer-events-none" />
                    <Image src="/img/first.png" alt="Fitness Hero" height={500} width={500} style={{ height: "auto" }} priority className="object-contain relative z-10" />
                </motion.div>
            </div>
        </section>
    );
}
