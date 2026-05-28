"use client";

import { motion } from "framer-motion";
import {
    Code2, Database, Layout, Server, Settings, Smartphone,
    Terminal, TestTube, Globe, Cpu, Layers, Box, GitBranch, Monitor
} from "lucide-react";

const originalSkills = [
    { name: "React", icon: Code2 },
    { name: "JavaScript", icon: Globe },
    { name: "TypeScript", icon: Terminal },
    { name: "Tailwind", icon: Layout },
    { name: "k6", icon: TestTube },
    { name: "Cypress", icon: Monitor },
    { name: "Figma", icon: Smartphone },
    { name: "Postman", icon: Settings },
    { name: "Node.js", icon: Server },
    { name: "Git", icon: GitBranch },
    { name: "Mocha", icon: Box },
    { name: "CI/CD", icon: Layers },
    { name: "Chai", icon: Cpu },
    { name: "Jmeter", icon: Database },
];

const skills = [...originalSkills, ...originalSkills];

export const Skills = () => {
    return (
        <section id="skills" className="relative py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="bg-[#FFE500] text-[#000] text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest">02</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{">"} Tech Stack</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white mb-4">Technical Skills</h2>
                    <p className="text-white/30 max-w-2xl mx-auto font-medium text-sm">
                        Tools and technologies I use to build and break software.
                    </p>
                </motion.div>
            </div>

            <div className="flex w-full overflow-hidden py-4">
                <motion.div
                    className="flex gap-4 px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 35, ease: "linear", repeat: Infinity }}
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
                    ))}
                </motion.div>
            </div>

            {/* Fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        </section>
    );
};

interface Skill {
    name: string;
    icon: React.ElementType;
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: -index * 0.25 }}
            className="flex-shrink-0"
        >
            <div className="flex flex-col items-center justify-center gap-3 w-28 h-28 border border-white/10 bg-[#111] cursor-pointer hover:border-[#FFE500]/40 transition-colors">
                <skill.icon className="h-7 w-7 text-[#FFE500]/70" />
                <span className="text-[9px] font-extrabold text-white/50 uppercase tracking-[0.15em]">{skill.name}</span>
            </div>
        </motion.div>
    );
};
