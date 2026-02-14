"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={
                hoverEffect
                    ? {
                        y: -5,
                        boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }
                    : {}
            }
            className={cn(
                "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/50 backdrop-blur-sm",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
