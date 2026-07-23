"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { featuredProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { useGsapParallax } from "@/components/layout/SmoothScroll";
import { easeOut } from "@/lib/utils";

function ProjectPreview({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  useGsapParallax(ref, true);
  const fit = project.imageFit ?? "cover";

  return (
    <div
      ref={ref}
      data-parallax-trigger
      className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-surface md:aspect-auto md:h-full md:min-h-[240px]"
    >
      {project.image ? (
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{ backgroundColor: project.imageBg ?? `${project.color}15` }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} preview`}
            fill
            className={
              fit === "contain"
                ? "object-contain p-8 md:p-12"
                : "object-cover"
            }
            sizes="(max-width: 768px) 100vw, 560px"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{ backgroundColor: `${project.color}20` }}
        >
          <motion.span
            className="font-display text-5xl font-semibold md:text-6xl"
            style={{ color: project.color }}
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            {project.title.charAt(0)}
          </motion.span>
        </div>
      )}
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/[0.04]" />
    </div>
  );
}

function FeaturedProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Reveal y={32} delay={index * 0.05}>
      <article
        className="cursor-hover group grid gap-8 border-b border-border py-10 transition-all duration-300 ease-out hover:bg-surface/40 md:grid-cols-[1fr_1.1fr] md:gap-12 md:py-14"
        aria-labelledby={`project-${project.id}`}
      >
        <div className="order-2 flex flex-col justify-center md:order-1">
          <div className="flex flex-wrap items-center gap-3">
            {project.role && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-accent"
              >
                {project.role}
              </motion.span>
            )}
          </div>

          <h3
            id={`project-${project.id}`}
            className="mt-3 font-display text-3xl font-semibold text-ink transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent md:text-4xl"
          >
            {project.title}
          </h3>

          {project.location && (
            <p className="mt-2 font-mono text-xs text-muted">{project.location}</p>
          )}

          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div className="mt-6 flex gap-6">
            <UnderlineLink
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted"
            >
              GitHub
            </UnderlineLink>
            {project.demo && (
              <UnderlineLink
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-muted"
              >
                Demo
              </UnderlineLink>
            )}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <ProjectPreview project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work"
          description="From co-founding a product to transit analytics and machine learning — projects that reflect how I think and build."
          id="projects-heading"
        />

        <div className="mt-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectRow
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
