import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const siteUrl = "https://paul-lemaire-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
