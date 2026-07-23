"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { easeOut } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-content text-center">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something"
          description="Open to internships, collaborations, and conversations about code. The fastest way to reach me is email."
          id="contact-heading"
        />

        <Reveal delay={0.1}>
          <MagneticWrapper className="mt-12">
            <UnderlineLink
              href={`mailto:${siteConfig.email}`}
              className="cursor-hover font-display text-[clamp(1.75rem,5vw,3.5rem)] font-semibold leading-tight text-ink"
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-ink via-accent to-ink bg-[length:200%_auto] bg-clip-text transition-all duration-300 hover:text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                {siteConfig.email}
              </motion.span>
            </UnderlineLink>
          </MagneticWrapper>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <UnderlineLink
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="font-mono text-xs uppercase tracking-wider text-muted"
            >
              {siteConfig.phone}
            </UnderlineLink>
            <UnderlineLink
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted"
            >
              LinkedIn
            </UnderlineLink>
            <UnderlineLink
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted"
            >
              GitHub
            </UnderlineLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
