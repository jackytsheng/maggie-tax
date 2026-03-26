import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StructuredData } from "@/components/StructuredData";
import { ValueCard } from "@/components/ValueCard";

import type { Dictionary, ServiceDetailCopy } from "@/content/i18n/schema";
import type { Locale } from "@/lib/i18n";
import { buildFaqSchema, buildProfessionalServiceSchema } from "@/lib/structured-data";

interface ServiceDetailPageProps {
  locale: Locale;
  pathname: string;
  content: ServiceDetailCopy;
  dictionary: Dictionary;
}

export function ServiceDetailPage({ locale, pathname, content, dictionary }: ServiceDetailPageProps) {
  return (
    <>
      <StructuredData
        data={[
          buildProfessionalServiceSchema(locale, content.hero.title, content.hero.description, pathname),
          buildFaqSchema(locale, pathname, content.faqItems)
        ]}
      />
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.nav.links.find((item) => item.href === "/services")?.label ?? "Services", href: "/services" },
          { label: content.hero.eyebrow }
        ]}
        description={content.hero.description}
        eyebrow={content.hero.eyebrow}
        locale={locale}
        title={content.hero.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card px-6 py-7 sm:px-8">
            <SectionHeading title={content.overview.title} />
            <p className="mt-4 text-base leading-8">{content.overview.body}</p>
            <ul className="mt-6 space-y-3">
              {content.overview.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-7 text-[var(--foreground)] sm:text-base">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-card px-6 py-7 sm:px-8">
            <SectionHeading title={content.suitableTitle} />
            <ul className="mt-5 space-y-3">
              {content.suitableItems.map((item) => (
                <li key={item} className="rounded-2xl bg-[var(--surface-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-10 sm:pb-14">
        <Container>
          <SectionHeading title={content.highlightsTitle} />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.highlights.map((item) => (
              <ValueCard item={item} key={item.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-10 sm:pb-14">
        <Container>
          <SectionHeading title={content.faqTitle} />
          <div className="mt-6">
            <FAQAccordion items={content.faqItems} />
          </div>
        </Container>
      </section>

      <CTASection content={content.cta} locale={locale} />
    </>
  );
}
