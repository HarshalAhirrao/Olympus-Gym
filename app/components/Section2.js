"use client";
import { motion } from "framer-motion";

const cards = [
    {
        title: "Our Classes",
        text: "Immerse yourself in our diverse array of classes, each designed to challenge and inspire you. From high-intensity interval training to restorative yoga.",
        icon: "🏃",
    },
    {
        title: "Memberships",
        text: "Invest in your well-being with our flexible membership options. Enjoy access to our state-of-the-art facilities.",
        icon: "💎",
    },
    {
        title: "Meet Our Trainers",
        text: "Our team of dedicated trainers are the heart of our gym. Each brings a unique blend of expertise, passion, and a genuine commitment.",
        icon: "💪",
    },
    {
        title: "Testimonials",
        text: "At our gym, we take pride in the transformative journeys of our members. Hear from those who have found their stride, discovered newfound strength.",
        icon: "⭐",
    },
];

const Section2 = () => {
    return (
        <section className="w-full px-6 md:px-20 py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-red-500/3 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        Why Olympus
                    </span>
                    <h1 className="font-extrabold text-4xl md:text-5xl mb-4">
                        About{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Us</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        At our gym, we believe in empowering individuals to unlock their full potential. Our mission is to create a supportive and inspiring environment where you can embark on a
                        transformative fitness journey.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent cursor-pointer">
                            <div className="bg-[#111111] rounded-2xl p-7 h-full flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-white/10 transition-colors duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section2;
