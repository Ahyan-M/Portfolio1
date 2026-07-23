"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn, easeOut } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  ...props
}: RevealProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: reduced ? 0 : 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: reduced ? 0.3 : 0.5,
        delay,
        ease: easeOut,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.06,
}: StaggerContainerProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0.3 : 0.45, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
