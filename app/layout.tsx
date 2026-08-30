import type { Metadata } from "next";
import { Familjen_Grotesk, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://paul-lemaire-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paul Lemaire — Engineering Portfolio",
    template: "%s — Paul Lemaire",
  },
  description:
    "Paul Lemaire, fourth-year engineering student at ESME on exchange at LPU, India. Hardware, software, and sustainable engineering projects.",
  openGraph: {
    title: "Paul Lemaire — Engineering Portfolio",
    description:
      "Fourth-year engineering student at ESME on exchange at LPU, India. Hardware, software, and sustainable engineering projects.",
    url: siteUrl,
    siteName: "Paul Lemaire",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${familjenGrotesk.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-card focus:font-mono focus:text-xs focus:uppercase focus:tracking-[.08em]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
