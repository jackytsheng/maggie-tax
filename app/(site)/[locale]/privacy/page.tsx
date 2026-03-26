import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";
import { localizePath } from "@/lib/i18n";

const pathname = "/privacy";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return buildMetadata({
    locale,
    pathname,
    title: dictionary.privacyPage.metaTitle,
    description: dictionary.privacyPage.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.privacyPage.hero.eyebrow }
        ]}
        description={dictionary.privacyPage.hero.description}
        eyebrow={dictionary.privacyPage.hero.eyebrow}
        locale={locale}
        title={dictionary.privacyPage.hero.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container>
          <div className="section-card px-6 py-7 sm:px-8 lg:px-10">
            <p className="max-w-4xl text-base leading-8 sm:text-lg">{dictionary.privacyPage.intro}</p>
            <div className="mt-8 space-y-6">
              {dictionary.privacyPage.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">{section.title}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="mt-8 rounded-[1.6rem] bg-[var(--surface-soft)] px-5 py-5">
              <p className="text-sm leading-7 sm:text-base">
                {dictionary.privacyPage.contactPrompt}{" "}
                <Link className="font-semibold text-[var(--primary)]" href={localizePath(locale, "/contact")}>
                  {dictionary.contactPage.hero.eyebrow}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
