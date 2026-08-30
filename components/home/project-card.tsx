import Image from "next/image";
import Link from "next/link";
import { Plate } from "@/components/canvas/plate";
import { MonoLabel } from "@/components/canvas/mono-label";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const img = project.cardImage;
  const unframedImage = img?.unframed;
  const natural = img?.unframed || img?.naturalRatio;
  return (
    <Link href={`/projects/${project.slug}`} className="block no-underline group">
      <Plate marked={Boolean(img) && !unframedImage} className="h-full transition-colors group-hover:border-ink">
        {img && natural && (
          <div className="relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="h-auto w-full [filter:saturate(.94)_contrast(1.05)]"
            />
            <div className="photo-tint absolute inset-0" />
          </div>
        )}
        {img && !natural && (
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover [filter:saturate(.94)_contrast(1.05)]"
            />
            <div className="photo-tint absolute inset-0" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2">
            <MonoLabel>
              {project.index} · {project.categoryLabel}
            </MonoLabel>
            {project.status && <MonoLabel>{project.status}</MonoLabel>}
          </div>
          <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.summary}</p>
        </div>
      </Plate>
    </Link>
  );
}
