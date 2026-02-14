"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Layout,
    Server,
    Settings,
    Smartphone,
    Terminal,
    TestTube,
    Globe,
    Cpu,
    Layers,
    Box,
    GitBranch,
    Monitor
} from "lucide-react";

// Skill data
const originalSkills = [
    { name: "React", icon: Code2, color: "#61DAFB" },
    { name: "Next.js", icon: Globe, color: "#000000" },
    { name: "TypeScript", icon: Terminal, color: "#3178C6" },
    { name: "Tailwind", icon: Layout, color: "#38B2AC" },
    { name: "Selenium", icon: TestTube, color: "#43B02A" },
    { name: "Cypress", icon: Monitor, color: "#17202C" },
    { name: "Playwright", icon: Smartphone, color: "#2EAD33" },
    { name: "Appium", icon: Settings, color: "#662da5" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "Docker", icon: Box, color: "#2496ED" },
    { name: "CI/CD", icon: Layers, color: "#2088FF" },
    { name: "Jest", icon: Cpu, color: "#C21325" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
];

// Duplicate skills to ensure smooth infinite scroll (enough to fill widths)
const skills = [...originalSkills, ...originalSkills];

export const Skills = () => {
    return (
        <section id="skills" className="relative py-24 bg-zinc-50 dark:bg-zinc-900/20 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technical Skills</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Tools and technologies I use to build and break software.
                    </p>
                </motion.div>
            </div>

            <div className="flex w-full overflow-hidden mask-gradient py-12">
                <motion.div
                    className="flex gap-8 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30, // Adjust speed here
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {skills.map((skill, index) => (
                        <WaveBubble key={`${skill.name}-${index}`} skill={skill} index={index} />
                    ))}
                </motion.div>
            </div>

            {/* Left/Right masks for fade effect */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-zinc-50 to-transparent dark:from-[#0a0a0a]" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-zinc-50 to-transparent dark:from-[#0a0a0a]" />
        </section>
    );
};

interface Skill {
    name: string;
    icon: React.ElementType;
    color: string;
}

const WaveBubble = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center"
            animate={{ y: [-15, 15, -15] }} // Wave amplitude
            transition={{
                duration: 4, // Wave frequency (slower = wider wave feel)
                repeat: Infinity,
                ease: "easeInOut",
                delay: -index * 0.3, // Negative delay creates the pre-existing wave pattern
            }}
        >
            <motion.div
                className="group relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm border border-zinc-100 dark:bg-zinc-800 dark:border-zinc-700"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <skill.icon className="h-10 w-10 text-zinc-600 dark:text-zinc-300 transition-colors group-hover:text-black dark:group-hover:text-white" style={{ color: skill.color }} />

                {/* Tooltip */}
                <span className="absolute -bottom-8 opacity-0 transition-opacity group-hover:opacity-100 text-xs font-medium text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 px-2 py-1 rounded shadow-sm border border-zinc-100 dark:border-zinc-700 whitespace-nowrap">
                    {skill.name}
                </span>
            </motion.div>
        </motion.div>
    );
};
