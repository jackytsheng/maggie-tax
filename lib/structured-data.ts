import { business } from "@/content/business";
import type { InsightArticle } from "@/content/insights/types";
import type { FaqItem } from "@/content/i18n/schema";
import { localizePath, localeToHtmlLang, type Locale } from "@/lib/i18n";

function buildAbsoluteUrl(locale: Locale, pathname: string) {
  return `${business.domain}${localizePath(locale, pathname)}`;
}

function flattenInsightArticleBody(article: InsightArticle, locale: Locale) {
  const translation = article.translations[locale];

  return [
    translation.intro,
    ...translation.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.numberedPoints ?? [])
    ]),
    translation.takeawayTitle,
    ...translation.takeawayItems
  ].join("\n\n");
}

export function buildOrganizationSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    legalName: business.legalName,
    identifier: business.abn,
    url: business.domain,
    email: business.email,
    weChat: business.weChat,
    description,
    areaServed: "Australia",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: business.country
    },
    founder: {
      "@type": "Person",
      name: business.founderName
    },
    availableLanguage: [localeToHtmlLang[locale], "en-AU", "zh-Hans"]
  };
}

export function buildProfessionalServiceSchema(
  locale: Locale,
  name: string,
  description: string,
  pathname: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    identifier: business.abn,
    url: buildAbsoluteUrl(locale, pathname),
    serviceType: "Accounting and tax advisory",
    areaServed: "Australia",
    provider: {
      "@type": "Organization",
      name: business.name
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: business.country
    }
  };
}

export function buildFaqSchema(locale: Locale, pathname: string, items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: localeToHtmlLang[locale],
    url: buildAbsoluteUrl(locale, pathname),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function buildBreadcrumbSchema(locale: Locale, items: Array<{ label: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: buildAbsoluteUrl(locale, item.href)
    }))
  };
}

export function buildInsightArticleSchema(locale: Locale, pathname: string, article: InsightArticle) {
  const translation = article.translations[locale];
  const url = buildAbsoluteUrl(locale, pathname);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: translation.card.title,
    description: translation.card.excerpt,
    abstract: translation.intro,
    inLanguage: localeToHtmlLang[locale],
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    datePublished: article.publishedAt,
    articleSection: translation.card.category,
    keywords: translation.card.tags.join(", "),
    about: translation.card.tags.map((tag) => ({
      "@type": "Thing",
      name: tag
    })),
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: business.founderName
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.domain,
      logo: {
        "@type": "ImageObject",
        url: `${business.domain}/web-app-manifest-512x512.png`
      }
    },
    articleBody: flattenInsightArticleBody(article, locale)
  };
}
