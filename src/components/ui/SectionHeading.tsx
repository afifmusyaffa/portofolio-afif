"use client";

import { TextReveal } from "@/components/ui/TextReveal";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  index,
  title,
  lead,
  align = "left",
}: {
  index: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {/* Just the running index — the heading below is the section's own
          name, so a repeated word-label here would only say the same thing
          twice. */}
      <Reveal
        y={12}
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-[11px] tabular-nums text-muted">
          {index}
        </span>
        <span className="h-px w-8 bg-border" aria-hidden />
      </Reveal>

      <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.08] text-balance">
        <TextReveal text={title} />
      </h2>

      {lead && (
        <Reveal
          as="p"
          y={16}
          delay={0.15}
          className={`mt-4 text-base sm:text-lg text-muted leading-relaxed ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {lead}
        </Reveal>
      )}
    </div>
  );
}
