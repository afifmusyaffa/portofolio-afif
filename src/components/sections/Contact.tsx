"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { TextReveal } from "@/components/ui/TextReveal";
import { Reveal } from "@/components/ui/Reveal";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "@/components/ui/SocialIcons";
import { viewportOnce, staggerContainer, fadeUp } from "@/lib/animations";

const links = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: profile.socials.instagram, Icon: InstagramIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export function Contact() {
  const t = useT();

  return (
    <section id="contact" className="relative pt-20 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* The one fully inverted block on the page — it should feel final.
            Fixed dark palette on purpose: unlike the rest of the site, this
            block does not flip with light/dark mode, so the premium backdrop
            below always reads as intended. */}
        <Reveal
          y={40}
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-20 lg:py-24 text-center"
          style={{
            background:
              "linear-gradient(160deg, #0b0b0d 0%, #17171a 55%, #08080a 100%)",
            color: "#f4f4f5",
          }}
        >
          {/* Premium abstract backdrop — ambient glows, a fine engineering
              grid, a faint constellation/circuit motif, and a soft diagonal
              sheen. All well under 15% opacity so it stays texture, not noise. */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-16 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-white/[0.07] blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full bg-white/[0.05] blur-3xl" />

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />

            <svg
              className="absolute -bottom-6 -right-6 h-48 w-48 sm:h-64 sm:w-64 opacity-[0.14]"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M20 160 L70 110 L120 130 L170 60"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path d="M70 110 L90 40" stroke="white" strokeWidth="1" strokeLinecap="round" />
              <circle cx="20" cy="160" r="3.5" fill="white" />
              <circle cx="70" cy="110" r="3.5" fill="white" />
              <circle cx="120" cy="130" r="3.5" fill="white" />
              <circle cx="170" cy="60" r="3.5" fill="white" />
              <circle cx="90" cy="40" r="3.5" fill="white" />
            </svg>

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.05) 48%, transparent 65%)",
              }}
            />
          </div>

          <Reveal
            scale={0.9}
            y={0}
            delay={0.1}
            className="relative inline-flex items-center gap-2 rounded-xl border border-current/20 px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] font-medium">
              {t({
                id: "Terbuka untuk magang & kolaborasi",
                en: "Open to internships & collaboration",
              })}
            </span>
          </Reveal>

          <h2 className="mt-7 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-balance">
            <TextReveal
              text={t({
                id: "Hubungi Saya",
                en: "Get in Touch",
              })}
            />
          </h2>

          <Reveal
            as="p"
            y={16}
            delay={0.3}
            className="mt-6 mx-auto max-w-lg text-base sm:text-lg opacity-70 leading-relaxed"
          >
            {t({
              id: "Satu email saja cukup. Biasanya saya balas di hari yang sama.",
              en: "One email is enough. I usually reply the same day.",
            })}
          </Reveal>

          <Reveal
            y={20}
            delay={0.4}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-7 py-4 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95"
            >
              {t({ id: "Email saya", en: "Email me" })}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-current/25 px-7 py-4 text-sm font-semibold hover:border-current/60 transition-colors"
            >
              {t({ id: "Terhubung di LinkedIn", en: "Connect on LinkedIn" })}
            </a>
          </Reveal>

          <Reveal
            as="p"
            y={0}
            delay={0.55}
            className="mt-8 font-mono text-xs sm:text-sm opacity-60 break-all"
          >
            {profile.email}
          </Reveal>
        </Reveal>
      </div>

      <footer className="mt-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p className="font-display text-sm font-bold">{profile.name}</p>
            <p className="mt-0.5 text-xs text-muted">{profile.location}</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.06)}
            className="flex items-center gap-2"
          >
            {links.map(({ label, href, Icon }) => {
              const isMail = href.startsWith("mailto:");
              return (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted hover:border-foreground hover:text-foreground transition-colors"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>

          <p className="text-xs text-muted">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </section>
  );
}
