"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // 1. Import the Image component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 z-50 px-6 md:px-12 py-3.5 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5 text-white transition-all duration-300 ease-in-out">
            {/* Logo */}
            <div className="flex items-center gap-2 text-lg font-bold">
                {/* 2. Replaced <img> with <Image /> */}
                <Image
                    src="/img/spartan.png"
                    height={36}
                    width={36}
                    alt="Olympus Logo"
                    priority // This ensures the logo loads instantly
                />
                <Link href="/">
                    <span className="cursor-pointer bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Olympus</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-7 items-center text-sm">
                {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/classes", label: "Classes" },
                    { href: "/membership", label: "Membership" },
                ].map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href="/contact">
                        <span className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 shadow-sm shadow-red-500/20 hover:shadow-red-500/30">
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden focus:outline-none transition-transform duration-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            <div
                className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 text-center py-10 md:hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}>
                <ul className="flex flex-col gap-6 text-gray-400 text-lg">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/about", label: "About" },
                        { href: "/classes", label: "Classes" },
                        { href: "/membership", label: "Membership" },
                    ].map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-200">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                            <span className="inline-block w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-2.5 rounded-lg font-medium transition-all duration-300">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
