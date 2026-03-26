"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Container } from "@/components/Container";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale, isLocale, localizePath } from "@/lib/i18n";

export default function NotFoundPage() {
  const params = useParams<{ locale?: string }>();
  const localeParam = typeof params?.locale === "string" ? params.locale : defaultLocale;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="section-card mx-auto max-w-2xl px-6 py-10 text-center sm:px-8">
          <p className="pill-label mx-auto w-fit">404</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--foreground)]">{dictionary.notFound.title}</h1>
          <p className="mt-4 text-base leading-8 sm:text-lg">{dictionary.notFound.description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="primary-button focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-deep)]"
              href={localizePath(locale, dictionary.notFound.primary.href)}
            >
              {dictionary.notFound.primary.label}
            </Link>
            <Link
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              href={localizePath(locale, dictionary.notFound.secondary.href)}
            >
              {dictionary.notFound.secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
