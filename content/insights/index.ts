import { getYourTaxReturnReadyArticle } from "@/content/insights/articles/get-your-tax-return-ready";
import type { InsightArticle } from "@/content/insights/types";
import type { Locale } from "@/lib/i18n";

// Future articles can be added here by importing a new file from content/insights/articles/.
const articles: InsightArticle[] = [getYourTaxReturnReadyArticle].sort((left, right) =>
  right.publishedAt.localeCompare(left.publishedAt)
);

export function getAllInsightArticles() {
  return articles;
}

export function getInsightArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getLocalizedInsightSummaries(locale: Locale) {
  return articles.map((article) => ({
    slug: article.slug,
    publishedAt: article.publishedAt,
    featured: article.featured ?? false,
    ...article.translations[locale]
  }));
}
