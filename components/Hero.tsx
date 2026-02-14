"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "./ui/Button";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), {
        stiffness: 100,
        damping: 30,
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center"
        >
            <div className="absolute inset-0 -z-10">
                <BackgroundParticles />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="max-w-4xl space-y-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                        Start scrolling to explore
                    </motion.div>
                    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
                        Firdhaus Dwi Sukma
                    </h1>
                    <p className="max-w-xl text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                        QA Engineer & Software Enthusiast building robust, interactive digital experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <Button size="lg" className="group gap-2">
                        View Projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2">
                        Download CV
                        <Download className="h-4 w-4" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const BackgroundParticles = () => {
    const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; duration: number }>>([]);

    useEffect(() => {
        setParticles(
            [...Array(20)].map(() => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 1,
                duration: Math.random() * 10 + 10,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <Particle key={i} index={i} data={p} />
            ))}
        </div>
    );
};

const Particle = ({ index, data }: { index: number; data: { x: number; y: number; size: number; duration: number } }) => {
    return (
        <motion.div
            style={{
                left: `${data.x}%`,
                top: `${data.y}%`,
                width: data.size,
                height: data.size,
            }}
            animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
                duration: data.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
            }}
            className="absolute rounded-full bg-zinc-400 dark:bg-zinc-600"
        />
    );
};
