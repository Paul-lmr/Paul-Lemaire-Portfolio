"use client";

import { useState } from "react";
import { projects, categoryFilters, getProject, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "@/components/home/project-card";
import { MonoLabel } from "@/components/canvas/mono-label";

const greenAir = getProject("green-air")!;
const fpvDrone = getProject("fpv-drone")!;
const golf = getProject("golf-club-platform")!;
const compactSlugs = ["apple-ecosystem", "physical-controller", "blackjack", "data-machine-learning"];

export function ProjectIndex() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const visible = active === "all" ? [] : projects.filter((p) => p.filterCategory === active);

  return (
    <section id="projects" className="border-b border-line blueprint-grid px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
          <div>
            <MonoLabel className="mb-3 block">Section 02</MonoLabel>
            <h2 className="font-display text-[36px] font-semibold text-ink sm:text-[44px] lg:text-[52px]">
              Selected Projects
            </h2>
          </div>
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-1.5 font-mono text-[11px] uppercase tracking-[.06em]"
          >
            {categoryFilters.map((filter) => {
              const isActive = filter.value === active;
              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(filter.value)}
                  className={
                    isActive
                      ? "border border-ink bg-ink px-3.5 py-2.5 text-card"
                      : "border border-line px-3.5 py-2.5 text-ink-soft hover:border-ink"
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {active === "all" ? (
          <div className="flex flex-col gap-8">
            {/* Green Air's portrait-ratio image runs tall, so it gets a column to itself,
                balanced against FPV + Golf's shorter landscape images stacked together. */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ProjectCard project={greenAir} />
              <div className="flex flex-col gap-8">
                <ProjectCard project={fpvDrone} />
                <ProjectCard project={golf} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {compactSlugs.map((slug) => (
                <ProjectCard key={slug} project={getProject(slug)!} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
