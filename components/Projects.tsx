"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ExternalLink, Github, FileText } from "lucide-react";

const projects = [
    {
        title: "Loyalty - Eiger Adventure Club",
        description: "A web-based member loyalty application for Eiger Adventure Club that lets users register and redeem points for discounts at offline or online stores. Personally managed manual and automated testing, verified complex calculation logic for earning points, designed detailed test cases, created P(0) regression testing lists, and compiled pre-release bug reports to guarantee a seamless go-live.",
        tags: ["Automation Testing", "Manual Testing", "Software Testing Artifacts"],
        hideLinks: true,
    },
    {
        title: "Eiger - B2C Packaging Bubble Mailer",
        description: "An inventory and calculation system designed to track and deduct bubble mailer (bubble wrap) packaging usage, integrated directly with SAP ERP for automated stock deduction. Personally served as the QA lead responsible for formulating test plans, writing comprehensive test cases, and executing both manual and automated testing to ensure seamless ERP integration.",
        tags: ["Automation Testing", "Manual Testing", "Software Testing Artifacts"],
        hideLinks: true,
    },
    {
        title: "Eiger - B2C Automation Testing",
        description: "B2C - Automation Testing is an automation testing project for the OMS module on the B2C website, covering the process flow from create order, packing, picking, to manifest. This OMS receives orders from the Eiger Adventure e-commerce website. This automation simplifies the testing process whenever there are changes or issues in the module, and is integrated with Jenkins through CI/CD.",
        tags: ["Automation Testing", "Mocha", "Chai", "Supertest"],
        hideLinks: true,
    },
    {
        title: "Eiger - WMS Mobile Local",
        description: "WMS Mobile Local is a feature development project for offline mode on the WMS Mobile application, covering the Move Request, Inventory Move Request, and Inventory View features that remain usable without a cloud connection. My role was to create test cases and bug reports, test data transfer across 3 related database tables under offline conditions, and ensure data synchronization runs correctly once the device reconnects online.",
        tags: ["Manual Testing", "Test Case", "Bug Report"],
        hideLinks: true,
    },
    // {
    //     title: "Dashtern - Dashboard Intern",
    //     description: "Dashtern - Dashboard Intern is a dashboard application for managing interns, featuring attendance tracking, task activity and progress monitoring, as well as a 9-grid box display for a concise and organized overview of intern work status.",
    //     tags: ["React", "TypeScript", "Tailwind", "Golang", "PostgreSQL"],
    // },
    {
        title: "Speech to Text Correction for Indonesian Early Marriage Counseling Chatbots Using IndoRoBERTa and Mistral-7B",
        description: "NLP research using IndoRoBERTa and Mistral-7B for early marriage counseling chatbot correction.",
        tags: ["NLP", "AI", "IndoRoBERTa", "Mistral-7B", "LLM"],
        journal: "https://journals.telkomuniversity.ac.id/indojc/article/view/9708",
    },
    {
        title: "ARFI - Augmented Reality Fitness",
        description: "ARFI (Augmented Reality Fitness) is a virtual fitness coaching app built with Android Studio and Kotlin, integrated with Snapchat AR (Lens Studio/Camera Kit) for real-time body movement detection. It tracks users' movements during workouts and provides interactive visual guidance, delivering a more immersive and engaging fitness experience.",
        tags: ["Android Studio", "Kotlin", "Firebase", "Snapchat", "AR"],
        github: "https://github.com/FirdhausDwiSukma/ARFI",
    },
    {
        title: "CoinCoffe - Find Coffee Nearby",
        description: "A clean, minimal app to find nearby coffee shops, built with Kotlin and Firebase.",
        tags: ["Android Studio", "Kotlin", "Firebase"],
    },
];

export const Projects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 4;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const displayedProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-[#FFE500] text-[#000] text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest">04</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{">"} Portfolio</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white mb-4 uppercase">Featured Projects</h2>
                    <p className="text-white/40 font-medium text-sm">
                        A selection of my work in Quality Assurance and Development.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {displayedProjects.map((project, index) => {
                        const projectNumber = String(currentPage * projectsPerPage + index + 1).padStart(2, '0');
                        return (
                        <motion.div
                            key={projectNumber}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: (index % projectsPerPage) * 0.08 }}
                        >
                            <motion.div
                                className="border-2 border-[#FFE500] bg-[#111] overflow-hidden h-full flex flex-col"
                                style={{ boxShadow: "5px 5px 0px #FFE500" }}
                                whileHover={{ x: -3, y: -3, boxShadow: "8px 8px 0px #FFE500" }}
                            >
                                {/* Header with number */}
                                <div className="h-24 border-b-2 border-[#FFE500] flex items-end p-4 relative overflow-hidden bg-[#000]">
                                    <span className="text-6xl font-extrabold text-[#FFE500]/10 absolute right-4 top-1 leading-none select-none">
                                        {projectNumber}
                                    </span>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="border border-[#FFE500]/30 bg-transparent px-2 py-0.5 text-[10px] font-bold text-[#FFE500] uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="border border-[#FFE500] bg-[#FFE500] px-2 py-0.5 text-[10px] font-bold text-[#000] uppercase">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-3 text-lg font-extrabold text-white leading-tight uppercase hover:text-[#FFE500] transition-colors">{project.title}</h3>
                                    <p className="mb-6 flex-1 text-xs text-white/60 font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                    {!(project as any).hideLinks && (
                                        <div className="flex gap-3 mt-auto">
                                            {(project as any).github && (
                                                <a href={(project as any).github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                    <Button variant="dark-outline" size="sm" className="w-full gap-2">
                                                        <Github className="w-4 h-4" /> Code
                                                    </Button>
                                                </a>
                                            )}
                                            {(project as any).live && (
                                                <a href={(project as any).live} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                    <Button variant="dark-primary" size="sm" className="w-full gap-2">
                                                        <ExternalLink className="w-4 h-4" /> Live
                                                    </Button>
                                                </a>
                                            )}
                                            {(project as any).journal && (
                                                <a href={(project as any).journal} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                    <Button variant="dark-primary" size="sm" className="w-full gap-2">
                                                        <FileText className="w-4 h-4" /> Journal
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                    })}
                </div>

                {projects.length > projectsPerPage && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t-2 border-white/10">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        <div className="flex gap-4">
                            <button
                                onClick={() => {
                                    setCurrentPage((prev) => Math.max(0, prev - 1));
                                    setTimeout(() => {
                                        const el = document.getElementById("projects");
                                        if (el) {
                                            const y = el.getBoundingClientRect().top + window.scrollY - 80;
                                            window.scrollTo({ top: y, behavior: "smooth" });
                                        }
                                    }, 50);
                                }}
                                disabled={currentPage === 0}
                                className="border-2 border-[#FFE500] bg-[#FFE500] px-5 py-2 text-xs font-extrabold text-[#000] uppercase tracking-wider disabled:opacity-40 disabled:pointer-events-none transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0"
                                style={{ boxShadow: currentPage === 0 ? "none" : "4px 4px 0px #FFE500" }}
                            >
                                ← Prev
                            </button>
                            <button
                                onClick={() => {
                                    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
                                    setTimeout(() => {
                                        const el = document.getElementById("projects");
                                        if (el) {
                                            const y = el.getBoundingClientRect().top + window.scrollY - 80;
                                            window.scrollTo({ top: y, behavior: "smooth" });
                                        }
                                    }, 50);
                                }}
                                disabled={currentPage === totalPages - 1}
                                className="border-2 border-[#FFE500] bg-[#000] px-5 py-2 text-xs font-extrabold text-[#FFE500] uppercase tracking-wider disabled:opacity-40 disabled:pointer-events-none transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0"
                                style={{ boxShadow: currentPage === totalPages - 1 ? "none" : "4px 4px 0px #FFE500" }}
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
