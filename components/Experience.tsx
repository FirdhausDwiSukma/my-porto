"use client";

import { motion } from "framer-motion";

const experience = [
    {
        role: "Junior QA Engineer",
        company: "PT. Eigerindo MPI",
        date: "2025 - Present",
        description: "Automation and manual testing for web. Test documents and bug report.",
        color: "#D4A853",
        status: "Current",
    },
    {
        role: "Junior Quality Assurance",
        company: "PT. Neuronworks Indonesia",
        date: "2023",
        description: "Performed manual testing for web and mobile applications. Documented bug reports and verified fixes.",
        color: "#7C9A6E",
        status: null,
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-[#F5F0E8] border-b-2 border-[#1a1a1a]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-1 bg-[#D4A853]" />
                        <span className="text-sm font-black uppercase tracking-widest text-[#D4A853]">Career</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-[#1a1a1a]">Work Experience</h2>
                </motion.div>

                <div className="space-y-6">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <motion.div
                                className="border-2 border-[#1a1a1a] bg-[#FDFAF4] overflow-hidden"
                                style={{ boxShadow: "5px 5px 0px #1a1a1a" }}
                                whileHover={{ x: -3, y: -3, boxShadow: "8px 8px 0px #1a1a1a" }}
                            >
                                {/* Colored top bar */}
                                <div
                                    className="h-2 border-b-2 border-[#1a1a1a]"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                <h3 className="text-xl font-black text-[#1a1a1a]">{item.role}</h3>
                                                {item.status && (
                                                    <span
                                                        className="border-2 border-[#1a1a1a] px-2 py-0.5 text-xs font-black"
                                                        style={{ backgroundColor: item.color }}
                                                    >
                                                        {item.status}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-base font-bold text-[#1a1a1a]/60 mb-4">{item.company}</p>
                                            <p className="text-[#1a1a1a]/70 font-medium leading-relaxed">{item.description}</p>
                                        </div>
                                        <div className="border-2 border-[#1a1a1a] bg-[#F5F0E8] px-4 py-2 text-sm font-black text-[#1a1a1a] whitespace-nowrap self-start">
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
