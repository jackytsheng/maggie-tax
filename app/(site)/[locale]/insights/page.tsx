import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InsightCard } from "@/components/InsightCard";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";

const pathname = "/insights";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return buildMetadata({
    locale,
    pathname,
    title: dictionary.insightsPage.metaTitle,
    description: dictionary.insightsPage.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.insightsPage.hero.eyebrow }
        ]}
        description={dictionary.insightsPage.hero.description}
        eyebrow={dictionary.insightsPage.hero.eyebrow}
        locale={locale}
        title={dictionary.insightsPage.hero.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container className="space-y-6">
          <div className="section-card px-6 py-7 sm:px-8">
            <p className="max-w-4xl text-base leading-8 sm:text-lg">{dictionary.insightsPage.intro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dictionary.insightsPage.cards.map((card) => (
              <InsightCard card={card} key={card.title} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection content={dictionary.insightsPage.cta} locale={locale} />
    </>
  );
}
