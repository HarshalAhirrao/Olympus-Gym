"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full  fixed top-0 z-50 px-12 py-3.5 flex justify-between items-center bg-black text-white backdrop-blur transition-all duration-300 ease-in-out">
            {/* Logo */}
            <div className="flex items-center gap-2 text-lg font-bold">
                <img src="/img/spartan.png" height={40} width={40} alt="Olympus Logo" />
                <Link href="/">
                    <span className="cursor-pointer">Olympus</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-7 items-center text-[#b6ada7] transition-all duration-300">
                <li>
                    <Link href="/" className="hover:text-white transition-colors duration-200">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-white transition-colors duration-200">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/classes" className="hover:text-white transition-colors duration-200">
                        Classes
                    </Link>
                </li>
                <li>
                    <Link href="/membership" className="hover:text-white transition-colors duration-200">
                        Membership
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className="bg-white text-[#605e5f] px-5 py-1.5 rounded hover:bg-gray-200 cursor-pointer transition-all duration-200">Contact</span>
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden focus:outline-none transition-transform duration-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            <div
                className={`absolute top-full h-[100vh] left-0 w-full bg-black backdrop-blur-3xl text-center py-10 md:hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}>
                <ul className="flex flex-col gap-5 text-[#b6ada7] text-xl">
                    <li>
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/classes" onClick={() => setIsOpen(false)}>
                            Classes
                        </Link>
                    </li>
                    <li>
                        <Link href="/membership" onClick={() => setIsOpen(false)}>
                            Membership
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <span className="bg-white text-[#605e5f] px-8 py-1.5 rounded hover:bg-gray-200 cursor-pointer transition">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
