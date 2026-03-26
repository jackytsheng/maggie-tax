import Link from "next/link";

import type { CtaSectionCopy } from "@/content/i18n/schema";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

import { Container } from "@/components/Container";

interface CTASectionProps {
  locale: Locale;
  content: CtaSectionCopy;
}

export function CTASection({ locale, content }: CTASectionProps) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="section-card overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {content.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 sm:text-lg">{content.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="primary-button focus-ring inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-deep)]"
                href={localizePath(locale, content.primary.href)}
              >
                {content.primary.label}
              </Link>
              {content.secondary ? (
                <Link
                  className="focus-ring inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  href={localizePath(locale, content.secondary.href)}
                >
                  {content.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
