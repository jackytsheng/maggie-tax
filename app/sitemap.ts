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
  const articleRoutes = (await getAllInsightArticles()).map((article) => `/insights/${article.slug}`);
  const allRoutes = [...routes, ...articleRoutes];

  return locales.flatMap((locale) =>
    allRoutes.map((route) => ({
      url: `${business.domain}${localizePath(locale, route)}`,
      lastModified
    }))
  );
}
