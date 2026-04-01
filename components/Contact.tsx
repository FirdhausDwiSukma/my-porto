"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
    { icon: Mail, label: "Email", value: "firdausdwisukma@gmail.com", color: "#D4A853" },
    { icon: MapPin, label: "Location", value: "Bandung, Indonesia", color: "#7C9A6E" },
    { icon: Phone, label: "Phone", value: "+62 813 8444 5202", color: "#C17B6F" },
];

export const Contact = () => {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 1500);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[#FDFAF4] border-b-2 border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-1 bg-[#D4A853]" />
                        <span className="text-sm font-black uppercase tracking-widest text-[#D4A853]">Contact</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-[#1a1a1a] mb-4">Get in Touch</h2>
                    <p className="text-[#1a1a1a]/60 font-medium">Have a project in mind or just want to say hi?</p>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {contactInfo.map(({ icon: Icon, label, value, color }) => (
                            <motion.div
                                key={label}
                                className="flex items-center gap-4 border-2 border-[#1a1a1a] bg-[#F5F0E8] p-4"
                                style={{ boxShadow: "4px 4px 0px #1a1a1a" }}
                                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #1a1a1a" }}
                            >
                                <div
                                    className="border-2 border-[#1a1a1a] p-3 flex-shrink-0"
                                    style={{ backgroundColor: color }}
                                >
                                    <Icon className="h-5 w-5 text-[#1a1a1a]" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-[#1a1a1a]/50">{label}</p>
                                    <p className="font-bold text-[#1a1a1a]">{value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="border-2 border-[#1a1a1a] bg-[#F5F0E8] p-6"
                            style={{ boxShadow: "5px 5px 0px #1a1a1a" }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="w-full border-2 border-[#1a1a1a] bg-[#FDFAF4] px-3 py-2 text-sm font-medium text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:bg-[#D4A853]/20"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full border-2 border-[#1a1a1a] bg-[#FDFAF4] px-3 py-2 text-sm font-medium text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:bg-[#D4A853]/20"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Message</label>
                                    <textarea
                                        id="message"
                                        className="min-h-[120px] w-full border-2 border-[#1a1a1a] bg-[#FDFAF4] px-3 py-2 text-sm font-medium text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:bg-[#D4A853]/20 resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>
                                <Button type="submit" disabled={formState !== "idle"} className="w-full gap-2">
                                    {formState === "idle" && (<>Send Message <Send className="h-4 w-4" /></>)}
                                    {formState === "submitting" && "Sending..."}
                                    {formState === "success" && "✓ Message Sent!"}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
