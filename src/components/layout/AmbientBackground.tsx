"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const orbs = [
  {
    size: 480,
    x: "10%",
    y: "15%",
    color: "rgb(var(--accent) / 0.07)",
    duration: 28,
    delay: 0,
  },
  {
    size: 360,
    x: "75%",
    y: "55%",
    color: "rgb(var(--accent) / 0.05)",
    duration: 34,
    delay: 2,
  },
  {
    size: 520,
    x: "55%",
    y: "8%",
    color: "rgb(var(--muted) / 0.06)",
    duration: 40,
    delay: 4,
  },
  {
    size: 280,
    x: "85%",
    y: "80%",
    color: "rgb(var(--accent) / 0.04)",
    duration: 24,
    delay: 1,
  },
];

export function AmbientBackground() {
  const reduced = usePrefersReducedMotion();

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            backgroundColor: orb.color,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 20, -10, 0],
            scale: [1, 1.06, 0.96, 1.03, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--border)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border)) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"
        animate={{ opacity: [0.15, 0.35, 0.15], scaleX: [0.9, 1, 0.9] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}
