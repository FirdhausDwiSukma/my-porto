"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate sending
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get in Touch</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Have a project in mind or just want to say hi?
                    </p>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-zinc-100 p-3 dark:bg-zinc-800">
                                <Mail className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">firdausdwisukma@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-zinc-100 p-3 dark:bg-zinc-800">
                                <MapPin className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Location</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">Bandung, Indonesia</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-zinc-100 p-3 dark:bg-zinc-800">
                                <Phone className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-zinc-600 dark:text-zinc-400">+62 813 8444 5202</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:border-zinc-800 dark:focus:ring-zinc-300"
                                            placeholder="Name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:border-zinc-800 dark:focus:ring-zinc-300"
                                            placeholder="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        className="min-h-[120px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:border-zinc-800 dark:focus:ring-zinc-300"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>
                                <Button type="submit" disabled={formState !== "idle"} className="w-full gap-2">
                                    {formState === "idle" && (
                                        <>Send Message <Send className="h-4 w-4" /></>
                                    )}
                                    {formState === "submitting" && "Sending..."}
                                    {formState === "success" && "Message Sent!"}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
