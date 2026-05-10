import type { MetadataRoute } from "next";

import { business } from "@/content/business";
import { getAllInsightArticles } from "@/content/insights";
import { locales, localizePath } from "@/lib/i18n";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const articles = await getAllInsightArticles();

  return locales.flatMap((locale) =>
    [
      ...routes.map((route) => ({
        url: `${business.domain}${localizePath(locale, route)}`,
        lastModified
      })),
      ...articles.map((article) => ({
        url: `${business.domain}${localizePath(locale, `/insights/${article.slug}`)}`,
        lastModified: new Date(`${article.publishedAt}T00:00:00.000Z`)
      }))
    ]
  );
}
