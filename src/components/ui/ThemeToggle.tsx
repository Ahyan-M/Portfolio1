"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="cursor-hover relative flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors duration-300 ease-out hover:border-accent hover:text-accent"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="text-sm"
        aria-hidden
      >
        {theme === "dark" ? "☀" : "☾"}
      </motion.span>
    </button>
  );
}
