import Image from "next/image";
import Link from "next/link";
import { Plate } from "@/components/canvas/plate";
import { MonoLabel } from "@/components/canvas/mono-label";
import { Tag } from "@/components/canvas/tag";
import { SignalChain } from "@/components/projects/signal-chain";
import { getProject, type Project, type PlaceholderNote } from "@/lib/projects";

function isPlaceholder(value: string | PlaceholderNote | undefined): value is PlaceholderNote {
  return typeof value === "object" && value !== null;
}

function MetaBox({ label, value }: { label: string; value: string | PlaceholderNote }) {
  return (
    <Plate className="p-5 sm:p-6">
      <MonoLabel className="mb-2.5 block">{label}</MonoLabel>
      {isPlaceholder(value) ? (
        <div className="border border-dashed border-placeholder p-3 font-mono text-[11px] uppercase leading-relaxed tracking-[.05em] text-ink-mute">
          {value.placeholder}
        </div>
      ) : (
        <p className="text-[14.5px] leading-relaxed text-ink-strong">{value}</p>
      )}
    </Plate>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const meta: { label: string; value: string | PlaceholderNote }[] = [];
  const s = project.sections;
  if (s?.problem) meta.push({ label: "Problem", value: s.problem });
  if (s?.objectives) meta.push({ label: "Objectives", value: s.objectives });
  if (s?.approach) meta.push({ label: "Approach", value: s.approach });
  if (s?.workPerformed) meta.push({ label: "Work performed", value: s.workPerformed });
  if (s?.alsoBuilt) meta.push({ label: "Also built", value: s.alsoBuilt });
  if (s?.challenges) meta.push({ label: "Challenges", value: s.challenges });
  if (s?.results) meta.push({ label: "Results", value: s.results });
  if (s?.lessonsLearned) meta.push({ label: "Lessons learned", value: s.lessonsLearned });

  const nextProject = project.nextSlug ? getProject(project.nextSlug) : undefined;
  const hasSecondaryRow = Boolean(project.newsImage || project.mobileGallery);
  const galleryCols = project.gallery
    ? project.gallery.length % 3 === 0
      ? "lg:grid-cols-3"
      : project.gallery.length >= 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-2"
    : "";

  return (
    <article className="blueprint-grid px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_560px] lg:gap-14">
          <div>
            <MonoLabel>{project.categoryLine}</MonoLabel>
            <h1 className="mt-4 font-display text-[46px] font-semibold leading-[0.98] tracking-tight text-ink sm:text-[62px] lg:text-[84px]">
              {project.title}
            </h1>
            {project.detailIntro && (
              <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-ink-soft sm:text-xl">
                {project.detailIntro}
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            {project.status && (
              <div
                className={`mt-7 inline-flex flex-wrap items-center gap-3 border p-4 ${
                  project.statusTone === "rust" ? "border-rust" : "border-accent"
                }`}
              >
                <MonoLabel tone={project.statusTone === "rust" ? "ink" : "accent"}>Status</MonoLabel>
                <span className="text-sm text-ink">
                  {project.status}
                  {project.statusNote ? ` — ${project.statusNote}` : ""}
                </span>
              </div>
            )}

            {project.slug === "golf-club-platform" && (
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://golf-de-la-valee.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-deep px-6 py-3.5 font-display text-[13px] font-medium uppercase tracking-[.06em] text-card no-underline"
                >
                  Open live site
                </a>
                <span className="font-mono text-xs text-ink-soft">golf-de-la-valee.vercel.app</span>
              </div>
            )}
          </div>

          {project.heroImage && (() => {
            const img = project.heroImage;
            const natural = img.unframed || img.naturalRatio;
            const photo = natural ? (
              <div className="relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full [filter:saturate(.94)_contrast(1.05)]"
                />
                <div className="photo-tint absolute inset-0" />
              </div>
            ) : (
              <div className="relative h-[300px] overflow-hidden sm:h-[420px] lg:h-[500px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover [filter:saturate(.94)_contrast(1.05)]"
                />
                <div className="photo-tint absolute inset-0" />
              </div>
            );
            const caption = (img.caption || img.meta) && (
              <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[.06em] text-ink-mute">
                <span>{img.caption}</span>
                <span>{img.meta}</span>
              </div>
            );
            return img.unframed ? (
              <div>
                {photo}
                {caption}
              </div>
            ) : (
              <Plate marked className="p-3">
                {photo}
                {caption}
              </Plate>
            );
          })()}

          {!project.heroImage && project.galleryPlaceholder && (
            <Plate className="p-8">
              <div className="flex h-full min-h-[220px] items-center justify-center border border-dashed border-placeholder p-6 text-center font-mono text-[11px] uppercase tracking-[.06em] text-ink-mute">
                {project.galleryPlaceholder}
              </div>
            </Plate>
          )}
        </div>

        {/* Work items list (for projects without full narrative sections) */}
        {project.workItems && (
          <Plate className="mt-14 p-6 sm:p-8 lg:mt-20">
            <MonoLabel className="mb-4 block">What this involved</MonoLabel>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {project.workItems.map((item) => (
                <li key={item} className="text-[14.5px] leading-relaxed text-ink-strong">
                  · {item}
                </li>
              ))}
            </ul>
          </Plate>
        )}

        {/* Meta grid */}
        {meta.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {meta.map((m) => (
              <MetaBox key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        )}

        {/* Client/Admin toggle note (Golf only) */}
        {project.slug === "golf-club-platform" && (
          <p className="mt-6 text-[13px] text-ink-mute">
            Client and admin experiences share one data model and API.
          </p>
        )}

        {/* Gallery */}
        {project.gallery && (
          <div className={`mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 ${galleryCols}`}>
            {project.gallery.map((img) => {
              const natural = img.unframed || img.naturalRatio;
              const photo = natural ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-auto w-full [filter:saturate(.94)_contrast(1.05)]"
                />
              ) : (
                <div className="relative h-[220px] overflow-hidden sm:h-[280px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover [filter:saturate(.94)_contrast(1.05)]"
                  />
                </div>
              );
              return (
                <div key={img.src}>
                  {img.unframed ? photo : (
                    <Plate marked className="p-2">
                      {photo}
                    </Plate>
                  )}
                  {(img.caption || img.meta) && (
                    <div className="mt-2.5 font-mono text-[10px] uppercase tracking-[.06em] text-ink-mute">
                      {img.caption ?? img.meta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        {!project.gallery && project.galleryPlaceholder && project.heroImage && (
          <div className="mt-14 lg:mt-20">
            <div className="flex min-h-[140px] items-center justify-center border border-dashed border-placeholder p-6 text-center font-mono text-[11px] uppercase tracking-[.06em] text-ink-mute">
              {project.galleryPlaceholder}
            </div>
          </div>
        )}
        {project.pendingNote && (
          <div className="mt-6 inline-block border border-dashed border-placeholder px-4 py-3 font-mono text-[11px] uppercase tracking-[.05em] text-ink-mute">
            {project.pendingNote}
          </div>
        )}

        {/* Secondary showcase: e.g. a companion app, with its own tags and image grid */}
        {project.secondaryGallery && (
          <div className="mt-16 border-t border-line pt-14 lg:mt-24 lg:pt-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
              <div>
                <MonoLabel className="mb-3.5 block">Companion application</MonoLabel>
                <h3 className="font-display text-[28px] font-semibold leading-tight text-ink">
                  {project.secondaryGallery.heading}
                </h3>
                {project.secondaryGallery.description && (
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-strong">
                    {project.secondaryGallery.description}
                  </p>
                )}
                {project.secondaryGallery.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.secondaryGallery.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {project.secondaryGallery.images.map((img) => {
                  const natural = img.unframed || img.naturalRatio;
                  const photo = natural ? (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1024px) 16vw, 33vw"
                      className="h-auto w-full"
                    />
                  ) : (
                    <div className="relative h-[260px] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1024px) 16vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  );
                  return (
                    <div key={img.src}>
                      {img.unframed ? photo : (
                        <Plate marked className="p-2">
                          {photo}
                        </Plate>
                      )}
                      {img.caption && (
                        <div className="mt-2 font-mono text-[10px] uppercase tracking-[.06em] text-ink-mute">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Secondary row: news image + mobile trio + links (Golf only) */}
        {hasSecondaryRow && (
          <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:mt-20 lg:grid-cols-[1fr_1fr_380px]">
            {project.newsImage && (
              <div>
                {(() => {
                  if (project.newsImage!.unframed) {
                    return (
                      <Image
                        src={project.newsImage!.src}
                        alt={project.newsImage!.alt}
                        width={project.newsImage!.width}
                        height={project.newsImage!.height}
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="h-auto w-full"
                      />
                    );
                  }
                  return (
                    <Plate className="p-2.5">
                      <div className="relative h-[280px] overflow-hidden">
                        <Image
                          src={project.newsImage!.src}
                          alt={project.newsImage!.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </Plate>
                  );
                })()}
                {project.newsImage.caption && (
                  <div className="mt-2.5 font-mono text-[10px] uppercase tracking-[.06em] text-ink-mute">
                    {project.newsImage.caption}
                  </div>
                )}
              </div>
            )}

            {project.mobileGallery && (
              <div>
                <Plate className="p-2.5">
                  <div className="flex h-[280px] items-center justify-center gap-2.5 overflow-hidden bg-paper">
                    {project.mobileGallery.map((img) => (
                      <div key={img.src} className="relative h-full w-1/3">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="120px"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </Plate>
                {project.mobileGalleryCaption && (
                  <div className="mt-2.5 font-mono text-[10px] uppercase tracking-[.06em] text-ink-mute">
                    {project.mobileGalleryCaption}
                  </div>
                )}
              </div>
            )}

            {project.links && (
              <Plate className="p-6">
                <MonoLabel className="mb-4 block">Links</MonoLabel>
                <div className="flex flex-col items-start gap-3">
                  {project.links.map((link) =>
                    link.placeholder ? (
                      <span
                        key={link.label}
                        className="border border-dashed border-placeholder px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[.05em] text-ink-mute"
                      >
                        {link.label}
                      </span>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-accent-deep text-[15px] text-accent-deep no-underline"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
                {project.pipeline && (
                  <div className="mt-5 border-t border-line-hair pt-4">
                    <MonoLabel className="mb-2.5 block">Pipeline</MonoLabel>
                    <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.06em] text-ink-strong">
                      {project.pipeline.map((step, i) => (
                        <span key={step} className="flex items-center gap-2.5">
                          {step}
                          {i < project.pipeline!.length - 1 && (
                            <span className="h-px w-6 bg-accent" aria-hidden="true" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.linksNote && (
                  <p className="mt-5 text-[12.5px] leading-relaxed text-ink-mute">{project.linksNote}</p>
                )}
              </Plate>
            )}
          </div>
        )}

        {/* Signal chain (FPV only) */}
        {project.signalChain && (
          <div className="mt-14 lg:mt-20">
            <SignalChain rows={project.signalChain} />
          </div>
        )}

        {/* Links + pipeline (skipped when already shown in the secondary row above) */}
        {!hasSecondaryRow && (project.links || project.pipeline) && (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20">
            {project.links && (
              <Plate className="p-6">
                <MonoLabel className="mb-4 block">Links</MonoLabel>
                <div className="flex flex-col items-start gap-3">
                  {project.links.map((link) =>
                    link.placeholder ? (
                      <span
                        key={link.label}
                        className="border border-dashed border-placeholder px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[.05em] text-ink-mute"
                      >
                        {link.label}
                      </span>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-accent-deep text-[15px] text-accent-deep no-underline"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
                {project.linksNote && (
                  <p className="mt-5 text-[12.5px] leading-relaxed text-ink-mute">{project.linksNote}</p>
                )}
              </Plate>
            )}
            {project.pipeline && (
              <Plate className="p-6">
                <MonoLabel className="mb-4 block">Pipeline</MonoLabel>
                <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.06em] text-ink-strong">
                  {project.pipeline.map((step, i) => (
                    <span key={step} className="flex items-center gap-2.5">
                      {step}
                      {i < project.pipeline!.length - 1 && (
                        <span className="h-px w-8 bg-accent" aria-hidden="true" />
                      )}
                    </span>
                  ))}
                </div>
              </Plate>
            )}
          </div>
        )}

        {/* Next project */}
        {nextProject && (
          <div className="mt-16 border-t border-line pt-8 lg:mt-24">
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-block border-b border-accent-deep font-display text-sm font-medium uppercase tracking-[.06em] text-accent-deep no-underline"
            >
              Next project — {nextProject.title}
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
