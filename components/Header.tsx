"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-12",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/50 dark:bg-black/80 dark:border-zinc-800/50 py-3"
                    : "bg-transparent"
            )}
        >
            <Link href="/" className="text-xl font-bold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                Firdhaus<span className="text-zinc-400">.dev</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black md:hidden relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? "Close" : "Menu"}
            </motion.button>

            {/* Mobile Nav Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 shadow-xl dark:bg-zinc-900 dark:border-zinc-800 md:hidden flex flex-col gap-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-lg font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
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
