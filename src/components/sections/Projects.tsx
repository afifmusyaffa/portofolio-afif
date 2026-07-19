"use client";

import { useT } from "@/lib/i18n";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";

function TechRow({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-border px-2.5 py-1 text-[11px] font-medium text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const t = useT();
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95 ${
            link.primary
              ? "bg-foreground text-background"
              : "border border-border text-foreground hover:border-foreground"
          }`}
        >
          {t(link.label)}
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export function Projects() {
  const t = useT();
  const [featured, ...rest] = projects;
  const pair = rest.slice(0, 2);
  const closing = rest[2];

  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            index="02"
            title={t({ id: "Karya", en: "Work" })}
            lead={t({
              id: "Empat proyek, dari model sampai antarmukanya.",
              en: "Four projects, from the model to the interface.",
            })}
          />
          <Reveal
            as="a"
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            y={12}
            delay={0.2}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold hover:border-foreground transition-colors"
          >
            {t({ id: "Semua di GitHub", en: "All on GitHub" })}
            <ArrowUpRightIcon className="h-4 w-4" />
          </Reveal>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-4 sm:gap-5">
          {/* Flagship — the only card that gets full width and full height. */}
          <Reveal y={40}>
            <SpotlightCard
              as="article"
              className="rounded-3xl border border-border bg-background p-7 sm:p-10 lg:p-12"
            >
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted font-medium">
                <span>{featured.domain}</span>
                <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
                <span>{featured.year}</span>
              </div>

              <h3 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-2xl font-display text-lg sm:text-xl font-bold leading-snug text-balance">
                {t(featured.outcome)}
              </p>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
                {t(featured.description)}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <TechRow tech={featured.tech} />
                <ProjectLinks project={featured} />
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Two mid-weight cards side by side. */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {pair.map((project, i) => (
              <Reveal key={project.slug} y={36} delay={i * 0.1} className="h-full">
                <SpotlightCard
                  as="article"
                  className="h-full rounded-3xl border border-border bg-background p-7 sm:p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted font-medium">
                    <span>{project.domain}</span>
                    <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 font-display text-base font-bold leading-snug">
                    {t(project.outcome)}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                    {t(project.description)}
                  </p>
                  <div className="mt-6 space-y-5">
                    <TechRow tech={project.tech} />
                    <ProjectLinks project={project} />
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          {/* Closing card runs wide and short — breaks the grid rhythm. */}
          {closing && (
            <Reveal y={32}>
              <SpotlightCard
                as="article"
                className="rounded-3xl border border-border bg-background p-7 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className="lg:flex-1">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted font-medium">
                      <span>{closing.domain}</span>
                      <span
                        className="h-1 w-1 rounded-full bg-border"
                        aria-hidden
                      />
                      <span>{closing.year}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
                      {closing.title}
                    </h3>
                    <p className="mt-3 font-display text-base font-bold leading-snug">
                      {t(closing.outcome)}
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed max-w-xl">
                      {t(closing.description)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 lg:items-end">
                    <TechRow tech={closing.tech} />
                    <ProjectLinks project={closing} />
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
