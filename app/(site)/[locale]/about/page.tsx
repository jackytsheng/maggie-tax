import Image from "next/image";

import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueCard } from "@/components/ValueCard";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return buildMetadata({
    locale,
    pathname: "/about",
    title: dictionary.about.metaTitle,
    description: dictionary.about.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);
  const founderPhotoAlt = locale === "zh" ? `${dictionary.about.founder.title} 形象照` : `Portrait of ${dictionary.about.founder.title}`;

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.about.hero.eyebrow }
        ]}
        description={dictionary.about.hero.description}
        eyebrow={dictionary.about.hero.eyebrow}
        locale={locale}
        title={dictionary.about.hero.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card px-6 py-7 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{dictionary.about.founder.role}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">{dictionary.about.founder.title}</h2>
            <div className="mt-6 flex items-center justify-center">
              <Image
                alt={founderPhotoAlt}
                className="h-auto max-h-[500px] w-auto max-w-full rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-soft)]"
                height={1536}
                priority
                src="/images/founder-maggie.jpg"
                width={1024}
              />
            </div>
            <div className="mt-5 space-y-4">
              {dictionary.about.founder.summary.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-[var(--surface-soft)] px-5 py-4">
              <p className="text-sm leading-7 text-[var(--foreground)]">{dictionary.about.founder.warmNote}</p>
            </div>
          </div>

          <div className="section-card self-start px-6 py-7 sm:px-8">
            <SectionHeading description={dictionary.about.qualifications.description} title={dictionary.about.qualifications.title} />
            <ul className="mt-5 space-y-3">
              {dictionary.about.qualifications.items.map((item) => (
                <li key={item} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-10 sm:pb-14">
        <Container>
          <SectionHeading description={dictionary.about.philosophy.description} title={dictionary.about.philosophy.title} />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {dictionary.about.philosophy.items.map((item) => (
              <ValueCard item={item} key={item.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-10 sm:pb-14">
        <Container>
          <SectionHeading description={dictionary.about.reasons.description} title={dictionary.about.reasons.title} />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {dictionary.about.reasons.items.map((item) => (
              <ValueCard item={item} key={item.title} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection content={dictionary.about.cta} locale={locale} />
    </>
  );
}
