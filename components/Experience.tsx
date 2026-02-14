"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";

const experience = [
    {
        role: "Senior QA Engineer",
        company: "TechCorp Inc.",
        date: "2023 - Present",
        description: "Leading the QA automation team, implementing CI/CD pipelines, and reducing regression testing time by 40%.",
    },
    {
        role: "QA Automation Engineer",
        company: "StartUp Solutions",
        date: "2021 - 2023",
        description: "Developed automated test scripts using Selenium and Python. Collaborated with developers to fix critical bugs before release.",
    },
    {
        role: "Junior QA Tester",
        company: "WebDev Agency",
        date: "2019 - 2021",
        description: "Performed manual testing for web and mobile applications. Documented bug reports and verified fixes.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Work Experience</h2>
                </motion.div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0 dark:before:via-zinc-700">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex items-center md:items-start group"
                        >
                            {/* Dot */}
                            <div className="absolute left-5 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-white bg-zinc-300 shadow-sm dark:border-zinc-900 dark:bg-zinc-700 md:left-[8.75rem] md:top-6 ring-4 ring-zinc-50 dark:ring-zinc-900" />

                            {/* Date */}
                            <div className="mb-2 hidden md:block md:w-32 md:text-right md:pr-8 md:pt-4">
                                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.date}</span>
                            </div>

                            {/* Content */}
                            <div className="ml-10 md:ml-8 flex-1">
                                <Card className="relative p-6 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
                                    <div className="md:hidden mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.date}</div>
                                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
                                    <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">{item.company}</p>
                                    <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
