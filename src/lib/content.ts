import {
  BLOG_POSTS,
  GUIDES,
  LOCATIONS,
  SERVICES,
  type BlogPost,
  type GuideItem,
  type LocationItem,
  type ServiceItem,
} from "@/data/generated-content";
import type { Locale } from "@/i18n/routing";

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

export function getService(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getLocationSlugs(): string[] {
  return LOCATIONS.map((l) => l.slug);
}

export function getLocation(slug: string): LocationItem | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}

export function getGuide(slug: string): GuideItem | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function pickLocalized<T>(
  locale: Locale,
  obj: Record<Locale, T>,
): T {
  return obj[locale];
}
