"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextReveal } from "@/components/ui/TextReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import {
  viewportOnce,
  staggerContainer,
  riseIn,
  riseInSubtle,
} from "@/lib/animations";

export function About() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [factsSeen, setFactsSeen] = useState(false);
  // `useReducedMotion` resolves synchronously on the client but not during
  // SSR, so branching render output on it directly causes a hydration
  // mismatch for anyone with the OS preference on. Gating it behind a
  // mounted flag keeps the first client render identical to the server's,
  // then applies the real value a frame later (after hydration settles).
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const asideY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          title={t({ id: "Tentang", en: "About" })}
        />

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Statement panel — the one oversized block in this section. */}
          <Reveal y={32} className="lg:col-span-7">
            <SpotlightCard className="relative h-full rounded-3xl border border-border bg-surface p-7 sm:p-10 lg:p-12">
              {/* Same fine engineering-grid texture used on the Contact
                  card — a quiet thread tying the "origin" section back to
                  the "destination" one. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_70%_70%_at_100%_100%,black,transparent)]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative">
                <p className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-bold leading-[1.3] tracking-tight text-balance">
                  <TextReveal text={t(profile.aboutStatement)} />
                </p>
                <Reveal as="p" opacityFrom={0} y={0} delay={0.35} className="mt-6 text-base text-muted leading-relaxed">
                  {t(profile.aboutBody)}
                </Reveal>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Fact tiles — small, dense counterweight to the statement. */}
          <motion.div
            style={mounted && reduceMotion ? undefined : { y: asideY }}
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-5"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.08, 0.1)}
              onViewportEnter={() => setFactsSeen(true)}
              className="grid grid-cols-2 gap-4 sm:gap-5"
            >
              {profile.quickFacts.map((fact) => (
                <motion.div
                  key={fact.label.en}
                  variants={factsSeen ? riseInSubtle : riseIn}
                  transition={{ duration: factsSeen ? 0.4 : 0.7 }}
                >
                  <SpotlightCard className="rounded-2xl border border-border bg-background p-5 sm:p-6">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted font-medium">
                      {t(fact.label)}
                    </p>
                    <p className="mt-2 font-display text-sm sm:text-base font-bold leading-snug">
                      {t(fact.value)}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>

            <Reveal
              y={24}
              delay={0.25}
              className="relative overflow-hidden rounded-2xl p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5"
              style={{
                background:
                  "linear-gradient(160deg, #0b0b0d 0%, #17171a 55%, #08080a 100%)",
                color: "#f4f4f5",
              }}
            >
              {/* The same dark-tile formula as the Contact card, scaled down
                  — a small rhyme rather than a full reprise. */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/[0.07] blur-2xl" />
                <svg
                  className="absolute -bottom-4 -right-4 h-24 w-24 opacity-[0.16]"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path d="M10 82 L36 56 L60 66 L86 30" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="10" cy="82" r="2.5" fill="white" />
                  <circle cx="36" cy="56" r="2.5" fill="white" />
                  <circle cx="60" cy="66" r="2.5" fill="white" />
                  <circle cx="86" cy="30" r="2.5" fill="white" />
                </svg>
              </div>

              <p className="relative text-sm sm:text-base leading-relaxed opacity-90">
                {t(profile.education.highlight)}
              </p>
              <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.16em] opacity-60 font-medium">
                <span>{t({ id: "Malaysia", en: "Malaysia" })}</span>
                <span>2024</span>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
