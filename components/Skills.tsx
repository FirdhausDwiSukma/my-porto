"use client";

import { motion } from "framer-motion";
import {
    Code2, Database, Layout, Server, Settings, Smartphone,
    Terminal, TestTube, Globe, Cpu, Layers, Box, GitBranch, Monitor
} from "lucide-react";

const originalSkills = [
    { name: "React", icon: Code2, color: "#1a1a1a" },
    { name: "Next.js", icon: Globe, color: "#1a1a1a" },
    { name: "TypeScript", icon: Terminal, color: "#1a1a1a" },
    { name: "Tailwind", icon: Layout, color: "#1a1a1a" },
    { name: "Selenium", icon: TestTube, color: "#1a1a1a" },
    { name: "Cypress", icon: Monitor, color: "#1a1a1a" },
    { name: "Playwright", icon: Smartphone, color: "#1a1a1a" },
    { name: "Appium", icon: Settings, color: "#1a1a1a" },
    { name: "Node.js", icon: Server, color: "#1a1a1a" },
    { name: "Git", icon: GitBranch, color: "#1a1a1a" },
    { name: "Docker", icon: Box, color: "#1a1a1a" },
    { name: "CI/CD", icon: Layers, color: "#1a1a1a" },
    { name: "Jest", icon: Cpu, color: "#1a1a1a" },
    { name: "PostgreSQL", icon: Database, color: "#1a1a1a" },
];

const skills = [...originalSkills, ...originalSkills];

// Alternate card colors for visual interest
const cardColors = ["#D4A853", "#7C9A6E", "#F5F0E8", "#C17B6F", "#D4A853", "#F5F0E8", "#7C9A6E"];

export const Skills = () => {
    return (
        <section id="skills" className="relative py-24 bg-[#F5F0E8] overflow-hidden border-b-2 border-[#1a1a1a]">
            <div className="container mx-auto px-6 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-8 h-1 bg-[#D4A853]" />
                        <span className="text-sm font-black uppercase tracking-widest text-[#D4A853]">Tech Stack</span>
                        <div className="w-8 h-1 bg-[#D4A853]" />
                    </div>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-[#1a1a1a] mb-4">Technical Skills</h2>
                    <p className="text-[#1a1a1a]/60 max-w-2xl mx-auto font-medium">
                        Tools and technologies I use to build and break software.
                    </p>
                </motion.div>
            </div>

            <div className="flex w-full overflow-hidden py-4">
                <motion.div
                    className="flex gap-6 px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 35, ease: "linear", repeat: Infinity }}
                >
                    {skills.map((skill, index) => {
                        const bg = cardColors[index % cardColors.length];
                        return (
                            <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} bg={bg} />
                        );
                    })}
                </motion.div>
            </div>

            {/* Fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#F5F0E8] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F5F0E8] to-transparent" />
        </section>
    );
};

interface Skill {
    name: string;
    icon: React.ElementType;
    color: string;
}

const SkillCard = ({ skill, index, bg }: { skill: Skill; index: number; bg: string }) => {
    return (
        <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: -index * 0.25 }}
            className="flex-shrink-0"
        >
            <motion.div
                className="flex flex-col items-center justify-center gap-3 w-28 h-28 border-2 border-[#1a1a1a] cursor-pointer"
                style={{ backgroundColor: bg, boxShadow: "4px 4px 0px #1a1a1a" }}
                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #1a1a1a" }}
            >
                <skill.icon className="h-8 w-8 text-[#1a1a1a]" />
                <span className="text-xs font-black text-[#1a1a1a] uppercase tracking-wide">{skill.name}</span>
            </motion.div>
        </motion.div>
    );
};
