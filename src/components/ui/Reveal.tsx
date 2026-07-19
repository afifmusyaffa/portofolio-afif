"use client";

import { useState, type ReactNode, type CSSProperties } from "react";
import { motion, type Variants } from "framer-motion";
import { easeOut } from "@/lib/animations";

type RevealProps = {
  as?: "div" | "p" | "a" | "span" | "li";
  /** Starting vertical offset for the first, full-intensity reveal. */
  y?: number;
  /** Starting scale for the first reveal (omit for no scale animation). */
  scale?: number;
  /** Starting opacity for the first reveal. */
  opacityFrom?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  [key: string]: unknown;
};

/**
 * Plays the full entrance the first time an element scrolls into view. Every
 * re-entry after that — scrolling back up past it, or down past it again —
 * replays a much quieter version: a smaller nudge from a state that's still
 * mostly visible, never a hard cut to invisible. Keeps the "alive on scroll"
 * feel without the disorienting full replay every pass.
 */
export function Reveal({
  as = "div",
  y = 32,
  scale,
  opacityFrom = 0,
  delay = 0,
  duration = 0.7,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const [seen, setSeen] = useState(false);
  const MotionTag = motion[as];

  const hiddenFull = {
    opacity: opacityFrom,
    y,
    ...(scale !== undefined ? { scale } : {}),
  };
  const hiddenSubtle = {
    opacity: Math.max(opacityFrom, 0.6),
    y: y === 0 ? 0 : Math.sign(y) * Math.min(Math.abs(y), 10),
    ...(scale !== undefined ? { scale: 1 - (1 - scale) * 0.25 } : {}),
  };

  const variants: Variants = {
    hidden: seen ? hiddenSubtle : hiddenFull,
    show: { opacity: 1, y: 0, ...(scale !== undefined ? { scale: 1 } : {}) },
  };

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-40px 0px -40px 0px" }}
      variants={variants}
      transition={
        seen
          ? { duration: Math.min(duration, 0.4), ease: easeOut, delay: Math.min(delay, 0.05) }
          : { duration, ease: easeOut, delay }
      }
      onViewportEnter={() => setSeen(true)}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
