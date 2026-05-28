"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Loyalty - Eiger Adventure Club",
        description: "A web-based member loyalty application for Eiger Adventure Club that lets users register and redeem points for discounts at offline or online stores. Personally managed manual and automated testing, verified complex calculation logic for earning points, designed detailed test cases, created P(0) regression testing lists, and compiled pre-release bug reports to guarantee a seamless go-live.",
        tags: ["Automation Testing", "Manual Testing", "Software Testing Artifacts"],
        color: "#7C9A6E",
        number: "01",
        hideLinks: true,
    },
    {
        title: "Dashtern - Dashboard Intern",
        description: "Dashboard intern for management intern in company.",
        tags: ["React", "TypeScript", "Tailwind", "Golang", "PostgreSQL"],
        color: "#D4A853",
        number: "02",
    },
    {
        title: "ARFI - Augmented Reality Fitness",
        description: "Full-stack functionality testing for a productivity application, ensuring real-time sync accuracy.",
        tags: ["Android Studio", "Kotlin", "Firebase", "Snapchat", "AR"],
        color: "#C17B6F",
        number: "03",
    },
    {
        title: "CoinCoffe - Find Coffee Nearby",
        description: "A clean, minimal app to find nearby coffee shops, built with Kotlin and Firebase.",
        tags: ["Android Studio", "Kotlin", "Firebase"],
        color: "#D4A853",
        number: "04",
    },
    {
        title: "Speech to Text Correction for Indonesian Chatbots",
        description: "NLP research using IndoRoBERTa and Mistral-7B for early marriage counseling chatbot correction.",
        tags: ["NLP", "AI", "IndoRoBERTa", "Mistral-7B", "LLM"],
        color: "#C17B6F",
        number: "05",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-[#FDFAF4] border-b-2 border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-1 bg-[#D4A853]" />
                        <span className="text-sm font-black uppercase tracking-widest text-[#D4A853]">Portfolio</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-[#1a1a1a] mb-4">Featured Projects</h2>
                    <p className="text-[#1a1a1a]/60 font-medium">
                        A selection of my work in Quality Assurance and Development.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                className="border-2 border-[#1a1a1a] bg-[#F5F0E8] overflow-hidden h-full flex flex-col"
                                style={{ boxShadow: "5px 5px 0px #1a1a1a" }}
                                whileHover={{ x: -3, y: -3, boxShadow: "8px 8px 0px #1a1a1a" }}
                            >
                                {/* Color header with number */}
                                <div
                                    className="h-32 border-b-2 border-[#1a1a1a] flex items-end p-4 relative overflow-hidden"
                                    style={{ backgroundColor: project.color }}
                                >
                                    <span className="text-6xl font-black text-[#1a1a1a]/20 absolute right-4 top-2 leading-none select-none">
                                        {project.number}
                                    </span>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="border-2 border-[#1a1a1a] bg-[#F5F0E8] px-2 py-0.5 text-xs font-black text-[#1a1a1a]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="border-2 border-[#1a1a1a] bg-[#1a1a1a] px-2 py-0.5 text-xs font-black text-[#F5F0E8]">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-3 text-xl font-black text-[#1a1a1a] leading-tight">{project.title}</h3>
                                    <p className="mb-6 flex-1 text-sm text-[#1a1a1a]/60 font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                    {!project.hideLinks && (
                                        <div className="flex gap-3 mt-auto">
                                            <Button variant="outline" size="sm" className="flex-1 gap-2">
                                                <Github className="w-4 h-4" /> Code
                                            </Button>
                                            <Button size="sm" className="flex-1 gap-2">
                                                <ExternalLink className="w-4 h-4" /> Live
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
