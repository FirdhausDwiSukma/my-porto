"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
    { icon: Mail, label: "Email", value: "firdausdwisukma@gmail.com" },
    { icon: MapPin, label: "Location", value: "Bandung, Indonesia" },
    { icon: Clock, label: "Availability", value: "UTC+7 · Open to Work" },
];

const EMAIL = "firdausdwisukma@gmail.com";
const SUBJECT = "Let's Work Together";
const BODY = "Hi Firdaus, I'd like to get in touch with you about...";

export const Contact = () => {
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-[#000] text-[#FFE500] text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest">05</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#000]/40">{">"} Contact</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-[#000] mb-4 uppercase">Get in Touch</h2>
                    <p className="text-[#000]/50 font-medium text-sm">Have a project in mind or just want to say hi?</p>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {contactInfo.map(({ icon: Icon, label, value }) => (
                            <motion.div
                                key={label}
                                className="flex items-center gap-4 border-2 border-[#000] bg-white p-4"
                                style={{ boxShadow: "4px 4px 0px #000" }}
                                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                            >
                                <div className="border-2 border-[#000] p-3 flex-shrink-0 bg-[#FFE500]">
                                    <Icon className="h-5 w-5 text-[#000]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#000]/40">{label}</p>
                                    <p className="font-bold text-[#000] text-sm">{value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="border-2 border-[#000] bg-white p-8 flex flex-col justify-between h-full"
                            style={{ boxShadow: "5px 5px 0px #000" }}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-extrabold text-[#000] mb-3 uppercase">Let&apos;s build something together.</h3>
                                <p className="text-[#000]/50 font-medium leading-relaxed text-sm">
                                    Whether it&apos;s a new project, a collaboration, or just a quick hello — my inbox is always open.
                                </p>
                            </div>
                            <motion.a
                                href={mailtoLink}
                                whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0px #000" }}
                                whileTap={{ x: 2, y: 2, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                                className="inline-flex items-center justify-center gap-2 w-full h-11 px-6 font-extrabold border-2 border-[#000] bg-[#000] text-[#FFE500] hover:bg-[#FFE500] hover:text-[#000] transition-all text-sm uppercase tracking-widest"
                                style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.15)" }}
                            >
                                Send Email <Send className="h-4 w-4" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
