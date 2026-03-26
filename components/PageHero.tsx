import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

import type { Locale } from "@/lib/i18n";

interface PageHeroProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export function PageHero({ locale, eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="pt-8 pb-6 sm:pt-10 sm:pb-10">
      <Container>
        <div className="section-card px-6 py-7 sm:px-8 sm:py-9 lg:px-10">
          <div className="space-y-4">
            <Breadcrumbs items={breadcrumbs} locale={locale} />
            <span className="pill-label">{eyebrow}</span>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="max-w-3xl text-base leading-8 sm:text-lg">{description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
