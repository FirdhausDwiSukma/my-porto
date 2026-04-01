"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
                scrolled
                    ? "bg-[#F5F0E8] border-b-2 border-[#1a1a1a] py-3"
                    : "bg-transparent"
            }`}
        >
            <Link
                href="/"
                className="text-xl font-black tracking-tighter text-[#1a1a1a] hover:text-[#D4A853] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
            >
                Firdhaus<span className="text-[#D4A853]">.dev</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-2 text-sm font-bold text-[#1a1a1a] border-2 border-transparent hover:border-[#1a1a1a] hover:bg-[#D4A853] transition-all"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 1, y: 1 }}
                className="md:hidden border-2 border-[#1a1a1a] bg-[#1a1a1a] text-[#F5F0E8] px-4 py-2 text-sm font-bold relative z-50"
                style={{ boxShadow: "2px 2px 0px #D4A853" }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? "✕ Close" : "☰ Menu"}
            </motion.button>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-[#F5F0E8] border-b-2 border-[#1a1a1a] p-6 flex flex-col gap-2 md:hidden"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-lg font-bold text-[#1a1a1a] border-2 border-transparent hover:border-[#1a1a1a] hover:bg-[#D4A853] px-4 py-2 transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
};
