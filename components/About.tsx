"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";

const skills = [
    { category: "QA Engineering", items: ["Software Testing Artifacts", "Cypress", "JavaScript", "Automation Testing", "Manual Testing"], accent: "yellow" as const },
    { category: "Frontend", items: ["React", "Laravel", "Tailwind CSS"], accent: "green" as const },
    { category: "Tools & DevOps", items: ["Git", "Postman", "Agile/Scrum"], accent: "rose" as const },
];

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#FDFAF4] border-y-2 border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    {/* Section label */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-1 bg-[#D4A853]" />
                        <span className="text-sm font-black uppercase tracking-widest text-[#D4A853]">About Me</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-[#1a1a1a] mb-8 max-w-2xl">
                        Building quality software, one test at a time.
                    </h2>
                    <div className="max-w-3xl text-lg text-[#1a1a1a]/70 leading-relaxed border-l-4 border-[#D4A853] pl-6">
                        <p>
                            QA Engineer with experience in creating test plans, test cases, and test scripts, as well as managing bug tracking and reporting.
                            Skilled in both manual and automation testing, including API and UI testing, and experienced in performance testing to ensure system reliability and scalability.
                            Familiar with SDLC and STLC processes, with a strong focus on delivering high-quality software.
                        </p>
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full" accent={skillGroup.accent}>
                                <h3 className="mb-4 text-lg font-black text-[#1a1a1a] uppercase tracking-wide">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="border-2 border-[#1a1a1a] bg-[#F5F0E8] px-3 py-1 text-sm font-bold text-[#1a1a1a]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
