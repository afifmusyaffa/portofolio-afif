"use client";

import type { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/animations";

type RevealProps = {
  as?: "div" | "p" | "a" | "span" | "li";
  /** Starting vertical offset. */
  y?: number;
  /** Starting scale (omit for no scale animation). */
  scale?: number;
  /** Starting opacity. */
  opacityFrom?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  [key: string]: unknown;
};

/**
 * Reveals once, the first time an element scrolls into view, and stays
 * settled after that — scrolling back up past it does not replay it.
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
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{
        opacity: opacityFrom,
        y,
        ...(scale !== undefined ? { scale } : {}),
      }}
      whileInView={{ opacity: 1, y: 0, ...(scale !== undefined ? { scale: 1 } : {}) }}
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      transition={{ duration, ease: easeOut, delay }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
