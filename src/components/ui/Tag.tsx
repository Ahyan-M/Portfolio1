export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
      {label}
    </span>
  );
}
