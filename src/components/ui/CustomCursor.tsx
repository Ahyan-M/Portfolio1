"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (reduced || isTouch) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => ringRef.current?.classList.add("is-hover");
    const onLeave = () => ringRef.current?.classList.remove("is-hover");

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    const hoverTargets = document.querySelectorAll(
      "a, button, .cursor-hover, [data-cursor='hover']"
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const targets = document.querySelectorAll(
        "a, button, .cursor-hover, [data-cursor='hover']"
      );
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [reduced, isTouch]);

  if (reduced || isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] -ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] -ml-5 -mt-5 h-10 w-10 rounded-full border border-accent/40 transition-[width,height,margin,opacity] duration-300 ease-out [&.is-hover]:-ml-7 [&.is-hover]:-mt-7 [&.is-hover]:h-14 [&.is-hover]:w-14 [&.is-hover]:border-accent/60"
        aria-hidden
      />
    </>
  );
}
