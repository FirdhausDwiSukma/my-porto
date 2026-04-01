"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
    size?: "sm" | "md" | "lg";
}

export const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center font-bold border-2 border-[#1a1a1a] transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary:
            "bg-[#1a1a1a] text-[#F5F0E8] hover:bg-[#D4A853] hover:text-[#1a1a1a]",
        secondary:
            "bg-[#D4A853] text-[#1a1a1a] hover:bg-[#c49843]",
        outline:
            "bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F5F0E8]",
        ghost:
            "border-transparent bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a]/10",
        accent:
            "bg-[#7C9A6E] text-white hover:bg-[#6a8860] border-[#1a1a1a]",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    return (
        <motion.button
            whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0px #1a1a1a" }}
            whileTap={{ x: 2, y: 2, boxShadow: "0px 0px 0px #1a1a1a" }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            style={{ boxShadow: "2px 2px 0px #1a1a1a" }}
            {...props}
        >
            {children}
        </motion.button>
    );
};
