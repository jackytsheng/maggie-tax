import Link from "next/link";

import type { ServiceCardCopy } from "@/content/i18n/schema";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export function ServiceCard({
  card,
  locale,
  learnMoreLabel
}: {
  card: ServiceCardCopy;
  locale: Locale;
  learnMoreLabel: string;
}) {
  return (
    <Link
      className="section-card group flex h-full flex-col px-5 py-6 transition hover:-translate-y-0.5 hover:border-[var(--primary)] sm:px-6"
      href={localizePath(locale, card.href)}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{card.tag}</span>
      <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 sm:text-base">{card.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
        {learnMoreLabel} <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
