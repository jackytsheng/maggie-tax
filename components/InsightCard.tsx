import type { InsightCardCopy } from "@/content/i18n/schema";

export function InsightCard({ card }: { card: InsightCardCopy }) {
  return (
    <article className="section-card flex h-full flex-col px-5 py-6 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-[var(--surface-sage)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
          {card.category}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted-soft)]">{card.status}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{card.title}</h3>
      <p className="mt-3 text-sm leading-7 sm:text-base">{card.excerpt}</p>
    </article>
  );
}
