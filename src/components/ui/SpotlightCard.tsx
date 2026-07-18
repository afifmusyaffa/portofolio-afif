"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

/**
 * A rounded panel with a soft highlight that tracks the pointer. On touch
 * devices the highlight simply never activates, leaving a plain card.
 */
export function SpotlightCard({
  children,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const opacity = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--accent-soft), transparent 70%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => opacity.set(1)}
      onMouseLeave={() => opacity.set(0)}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background, opacity }}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      />
      <div className="relative">{children}</div>
    </Component>
  );
}
