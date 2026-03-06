"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const socials = [
    {
        title: "Follow Us on Instagram",
        desc: "Get behind-the-scenes photos, workout tips, and motivational content straight to your feed.",
        img: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
        link: "https://www.instagram.com/harshal_ahirrao0/",
        cta: "Follow on Instagram",
    },
    {
        title: "Join Us on Facebook",
        desc: "Stay connected with us for the latest updates, events, and community discussions.",
        img: "https://freepnglogo.com/images/all_img/1723789425facebook-f-logo.png",
        link: "https://www.facebook.com",
        cta: "Join on Facebook",
    },
    {
        title: "Subscribe on YouTube",
        desc: "Watch our workout tutorials, success stories, and more. Subscribe for exciting content!",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
        link: "https://www.youtube.com/",
        cta: "Subscribe on YouTube",
    },
    {
        title: "Follow Us on Twitter",
        desc: "Stay informed with real-time updates, news, and quick tips. Follow us to stay connected!",
        img: "https://toppng.com/uploads/preview/twitter-x-logo-white-shadow-neon-icon-png-11690220476ycqqcn6lvs.png",
        link: "https://x.com/?lang=en",
        cta: "Follow on Twitter",
    },
];

const Section6 = () => {
    return (
        <section className="w-full bg-[#0a0a0a] text-white py-20 px-6 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-red-500/3 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-500/3 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        🌐 Stay Connected
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Follow{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Us</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        At our gym, we believe in empowering individuals to unlock their full potential. Our mission is to create a supportive and inspiring environment where you can embark on a
                        transformative fitness journey.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {socials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#111111] rounded-2xl p-7 h-full flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-300">
                                    <Image src={item.img} alt={item.title} width={28} height={28} className="object-contain h-auto w-auto" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>

                                {/* Description */}
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">{item.desc}</p>

                                {/* CTA */}
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-block bg-white/5 border border-white/10 text-white rounded-xl px-5 py-2.5 text-sm font-medium text-center transition-all duration-300 hover:bg-white hover:text-black hover:border-white">
                                    {item.cta}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section6;
