import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InsightsArchive } from "@/components/InsightsArchive";
import { PageHero } from "@/components/PageHero";
import { getInsightArchive } from "@/content/insights";
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

function parsePositiveInteger(value: string | string[] | undefined) {
  const candidate = Array.isArray(value) ? value[0] : value;
  const parsed = Number(candidate);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

export default async function InsightsPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string | string[]; year?: string | string[]; month?: string | string[] }>;
}) {
  const { locale, dictionary } = await getLocaleDictionary(params);
  const resolvedSearchParams = await searchParams;
  const archive = await getInsightArchive(locale, {
    page: parsePositiveInteger(resolvedSearchParams.page),
    year: parsePositiveInteger(resolvedSearchParams.year),
    month: parsePositiveInteger(resolvedSearchParams.month)
  });

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
          <InsightsArchive
            archive={archive}
            copy={dictionary.insightsPage.archive}
            locale={locale}
            readMoreLabel={dictionary.common.readMore}
          />
        </Container>
      </section>

      <CTASection content={dictionary.insightsPage.cta} locale={locale} />
    </>
  );
}
