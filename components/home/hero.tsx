import Image from "next/image";
import Link from "next/link";
import { Plate } from "@/components/canvas/plate";
import { MonoLabel } from "@/components/canvas/mono-label";
import { Tag } from "@/components/canvas/tag";
import { PlaceholderLink } from "@/components/canvas/placeholder-link";
import { externalLinks } from "@/lib/nav";

const CURRENTLY_EXPLORING = ["AI-assisted engineering", "Next.js", "TypeScript", "Embedded systems"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line blueprint-grid px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:gap-10">
        {/* Column 1: identity + trajectory + quick access */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <Plate marked className="p-6 sm:p-9 lg:p-10">
            <MonoLabel tone="accent">Engineering Student</MonoLabel>
            <h1 className="mt-4 font-display text-[52px] font-semibold leading-[0.96] tracking-tight text-ink sm:text-[68px] lg:text-[88px]">
              Paul Lemaire
            </h1>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Tag tone="ink">Hardware</Tag>
              <Tag tone="ink">Software</Tag>
              <Tag tone="ink">Sustainable Engineering</Tag>
            </div>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              I build across hardware and software: drones and soldering irons on one side, Swift
              and TypeScript on the other, eco-design analysis in between. I learn by building
              things that have to work.
            </p>
          </Plate>

          {/* Mobile-only primary CTAs, matching the 390 mockup */}
          <div className="flex gap-2 lg:hidden">
            <Link
              href="/#projects"
              className="flex-1 bg-accent-deep px-4 py-3.5 text-center font-mono text-xs uppercase tracking-[.08em] text-card no-underline"
            >
              Projects
            </Link>
            <a
              href={externalLinks.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-ink px-4 py-3.5 text-center font-mono text-xs uppercase tracking-[.08em] text-ink no-underline"
            >
              CV
            </a>
          </div>

          <div className="hidden gap-6 lg:flex">
            <Plate className="flex-1 p-6">
              <MonoLabel className="mb-3.5 block">Trajectory</MonoLabel>
              <div className="flex items-center gap-3.5">
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">ESME</div>
                  <div className="mt-0.5 text-[13px] text-ink-faint">France · 4th year</div>
                </div>
                <div className="h-px flex-1 bg-placeholder" aria-hidden="true" />
                <div className="font-serif text-xl text-accent" aria-hidden="true">
                  →
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">LPU</div>
                  <div className="mt-0.5 text-[13px] text-ink-faint">India · exchange</div>
                </div>
              </div>
            </Plate>

            <Plate className="w-[240px] p-6">
              <MonoLabel className="mb-3 block">Quick access</MonoLabel>
              <div className="flex flex-col gap-2">
                <a
                  href={externalLinks.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-deep py-3 text-center font-mono text-xs uppercase tracking-[.08em] text-card no-underline"
                >
                  View CV
                </a>
                <div className="flex gap-2">
                  <PlaceholderLink
                    href={externalLinks.linkedin}
                    label="LinkedIn"
                    className="flex-1 border border-line py-3 text-center font-mono text-[11px] uppercase tracking-[.08em] text-ink-faint no-underline"
                  />
                  <PlaceholderLink
                    href={externalLinks.github}
                    label="GitHub"
                    className="flex-1 border border-line py-3 text-center font-mono text-[11px] uppercase tracking-[.08em] text-ink-faint no-underline"
                  />
                </div>
              </div>
            </Plate>
          </div>
        </div>

        {/* Column 2: portrait + currently exploring */}
        <div className="flex flex-col gap-6 lg:w-[400px] lg:gap-8">
          <Plate marked className="p-3">
            <div className="relative">
              <Image
                src="/images/site/portrait.jpeg"
                alt="Paul Lemaire"
                width={1023}
                height={1537}
                priority
                sizes="(min-width: 1024px) 400px, 100vw"
                className="h-auto w-full [filter:saturate(.94)_contrast(1.05)]"
              />
              <div className="photo-tint absolute inset-0" />
            </div>
            <div className="mt-3 flex justify-between">
              <MonoLabel>Portrait</MonoLabel>
              <MonoLabel>2026</MonoLabel>
            </div>
          </Plate>

          <Plate className="hidden p-5 lg:block">
            <MonoLabel className="mb-3 block">Currently exploring</MonoLabel>
            <div className="flex flex-wrap gap-1.5">
              {CURRENTLY_EXPLORING.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Plate>

          {/* Trajectory repeated for mobile, after portrait per the approved mobile flow */}
          <Plate className="p-5 lg:hidden">
            <MonoLabel className="mb-3 block">Trajectory</MonoLabel>
            <div className="flex items-center gap-2.5">
              <span className="font-display text-lg font-semibold text-ink">ESME</span>
              <span className="h-px flex-1 bg-placeholder" aria-hidden="true" />
              <span className="font-serif text-base text-accent" aria-hidden="true">
                →
              </span>
              <span className="font-display text-lg font-semibold text-ink">LPU India</span>
            </div>
          </Plate>
        </div>
      </div>
    </section>
  );
}
