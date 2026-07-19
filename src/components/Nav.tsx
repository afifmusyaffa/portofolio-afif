"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useT } from "@/lib/i18n";
import type { Localized } from "@/lib/i18n";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { easeOut } from "@/lib/animations";

// The mobile dropdown's own closing animation (an AnimatePresence height
// collapse, 0.3s) fights the browser's scroll-to-target while it's still
// mounted and mid-transition — verified empirically that the scroll gets
// silently discarded regardless of smooth/instant behavior. Waiting for the
// close transition to fully settle before scrolling is what actually works.
const MOBILE_MENU_CLOSE_MS = 320;

function navigateAndClose(
  e: MouseEvent<HTMLAnchorElement>,
  id: string,
  setOpen: (fn: (v: boolean) => boolean) => void
) {
  e.preventDefault();
  setOpen(() => false);
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, MOBILE_MENU_CLOSE_MS);
}

const navItems: { href: string; id: string; label: Localized }[] = [
  { href: "#about", id: "about", label: { id: "Tentang", en: "About" } },
  { href: "#projects", id: "projects", label: { id: "Karya", en: "Work" } },
  {
    href: "#experience",
    id: "experience",
    label: { id: "Pengalaman", en: "Experience" },
  },
  { href: "#skills", id: "skills", label: { id: "Keahlian", en: "Skills" } },
  {
    href: "#certificates",
    id: "certificates",
    label: { id: "Sertifikasi", en: "Credentials" },
  },
];

// Scrolling past this hands off from the hero bar to the floating pill —
// matched to the hero bar's own height so there's no gap or overlap.
const HANDOFF_Y = 88;

type BarProps = {
  scopeId: string;
  activeId: string | null;
  open: boolean;
  setOpen: (fn: (v: boolean) => boolean) => void;
  locale: "id" | "en";
  toggleLocale: () => void;
  t: ReturnType<typeof useT>;
};

function BarContent({
  scopeId,
  activeId,
  open,
  setOpen,
  locale,
  toggleLocale,
  t,
}: BarProps) {
  return (
    <nav className="mx-auto max-w-6xl flex items-center justify-between gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8 h-16">
      <a
        href="#top"
        className="font-display text-sm font-extrabold tracking-tight"
      >
        Afif Musyaffa
      </a>

      <ul className="hidden md:flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                className={`relative block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={`nav-active-${scopeId}`}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="absolute inset-0 rounded-lg bg-surface-2"
                  />
                )}
                <span className="relative">{t(item.label)}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={toggleLocale}
          aria-label="Toggle language"
          className="h-9 rounded-xl border border-border px-3 text-xs font-bold tracking-wide hover:border-foreground transition-colors"
        >
          {locale === "id" ? "ID" : "EN"}
        </button>
        <a
          href="#contact"
          className="hidden sm:inline-flex h-9 items-center rounded-xl bg-foreground text-background px-4 text-xs font-bold transition-transform hover:scale-[1.03] active:scale-95"
        >
          {t({ id: "Hubungi Saya", en: "Get in Touch" })}
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xl border border-border"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
            className="block h-[1.5px] w-4 bg-foreground origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="block h-[1.5px] w-4 bg-foreground"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
            className="block h-[1.5px] w-4 bg-foreground origin-center"
          />
        </button>
      </div>
    </nav>
  );
}

function MobileDropdown({
  open,
  setOpen,
  rounded,
  t,
}: {
  open: boolean;
  setOpen: (fn: (v: boolean) => boolean) => void;
  rounded: boolean;
  t: ReturnType<typeof useT>;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className={`md:hidden overflow-hidden bg-background border-t border-border ${
            rounded ? "rounded-b-2xl" : ""
          }`}
        >
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => navigateAndClose(e, item.id, setOpen)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-surface-2 transition-colors"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => navigateAndClose(e, "contact", setOpen)}
                className="mt-2 block rounded-xl bg-foreground text-background px-4 py-3 text-center text-sm font-bold"
              >
                {t({ id: "Hubungi Saya", en: "Get in Touch" })}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Nav() {
  const { locale, toggleLocale } = useLocale();
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > HANDOFF_Y;
      setScrolled((prev) => {
        // Closes any open mobile menu across the hand-off, so nothing is
        // left open on the bar that just scrolled out of view.
        if (next !== prev) setOpen(() => false);
        return next;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Highlights whichever section currently owns the upper half of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.5] }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="contents">
      {/* Hero bar: plain, sits at the very top, and scrolls away with the
          page like ordinary content — no fixed positioning, no morphing. */}
      <div className="absolute top-0 inset-x-0 z-40">
        <BarContent
          scopeId="hero"
          activeId={activeId}
          open={open}
          setOpen={setOpen}
          locale={locale}
          toggleLocale={toggleLocale}
          t={t}
        />
        <MobileDropdown open={open} setOpen={setOpen} rounded={false} t={t} />
      </div>

      {/* Floating pill: mounts only once the hero bar has fully scrolled
          out of view, and simply fades/settles in — cheap, independent,
          nothing to distort. */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.96 }}
            transition={{ duration: 0.32, ease: easeOut }}
            className="fixed top-3 sm:top-4 inset-x-3 sm:inset-x-6 md:inset-x-0 md:mx-auto md:w-fit md:max-w-[calc(100vw-3rem)] z-50 origin-top rounded-2xl border border-border bg-background/90 backdrop-blur-xl shadow-lg shadow-black/5"
          >
            <BarContent
              scopeId="floating"
              activeId={activeId}
              open={open}
              setOpen={setOpen}
              locale={locale}
              toggleLocale={toggleLocale}
              t={t}
            />
            <MobileDropdown open={open} setOpen={setOpen} rounded t={t} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
