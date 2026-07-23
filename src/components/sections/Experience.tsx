"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experience";
import type { Experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function CompanyLogo({ exp }: { exp: Experience }) {
  if (exp.logo) {
    return (
      <div
        className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border transition-all duration-300 ease-out group-hover:border-accent/50 group-hover:shadow-sm"
        style={{ backgroundColor: exp.logoBg ?? "rgb(var(--surface))" }}
      >
        <Image
          src={exp.logo}
          alt={exp.logoAlt ?? `${exp.company} logo`}
          width={44}
          height={44}
          className="h-7 w-7 object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border bg-surface font-display text-sm font-semibold text-accent transition-all duration-300 ease-out group-hover:border-accent group-hover:bg-accent/10">
      {exp.company.charAt(0)}
    </div>
  );
}

function TimelineItem({
  exp,
  isLast,
  index,
}: {
  exp: Experience;
  isLast: boolean;
  index: number;
}) {
  const isIncoming = !!exp.status;

  return (
    <StaggerItem>
      <motion.article
        className="group relative grid grid-cols-[2.5rem_1fr] gap-5 md:grid-cols-[3.5rem_1fr] md:gap-8"
        initial={false}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-canvas transition-shadow duration-300 ease-out group-hover:shadow-[0_0_0_6px_rgb(var(--accent)/0.12)]"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full bg-accent ${isIncoming ? "animate-pulse-soft" : ""}`}
            />
          </motion.div>
          {!isLast && (
            <div
              className="absolute top-9 h-[calc(100%+1.5rem)] w-px bg-border transition-colors duration-300 group-hover:bg-accent/30 md:top-9"
              aria-hidden
            />
          )}
        </div>

        <div className="cursor-hover pb-10 md:pb-14">
          <div className="flex items-start gap-4">
            <CompanyLogo exp={exp} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {exp.period}
                </p>
                {exp.status && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-accent"
                  >
                    {exp.status}
                  </motion.span>
                )}
              </div>

              <h3 className="mt-2 font-display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                {exp.role}
              </h3>

              <p className="mt-1 font-sans text-base text-muted">
                {exp.company}
                <span className="mx-2 text-border">·</span>
                {exp.type}
              </p>

              <p className="mt-1 font-mono text-xs text-muted">
                {exp.duration}
                <span className="mx-2 text-border">·</span>
                {exp.location}
              </p>
            </div>
          </div>

          <ul className="mt-5 space-y-2.5 pl-0 md:pl-[3.75rem]">
            {exp.highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.4,
                  delay: 0.04 * i + index * 0.02,
                  ease: easeOut,
                }}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.article>
    </StaggerItem>
  );
}

export function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !lineRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="experience"
      className="bg-surface section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Where I&apos;ve worked"
          description="Internships, co-founding a startup, and roles across business analysis and product design."
          id="experience-heading"
        />

        <div ref={containerRef} className="relative mt-16">
          {!reduced && (
            <div
              ref={lineRef}
              className="absolute left-[1.125rem] top-0 hidden h-full w-px origin-top bg-accent/50 md:left-[1.625rem] md:block"
              aria-hidden
            />
          )}

          <StaggerContainer className="relative" stagger={0.14}>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                isLast={index === experiences.length - 1}
                index={index}
              />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
