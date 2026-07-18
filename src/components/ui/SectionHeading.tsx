"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { viewportOnce, defaultTransition } from "@/lib/animations";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={defaultTransition()}
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-[11px] tabular-nums text-muted">
          {index}
        </span>
        <span className="h-px w-8 bg-border" aria-hidden />
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted font-medium">
          {eyebrow}
        </span>
      </motion.div>

      <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-balance">
        <TextReveal text={title} />
      </h2>

      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={defaultTransition(0.15)}
          className={`mt-4 text-base sm:text-lg text-muted leading-relaxed ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
