import type { Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
};

/** Cards that settle into place — used for grid/bento items. */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1 },
};

/** Slides in from the side; pair with a per-item custom direction. */
export const slideIn = (from: "left" | "right" = "left"): Variants => ({
  hidden: { opacity: 0, x: from === "left" ? -28 : 28 },
  show: { opacity: 1, x: 0 },
});

export const defaultTransition = (delay = 0) => ({
  duration: 0.7,
  ease: easeOut,
  delay,
});

export const springTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 26,
};

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/**
 * Reveals play once, the first time an element scrolls into view, and stay
 * settled after that — scrolling back up does not replay them. The
 * Experience section is the deliberate exception, with its own scroll-linked
 * zoom/dim treatment instead of a whileInView reveal.
 */
export const viewportOnce = { once: true, margin: "-40px 0px -40px 0px" };

/** Triggers a little earlier — for large blocks that need a head start. */
export const viewportEarly = { once: true, margin: "-80px 0px -80px 0px" };
