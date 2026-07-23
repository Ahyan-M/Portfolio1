"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-[2px] z-50 transition-all duration-400 ease-out",
        scrolled ? "border-b border-border/60 bg-canvas/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-5 md:px-10 lg:px-16"
        aria-label="Main navigation"
      >
        <UnderlineLink
          href="#hero"
          className="font-display font-semibold text-ink no-underline"
          underlineClassName="hidden"
          onClick={() => setMenuOpen(false)}
        >
          <motion.span
            animate={{
              fontSize: scrolled ? "1.125rem" : "1.5rem",
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            AM
          </motion.span>
        </UnderlineLink>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href} className="relative">
                <UnderlineLink
                  href={link.href}
                  className={cn(
                    "font-mono text-[0.65rem] uppercase tracking-[0.18em] transition-colors duration-300 xl:text-[0.7rem]",
                    isActive ? "text-accent" : "text-muted"
                  )}
                >
                  {link.label}
                </UnderlineLink>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="cursor-hover flex flex-col gap-1.5 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-transform duration-300 ease-out",
                menuOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-opacity duration-300 ease-out",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-transform duration-300 ease-out",
                menuOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-canvas lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <UnderlineLink
                    href={link.href}
                    className="block py-3 font-mono text-sm uppercase tracking-[0.18em] text-muted"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </UnderlineLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
