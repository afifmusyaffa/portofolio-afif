"use client";

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

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      custom={delay}
      variants={container}
      className={className}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
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
