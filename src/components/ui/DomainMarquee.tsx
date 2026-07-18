"use client";

import { useT } from "@/lib/i18n";
import type { Localized } from "@/lib/i18n";
import {
  VisionIcon,
  CodeIcon,
  NetworkIcon,
  DataIcon,
  LeadershipIcon,
} from "@/components/ui/DomainIcons";

const items: { Icon: typeof VisionIcon; label: Localized }[] = [
  { Icon: VisionIcon, label: { id: "AI / Computer Vision", en: "AI / Computer Vision" } },
  { Icon: CodeIcon, label: { id: "Web Development", en: "Web Development" } },
  { Icon: NetworkIcon, label: { id: "Jaringan Komputer", en: "Computer Networking" } },
  { Icon: DataIcon, label: { id: "NLP & Data", en: "NLP & Data" } },
  { Icon: LeadershipIcon, label: { id: "Kepemimpinan", en: "Leadership" } },
];

export function DomainMarquee() {
  const t = useT();
  const loop = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max items-center animate-marquee motion-reduce:animate-none">
        {loop.map(({ Icon, label }, i) => (
          <span
            key={i}
            className="mx-6 sm:mx-8 flex items-center gap-2.5 whitespace-nowrap text-muted"
          >
            <Icon className="text-accent shrink-0" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.1em]">
              {t(label)}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
