import { notFound } from "next/navigation";

import { InsightArticleView } from "@/components/InsightArticleView";
import { StructuredData } from "@/components/StructuredData";
import { getAllInsightArticles, getInsightArticleBySlug } from "@/content/insights";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";
import { locales } from "@/lib/i18n";

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

  return buildMetadata({
    locale,
    pathname: `/insights/${article.slug}`,
    title: translation.metaTitle,
    description: translation.metaDescription,
    keywords: dictionary.meta.keywords
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

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: translation.title,
          description: translation.metaDescription,
          datePublished: article.publishedAt,
          articleSection: translation.category
        }}
      />
      <InsightArticleView article={article} dictionary={dictionary} locale={locale} />
    </>
  );
}
