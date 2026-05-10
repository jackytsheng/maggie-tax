import { notFound } from "next/navigation";

import { InsightArticleView } from "@/components/InsightArticleView";
import { StructuredData } from "@/components/StructuredData";
import { business } from "@/content/business";
import { getAllInsightArticles, getInsightArticleBySlug } from "@/content/insights";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";
import { locales } from "@/lib/i18n";
import { buildBreadcrumbSchema, buildInsightArticleSchema } from "@/lib/structured-data";

function buildInsightMetadataKeywords(siteKeywords: string[], articleKeywords: string[]) {
  const mergedKeywords: string[] = [];
  const seenKeywords = new Set<string>();

  for (const keyword of [...articleKeywords, ...siteKeywords]) {
    const normalizedKeyword = keyword.trim();

    if (!normalizedKeyword) {
      continue;
    }

    const normalizedLookupKey = normalizedKeyword.toLocaleLowerCase();

    if (seenKeywords.has(normalizedLookupKey)) {
      continue;
    }

    seenKeywords.add(normalizedLookupKey);
    mergedKeywords.push(normalizedKeyword);
  }

  return mergedKeywords;
}

export async function generateStaticParams() {
  const articles = await getAllInsightArticles();

  return locales.flatMap((locale) => articles.map((article) => ({ locale, slug: article.slug })));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, dictionary } = await getLocaleDictionary(
    params.then(({ locale }) => ({
      locale
    }))
  );
  const { slug } = await params;
  const article = await getInsightArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const translation = article.translations[locale];
  const articlePathname = `/insights/${article.slug}`;

  return buildMetadata({
    locale,
    pathname: articlePathname,
    title: translation.card.title,
    description: translation.card.excerpt,
    keywords: buildInsightMetadataKeywords(dictionary.meta.keywords, [
      translation.card.category,
      ...translation.card.tags
    ]),
    type: "article",
    category: translation.card.category,
    authors: [business.founderName],
    publishedTime: new Date(`${article.publishedAt}T00:00:00.000Z`).toISOString(),
    tags: translation.card.tags,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  });
}

export default async function InsightArticlePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, dictionary } = await getLocaleDictionary(
    params.then(({ locale }) => ({
      locale
    }))
  );
  const { slug } = await params;
  const article = await getInsightArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const translation = article.translations[locale];
  const articlePathname = `/insights/${article.slug}`;
  const breadcrumbItems = [
    { label: dictionary.common.homeLabel, href: "" },
    { label: dictionary.insightsPage.hero.eyebrow, href: "/insights" },
    { label: translation.card.title, href: articlePathname }
  ];

  return (
    <>
      <StructuredData
        data={[
          buildBreadcrumbSchema(locale, breadcrumbItems),
          buildInsightArticleSchema(locale, articlePathname, article)
        ]}
      />
      <InsightArticleView article={article} dictionary={dictionary} locale={locale} />
    </>
  );
}
