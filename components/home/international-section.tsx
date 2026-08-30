import { Plate } from "@/components/canvas/plate";
import { MonoLabel } from "@/components/canvas/mono-label";

export function InternationalSection() {
  return (
    <section id="international" className="border-b border-line blueprint-grid px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <MonoLabel className="mb-3 block">Section 05</MonoLabel>
        <h2 className="font-display text-[36px] font-semibold text-ink sm:text-[44px] lg:text-[52px]">
          International Experience
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Currently completing an academic exchange semester at Lovely Professional University,
          India, as part of the ESME engineering programme — a full academic term abroad, not a
          short visit.
        </p>

        <Plate className="mt-10 flex flex-col items-stretch gap-6 p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-10">
          <div className="flex-1 text-center sm:text-left">
            <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">ESME</div>
            <div className="mt-2 text-sm text-ink-mute">France · Engineering degree, 4th year</div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:flex-col">
            <span className="h-px flex-1 bg-placeholder sm:h-auto sm:w-px sm:flex-none sm:grow" aria-hidden="true" />
            <span className="font-serif text-2xl text-accent" aria-hidden="true">
              →
            </span>
            <span className="h-px flex-1 bg-placeholder sm:h-auto sm:w-px sm:flex-none sm:grow" aria-hidden="true" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="font-display text-4xl font-semibold text-ink sm:text-5xl">LPU</div>
            <div className="mt-2 text-sm text-ink-mute">India · Academic exchange semester</div>
          </div>
        </Plate>
      </div>
    </section>
  );
}
