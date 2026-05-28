"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "accent" | "dark-primary" | "dark-secondary" | "dark-outline" | "dark-ghost";
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
        "inline-flex items-center justify-center font-extrabold border-2 transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider";

    const variants = {
        primary:
            "border-[#000] bg-[#000] text-[#FFE500] hover:bg-[#FFE500] hover:text-[#000]",
        secondary:
            "border-[#000] bg-[#FFE500] text-[#000] hover:bg-[#000] hover:text-[#FFE500]",
        outline:
            "border-[#000] bg-transparent text-[#000] hover:bg-[#000] hover:text-[#FFE500]",
        ghost:
            "border-transparent bg-transparent text-[#000] hover:bg-[#000]/10",
        accent:
            "border-[#000] bg-[#FFE500] text-[#000] hover:bg-[#000] hover:text-[#FFE500]",
        "dark-primary":
            "border-[#FFE500] bg-[#FFE500] text-[#000] hover:bg-[#000] hover:text-[#FFE500]",
        "dark-secondary":
            "border-[#FFE500] bg-[#000] text-[#FFE500] hover:bg-[#FFE500] hover:text-[#000]",
        "dark-outline":
            "border-[#FFE500] bg-transparent text-[#FFE500] hover:bg-[#FFE500] hover:text-[#000]",
        "dark-ghost":
            "border-transparent bg-transparent text-white/70 hover:bg-white/10 hover:text-white",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-sm",
    };

    const isDarkVariant = variant.startsWith("dark-");
    const shadowColor = isDarkVariant ? "#FFE500" : "#000";

    return (
        <motion.button
            whileHover={{ x: -2, y: -2, boxShadow: `4px 4px 0px ${shadowColor}` }}
            whileTap={{ x: 2, y: 2, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            style={{ boxShadow: `2px 2px 0px ${shadowColor}` }}
            {...props}
        >
            {children}
        </motion.button>
    );
};
