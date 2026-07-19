"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { defaultTransition } from "@/lib/animations";
import { StatCounter } from "@/components/ui/StatCounter";
import { DomainMarquee } from "@/components/ui/DomainMarquee";
import { ArrowUpRightIcon } from "@/components/ui/SocialIcons";

const stats = [
  { value: 4, suffix: "", label: { id: "Proyek dirilis", en: "Projects shipped" } },
  { value: 3, suffix: "", label: { id: "Sertifikasi", en: "Certifications" } },
  { value: 1, suffix: "", label: { id: "Juara Nasional", en: "National win" } },
];

export function Hero() {
  const t = useT();

  return (
    <section
      id="top"
      className="relative flex flex-col pt-24 sm:pt-28 pb-10 sm:pb-14 md:min-h-[100svh] md:justify-center md:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition(0.05)}
          className="relative rounded-[1.75rem] sm:rounded-[2.5rem] border border-border"
          style={{ background: "var(--hero-gradient)" }}
        >
          <div className="grid md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-11 md:px-12 lg:px-16">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={defaultTransition(0.15)}
                className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight text-balance"
              >
                <span className="block text-foreground">
                  {t(profile.heroHeadline.primary)}
                </span>
                <span className="block text-muted font-semibold">
                  {t(profile.heroHeadline.secondary)}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={defaultTransition(0.28)}
                className="mt-5 max-w-sm text-base text-muted leading-relaxed"
              >
                {t(profile.heroSubline)}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={defaultTransition(0.4)}
                className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-95"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  {t({ id: "Lihat Proyek", en: "View Projects" })}
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black border border-black/10 shadow-sm px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-95"
                >
                  {t({ id: "Lihat CV", en: "View CV" })}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={defaultTransition(0.52)}
                className="mt-9 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-4"
              >
                {stats.map((stat) => (
                  <div key={stat.label.en}>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-gradient">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-muted font-medium">
                      {t(stat.label)}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative min-h-[440px] sm:min-h-[460px] md:min-h-0">
              <div className="absolute inset-x-0 bottom-0 top-0 md:-top-14 lg:-top-20 overflow-hidden rounded-b-[1.75rem] sm:rounded-b-[2.5rem] md:rounded-b-none md:rounded-br-[2.5rem]">
                <Image
                  src="/images/profile.png"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={defaultTransition(0.65)}
                className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-10 sm:bottom-10 sm:max-w-[25rem]"
              >
                <div
                  className="flex items-center gap-4 sm:gap-6 rounded-2xl p-4 sm:p-8 border"
                  style={{
                    background: "var(--glass-bg)",
                    borderColor: "var(--glass-border)",
                    backdropFilter: "blur(20px) saturate(160%)",
                    WebkitBackdropFilter: "blur(20px) saturate(160%)",
                    boxShadow:
                      "0 20px 45px -20px rgba(10, 22, 40, 0.45), inset 0 1px 0 var(--glass-highlight)",
                  }}
                >
                  <div className="flex-1">
                    <p
                      className="text-[10px] uppercase tracking-widest font-medium"
                      style={{ color: "rgba(255, 255, 255, 0.8)", textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)" }}
                    >
                      {t(profile.heroStatus.label)}
                    </p>
                    <p
                      className="mt-1.5 font-display font-bold text-base sm:text-lg leading-snug"
                      style={{ color: "#ffffff", textShadow: "0 1px 10px rgba(0, 0, 0, 0.45)" }}
                    >
                      {t(profile.heroStatus.title)}
                    </p>
                    <p
                      className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed"
                      style={{ color: "rgba(255, 255, 255, 0.88)", textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)" }}
                    >
                      {t(profile.heroStatus.description)}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    aria-label={t({ id: "Ke kontak", en: "Go to contact" })}
                    className="shrink-0 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white text-black transition-transform hover:scale-110"
                  >
                    <ArrowUpRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={defaultTransition(0.8)}
          className="relative mt-6 sm:mt-8"
        >
          <DomainMarquee />
        </motion.div>
      </div>
    </section>
  );
}
