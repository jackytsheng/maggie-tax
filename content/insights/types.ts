import type { Locale } from "@/lib/i18n";

export interface InsightArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InsightArticleTranslation {
  metaTitle: string;
  metaDescription: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  status: string;
  publishedLabel: string;
  readTimeLabel: string;
  intro: string;
  sections: InsightArticleSection[];
  takeawayTitle: string;
  takeawayItems: string[];
}

export interface InsightArticle {
  slug: string;
  publishedAt: string;
  featured?: boolean;
  translations: Record<Locale, InsightArticleTranslation>;
}
