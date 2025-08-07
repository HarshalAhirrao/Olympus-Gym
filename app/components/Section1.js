"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


export default function Section1() {
    const router = useRouter();

    return (
        <section className="bg-black text-white w-full min-h-[50vh] pt-24 pb-10 md:min-h-screen flex items-center justify-center px-4 md:pt-16 transition-all duration-300">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-14 md:gap-20">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:w-1/2 text-center md:text-left">
                    {/* Text content */}
                    <div className="flex-1 md:pl-10 text-center md:text-left pt-4 md:pt-10">
                        <h2 className="text-blue-400 text-sm md:text-base uppercase tracking-widest mb-3 transition-opacity duration-300">Elevate Your Fitness Journey</h2>
                        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6 transition-transform duration-300">Unlock Your Strength</h1>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="md:w-1/3">
                            <div className="flex-1 md:hidden flex justify-center items-center ">
                                <Image src="/img/first.png" alt="Fitness Hero" height={430} width={430} style={{ height: "auto" }} priority className="object-contain" />
                            </div>
                        </motion.div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto md:mx-0 transition-opacity duration-300">
                            Welcome to our state-of-the-art gym, where we redefine the boundaries of physical excellence. Immerse yourself in a transformative experience that combines cutting-edge
                            training.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-6 md:gap-10">
                            <button
                                onClick={() => router.push("/join-now")}
                                className="bg-white text-[#605e5f] px-6 py-3 rounded-md font-semibold w-40 mx-auto md:mx-0 transition-all duration-200 hover:shadow-md hover:bg-gray-100">
                                Join Now
                            </button>

                            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                                <button
                                    onClick={() => router.push("/discover")}
                                    className="bg-transparent border border-gray-500 text-gray-300 px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                                    Discover
                                </button>
                                <button
                                    onClick={() => router.push("/membership")}
                                    className="bg-transparent border border-gray-500 text-gray-300 px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-all duration-200">
                                    Explore Membership
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Hero image */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="md:w-1/2">
                    <div className="flex-1 hidden md:flex justify-center items-center ">
                        <Image src="/img/first.png" alt="Fitness Hero" height={430} width={430} style={{ height: "auto" }} priority className="object-contain" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
