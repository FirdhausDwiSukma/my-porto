"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

// Placeholder data - replace with real projects later
const projects = [
    {
        title: "E-Commerce Test Suite",
        description: "Automated end-to-end testing framework for a large-scale e-commerce platform using Cypress and TypeScript.",
        tags: ["Cypress", "TypeScript", "CI/CD"],
        image: "/project1-placeholder.jpg", // We will handle missing images gracefully or use a placeholder div
    },
    {
        title: "Portfolio v1",
        description: "A clean, minimal portfolio website built with React and Tailwind CSS, focusing on accessibility and performance.",
        tags: ["React", "Tailwind", "Accessibility"],
        image: "/project2-placeholder.jpg",
    },
    {
        title: "Task Management App",
        description: "Full-stack functionality testing for a productivity application, ensuring real-time sync accuracy.",
        tags: ["Selenium", "Java", "TestNG"],
        image: "/project3-placeholder.jpg",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        A selection of my work in Quality Assurance and Development.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="flex h-full flex-col overflow-hidden p-0">
                                <div className="relative h-48 w-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden group">
                                    {/* Placeholder for image - using a colored div for now if image fails, or just a gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                                        <Button variant="secondary" size="sm">View Details</Button>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                                    <p className="mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                                        {project.description}
                                    </p>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 mt-auto">
                                        <Button variant="outline" size="sm" className="flex-1 gap-2">
                                            <Github className="w-4 h-4" /> Code
                                        </Button>
                                        <Button size="sm" className="flex-1 gap-2">
                                            <ExternalLink className="w-4 h-4" /> Live
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
