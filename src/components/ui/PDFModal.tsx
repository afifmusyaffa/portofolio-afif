"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { ArrowUpRightIcon } from "@/components/ui/SocialIcons";

export function PDFModal({
  title,
  file,
  onClose,
}: {
  title: string;
  file: string;
  onClose: () => void;
}) {
  const t = useT();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-8"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl h-[85dvh] rounded-2xl bg-surface border border-border overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-border">
          <h3 className="font-display text-sm sm:text-base font-semibold truncate">
            {title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-xs font-semibold rounded-xl border border-border px-3 py-2 hover:border-foreground transition-colors"
            >
              {t({ id: "Tab baru", en: "New tab" })}
            </a>
            <a
              href={file}
              download
              className="text-xs font-semibold rounded-xl border border-border px-3 py-2 hover:border-foreground transition-colors"
            >
              {t({ id: "Unduh", en: "Download" })}
            </a>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={t({ id: "Tutup", en: "Close" })}
              className="text-xs font-semibold rounded-xl bg-foreground text-background px-3 py-2"
            >
              {t({ id: "Tutup", en: "Close" })}
            </button>
          </div>
        </div>

        {/* Fallback sits underneath the iframe: mobile browsers that refuse
            to render PDFs inline leave the frame blank, so this stays
            readable instead of showing an empty white box. */}
        <div className="relative flex-1">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-sm text-muted max-w-xs">
              {t({
                id: "Pratinjau tidak tampil di browser ini.",
                en: "Preview isn't supported in this browser.",
              })}
            </p>
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-foreground text-background px-4 py-2.5 text-sm font-semibold"
            >
              {t({ id: "Buka sertifikat", en: "Open certificate" })}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
          <iframe
            src={file}
            title={title}
            className="relative h-full w-full bg-white"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
