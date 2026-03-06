"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Section5 = () => {
    const router = useRouter();

    return (
        <section className="w-full bg-black text-white py-20 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        🏆 Our Team
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        Meet Our{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Trainers</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        At the heart of our gym are our exceptional trainers, each bringing a wealth of expertise, passion, and a genuine desire to help our members succeed.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Column – Cards */}
                    <div className="flex flex-col gap-6 md:w-1/2">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#111111] p-7 rounded-2xl h-full">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg mb-4">
                                    🎯
                                </div>
                                <h2 className="text-xl font-bold mb-2">Personal Training</h2>
                                <h3 className="text-gray-600 mb-3 text-sm">Customized Plans</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Unlock your full potential with our personalized training programs. Our expert trainers will work closely with you to develop a tailored plan that fits your needs and
                                    aspirations.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#111111] p-7 rounded-2xl h-full">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg mb-4">
                                    💎
                                </div>
                                <h2 className="text-xl font-bold mb-2">Memberships</h2>
                                <h3 className="text-gray-600 mb-3 text-sm">Flexible Options</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Invest in your health and wellness with our comprehensive membership packages. Explore flexible options designed to fit your lifestyle and goals.
                                </p>
                                <Link
                                    href="/membership"
                                    className="inline-block bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    View Plans
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column – Testimonial */}
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}>
                        <div className="rounded-2xl p-[1px] bg-gradient-to-b from-red-500/30 via-white/10 to-transparent h-full">
                            <div className="bg-gradient-to-b from-red-500/5 via-[#111111] to-[#111111] rounded-2xl p-7 h-full flex flex-col">
                                <div className="relative mb-6 rounded-xl overflow-hidden">
                                    <Image
                                        src="/img/section5.png"
                                        alt="Testimonials"
                                        style={{ height: "auto" }}
                                        width={500}
                                        height={400}
                                        className="rounded-xl w-full object-cover"
                                        priority
                                    />
                                </div>

                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg mb-4">
                                    ⭐
                                </div>
                                <h3 className="text-sm text-gray-600 mb-1">Testimonials</h3>
                                <h2 className="text-2xl font-bold mb-3">Hear From Our Members</h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                                    At our gym, we take great pride in the transformative journeys of our members. Hear firsthand accounts of how our programs and trainers have made a difference.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => router.push("/testimonials")}
                                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 cursor-pointer text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300 w-full sm:w-auto">
                                    Read More
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
