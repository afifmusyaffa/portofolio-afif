"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { skillGroups, interpersonalSkills, type SkillGroup } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { VisionIcon, NetworkIcon, CodeIcon, DataIcon } from "@/components/ui/DomainIcons";
import {
  viewportOnce,
  defaultTransition,
  staggerContainer,
  fadeUp,
} from "@/lib/animations";

const icons: Record<SkillGroup["icon"], typeof VisionIcon> = {
  vision: VisionIcon,
  network: NetworkIcon,
  code: CodeIcon,
  data: DataIcon,
};

export function Skills() {
  const t = useT();
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t({ id: "Kemampuan", en: "Capabilities" })}
          title={t({
            id: "Empat bidang, satu alur kerja yang nyambung.",
            en: "Four disciplines, one connected workflow.",
          })}
          lead={t({
            id: "Semua tools di bawah ini sudah saya pakai di proyek nyata, bukan sekadar hafalan dari silabus.",
            en: "Every tool below is one I've used on a real project, not just read about in a syllabus.",
          })}
        />

        {/* Bento: tile widths alternate so no two rows read the same. */}
        <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-4 sm:gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <motion.div
                key={group.label.en}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={defaultTransition((i % 2) * 0.08)}
                className={group.span === "wide" ? "md:col-span-2" : "md:col-span-1"}
              >
                <SpotlightCard className="group/card relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-8 flex flex-col">
                  {/* Oversized watermark icon — pure decoration, kept out of
                      the way of content via low opacity. Drifts gently on
                      its own, and gets a little extra lift on hover. */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 sm:h-44 sm:w-44 text-foreground opacity-[0.05]"
                    animate={
                      reduceMotion
                        ? undefined
                        : { rotate: [6, 16, 6], y: [0, -12, 0] }
                    }
                    transition={{
                      duration: 7 + i * 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <Icon className="h-full w-full" />
                  </motion.div>

                  <div className="relative">
                    <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight">
                      {t(group.label)}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed max-w-xs">
                      {t(group.blurb)}
                    </p>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer(0.04, 0.15)}
                    className="relative mt-6 flex flex-wrap gap-2 pt-6 border-t border-border"
                  >
                    {group.items.map((item) => (
                      <motion.span
                        key={item.name}
                        variants={fadeUp}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -3 }}
                        className={`rounded-xl px-3 py-1.5 text-sm transition-colors cursor-default ${
                          item.featured
                            ? "border-2 border-foreground bg-background font-semibold"
                            : "border border-border bg-background font-medium hover:border-foreground/40"
                        }`}
                      >
                        {item.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Soft skills ride as a single quiet strip, not another card grid. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={defaultTransition(0.1)}
          className="mt-4 sm:mt-5 rounded-3xl bg-foreground text-background p-7 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <p className="shrink-0 text-[11px] uppercase tracking-[0.16em] opacity-60 font-medium">
              {t({ id: "Di luar teknis", en: "Beyond the technical" })}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {interpersonalSkills.map((skill) => (
                <span key={skill.en} className="text-sm font-medium">
                  {t(skill)}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
