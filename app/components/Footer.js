import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-gray-400 px-6 pt-16 pb-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Logo + Copyright */}
                <div className="flex flex-col items-center">
                    <Image src="/img/spartan.png" alt="Olympus Logo" width={50} height={50} className="mb-3" />
                    <p className="text-xs text-gray-600">© 2025 Olympus, Inc. All rights reserved.</p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left text-sm">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About" },
                                { href: "/classes", label: "Classes" },
                                { href: "/contact", label: "Contact" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Membership</h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "/membership", label: "Plans" },
                                { href: "/contact", label: "Schedule" },
                                { href: "/faq", label: "FAQ" },
                                { href: "/contact", label: "Support" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Social</h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "https://instagram.com", label: "Instagram" },
                                { href: "https://youtube.com", label: "YouTube" },
                                { href: "https://facebook.com", label: "Facebook" },
                                { href: "https://x.com", label: "X (Twitter)" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Legal</h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "/terms", label: "Terms" },
                                { href: "/privacy", label: "Privacy" },
                                { href: "/cookies", label: "Cookies" },
                                { href: "/disclaimer", label: "Disclaimer" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="pt-6 pb-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
                        <p>
                            Made with <span className="text-red-500">❤️</span> by{" "}
                            <a
                                href="https://www.linkedin.com/in/harshal-ahirrao-996991317"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-red-400 hover:underline">
                                Harshal Ahirrao
                            </a>
                        </p>
                        <p className="text-gray-600">Crafted with precision. Powered by passion.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
