"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useT } from "@/lib/i18n";
import { experience, type ExperienceItem } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ExperienceRow({ item }: { item: ExperienceItem }) {
  const t = useT();
  // The ref lives on a plain (non-motion) element used only to measure
  // scroll position — putting it on the same element Motion animates is a
  // documented Framer Motion + React 19 footgun that silently breaks the
  // scroll listener (see motion.dev/troubleshooting/use-scroll-ref).
  const ref = useRef<HTMLLIElement>(null);

  // Dim until the row scrolls into the reading zone, then settle in with a
  // slight zoom — and stay revealed for good, no re-dimming once passed.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.45"],
  });
  const liveOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const liveScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  // A ratchet: once the row has settled in, it's revealed for good, even
  // if the user scrolls back up past it — only rows not yet reached dim.
  const [revealed, setRevealed] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.98) setRevealed(true);
  });

  return (
    <li ref={ref} className="relative pl-8 sm:pl-10">
      <span
        className="absolute left-0 top-1.5 h-[13px] w-[13px] sm:h-[15px] sm:w-[15px] rounded-full bg-foreground ring-4 ring-background"
        aria-hidden
      />

      <motion.div
        style={revealed ? { opacity: 1, scale: 1 } : { opacity: liveOpacity, scale: liveScale }}
        className="origin-left"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted font-medium">
              {item.period} · {item.location}
            </p>
            <h3 className="mt-2 font-display text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
              {t(item.role)}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.organization}</p>
          </div>

          <div className="shrink-0 text-right">
            <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums">
              {item.metric.value}
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-muted font-medium">
              {t(item.metric.label)}
            </p>
          </div>
        </div>

        <p className="mt-4 font-display text-base sm:text-lg font-bold leading-snug text-balance">
          {t(item.headline)}
        </p>

        <ul className="mt-4 space-y-2 border-t border-border pt-4">
          {item.points.map((point, j) => (
            <li key={j} className="flex gap-2.5 text-sm text-muted leading-relaxed">
              <span className="text-border shrink-0" aria-hidden>
                —
              </span>
              <span>{t(point)}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
}

export function Experience() {
  const t = useT();
  const listRef = useRef<HTMLDivElement>(null);

  // The rail fills as the whole list scrolls past — a quiet reading-progress cue.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const railScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                index="03"
                title={t({ id: "Pengalaman", en: "Experience" })}
                lead={t({
                  id: "Tiga peran, masing-masing dengan hasil yang bisa saya tunjukkan.",
                  en: "Three roles, each measured by a result I can point to.",
                })}
              />
            </div>
          </div>

          <div ref={listRef} className="lg:col-span-8 relative">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border">
              <motion.div
                style={{ scaleY: railScale }}
                className="absolute inset-0 origin-top bg-foreground"
              />
            </div>

            <ul className="space-y-10 sm:space-y-12">
              {experience.map((item) => (
                <ExperienceRow key={item.organization} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
