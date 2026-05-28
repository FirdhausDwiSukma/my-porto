"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
    accent?: "yellow" | "green" | "rose" | "none";
}

export const Card = ({ children, className, hoverEffect = true, accent = "none" }: CardProps) => {
    const accentBorder = {
        yellow: "border-t-4 border-t-[#000]",
        green: "border-t-4 border-t-[#000]",
        rose: "border-t-4 border-t-[#000]",
        none: "",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={hoverEffect ? { x: -3, y: -3 } : {}}
            className={cn(
                "border-2 border-[#000] bg-[#FFE500] p-6",
                accentBorder[accent],
                className
            )}
            style={{ boxShadow: "4px 4px 0px #000" }}
        >
            {children}
        </motion.div>
    );
};
