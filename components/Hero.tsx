"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Linkedin } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center bg-[#F5F0E8]">
            {/* Decorative grid background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Decorative shapes */}
            <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-10 w-16 h-16 border-2 border-[#1a1a1a] bg-[#D4A853] hidden lg:block"
                style={{ boxShadow: "4px 4px 0px #1a1a1a" }}
            />
            <motion.div
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 right-16 w-12 h-12 border-2 border-[#1a1a1a] bg-[#7C9A6E] rounded-full hidden lg:block"
                style={{ boxShadow: "4px 4px 0px #1a1a1a" }}
            />
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-40 left-20 w-10 h-10 border-2 border-[#1a1a1a] bg-[#C17B6F] hidden lg:block"
                style={{ boxShadow: "3px 3px 0px #1a1a1a", transform: "rotate(45deg)" }}
            />

            <div className="max-w-4xl space-y-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="border-2 border-[#1a1a1a] bg-[#D4A853] px-4 py-1.5 text-sm font-bold text-[#1a1a1a]"
                        style={{ boxShadow: "3px 3px 0px #1a1a1a" }}
                    >
                        👋 Available for opportunities
                    </motion.div>

                    {/* Name */}
                    <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl leading-none text-[#1a1a1a]">
                        {"Firdhaus Dwi Sukma".split(" ").map((word, wordIndex) => {
                            const previousChars = "Firdhaus Dwi Sukma".split(" ").slice(0, wordIndex).join(" ").length;
                            const delayOffset = wordIndex > 0 ? (previousChars + 1) * 0.04 : 0;
                            return (
                                <span key={wordIndex} className="inline-block mr-[0.2em]">
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={charIndex}
                                            className="inline-block"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: delayOffset + charIndex * 0.04, duration: 0.01 }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            );
                        })}
                    </h1>

                    {/* Underline accent */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="h-2 w-48 bg-[#D4A853] border-2 border-[#1a1a1a] origin-left"
                    />

                    <p className="max-w-xl text-xl text-[#1a1a1a]/70 sm:text-2xl font-medium">
                        Quality Assurance Engineer & Software Engineer Enthusiast.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <Button size="lg" className="group gap-2">
                        View Projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <a href="https://www.linkedin.com/in/firdhausdwisukma/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="gap-2">
                            LinkedIn
                            <Linkedin className="h-4 w-4" />
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-sm font-bold text-[#1a1a1a]/50"
            >
                <span>Scroll</span>
                <div className="w-0.5 h-8 bg-[#1a1a1a]/30" />
            </motion.div>
        </section>
    );
};
