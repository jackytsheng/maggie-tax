import type { MetadataRoute } from "next";

import { business } from "@/content/business";
import { getAllInsightArticles } from "@/content/insights";
import { defaultLocale, locales, localizePath, localeToHtmlLang, type Locale } from "@/lib/i18n";

const routes = [
  "",
  "/about",
  "/services",
  "/services/individual-tax",
  "/services/business-tax",
  "/services/ato-support",
  "/faq",
  "/contact",
  "/privacy",
  "/insights"
];

function buildAlternates(pathname: string) {
  const languages = locales.reduce(
    (result, locale) => {
      result[localeToHtmlLang[locale]] = `${business.domain}${localizePath(locale, pathname)}`;
      return result;
    },
    {} as Record<string, string>
  );

  languages["x-default"] = `${business.domain}${localizePath(defaultLocale, pathname)}`;

  return { languages };
}

function buildLocalizedEntry(locale: Locale, pathname: string, lastModified: Date) {
  return {
    url: `${business.domain}${localizePath(locale, pathname)}`,
    lastModified,
    alternates: buildAlternates(pathname)
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllInsightArticles();
  const staticLastModified = new Date();

  return locales.flatMap((locale) => [
    ...routes.map((route) => buildLocalizedEntry(locale, route, staticLastModified)),
    ...articles.map((article) =>
      buildLocalizedEntry(locale, `/insights/${article.slug}`, new Date(`${article.publishedAt}T00:00:00.000Z`))
    )
  ]);
}
