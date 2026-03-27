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
}

export function buildMetadata({
  locale,
  pathname = "",
  title,
  description,
  keywords,
  openGraphTitle,
  openGraphDescription
}: BuildMetadataOptions): Metadata {
  const canonical = localizePath(locale, pathname);
  const fullTitle = title.includes(business.name) ? title : `${title} | ${business.name}`;

  return {
    metadataBase: new URL(business.domain),
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        "zh-Hans": localizePath("zh", pathname),
        "en-AU": localizePath("en", pathname),
        "x-default": localizePath(defaultLocale, pathname)
      }
    },
    openGraph: {
      title: openGraphTitle ?? fullTitle,
      description: openGraphDescription ?? description,
      url: canonical,
      siteName: business.name,
      type: "website",
      locale: localeToOpenGraphLocale[locale],
      alternateLocale: Object.entries(localeToOpenGraphLocale)
        .filter(([candidate]) => candidate !== locale)
        .map(([, ogLocale]) => ogLocale)
    }
  };
}
