import { Plate } from "@/components/canvas/plate";
import { MonoLabel } from "@/components/canvas/mono-label";
import { Tag } from "@/components/canvas/tag";

const TOPICS = [
  "AI-assisted development",
  "Claude Code",
  "Next.js",
  "TypeScript",
  "Web engineering",
  "SEO",
  "Apple development",
  "Embedded systems",
];

export function CurrentlyExploringSection() {
  return (
    <section className="border-b border-line blueprint-grid px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <MonoLabel className="mb-3 block">Section 06</MonoLabel>
        <h2 className="font-display text-[36px] font-semibold text-ink sm:text-[44px] lg:text-[52px]">
          Currently Exploring
        </h2>
        <Plate className="mt-8 p-6 sm:p-8">
          <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            What&apos;s actively on the workbench right now, kept short on purpose.
          </p>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </div>
        </Plate>
      </div>
    </section>
  );
}
