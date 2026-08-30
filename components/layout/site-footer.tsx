import { MonoLabel } from "@/components/canvas/mono-label";
import { PlaceholderLink } from "@/components/canvas/placeholder-link";
import { externalLinks } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line blueprint-grid">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 border border-line-soft bg-card p-6 sm:p-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <MonoLabel className="mb-3 block">Contact</MonoLabel>
            <h2 className="font-display text-2xl font-semibold text-ink">Paul Lemaire</h2>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Engineering student at ESME, on exchange at LPU, India. Open to conversations about
              hardware, software, and sustainable engineering work.
            </p>
            <p className="mt-4">
              <a href="mailto:paulyveslemaire@orange.fr" className="font-mono text-[13px] text-ink-soft hover:text-accent-deep">
                paulyveslemaire@orange.fr
              </a>
            </p>
          </div>

          <div>
            <MonoLabel className="mb-3 block">Profiles</MonoLabel>
            <ul className="flex flex-col gap-2 font-mono text-[13px] uppercase tracking-[.04em]">
              <li>
                <PlaceholderLink
                  href={externalLinks.linkedin}
                  label="LinkedIn"
                  className="no-underline text-ink-soft hover:text-accent-deep"
                />
              </li>
              <li>
                <PlaceholderLink
                  href={externalLinks.github}
                  label="GitHub"
                  className="no-underline text-ink-soft hover:text-accent-deep"
                />
              </li>
              <li>
                <a
                  href={externalLinks.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-ink-soft hover:text-accent-deep"
                >
                  CV (PDF)
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.portfolioRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-ink-soft hover:text-accent-deep"
                >
                  Portfolio source
                </a>
              </li>
            </ul>
          </div>

          <div>
            <MonoLabel className="mb-3 block">Workspace</MonoLabel>
            <p className="text-[13px] leading-relaxed text-ink-mute">
              ESME, France → LPU, India
              <br />
              07 projects · hardware, software, sustainable engineering
            </p>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[.06em] text-ink-mute">
          © {new Date().getFullYear()} Paul Lemaire
        </p>
      </div>
    </footer>
  );
}
