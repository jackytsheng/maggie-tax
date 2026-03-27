import { z } from "zod";

import type { Locale } from "@/lib/i18n";

export interface InsightArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  numberedPoints?: string[];
}

export interface InsightArticleCardMeta {
  title: string;
  excerpt: string;
  category: string;
  tag: string;
}

export interface InsightArticleTranslation {
  metaTitle: string;
  metaDescription: string;
  card: InsightArticleCardMeta;
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

export interface LocalizedInsightSummary extends InsightArticleCardMeta {
  slug: string;
  publishedAt: string;
  featured: boolean;
  publishedLabel: string;
  readTimeLabel: string;
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
  latestItem: LocalizedInsightSummary | null;
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
  bullets: z.array(z.string().min(1)).optional(),
  numberedPoints: z.array(z.string().min(1)).optional()
});

const insightArticleTranslationSchema = z.object({
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  card: z.object({
    title: z.string().min(1),
    excerpt: z.string().min(1),
    category: z.string().min(1),
    tag: z.string().min(1)
  }),
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
    zh: insightArticleTranslationSchema,
    en: insightArticleTranslationSchema
  })
});

export type InsightArticleFile = z.infer<typeof insightArticleSchema>;
