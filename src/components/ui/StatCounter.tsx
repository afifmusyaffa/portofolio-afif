"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Re-counts each time it scrolls back into view, matching the reveal
  // animations elsewhere on the page.
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 });

  useEffect(() => {
    motionValue.set(inView ? value : 0);
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = value.toFixed(decimals) + suffix;
      return;
    }
    const unsub = spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest.toFixed(decimals) + suffix;
    });
    return unsub;
  }, [spring, suffix, decimals, reduceMotion, value]);

  return <span ref={ref}>0{suffix}</span>;
}
