import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Section5 = () => {
    const router = useRouter(); 
    return (
        <section id="Trainers" className="w-full bg-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Top Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Meet Our Trainers</h1>
                    <p className="text-[#a7a5a2] text-sm md:text-base  mx-auto leading-relaxed transition-opacity duration-300">
                        At the heart of our gym are our exceptional trainers, each bringing a wealth of expertise, passion, and a genuine desire to help our members succeed. Carefully selected for
                        their skills and commitment to personalized guidance.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Column – Cards */}
                    <div className="flex flex-col gap-10 md:w-1/2">
                        {/* Card 1 */}
                        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-sm transition-all duration-300">
                            <h2 className="text-2xl font-bold mb-2">Personal Training</h2>
                            <h3 className="text-[#80807f] mb-3 text-sm">Customized Plans</h3>
                            <p className="text-[#9e9e9e] text-sm leading-relaxed">
                                Unlock your full potential with our personalized training programs. Our expert trainers will work closely with you to develop a tailored plan that fits your needs and
                                aspirations.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-6 inline-block bg-[#7a7a7b] text-[#d3d4d4] px-6 py-2 rounded-full w-full sm:w-3/4 text-sm text-center hover:bg-[#6a6a6b] transition-all duration-200">
                                Group
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-sm transition-all duration-300">
                            <h2 className="text-2xl font-bold mb-2">Memberships</h2>
                            <h3 className="text-[#80807f] mb-3 text-sm">Flexible Options</h3>
                            <p className="text-[#9e9e9e] text-sm leading-relaxed">
                                Invest in your health and wellness with our comprehensive membership packages. Explore flexible options designed to fit your lifestyle and goals.
                            </p>
                            <Link
                                href="/membership"
                                className="mt-6 inline-block bg-[#7a7a7b] text-[#d3d4d4] px-6 py-2 rounded-full w-full sm:w-3/4 text-sm text-center hover:bg-[#6a6a6b] transition-all duration-200">
                                View
                            </Link>
                        </div>
                    </div>

                    {/* Right Column – Testimonial */}
                    <div className="bg-white text-black p-6 rounded-xl md:w-1/2 shadow-md">
                        <Image src="/img/section5.png" alt="Testimonials" style={{ height: "auto" }} width={400} height={400} className="rounded mb-5 mx-auto" priority />
                        <h2 className="text-sm text-[#838385] mb-1">Testimonials</h2>
                        <h1 className="text-2xl font-bold mb-3">Hear From Our Members</h1>
                        <p className="text-[#6b6b6b] text-sm leading-relaxed">
                            At our gym, we take great pride in the transformative journeys of our members. Hear firsthand accounts of how our programs and trainers have made a difference.
                        </p>
                        <button
                            onClick={() => {
                                router.push("/testimonials");
                            }}
                            className="mt-8 bg-black text-[#bfbcb9] px-6 py-2 border border-[#656564] rounded hover:bg-neutral-900 transition-all duration-200 w-full sm:w-1/2">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
