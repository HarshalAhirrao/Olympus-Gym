import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";

const Section3 = () => {
    return (
        <section id="Contact" className="w-full bg-black py-16 px-4 md:px-6 text-white transition-all duration-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Side */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-[#9c9a9b] text-base md:text-lg mb-3 tracking-wide transition-opacity duration-300">Get in Touch</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 transition-transform duration-300">Contact Us</h1>
                    <p className="text-[#aaa9ab] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-12 transition-opacity duration-300">
                        Ready to take the first step towards your fitness goals? Reach out to our team, and we&apos;ll guide you through the process of joining our gym.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                        <Link
                            href="/join-now"
                            className="bg-white text-[#3d3c3c] font-medium px-6 py-2 rounded w-full sm:w-auto text-center shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-200">
                            Join Now
                        </Link>
                        <button
                            onClick={() => toast("🚧 This feature is coming soon!")}
                            className="bg-transparent text-[#b8b7b9] border border-[#656564] font-medium px-6 py-2 rounded w-full sm:w-auto text-center hover:bg-neutral-900 hover:text-white transition-all duration-200">
                            Schedule a Tour
                        </button>
                    </div>
                </div>

                {/* Image Side */}
                <div className="md:w-1/2 hidden md:flex justify-center ">
                    <Image src="/img/section3.png" alt="Trainer assisting gym member" style={{ height: "auto" }} width={550} height={350} className="rounded-lg shadow-lg object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Section3;
