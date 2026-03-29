import { business } from "@/content/business";
import type { FaqItem } from "@/content/i18n/schema";
import { localizePath, localeToHtmlLang, type Locale } from "@/lib/i18n";

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
    url: `${business.domain}${localizePath(locale, pathname)}`,
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
    url: `${business.domain}${localizePath(locale, pathname)}`,
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
