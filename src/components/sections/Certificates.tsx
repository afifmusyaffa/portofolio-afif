"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/lib/i18n";
import { certificates, type Certificate } from "@/data/certificates";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PDFModal } from "@/components/ui/PDFModal";
import { viewportOnce, defaultTransition } from "@/lib/animations";

// Alternating tilt per seal — just enough to read as hand-stamped, not messy.
const tilts = [-4, 3, -3];

function Ticket({ cert, index, onOpen }: { cert: Certificate; index: number; onOpen: () => void }) {
  const t = useT();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={defaultTransition(index * 0.1)}
      whileHover={{ y: -4 }}
      className="relative flex rounded-2xl border border-border bg-background shadow-sm"
    >
      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 rotate-3 rounded-full border border-dashed border-foreground/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted">
        {t({ id: "Terverifikasi", en: "Verified" })}
      </span>

      {/* Seal — the stamp. Presses in on scroll and again on click. */}
      <button
        onClick={onOpen}
        aria-label={`${cert.title} — ${cert.issuer} — ${t({ id: "Buka sertifikat", en: "Open certificate" })}`}
        className="group relative w-24 sm:w-32 shrink-0 flex items-center justify-center p-4 sm:p-6"
      >
        <motion.span
          initial={{ opacity: 0, scale: 1.5, rotate: tilts[index] * 4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: tilts[index] }}
          viewport={viewportOnce}
          whileTap={{ scale: 0.88 }}
          whileHover={{ rotate: 0, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: index * 0.1 + 0.15 }}
          className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-dashed border-foreground/25 bg-white p-3 shadow-sm"
        >
          {/* Plain <img>, not next/image — one asset is an SVG, and these
              are small fixed logo marks that don't need the optimizer's
              responsive pipeline. */}
          <img
            src={cert.logo}
            alt={`${cert.issuer} — ${cert.title}`}
            className="h-full w-full object-contain"
          />
        </motion.span>
      </button>

      {/* Perforation — a die-cut ticket edge between the seal and the details. */}
      <div className="relative w-px shrink-0 border-l-2 border-dashed border-border my-4">
        <span className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-background" />
        <span className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-background" />
      </div>

      <div className="flex-1 min-w-0 p-4 sm:p-6">
        <p className="pr-20 sm:pr-16 text-[11px] uppercase tracking-[0.16em] text-muted font-medium">
          {cert.issuer} · {cert.date}
          {cert.credential?.id && (
            <span className="font-mono normal-case tracking-normal">
              {" "}
              · #{cert.credential.id}
            </span>
          )}
        </p>

        <h3 className="mt-1.5 font-display text-base sm:text-lg font-extrabold tracking-tight leading-snug">
          {t(cert.headline)}
        </h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          {t(cert.blurb)}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 rounded-xl bg-foreground text-background px-3.5 py-2 text-xs sm:text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95"
          >
            {t({ id: "Lihat Sertifikat", en: "View Certificate" })}
          </button>
          {cert.credential && (
            <a
              href={cert.credential.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3.5 py-2 text-xs sm:text-sm font-semibold hover:border-foreground transition-colors"
            >
              {t({ id: "Lihat Credential", en: "View Credential" })}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Certificates() {
  const t = useT();
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-20 sm:py-28 lg:py-32 bg-surface overflow-hidden"
    >
      {/* Faint security-pattern texture — the one place on the site that
          leans into the "official document" idea instead of the bento
          grid the rest of the sections use. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 14px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t({ id: "Sertifikasi", en: "Credentials" })}
          title={t({
            id: "Diuji lembaga resmi, bukan klaim sendiri.",
            en: "Assessed by the issuers, not self-declared.",
          })}
          lead={t({
            id: "Dokumen aslinya bisa dibuka di sini, atau diverifikasi langsung ke penerbitnya.",
            en: "Open the original document here, or verify it directly with the issuer.",
          })}
        />

        <div className="mt-12 lg:mt-16 space-y-5 sm:space-y-6">
          {certificates.map((cert, i) => (
            <Ticket key={cert.slug} cert={cert} index={i} onOpen={() => setActive(cert)} />
          ))}
        </div>
      </div>

      {/* AnimatePresence must live here, above the conditional — inside the
          modal it never sees the unmount, so the exit animation never ran. */}
      <AnimatePresence>
        {active && (
          <PDFModal
            key={active.slug}
            title={active.title}
            file={active.file}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
