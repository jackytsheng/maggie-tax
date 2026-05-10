import type { Metadata } from "next";

import { business } from "@/content/business";
import { defaultLocale, localizePath, localeToOpenGraphLocale, type Locale } from "@/lib/i18n";

interface BuildMetadataOptions {
  locale: Locale;
  pathname?: string;
  title: string;
  description: string;
  keywords?: string[];
  openGraphTitle?: string;
  openGraphDescription?: string;
  type?: "website" | "article";
  category?: string;
  authors?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  robots?: Metadata["robots"];
}

export function buildMetadata({
  locale,
  pathname = "",
  title,
  description,
  keywords,
  openGraphTitle,
  openGraphDescription,
  type = "website",
  category,
  authors,
  publishedTime,
  modifiedTime,
  tags,
  robots
}: BuildMetadataOptions): Metadata {
  const canonical = localizePath(locale, pathname);
  const fullTitle = title.includes(business.name) ? title : `${title} | ${business.name}`;
  const normalizedAuthors = authors?.map((name) => name.trim()).filter(Boolean);

  return {
    metadataBase: new URL(business.domain),
    title: fullTitle,
    description,
    keywords,
    authors: normalizedAuthors?.map((name) => ({ name })),
    creator: normalizedAuthors?.[0],
    publisher: business.name,
    category,
    robots,
    alternates: {
      canonical,
      languages: {
        "zh-Hans": localizePath("zh", pathname),
        "en-AU": localizePath("en", pathname),
        "x-default": localizePath(defaultLocale, pathname)
      }
    },
    openGraph:
      type === "article"
        ? {
            title: openGraphTitle ?? fullTitle,
            description: openGraphDescription ?? description,
            url: canonical,
            siteName: business.name,
            type: "article",
            locale: localeToOpenGraphLocale[locale],
            alternateLocale: Object.entries(localeToOpenGraphLocale)
              .filter(([candidate]) => candidate !== locale)
              .map(([, ogLocale]) => ogLocale),
            authors: normalizedAuthors,
            publishedTime,
            modifiedTime,
            section: category,
            tags
          }
        : {
            title: openGraphTitle ?? fullTitle,
            description: openGraphDescription ?? description,
            url: canonical,
            siteName: business.name,
            type: "website",
            locale: localeToOpenGraphLocale[locale],
            alternateLocale: Object.entries(localeToOpenGraphLocale)
              .filter(([candidate]) => candidate !== locale)
              .map(([, ogLocale]) => ogLocale)
          },
    twitter: {
      card: "summary",
      title: openGraphTitle ?? fullTitle,
      description: openGraphDescription ?? description
    }
  };
}
