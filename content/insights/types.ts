import { z } from "zod";

import type { Locale } from "@/lib/i18n";

export const INSIGHT_MAX_TAGS = 3;
export const INSIGHT_CATEGORY_DEFINITIONS = {
  "individual-tax": {
    en: "Individual tax",
    zh: "个人税务"
  },
  "business-tax": {
    en: "Business tax",
    zh: "企业税务"
  },
  "ato-support": {
    en: "ATO support",
    zh: "ATO 协助"
  }
} as const;

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
  tags: string[];
}

export interface InsightArticleTranslation {
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
  category?: string;
  tag?: string;
  year?: number;
  month?: number;
}

export interface InsightArchiveTermOption {
  value: string;
  label: string;
  count: number;
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
  availableCategories: InsightArchiveTermOption[];
  availableTags: InsightArchiveTermOption[];
  availableYears: InsightArchiveYearOption[];
  availableMonths: InsightArchiveMonthOption[];
}

const insightArticleSectionSchema = z.object({
  title: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  bullets: z.array(z.string().min(1)).optional(),
  numberedPoints: z.array(z.string().min(1)).optional()
});

const insightEnCategorySchema = z.enum(
  Object.values(INSIGHT_CATEGORY_DEFINITIONS).map((definition) => definition.en) as [string, ...string[]]
);
const insightZhCategorySchema = z.enum(
  Object.values(INSIGHT_CATEGORY_DEFINITIONS).map((definition) => definition.zh) as [string, ...string[]]
);
const insightTagsSchema = z
  .array(z.string().trim().min(1))
  .min(1)
  .max(INSIGHT_MAX_TAGS)
  .superRefine((tags, refinementContext) => {
    const normalizedTags = tags.map((tag) => tag.toLocaleLowerCase());

    if (new Set(normalizedTags).size !== normalizedTags.length) {
      refinementContext.addIssue({
        code: "custom",
        message: "Tags must be unique."
      });
    }
  });

function buildInsightArticleTranslationSchema(locale: Locale) {
  const categorySchema = locale === "zh" ? insightZhCategorySchema : insightEnCategorySchema;

  return z.object({
    card: z.object({
      title: z.string().min(1),
      excerpt: z.string().min(1),
      category: categorySchema,
      tags: insightTagsSchema
    }),
    intro: z.string().min(1),
    sections: z.array(insightArticleSectionSchema).min(1),
    takeawayTitle: z.string().min(1),
    takeawayItems: z.array(z.string().min(1)).min(1)
  });
}

export const insightArticleSchema = z.object({
  slug: z.string().trim().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  featured: z.boolean().optional(),
  translations: z.object({
    zh: buildInsightArticleTranslationSchema("zh"),
    en: buildInsightArticleTranslationSchema("en")
  })
});

export type InsightArticleFile = z.infer<typeof insightArticleSchema>;
