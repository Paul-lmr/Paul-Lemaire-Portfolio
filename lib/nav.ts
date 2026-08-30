export const NAV_ITEMS = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Index", href: "/#technical-index" },
  { label: "India", href: "/#international" },
  { label: "Contact", href: "/#contact" },
] as const;

export const PROJECT_COUNT = 7;

/**
 * External profile links. `null` means the URL has not been provided yet —
 * render as a clearly marked placeholder rather than inventing one.
 */
export const externalLinks = {
  linkedin: "https://www.linkedin.com/in/paul-lemaire-ba7512279/" as string | null,
  github: "https://github.com/Paul-lmr" as string | null,
  cv: "/cv/CV_Paul-Lemaire.pdf",
  portfolioRepo: "https://github.com/Paul-lmr/Paul-Lemaire-Portfolio",
};
