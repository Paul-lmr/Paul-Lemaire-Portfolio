import Link from "next/link";
import { technicalIndex } from "@/lib/technical-index";
import { getProjectByIndex } from "@/lib/projects";
import { Plate } from "@/components/canvas/plate";
import { MonoLabel } from "@/components/canvas/mono-label";

export function TechnicalIndexSection() {
  return (
    <section id="technical-index" className="border-b border-line blueprint-grid px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <MonoLabel className="mb-3 block">Section 03</MonoLabel>
        <h2 className="font-display text-[36px] font-semibold text-ink sm:text-[44px] lg:text-[52px]">
          Technical Index
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Skills grouped by discipline, each carrying the project numbers that put it to use.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {technicalIndex.map((group) => (
            <Plate key={group.label} className="p-6">
              <MonoLabel className="mb-4 block">{group.label}</MonoLabel>
              <ul className="flex flex-col gap-3">
                {group.entries.map((entry) => (
                  <li
                    key={entry.label}
                    className="flex items-baseline justify-between gap-3 border-b border-line-hair pb-3 text-[13.5px] last:border-b-0 last:pb-0"
                  >
                    <span className="text-ink-strong">{entry.label}</span>
                    <span className="flex shrink-0 gap-1.5 font-mono text-[11px] tracking-[.04em] text-accent-deep">
                      {entry.projects.map((idx) => {
                        const project = getProjectByIndex(idx);
                        return project ? (
                          <Link key={idx} href={`/projects/${project.slug}`} className="no-underline hover:underline">
                            {idx}
                          </Link>
                        ) : (
                          <span key={idx}>{idx}</span>
                        );
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </Plate>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-ink-mute">
          Each skill carries the project numbers that prove it. Select a number to open that project.
        </p>
      </div>
    </section>
  );
}
