import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 px-6 py-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Logo + Copyright */}
                <div className="flex flex-col items-center">
                    <Image src="/img/spartan.png" alt="Olympus Logo" width={60} height={60} className=" mb-3" />
                    <p className="text-sm text-gray-500">© 2025 Olympus, Inc. All rights reserved.</p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left text-sm">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/classes" className="hover:text-white transition">
                                    Classes
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Membership</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/membership" className="hover:text-white transition">
                                    Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Schedule
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-white transition">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                                    X (Twitter)
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="hover:text-white transition">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:text-white transition">
                                    Cookies
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="hover:text-white transition">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-6 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>
                        Made with <span className="text-red-500">❤️</span> by{" "}
                        <a href="https://www.linkedin.com/in/harshal-ahirrao-996991317" rel="noopener noreferrer" target="blank" className="text-red-400 hover:underline">
                            Harshal_Ahirrao
                        </a>
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Crafted with precision. Powered by passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
