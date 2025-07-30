import Image from "next/image";
import Link from "next/link";

const socials = [
    {
        title: "Follow Us on Instagram",
        desc: "Get behind-the-scenes photos, workout tips, and motivational content straight to your feed.",
        img: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
        link: "https://www.instagram.com/harshal_ahirrao0/",
    },
    {
        title: "Join Us on Facebook",
        desc: "Stay connected with us for the latest updates, events, and community discussions.",
        img: "https://freepnglogo.com/images/all_img/1723789425facebook-f-logo.png",
        link: "https://www.facebook.com",
    },
    {
        title: "Subscribe to Our YouTube Channel",
        desc: "Watch our workout tutorials, success stories, and more. Subscribe to our YouTube channel for exciting content!",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
        link: "https://www.youtube.com/",
    },
    {
        title: "Follow Us on Twitter",
        desc: "Stay informed with real-time updates, news, and quick tips. Follow us on Twitter to stay connected!",
        img: "https://toppng.com/uploads/preview/twitter-x-logo-white-shadow-neon-icon-png-11690220476ycqqcn6lvs.png",
        link: "https://x.com/?lang=en",
    },
];

const Section6 = () => {
    return (
        <section id="Social" className="w-full bg-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">About Us</h1>
                <p className="text-[#b0aeae] max-w-2xl mx-auto mb-16 text-sm md:text-base">
                    At our gym, we believe in empowering individuals to unlock their full potential. Our mission is to create a supportive and inspiring environment where you can embark on a
                    transformative fitness journey.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {socials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1e1e1e] border border-[#2f2f2f] p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 
  flex flex-col items-center justify-start text-center group text-white relative">
                            {/* Gradient Glow */}
                            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#444] via-[#777] to-[#222] opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl z-0" />

                            {/* Icon */}
                            <div className="relative z-10 mb-4 w-16 h-16 rounded-full bg-[#2b2b2b] flex items-center justify-center shadow-inner">
                                <Image src={item.img} alt={item.title} width={36} height={36} style={{ height: "auto" }} className="object-contain" />
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-lg font-semibold text-white mb-2">{item.title}</h3>

                            {/* Description */}
                            <p className="relative z-10 text-sm text-[#c1c1c1] mb-6">{item.desc}</p>

                            {/* CTA */}
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 mt-auto inline-block bg-[#101010] text-[#dfdfdf] border border-[#4a4a4a] rounded-full px-5 py-2 text-sm font-medium transition-all hover:bg-white hover:text-black hover:border-white">
                                {item.title.split(" ")[0]} on {item.title.split(" ")[3]}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section6;
