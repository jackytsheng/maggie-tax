import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";
import { buildFaqSchema } from "@/lib/structured-data";

const pathname = "/faq";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return buildMetadata({
    locale,
    pathname,
    title: dictionary.faqPage.metaTitle,
    description: dictionary.faqPage.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);
  const items = dictionary.faqPage.groups.flatMap((group) => group.items);

  return (
    <>
      <StructuredData data={buildFaqSchema(locale, pathname, items)} />
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.faqPage.hero.eyebrow }
        ]}
        description={dictionary.faqPage.hero.description}
        eyebrow={dictionary.faqPage.hero.eyebrow}
        locale={locale}
        title={dictionary.faqPage.hero.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container className="space-y-6">
          {dictionary.faqPage.groups.map((group) => (
            <section className="section-card px-6 py-7 sm:px-8" key={group.title}>
              <SectionHeading description={group.description} title={group.title} />
              <div className="mt-6">
                <FAQAccordion items={group.items} />
              </div>
            </section>
          ))}
        </Container>
      </section>

      <CTASection content={dictionary.faqPage.cta} locale={locale} />
    </>
  );
}
