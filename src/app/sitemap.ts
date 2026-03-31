import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import {
  getBlogSlugs,
  getGuideSlugs,
  getLocationSlugs,
  getServiceSlugs,
} from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const staticPaths = [
  "",
  "/about",
  "/contact",
  "/reviews",
  "/blog",
  "/services",
  "/locations",
  "/guides",
  "/privacy",
  "/terms",
  "/cookies",
  "/review-policy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified,
      });
    }
    for (const slug of getBlogSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/blog/${slug}`,
        lastModified,
      });
    }
    for (const slug of getServiceSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/services/${slug}`,
        lastModified,
      });
    }
    for (const slug of getLocationSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/locations/${slug}`,
        lastModified,
      });
    }
    for (const slug of getGuideSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/guides/${slug}`,
        lastModified,
      });
    }
  }

  return entries;
}
