export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const easeOut = [0.16, 1, 0.3, 1] as const;
