import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return buildMetadata({
    locale,
    pathname: "/services",
    title: dictionary.servicesPage.metaTitle,
    description: dictionary.servicesPage.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.servicesPage.hero.eyebrow }
        ]}
        description={dictionary.servicesPage.hero.description}
        eyebrow={dictionary.servicesPage.hero.eyebrow}
        locale={locale}
        title={dictionary.servicesPage.hero.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container>
          <div className="section-card px-6 py-7 sm:px-8">
            <p className="max-w-4xl text-base leading-8 sm:text-lg">{dictionary.servicesPage.intro}</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dictionary.servicesPage.cards.map((card) => (
              <ServiceCard card={card} key={card.title} learnMoreLabel={dictionary.common.learnMore} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-10 sm:pb-14">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-card px-6 py-7 sm:px-8">
            <SectionHeading
              description={dictionary.servicesPage.supportAreas.description}
              title={dictionary.servicesPage.supportAreas.title}
            />
            <ul className="mt-5 space-y-3">
              {dictionary.servicesPage.supportAreas.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--foreground)] sm:text-base">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-card px-6 py-7 sm:px-8">
            <SectionHeading description={dictionary.servicesPage.process.description} title={dictionary.servicesPage.process.title} />
            <div className="mt-6">
              <ProcessSteps steps={dictionary.servicesPage.process.steps} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection content={dictionary.servicesPage.cta} locale={locale} />
    </>
  );
}
