"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "QA Engineering", items: ["Software Testing Artifacts", "Cypress", "Automation Testing", "Manual Testing", "Perfomance Test"] },
    { category: "Frontend", items: ["React", "Laravel", "Tailwind"] },
    { category: "Tools & DevOps", items: ["Git", "Postman", "CI/CD"] },
];

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t-2 border-[#FFE500]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    {/* Section label */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-[#FFE500] text-[#000] text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest">01</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{">"} About Me</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white mb-8 max-w-2xl leading-tight">
                        Building quality software, one test at a time.
                    </h2>
                    <div className="max-w-3xl text-sm text-white/50 leading-relaxed border-l-2 border-[#FFE500]/30 pl-6">
                        <p>
                            QA Engineer with experience in creating test plans, test cases, and test scripts, as well as managing bug tracking and reporting.
                            Skilled in both manual and automation testing, including API and UI testing, and experienced in performance testing to ensure system reliability and scalability.
                            Familiar with SDLC and STLC processes, with a strong focus on delivering high-quality software.
                        </p>
                    </div>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-3">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="border border-white/10 bg-[#111] p-6 h-full hover:border-[#FFE500]/30 transition-colors">
                                <h3 className="mb-4 text-[11px] font-extrabold text-[#FFE500] uppercase tracking-[0.2em]">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item) => (
                                        <span
                                            key={item}
                                            className="border border-white/15 px-3 py-1 text-[10px] font-bold text-white/60 uppercase tracking-wider hover:border-[#FFE500]/40 hover:text-white transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
