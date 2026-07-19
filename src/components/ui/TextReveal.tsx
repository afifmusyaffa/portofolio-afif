"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { easeOut, viewportOnce } from "@/lib/animations";

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: "110%" },
  show: { y: 0 },
};

/**
 * Reveals a heading word by word from behind a mask — the words rise into
 * place instead of simply fading, which reads as deliberate on long headings.
 *
 * Driven by `animate` (not `whileInView`) once it has been seen. `whileInView`
 * only fires once with `viewportOnce`, so switching locale afterwards swaps in
 * new word text — new elements, since word count/text differs per language —
 * that would otherwise mount straight into their hidden state with nothing
 * left to trigger the reveal, leaving the heading blank. `animate` is a live
 * target that newly-mounted words pick up immediately, so a locale switch
 * after the first reveal never leaves words stuck hidden.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.span
      initial="hidden"
      animate={revealed ? "show" : undefined}
      whileInView={revealed ? undefined : "show"}
      viewport={viewportOnce}
      onViewportEnter={() => setRevealed(true)}
      custom={delay}
      variants={container}
      className={className}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.25em]"
        >
          <motion.span
            variants={word}
            transition={{ duration: 0.75, ease: easeOut }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
