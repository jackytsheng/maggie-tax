import { z } from "zod";

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

export interface LocalizedInsightSummary extends InsightArticleTranslation {
  slug: string;
  publishedAt: string;
  featured: boolean;
}

export interface InsightArchiveFilter {
  year?: number;
  month?: number;
}

export interface InsightArchiveMonthOption {
  value: number;
  label: string;
  count: number;
}

export interface InsightArchiveYearOption {
  value: number;
  count: number;
}

export interface InsightArchiveResult {
  items: LocalizedInsightSummary[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  filters: InsightArchiveFilter;
  availableYears: InsightArchiveYearOption[];
  availableMonths: InsightArchiveMonthOption[];
}

const insightArticleSectionSchema = z.object({
  title: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  bullets: z.array(z.string().min(1)).optional()
});

const insightArticleTranslationSchema = z.object({
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  status: z.string().min(1),
  publishedLabel: z.string().min(1),
  readTimeLabel: z.string().min(1),
  intro: z.string().min(1),
  sections: z.array(insightArticleSectionSchema).min(1),
  takeawayTitle: z.string().min(1),
  takeawayItems: z.array(z.string().min(1)).min(1)
});

export const insightArticleSchema = z.object({
  slug: z.string().trim().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  featured: z.boolean().optional(),
  translations: z.object({
    cn: insightArticleTranslationSchema,
    en: insightArticleTranslationSchema
  })
});

export type InsightArticleFile = z.infer<typeof insightArticleSchema>;
