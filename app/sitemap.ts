import type { MetadataRoute } from "next";

import { business } from "@/content/business";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${business.domain}${localizePath(locale, route)}`,
      lastModified
    }))
  );
}
