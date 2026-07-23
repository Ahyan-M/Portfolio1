"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

type MagneticWrapperProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticWrapper({
  children,
  className,
  strength = 0.35,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduced || isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      className={cn("inline-block", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
        style={{ transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
