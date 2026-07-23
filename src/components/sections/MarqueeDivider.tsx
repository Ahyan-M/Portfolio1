"use client";

import { marqueeKeywords } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MarqueeDivider() {
  const reduced = usePrefersReducedMotion();
  const items = [...marqueeKeywords, ...marqueeKeywords];

  if (reduced) {
    return (
      <div
        className="border-y border-border bg-surface py-4"
        aria-hidden
      >
        <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {marqueeKeywords.join(" · ")}
        </p>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden border-y border-border bg-surface py-4"
      aria-hidden
    >
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            {word}
            <span className="mx-6 text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
