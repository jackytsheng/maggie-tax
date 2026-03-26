import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ValueCard } from "@/components/ValueCard";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";
import { localizePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return buildMetadata({
    locale,
    title: dictionary.home.metaTitle,
    description: dictionary.home.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return (
    <>
      <HeroSection
        content={dictionary.home.hero}
        locale={locale}
        previewCards={dictionary.home.services.cards}
        trustBar={dictionary.home.trustBar}
      />

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            description={dictionary.home.services.description}
            eyebrow={dictionary.home.services.eyebrow}
            title={dictionary.home.services.title}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dictionary.home.services.cards.map((card) => (
              <ServiceCard card={card} key={card.title} learnMoreLabel={dictionary.common.learnMore} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            description={dictionary.home.values.description}
            eyebrow={dictionary.home.values.eyebrow}
            title={dictionary.home.values.title}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dictionary.home.values.items.map((item) => (
              <ValueCard item={item} key={item.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="section-card px-6 py-7 sm:px-8 lg:px-10">
            <SectionHeading
              description={dictionary.home.audiences.description}
              eyebrow={dictionary.home.audiences.eyebrow}
              title={dictionary.home.audiences.title}
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {dictionary.home.audiences.items.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-5">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            description={dictionary.home.process.description}
            eyebrow={dictionary.home.process.eyebrow}
            title={dictionary.home.process.title}
          />
          <div className="mt-6">
            <ProcessSteps steps={dictionary.home.process.steps} />
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            description={dictionary.home.faqPreview.description}
            eyebrow={dictionary.home.faqPreview.eyebrow}
            title={dictionary.home.faqPreview.title}
          />
          <div className="mt-6">
            <FAQAccordion items={dictionary.home.faqPreview.items} />
          </div>
          <div className="mt-6">
            <Link
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              href={localizePath(locale, "/faq")}
            >
              {dictionary.common.viewAllFaqs}
            </Link>
          </div>
        </Container>
      </section>

      <CTASection content={dictionary.home.cta} locale={locale} />
    </>
  );
}
