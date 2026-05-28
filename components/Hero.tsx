"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Linkedin } from "lucide-react";
import { WaveGraph } from "./WaveGraph";

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 bg-[#FFE500]">
            {/* Decorative grid background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Top decorative labels */}
            <div className="absolute top-28 left-6 md:left-12 flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#000]/40">// Portfolio</span>
            </div>
            <div className="absolute top-28 right-6 md:right-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#000]/40">v1.0.0</span>
            </div>

            {/* Horizontal decorative line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-32 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-[#000]/10 origin-left"
            />

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left side - Text content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="border-2 border-[#000] bg-[#000] px-4 py-1.5 text-xs font-bold text-[#FFE500] uppercase tracking-widest self-start"
                        style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.2)" }}
                    >
                        👋 Available for opportunities
                    </motion.div>

                    {/* Name */}
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[0.9] text-[#000]">
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

                    <p className="max-w-xl text-base text-[#000]/60 sm:text-lg font-medium">
                        Quality Assurance Engineer ,Software Engineer Enthusiast & AI Engineer Enthusiast.
                    </p>

                    {/* Decorative stripe */}
                    <div className="flex items-center gap-3 text-[10px] text-[#000]/30 font-bold uppercase tracking-widest">
                        <span>→</span>
                        <span>Available for</span>
                        <span className="border border-[#000]/20 px-2 py-0.5">QA Engineer</span>
                    </div>

                    <div className="flex flex-col items-start gap-4 sm:flex-row">
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
                    </div>
                </motion.div>

                {/* Right side - Wave Graph Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="hidden lg:flex items-center justify-center"
                >
                    <WaveGraph />
                </motion.div>
            </div>

            {/* Decorative ticker tape border */}
            <div className="absolute bottom-24 left-0 right-0 flex items-center gap-2 px-6 md:px-12">
                <span className="text-[#000]/40 text-lg">+</span>
                <div className="flex-1 h-[2px] bg-[#000]/10" style={{
                    backgroundImage: "repeating-linear-gradient(90deg, #000 0px, #000 4px, transparent 4px, transparent 8px)",
                    backgroundSize: "8px 2px",
                    opacity: 0.15
                }} />
                <span className="text-[#000]/40 text-lg">+</span>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-xs font-bold text-[#000]/40 uppercase tracking-widest"
            >
                <span>Scroll</span>
                <div className="w-0.5 h-8 bg-[#000]/20" />
            </motion.div>
        </section>
    );
};
