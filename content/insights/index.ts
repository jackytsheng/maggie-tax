import "server-only";

import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";

import type { Locale } from "@/lib/i18n";
import { localeToHtmlLang } from "@/lib/i18n";

import type {
  InsightArticle,
  InsightArchiveFilter,
  InsightArchiveResult,
  LocalizedInsightSummary
} from "@/content/insights/types";
import { insightArticleSchema } from "@/content/insights/types";

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content/insights/articles");
export const INSIGHTS_PAGE_SIZE = 3;
const READING_SPEED_CHARACTERS_PER_MINUTE: Record<Locale, number> = {
  zh: 320,
  en: 900
};

function getYearAndMonth(publishedAt: string) {
  const [year, month] = publishedAt.split("-").map((value) => Number(value));

  return { year, month };
}

function buildMonthLabel(locale: Locale, year: number, month: number) {
  return new Intl.DateTimeFormat(localeToHtmlLang[locale], {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

export function formatInsightPublishedLabel(locale: Locale, publishedAt: string) {
  const [year, month, day] = publishedAt.split("-").map((value) => Number(value));

  return new Intl.DateTimeFormat(localeToHtmlLang[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function countInsightCharacters(article: InsightArticle, locale: Locale) {
  const translation = article.translations[locale];
  const sectionsText = translation.sections
    .flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets ?? []), ...(section.numberedPoints ?? [])])
    .join("");

  return [
    translation.card.title,
    translation.card.excerpt,
    translation.intro,
    sectionsText,
    translation.takeawayTitle,
    ...translation.takeawayItems
  ].join("").length;
}

export function formatInsightReadTimeLabel(article: InsightArticle, locale: Locale) {
  const characterCount = countInsightCharacters(article, locale);
  const readingSpeed = READING_SPEED_CHARACTERS_PER_MINUTE[locale];
  const minutes = Math.max(1, Math.ceil(characterCount / readingSpeed));

  return locale === "zh" ? `约 ${minutes} 分钟` : `${minutes} min read`;
}

const loadInsightArticles = cache(async (): Promise<InsightArticle[]> => {
  const entries = await fs.readdir(ARTICLES_DIRECTORY, { withFileTypes: true });
  const articleFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".json"));

  const articles = await Promise.all(
    articleFiles.map(async (entry) => {
      const fullPath = path.join(ARTICLES_DIRECTORY, entry.name);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const parsed = insightArticleSchema.safeParse(JSON.parse(fileContents));

      if (!parsed.success) {
        throw new Error(`Invalid insight article file: ${entry.name}`);
      }

      return parsed.data;
    })
  );

  return articles.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
});

export async function getAllInsightArticles() {
  return loadInsightArticles();
}

export async function getInsightArticleBySlug(slug: string) {
  const articles = await loadInsightArticles();

  return articles.find((article) => article.slug === slug);
}

function localizeInsightSummary(article: InsightArticle, locale: Locale): LocalizedInsightSummary {
  const translation = article.translations[locale];

  return {
    slug: article.slug,
    publishedAt: article.publishedAt,
    featured: article.featured ?? false,
    ...translation.card,
    publishedLabel: formatInsightPublishedLabel(locale, article.publishedAt),
    readTimeLabel: formatInsightReadTimeLabel(article, locale)
  };
}

export async function getLocalizedInsightSummaries(locale: Locale) {
  const articles = await loadInsightArticles();

  return articles.map((article) => localizeInsightSummary(article, locale));
}

export async function getInsightArchive(
  locale: Locale,
  options: InsightArchiveFilter & { page?: number; pageSize?: number } = {}
): Promise<InsightArchiveResult> {
  const articles = await loadInsightArticles();
  const latestItem = articles[0] ? localizeInsightSummary(articles[0], locale) : null;
  const pageSize = Math.max(1, options.pageSize ?? INSIGHTS_PAGE_SIZE);
  const selectedYear = options.year;
  const selectedMonth = selectedYear ? options.month : undefined;

  const filteredArticles = articles.filter((article) => {
    const { year, month } = getYearAndMonth(article.publishedAt);

    if (selectedYear && year !== selectedYear) {
      return false;
    }

    if (selectedMonth && month !== selectedMonth) {
      return false;
    }

    return true;
  });

  const availableYears = Array.from(
    articles.reduce((accumulator, article) => {
      const { year } = getYearAndMonth(article.publishedAt);

      accumulator.set(year, (accumulator.get(year) ?? 0) + 1);
      return accumulator;
    }, new Map<number, number>())
  )
    .sort((left, right) => right[0] - left[0])
    .map(([value, count]) => ({ value, count }));

  const monthSourceArticles = selectedYear
    ? articles.filter((article) => getYearAndMonth(article.publishedAt).year === selectedYear)
    : [];
  const availableMonths = Array.from(
    monthSourceArticles.reduce((accumulator, article) => {
      const { year, month } = getYearAndMonth(article.publishedAt);
      const current = accumulator.get(month) ?? { count: 0, label: buildMonthLabel(locale, selectedYear ?? year, month) };

      accumulator.set(month, {
        count: current.count + 1,
        label: current.label
      });
      return accumulator;
    }, new Map<number, { count: number; label: string }>())
  )
    .sort((left, right) => right[0] - left[0])
    .map(([value, option]) => ({ value, ...option }));

  const totalItems = filteredArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const page = Math.min(Math.max(options.page ?? 1, 1), totalPages);
  const startIndex = (page - 1) * pageSize;
  const items = filteredArticles.slice(startIndex, startIndex + pageSize).map((article) => localizeInsightSummary(article, locale));

  return {
    items,
    latestItem,
    page,
    pageSize,
    totalItems,
    totalPages,
    filters: {
      year: selectedYear,
      month: selectedMonth
    },
    availableYears,
    availableMonths
  };
}
