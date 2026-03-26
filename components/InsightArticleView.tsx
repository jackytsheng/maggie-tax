import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

import type { InsightArticle } from "@/content/insights/types";
import type { Dictionary } from "@/content/i18n/schema";
import type { Locale } from "@/lib/i18n";

interface InsightArticleViewProps {
  article: InsightArticle;
  dictionary: Dictionary;
  locale: Locale;
}

export function InsightArticleView({ article, dictionary, locale }: InsightArticleViewProps) {
  const translation = article.translations[locale];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.insightsPage.hero.eyebrow, href: "/insights" },
          { label: translation.title }
        ]}
        description={translation.excerpt}
        eyebrow={translation.category}
        locale={locale}
        title={translation.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container className="grid gap-6 lg:grid-cols-[1fr_0.34fr]">
          <article className="section-card px-6 py-7 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted-soft)]">
              <span className="rounded-full bg-[var(--surface-sage)] px-3 py-1 font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
                {translation.status}
              </span>
              <span>{translation.publishedLabel}</span>
              <span aria-hidden="true">•</span>
              <span>{translation.readTimeLabel}</span>
            </div>

            <p className="mt-6 text-lg leading-8 text-[var(--foreground)]">{translation.intro}</p>

            <div className="mt-8 space-y-8">
              {translation.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-7 text-[var(--foreground)] sm:text-base">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="section-card px-5 py-6 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                {translation.takeawayTitle}
              </p>
              <ul className="mt-5 space-y-3">
                {translation.takeawayItems.map((item) => (
                  <li key={item} className="rounded-[1.4rem] bg-[var(--surface-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <CTASection content={dictionary.insightsPage.cta} locale={locale} />
    </>
  );
}
