"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/utils";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
      ease: easeOut,
    },
  }),
};

function KineticLine({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        custom={index}
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden section-padding pt-32"
      aria-labelledby="hero-heading"
    >
      {!reduced && (
        <>
          <motion.div
            className="pointer-events-none absolute right-[10%] top-[20%] h-32 w-px bg-accent/30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: easeOut }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute right-[10%] top-[20%] h-px w-24 bg-accent/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: easeOut }}
            aria-hidden
          />
        </>
      )}

      <div className="relative mx-auto w-full max-w-content">
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          className="eyebrow mb-6 text-accent"
        >
          Portfolio · 2026
        </motion.p>

        <h1 id="hero-heading" className="space-y-1">
          <KineticLine index={0}>
            <span className="block font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight text-ink">
              Hi, I&apos;m {siteConfig.name}
            </span>
          </KineticLine>
          <KineticLine index={1}>
            <span className="block font-display text-[clamp(2rem,5vw,4rem)] font-normal italic leading-[1.1] text-muted">
              {siteConfig.role}
            </span>
          </KineticLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: easeOut }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: easeOut }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticWrapper>
            <Button href="#projects">View My Work</Button>
          </MagneticWrapper>
          <MagneticWrapper>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </MagneticWrapper>
          <MagneticWrapper>
            <Button href={siteConfig.resume} variant="ghost">
              Resume
            </Button>
          </MagneticWrapper>
        </motion.div>

        {!reduced && (
          <motion.div
            className="mt-20 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-accent"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Scroll to explore
          </motion.div>
        )}
      </div>
    </section>
  );
}
