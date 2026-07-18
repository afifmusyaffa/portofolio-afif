"use client";

import { MotionConfig } from "framer-motion";

/**
 * Framer Motion drives transforms in JS, so the CSS `prefers-reduced-motion`
 * override in globals.css does not reach it. This opts every motion component
 * into honouring the user's OS setting.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
