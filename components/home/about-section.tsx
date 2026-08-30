import { Plate } from "@/components/canvas/plate";
import { MonoLabel } from "@/components/canvas/mono-label";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-line blueprint-grid px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
        <div>
          <MonoLabel className="mb-3 block">Section 04</MonoLabel>
          <h2 className="font-display text-[36px] font-semibold text-ink sm:text-[44px] lg:text-[52px]">
            About
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              I&apos;m a fourth-year engineering student, hands-on and technically curious about
              how systems work — comfortable moving between hardware and software rather than
              staying on one side of it.
            </p>
            <p>
              That shows up as drones assembled and tuned by hand, a full-stack web platform in
              production, Apple-platform experiments, and a biophilic workspace concept analysed
              for its environmental footprint. Sustainable engineering and eco-design run through
              several of these as a deliberate interest, not an afterthought.
            </p>
          </div>
        </div>

        <Plate className="p-6 sm:p-8">
          <MonoLabel className="mb-4 block">Education</MonoLabel>
          <div className="flex flex-col gap-5">
            <div className="border-b border-line-hair pb-5">
              <div className="font-display text-xl font-semibold text-ink">ESME</div>
              <div className="mt-1 text-[13.5px] text-ink-mute">
                Engineering degree — 4th year · France
              </div>
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-ink">
                Lovely Professional University
              </div>
              <div className="mt-1 text-[13.5px] text-ink-mute">
                Academic exchange semester · India
              </div>
            </div>
          </div>
        </Plate>
      </div>
    </section>
  );
}
