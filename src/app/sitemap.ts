import type { MetadataRoute } from "next";
import { projects } from "../data/portfolio";

const siteUrl = "https://atikur.dev";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const projectImages = projects.map((project) => `${siteUrl}${project.image}`);

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: projectImages,
    },
  ];
}
