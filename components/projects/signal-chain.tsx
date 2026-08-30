import type { SignalChainStep } from "@/lib/projects";

export function SignalChain({ rows }: { rows: SignalChainStep[][] }) {
  return (
    <div>
      <div className="mb-5 font-mono text-[11px] uppercase tracking-[.06em] text-ink-mute">
        Signal chain — drawn from the components actually used
      </div>
      <div className="flex flex-col gap-4">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap items-center gap-0">
            {row.map((step, j) => (
              <div key={step.label} className="flex items-center">
                <span
                  className={`border px-4 py-3 font-mono text-[12px] uppercase tracking-[.06em] ${
                    step.tone === "rust"
                      ? "border-rust-deep bg-card text-rust-deep"
                      : "border-ink bg-card text-ink"
                  }`}
                >
                  {step.label}
                </span>
                {j < row.length - 1 && (
                  <span
                    className={`h-px w-9 ${step.tone === "rust" ? "bg-rust" : "bg-accent"}`}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
