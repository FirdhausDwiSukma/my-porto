"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" }
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#FFE500] border-b-2 border-[#000]"
        >
            <div className="flex items-center justify-between px-6 py-3 md:px-12">
                <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-[#000] hover:opacity-60 transition-opacity uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="text-lg tracking-tighter">///</span>
                    <span>usdhauss</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-0">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-[11px] font-bold text-[#000] uppercase tracking-[0.15em] hover:bg-[#000] hover:text-[#FFE500] transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                    {/* Motion+ style button */}
                    <div className="ml-4 flex items-center gap-3">
                        <a
                            href="#contact"
                            rel="noopener noreferrer"
                            className="border-2 border-[#000] px-3 py-1.5 text-[10px] font-extrabold text-[#000] uppercase tracking-widest hover:bg-[#000] hover:text-[#FFE500] transition-all relative"
                            style={{
                                borderStyle: "dashed",
                            }}
                        >
                            Contact &#8599;
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden border-2 border-[#000] bg-[#000] text-[#FFE500] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider relative z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? "X Close" : "Menu"}
                </motion.button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#FFE500] border-t-2 border-[#000] p-4 flex flex-col gap-1 md:hidden"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm font-bold text-[#000] uppercase tracking-wider hover:bg-[#000] hover:text-[#FFE500] px-4 py-2 transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className="block text-sm font-bold text-[#000] uppercase tracking-wider hover:bg-[#000] hover:text-[#FFE500] px-4 py-2 transition-all border-t-2 border-dashed border-[#000]/20 mt-1 pt-3"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact &#8599;
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
};
