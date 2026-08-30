export function Tag({
  children,
  tone = "line",
}: {
  children: React.ReactNode;
  tone?: "line" | "ink";
}) {
  return (
    <span
      className={`inline-block border px-3 py-2 font-mono text-[11px] uppercase leading-none tracking-[.06em] ${
        tone === "ink" ? "border-ink text-ink" : "border-line-tag text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}
