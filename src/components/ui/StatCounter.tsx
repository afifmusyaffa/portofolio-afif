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
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 });
  const hasCountedRef = useRef(false);

  // Counts up once, the first time it scrolls into view. After that it
  // stays at its final value — scrolling it out and back in doesn't reset
  // and re-play the count, it just stays visible.
  useEffect(() => {
    if (inView) {
      hasCountedRef.current = true;
      motionValue.set(value);
    } else if (!hasCountedRef.current) {
      motionValue.set(0);
    }
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
