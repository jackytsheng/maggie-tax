import "../../globals.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

import { business } from "@/content/business";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { getDictionary, isLocale, locales, localeToHtmlLang } from "@/lib/i18n";
import { buildOrganizationSchema, buildProfessionalServiceSchema } from "@/lib/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : locales[0];

  return {
    metadataBase: new URL(business.domain),
    applicationName: business.name,
    icons: {
      icon: [
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon.svg", type: "image/svg+xml" }
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
      title: "MaggieXingTax"
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);

  return (
    <html lang={localeToHtmlLang[localeParam]}>
      <body className="relative min-h-screen">
        <a
          className="primary-surface focus-ring sr-only left-4 top-4 z-[60] rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute"
          href="#main-content"
        >
          {dictionary.common.skipToContent}
        </a>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_right,_rgba(212,167,155,0.16),_transparent_34%),radial-gradient(circle_at_top_left,_rgba(47,111,107,0.12),_transparent_28%)]" />
        <StructuredData
          data={[
            buildOrganizationSchema(localeParam, dictionary.meta.siteDescription),
            buildProfessionalServiceSchema(localeParam, business.name, dictionary.meta.siteDescription, "")
          ]}
        />
        <SiteHeader
          ctaLabel={dictionary.nav.ctaLabel}
          languageSwitcherLabel={dictionary.nav.languageSwitcherLabel}
          links={dictionary.nav.links}
          locale={localeParam}
          mobileMenuLabel={dictionary.nav.mobileMenuLabel}
        />
        <main className="pb-6" id="main-content">
          {children}
        </main>
        <SiteFooter dictionary={dictionary} locale={localeParam} />
        <AnalyticsScripts />
        <Analytics />
      </body>
    </html>
  );
}
