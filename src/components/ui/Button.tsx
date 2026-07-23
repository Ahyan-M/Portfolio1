"use client";

import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "cursor-hover inline-flex items-center justify-center rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 ease-out",
        variant === "primary" &&
          "border-accent bg-accent text-canvas hover:bg-transparent hover:text-accent",
        variant === "secondary" &&
          "border-ink bg-transparent text-ink hover:border-accent hover:text-accent",
        variant === "ghost" &&
          "border-transparent bg-transparent text-ink hover:text-accent",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
