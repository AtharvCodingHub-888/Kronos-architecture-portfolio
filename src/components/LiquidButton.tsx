"use client";

import { useRef, useState, useCallback } from "react";

export default function LiquidButton({
    children,
    onClick,
    className = "",
}: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const [xy, setXY] = useState({ x: 0, y: 0 });
    const [fill, setFill] = useState({ x: 50, y: 100 });

    const onMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        setXY({ x: (e.clientX - cx) * 0.5, y: (e.clientY - cy) * 0.5 });
        setFill({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
        });
    }, []);

    return (
        <button
            ref={ref}
            onClick={onClick}
            onMouseMove={onMove}
            onMouseLeave={() => setXY({ x: 0, y: 0 })}
            className={`liquid-btn group ${className}`}
            style={
                {
                    transform: `translate(${xy.x}px, ${xy.y}px)`,
                    "--fill-x": `${fill.x}%`,
                    "--fill-y": `${fill.y}%`,
                } as React.CSSProperties
            }
        >
            <span className="liquid-btn-fill" />
            <span className="relative z-10 flex items-center gap-3">
                {children}
            </span>
        </button>
    );
}
