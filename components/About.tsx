"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";

const skills = [
    { category: "QA Engineering", items: ["Selenium", "Cypress", "Appium", "Playwright", "Jest", "Manual Testing"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "Jenkins", "Postman", "JIRA", "Agile/Scrum"] },
];

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Me</h2>
                    <div className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
                        <p>
                            QA Engineer with experience in creating test plans, test cases, and test scripts, as well as managing bug tracking and reporting.
                            Skilled in both manual and automation testing, including API and UI testing, and experienced in performance testing to ensure system reliability and scalability.
                            Familiar with SDLC and STLC processes, with a strong focus on delivering high-quality software.
                        </p>
                    </div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full">
                                <h3 className="mb-4 text-xl font-semibold">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
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
