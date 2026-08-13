"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, X, ZoomIn } from "lucide-react";
import Image from "next/image";

const certifications = [
    {
        title: "Belajar Dasar Data Science",
        issuer: "Dicoding Indonesia",
        date: "Sep 2024 - Sep 2027",
        credentialUrl: "https://www.dicoding.com/certificates/1RXY2N6G3XVM",
        tags: ["Data Science", "Foundation"],
        number: "01",
        image: "/certificates/data-science.png",
    },
    {
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        date: "Sep 2024 - Sep 2027",
        credentialUrl: "https://www.dicoding.com/certificates/EYX4VN4MWZDL",
        tags: ["Machine Learning", "Data", "AI"],
        number: "02",
        image: "/certificates/dasar-ai.png",
    },
    {
        title: "Belajar Dasar Manajemen Proyek",
        issuer: "Dicoding Indonesia",
        date: "Sep 2024 - Sep 2027",
        credentialUrl: "https://www.dicoding.com/certificates/L4PQ1KNQOXO1",
        tags: ["Project Management", "Foundation"],
        number: "03",
        image: "/certificates/manajemen-proyek.png",
    },
];

const CERTS_PER_PAGE = 4;

export const Certifications = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [lightboxTitle, setLightboxTitle] = useState<string>("");
    const totalPages = Math.ceil(certifications.length / CERTS_PER_PAGE);
    const displayed = certifications.slice(
        currentPage * CERTS_PER_PAGE,
        (currentPage + 1) * CERTS_PER_PAGE
    );

    const openLightbox = (image: string, title: string) => {
        setLightboxImage(image);
        setLightboxTitle(title);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setLightboxTitle("");
    };

    return (
        <>
            <section id="certifications" className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-[#FFE500] text-[#000] text-[10px] font-extrabold px-2 py-1 uppercase tracking-widest">03</span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{">"} Credentials</span>
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white mb-4 uppercase">Certifications</h2>
                        <p className="text-white/40 font-medium text-sm">
                            Verified credentials and professional development milestones.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {displayed.map((cert, index) => (
                            <motion.div
                                key={cert.number}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: (index % CERTS_PER_PAGE) * 0.08 }}
                            >
                                <motion.div
                                    className="border-2 border-[#FFE500] bg-[#111] overflow-hidden h-full flex flex-col"
                                    style={{ boxShadow: "5px 5px 0px #FFE500" }}
                                    whileHover={{ x: -3, y: -3, boxShadow: "8px 8px 0px #FFE500" }}
                                >
                                    {/* Header */}
                                    <div className="h-24 border-b-2 border-[#FFE500] flex items-end p-4 relative overflow-hidden bg-[#000]">
                                        <span className="text-6xl font-extrabold text-[#FFE500]/10 absolute right-4 top-1 leading-none select-none">
                                            {cert.number}
                                        </span>
                                        <div className="flex flex-wrap gap-2 relative z-10">
                                            {cert.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="border border-[#FFE500]/30 bg-transparent px-2 py-0.5 text-[10px] font-bold text-[#FFE500] uppercase tracking-wider"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <h3 className="text-base font-extrabold text-white leading-tight uppercase hover:text-[#FFE500] transition-colors flex-1">
                                                {cert.title}
                                            </h3>
                                            <Award className="w-5 h-5 text-[#FFE500]/50 shrink-0 mt-0.5" />
                                        </div>

                                        {/* Certificate Image */}
                                        {cert.image && (
                                            <div
                                                className="relative w-full aspect-[16/11] mb-4 border border-white/10 overflow-hidden cursor-pointer group"
                                                onClick={() => openLightbox(cert.image, cert.title)}
                                            >
                                                <Image
                                                    src={cert.image}
                                                    alt={`Sertifikat ${cert.title}`}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-[#FFE500] bg-[#FFE500] text-[#000] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                                                        <ZoomIn className="w-3 h-3" />
                                                        Lihat Sertifikat
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] font-extrabold text-white/30 uppercase tracking-widest">Issuer</span>
                                                <span className="text-xs font-bold text-white/70">{cert.issuer}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="border-2 border-[#FFE500] bg-[#000] text-[#FFE500] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest">
                                                    {cert.date}
                                                </div>
                                                {cert.credentialUrl && (
                                                    <a
                                                        href={cert.credentialUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="border-2 border-[#FFE500] bg-[#FFE500] text-[#000] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 hover:bg-transparent hover:text-[#FFE500] transition-colors"
                                                    >
                                                        Verify <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {certifications.length > CERTS_PER_PAGE && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t-2 border-white/10">
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                                Page {currentPage + 1} of {totalPages}
                            </span>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                                    disabled={currentPage === 0}
                                    className="border-2 border-[#FFE500] bg-[#FFE500] px-5 py-2 text-xs font-extrabold text-[#000] uppercase tracking-wider disabled:opacity-40 disabled:pointer-events-none transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0"
                                    style={{ boxShadow: currentPage === 0 ? "none" : "4px 4px 0px #FFE500" }}
                                >
                                    ← Prev
                                </button>
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 z-[110] border-2 border-[#FFE500] bg-[#FFE500] text-[#000] p-2 hover:bg-transparent hover:text-[#FFE500] transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Title */}
                        <div className="absolute top-6 left-6 z-[110]">
                            <span className="text-xs font-extrabold text-[#FFE500] uppercase tracking-widest">
                                {lightboxTitle}
                            </span>
                        </div>

                        {/* Image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-4xl max-h-[85vh] aspect-[16/11] border-2 border-[#FFE500]"
                            style={{ boxShadow: "8px 8px 0px #FFE500" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxImage}
                                alt={`Sertifikat ${lightboxTitle}`}
                                fill
                                className="object-contain bg-white"
                                sizes="(max-width: 1024px) 100vw, 80vw"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
