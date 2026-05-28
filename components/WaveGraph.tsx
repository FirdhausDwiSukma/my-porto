"use client";

import { useEffect, useRef } from "react";

export const WaveGraph = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const timeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            const graphH = h * 0.6;
            const rulerY = graphH + 20;
            const dotY = rulerY + 30;

            ctx.clearRect(0, 0, w, h);

            const t = timeRef.current;

            // --- Grid lines (vertical) ---
            ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
            ctx.lineWidth = 1;
            for (let x = 0; x < w; x += 60) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, graphH);
                ctx.stroke();
            }

            // --- Horizontal center line ---
            const centerY = graphH / 2;
            ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            ctx.lineTo(w, centerY);
            ctx.stroke();

            // --- Wave function helpers ---
            const wave = (x: number, freq: number, amp: number, phase: number, damping: number = 0) => {
                const dampFactor = damping > 0 ? Math.exp(-damping * (x / w)) : 1;
                return centerY + amp * dampFactor * Math.sin((x * freq * Math.PI * 2) / w + phase);
            };

            // --- Wave 3: Dotted wave (dampened) ---
            ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
            ctx.lineWidth = 1.5;
            ctx.setLineDash([2, 6]);
            ctx.beginPath();
            for (let x = 0; x < w; x += 1) {
                const y = wave(x, 3.5, graphH * 0.35, t * 0.5 + Math.PI, 0.3);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.setLineDash([]);

            // --- Wave 2: Dashed wave ---
            ctx.strokeStyle = "rgba(0, 0, 0, 0.45)";
            ctx.lineWidth = 1.5;
            ctx.setLineDash([8, 8]);
            ctx.beginPath();
            for (let x = 0; x < w; x += 1) {
                const y = wave(x, 2.5, graphH * 0.3, t * 0.8 + Math.PI / 3);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.setLineDash([]);

            // --- Wave 1: Solid main wave (thick) ---
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            for (let x = 0; x < w; x += 1) {
                const y = wave(x, 2, graphH * 0.35, t);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // --- Moving dot on main wave ---
            const dotX = ((t * 30) % w + w) % w;
            const dotYPos = wave(dotX, 2, graphH * 0.35, t);
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.arc(dotX, dotYPos, 5, 0, Math.PI * 2);
            ctx.fill();

            // --- Vertical crosshair at dot ---
            ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(dotX, 0);
            ctx.lineTo(dotX, graphH);
            ctx.stroke();
            ctx.setLineDash([]);

            // --- Ruler bar ---
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 2;
            // Main ruler line
            ctx.beginPath();
            ctx.moveTo(20, rulerY);
            ctx.lineTo(w - 20, rulerY);
            ctx.stroke();
            // End caps
            ctx.beginPath();
            ctx.moveTo(20, rulerY - 6);
            ctx.lineTo(20, rulerY + 6);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(w - 20, rulerY - 6);
            ctx.lineTo(w - 20, rulerY + 6);
            ctx.stroke();
            // Tick marks
            ctx.lineWidth = 1;
            const tickCount = Math.floor((w - 40) / 8);
            for (let i = 0; i <= tickCount; i++) {
                const tx = 20 + i * 8;
                const tickH = i % 5 === 0 ? 5 : 2.5;
                ctx.beginPath();
                ctx.moveTo(tx, rulerY - tickH);
                ctx.lineTo(tx, rulerY + tickH);
                ctx.stroke();
            }

            // --- Dot matrix pattern ---
            ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
            const dotSpacing = 12;
            const dotsStartX = 20;
            const dotsEndX = w - 20;
            for (let x = dotsStartX; x < dotsEndX; x += dotSpacing) {
                ctx.beginPath();
                ctx.arc(x, dotY, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }

            // --- Advance time ---
            timeRef.current += 0.015;
            animationRef.current = requestAnimationFrame(draw);
        };

        animationRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="relative w-full max-w-lg">
            <canvas
                ref={canvasRef}
                className="w-full"
                style={{ height: "220px" }}
            />
        </div>
    );
};
