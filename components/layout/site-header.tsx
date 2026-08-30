"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, PROJECT_COUNT, externalLinks } from "@/lib/nav";
import { MonoLabel } from "@/components/canvas/mono-label";
import { PlaceholderLink } from "@/components/canvas/placeholder-link";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-card">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-sm font-semibold uppercase tracking-[.14em] text-ink no-underline"
        >
          Paul Lemaire
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <span className="mr-4 h-5 w-px bg-line-divider" aria-hidden="true" />
          <MonoLabel className="mr-4">Workspace · {PROJECT_COUNT} projects</MonoLabel>
          <ul className="flex items-center gap-1 font-mono text-[11.5px] uppercase tracking-[.06em]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block px-3 py-2 text-ink-soft no-underline hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="mx-2 h-5 w-px bg-line-divider" aria-hidden="true" />
          <div className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[.06em] text-ink-mute">
            <PlaceholderLink href={externalLinks.linkedin} label="LI" unavailableLabel="LinkedIn — link coming soon" className="px-2 py-2 no-underline hover:text-ink" />
            <PlaceholderLink href={externalLinks.github} label="GH" unavailableLabel="GitHub — link coming soon" className="px-2 py-2 no-underline hover:text-ink" />
          </div>
          <a
            href={externalLinks.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-accent-deep px-4 py-2.5 font-mono text-[11px] uppercase tracking-[.06em] text-card no-underline"
          >
            CV
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          className="bg-accent-deep px-3 py-2 font-mono text-[10.5px] uppercase tracking-[.06em] text-card lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-line px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1 font-mono text-sm uppercase tracking-[.06em]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-ink-soft no-underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-5 font-mono text-xs uppercase tracking-[.06em] text-ink-mute">
            <PlaceholderLink href={externalLinks.linkedin} label="LinkedIn" className="no-underline" />
            <PlaceholderLink href={externalLinks.github} label="GitHub" className="no-underline" />
          </div>
          <a
            href={externalLinks.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block bg-accent-deep px-4 py-3 text-center font-mono text-xs uppercase tracking-[.08em] text-card no-underline"
          >
            View CV
          </a>
        </nav>
      )}
    </header>
  );
}
