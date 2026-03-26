import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackedContactLink } from "@/components/TrackedContactLink";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";

const pathname = "/contact";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return buildMetadata({
    locale,
    pathname,
    title: dictionary.contactPage.metaTitle,
    description: dictionary.contactPage.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: dictionary.common.homeLabel, href: "" },
          { label: dictionary.contactPage.hero.eyebrow }
        ]}
        description={dictionary.contactPage.hero.description}
        eyebrow={dictionary.contactPage.hero.eyebrow}
        locale={locale}
        title={dictionary.contactPage.hero.title}
      />

      <section className="pb-10 sm:pb-14">
        <Container className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="section-card px-6 py-7 sm:px-8">
              <SectionHeading description={dictionary.contactPage.intro} title={dictionary.contactPage.detailsTitle} />
              <p className="mt-4 text-sm leading-7 sm:text-base">{dictionary.contactPage.detailsDescription}</p>
              <ul className="mt-6 space-y-4">
                {dictionary.contactPage.details.map((detail) => (
                  <li key={detail.label} className="rounded-[1.5rem] bg-[var(--surface-soft)] px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{detail.label}</p>
                    {detail.href ? (
                      <TrackedContactLink
                        className="mt-2 inline-flex text-base font-semibold text-[var(--foreground)] transition hover:text-[var(--primary)]"
                        eventName={detail.href.startsWith("mailto:") ? "click_email" : "click_phone"}
                        eventParameters={{ locale, placement: "contact_page" }}
                        href={detail.href}
                      >
                        {detail.value}
                      </TrackedContactLink>
                    ) : (
                      <p className="mt-2 text-base font-semibold text-[var(--foreground)]">{detail.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-card px-6 py-7 sm:px-8">
              <SectionHeading description={dictionary.contactPage.serviceAreaText} title={dictionary.contactPage.serviceAreaTitle} />
              <p className="mt-5 rounded-[1.5rem] bg-[var(--surface-sage)] px-4 py-4 text-sm leading-7 text-[var(--foreground)] sm:text-base">
                {dictionary.contactPage.responseNote}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="section-card px-6 py-7 sm:px-8">
              <SectionHeading
                description={dictionary.contactPage.formDescription}
                title={dictionary.contactPage.formTitle}
              />
            </div>
            <ContactForm copy={dictionary.contactForm} locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
