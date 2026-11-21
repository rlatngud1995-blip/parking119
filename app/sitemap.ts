import type { MetadataRoute } from "next";
import { absoluteUrl, getSite } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSite();
  return Object.entries(site.pages).map(([p, page]) => ({
    url: absoluteUrl(p),
    lastModified: site.lastmod,
    priority: page.priority,
  }));
}
