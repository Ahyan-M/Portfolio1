"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { easeOut } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight text-ink"
      >
        {title}
      </h2>
      <motion.div
        className="mt-4 h-px max-w-[120px] origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
      />
      {description && (
        <p className="mt-4 max-w-2xl text-muted">{description}</p>
      )}
    </Reveal>
  );
}
