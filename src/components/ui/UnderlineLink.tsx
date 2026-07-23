"use client";

import { cn } from "@/lib/utils";

type UnderlineLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  underlineClassName?: string;
};

export function UnderlineLink({
  className,
  underlineClassName,
  children,
  ...props
}: UnderlineLinkProps) {
  return (
    <a
      className={cn(
        "cursor-hover group relative inline-block text-inherit transition-colors duration-300 ease-out hover:text-accent",
        className
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full",
          underlineClassName
        )}
        aria-hidden
      />
    </a>
  );
}
