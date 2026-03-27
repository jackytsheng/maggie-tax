import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";

import { z } from "zod";

const articlesDirectory = path.join(process.cwd(), "content/insights/articles");

const localizedSectionSchema = z.object({
  title: z.string().trim().min(1),
  paragraphs: z.array(z.string().trim().min(1)).min(1),
  bullets: z.array(z.string().trim().min(1)).optional(),
  numberedPoints: z.array(z.string().trim().min(1)).optional()
});

const localizedArticleSchema = z.object({
  card: z.object({
    title: z.string().trim().min(1),
    excerpt: z.string().trim().min(1),
    category: z.string().trim().min(1),
    tag: z.string().trim().min(1)
  }),
  intro: z.string().trim().min(1),
  sections: z.array(localizedSectionSchema).min(1),
  takeawayTitle: z.string().trim().min(1),
  takeawayItems: z.array(z.string().trim().min(1)).min(1)
});

const articleSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  featured: z.boolean().optional(),
  translations: z.object({
    zh: localizedArticleSchema,
    en: localizedArticleSchema
  })
});

async function loadArticleEntries() {
  const entries = await fs.readdir(articlesDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .sort((left, right) => left.name.localeCompare(right.name));
}

function formatZodIssues(fullPath, error) {
  return error.issues
    .map((issue) => {
      const fieldPath = issue.path.length ? issue.path.join(".") : "(root)";
      return `${fullPath}: ${fieldPath} - ${issue.message}`;
    })
    .join("\n");
}

let parsedArticlesPromise;

async function loadParsedArticles() {
  if (!parsedArticlesPromise) {
    parsedArticlesPromise = (async () => {
      const entries = await loadArticleEntries();

      return Promise.all(
        entries.map(async (entry) => {
          const fullPath = path.join(articlesDirectory, entry.name);

          console.log(`[insight-validator] checking ${entry.name}`);

          const raw = await fs.readFile(fullPath, "utf8");
          let parsedJson;

          try {
            parsedJson = JSON.parse(raw);
          } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            throw new Error(`${fullPath}: invalid JSON syntax - ${message}`);
          }

          const parsedArticle = articleSchema.safeParse(parsedJson);

          if (!parsedArticle.success) {
            throw new Error(formatZodIssues(fullPath, parsedArticle.error));
          }

          console.log(`[insight-validator] passed ${entry.name}`);

          return {
            entry,
            fullPath,
            article: parsedArticle.data
          };
        })
      );
    })();
  }

  return parsedArticlesPromise;
}

function assertEquivalentStructure(left, right, fieldLabel, fullPath) {
  assert.equal(
    left,
    right,
    `${fullPath}: zh and en should have the same ${fieldLabel} count so both locales stay aligned`
  );
}

test("every insight article file is valid JSON and matches the article schema", async () => {
  const parsedArticles = await loadParsedArticles();

  assert.ok(parsedArticles.length > 0, "Expected at least one insight article file");
});

test("every insight article filename matches its slug", async () => {
  const parsedArticles = await loadParsedArticles();

  for (const { entry, article, fullPath } of parsedArticles) {
    assert.equal(entry.name, `${article.slug}.json`, `${fullPath}: filename should match slug`);
  }
});

test("every insight article has a valid UTC date", async () => {
  const parsedArticles = await loadParsedArticles();

  for (const { article, fullPath } of parsedArticles) {
    const parsedDate = new Date(`${article.publishedAt}T00:00:00.000Z`);

    assert.equal(Number.isNaN(parsedDate.getTime()), false, `${fullPath}: publishedAt must be a valid date`);
    assert.equal(parsedDate.toISOString().slice(0, 10), article.publishedAt, `${fullPath}: publishedAt is not a real calendar date`);
  }
});

test("every insight article slug is unique", async () => {
  const parsedArticles = await loadParsedArticles();
  const seen = new Set();

  for (const { article, fullPath } of parsedArticles) {
    assert.equal(seen.has(article.slug), false, `${fullPath}: duplicate slug "${article.slug}"`);
    seen.add(article.slug);
  }
});

test("every insight article keeps zh and en structurally aligned", async () => {
  const parsedArticles = await loadParsedArticles();

  for (const { article, fullPath } of parsedArticles) {
    const zhTranslation = article.translations.zh;
    const enTranslation = article.translations.en;

    assertEquivalentStructure(zhTranslation.sections.length, enTranslation.sections.length, "section", fullPath);
    assertEquivalentStructure(zhTranslation.takeawayItems.length, enTranslation.takeawayItems.length, "takeaway item", fullPath);

    for (let index = 0; index < zhTranslation.sections.length; index += 1) {
      const zhSection = zhTranslation.sections[index];
      const enSection = enTranslation.sections[index];

      assertEquivalentStructure(
        zhSection.paragraphs.length,
        enSection.paragraphs.length,
        `paragraph count in section ${index + 1}`,
        fullPath
      );
      assertEquivalentStructure(
        zhSection.bullets?.length ?? 0,
        enSection.bullets?.length ?? 0,
        `bullet count in section ${index + 1}`,
        fullPath
      );
      assertEquivalentStructure(
        zhSection.numberedPoints?.length ?? 0,
        enSection.numberedPoints?.length ?? 0,
        `numbered point count in section ${index + 1}`,
        fullPath
      );
    }
  }
});
