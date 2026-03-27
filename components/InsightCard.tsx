import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

interface InsightCardProps {
  card: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    tag: string;
    publishedLabel: string;
    readTimeLabel: string;
  };
  locale: Locale;
  readMoreLabel: string;
}

export function InsightCard({ card, locale, readMoreLabel }: InsightCardProps) {
  return (
    <Link
      className="section-card group flex h-full flex-col px-5 py-6 transition hover:-translate-y-0.5 hover:border-[var(--primary)] sm:px-6"
      href={localizePath(locale, `/insights/${card.slug}`)}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-[var(--surface-sage)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
          {card.category}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted-soft)]">{card.tag}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
      <p className="mt-3 text-sm leading-7 sm:text-base">{card.excerpt}</p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4 text-sm text-[var(--muted-soft)]">
        <span>{card.publishedLabel}</span>
        <span>{card.readTimeLabel}</span>
      </div>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
        {readMoreLabel} <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
