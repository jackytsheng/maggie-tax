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
  InsightArchiveTermOption,
  LocalizedInsightSummary
} from "@/content/insights/types";
import { INSIGHT_CATEGORY_DEFINITIONS, insightArticleSchema } from "@/content/insights/types";

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content/insights/articles");
export const INSIGHTS_PAGE_SIZE = 3;
const READING_SPEED_CHARACTERS_PER_MINUTE: Record<Locale, number> = {
  zh: 320,
  en: 900
};
const insightCategoryKeys = Object.keys(INSIGHT_CATEGORY_DEFINITIONS) as Array<keyof typeof INSIGHT_CATEGORY_DEFINITIONS>;

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

function createInsightFilterKey(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function getInsightCategoryKey(article: InsightArticle) {
  const englishCategory = article.translations.en.card.category;
  const matchedKey = insightCategoryKeys.find((key) => INSIGHT_CATEGORY_DEFINITIONS[key].en === englishCategory);

  if (!matchedKey) {
    throw new Error(`Unsupported insight category for article "${article.slug}": ${englishCategory}`);
  }

  return matchedKey;
}

function getInsightTagOptionsForArticle(article: InsightArticle, locale: Locale) {
  const englishTags = article.translations.en.card.tags;
  const localizedTags = article.translations[locale].card.tags;

  return englishTags.map((englishTag, index) => ({
    value: createInsightFilterKey(englishTag),
    label: localizedTags[index] ?? englishTag
  }));
}

function articleMatchesCategory(article: InsightArticle, selectedCategory?: string) {
  return !selectedCategory || getInsightCategoryKey(article) === selectedCategory;
}

function articleMatchesTag(article: InsightArticle, selectedTag?: string) {
  return !selectedTag || article.translations.en.card.tags.some((tag) => createInsightFilterKey(tag) === selectedTag);
}

function articleMatchesDate(article: InsightArticle, selectedYear?: number, selectedMonth?: number) {
  const { year, month } = getYearAndMonth(article.publishedAt);

  if (selectedYear && year !== selectedYear) {
    return false;
  }

  if (selectedMonth && month !== selectedMonth) {
    return false;
  }

  return true;
}

function buildCategoryOptions(articles: InsightArticle[], locale: Locale): InsightArchiveTermOption[] {
  const counts = articles.reduce((accumulator, article) => {
    const categoryKey = getInsightCategoryKey(article);

    accumulator.set(categoryKey, (accumulator.get(categoryKey) ?? 0) + 1);
    return accumulator;
  }, new Map<keyof typeof INSIGHT_CATEGORY_DEFINITIONS, number>());
  const options: InsightArchiveTermOption[] = [];

  for (const key of insightCategoryKeys) {
    const count = counts.get(key) ?? 0;

    if (!count) {
      continue;
    }

    options.push({
      value: key,
      label: INSIGHT_CATEGORY_DEFINITIONS[key][locale],
      count
    });
  }

  return options;
}

function buildTagOptions(articles: InsightArticle[], locale: Locale): InsightArchiveTermOption[] {
  const options = new Map<string, InsightArchiveTermOption>();

  for (const article of articles) {
    for (const tag of getInsightTagOptionsForArticle(article, locale)) {
      const current = options.get(tag.value);

      options.set(tag.value, {
        value: tag.value,
        label: current?.label ?? tag.label,
        count: (current?.count ?? 0) + 1
      });
    }
  }

  return Array.from(options.values()).sort(
    (left, right) => right.count - left.count || left.label.localeCompare(right.label, localeToHtmlLang[locale])
  );
}

function buildYearOptions(articles: InsightArticle[]) {
  return Array.from(
    articles.reduce((accumulator, article) => {
      const { year } = getYearAndMonth(article.publishedAt);

      accumulator.set(year, (accumulator.get(year) ?? 0) + 1);
      return accumulator;
    }, new Map<number, number>())
  )
    .sort((left, right) => right[0] - left[0])
    .map(([value, count]) => ({ value, count }));
}

function buildMonthOptions(articles: InsightArticle[], locale: Locale, year: number) {
  return Array.from(
    articles.reduce((accumulator, article) => {
      const { month } = getYearAndMonth(article.publishedAt);
      const current = accumulator.get(month) ?? { count: 0, label: buildMonthLabel(locale, year, month) };

      accumulator.set(month, {
        count: current.count + 1,
        label: current.label
      });
      return accumulator;
    }, new Map<number, { count: number; label: string }>())
  )
    .sort((left, right) => right[0] - left[0])
    .map(([value, option]) => ({ value, ...option }));
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

async function readInsightArticles(): Promise<InsightArticle[]> {
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
}

const loadInsightArticlesCached = cache(readInsightArticles);

async function loadInsightArticles(): Promise<InsightArticle[]> {
  if (process.env.NODE_ENV === "development") {
    return readInsightArticles();
  }

  return loadInsightArticlesCached();
}

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
  const pageSize = Math.max(1, options.pageSize ?? INSIGHTS_PAGE_SIZE);
  const selectedCategory = options.category;
  const selectedTag = options.tag;
  const selectedYear = options.year;
  const selectedMonth = selectedYear ? options.month : undefined;

  const filteredArticles = articles.filter(
    (article) =>
      articleMatchesCategory(article, selectedCategory) &&
      articleMatchesTag(article, selectedTag) &&
      articleMatchesDate(article, selectedYear, selectedMonth)
  );
  const latestSourceArticle = filteredArticles[0] ?? articles[0] ?? null;
  const latestItem = latestSourceArticle ? localizeInsightSummary(latestSourceArticle, locale) : null;

  const availableCategories = buildCategoryOptions(
    articles.filter(
      (article) => articleMatchesTag(article, selectedTag) && articleMatchesDate(article, selectedYear, selectedMonth)
    ),
    locale
  );
  const availableTags = buildTagOptions(
    articles.filter(
      (article) => articleMatchesCategory(article, selectedCategory) && articleMatchesDate(article, selectedYear, selectedMonth)
    ),
    locale
  );
  const yearSourceArticles = articles.filter(
    (article) => articleMatchesCategory(article, selectedCategory) && articleMatchesTag(article, selectedTag)
  );
  const availableYears = buildYearOptions(yearSourceArticles);
  const monthSourceArticles = selectedYear
    ? yearSourceArticles.filter((article) => getYearAndMonth(article.publishedAt).year === selectedYear)
    : [];
  const availableMonths = selectedYear ? buildMonthOptions(monthSourceArticles, locale, selectedYear) : [];

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
      category: selectedCategory,
      tag: selectedTag,
      year: selectedYear,
      month: selectedMonth
    },
    availableCategories,
    availableTags,
    availableYears,
    availableMonths
  };
}
