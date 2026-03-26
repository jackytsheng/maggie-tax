import type { HighlightItem } from "@/content/i18n/schema";

export function ValueCard({ item }: { item: HighlightItem }) {
  return (
    <article className="section-card h-full px-5 py-6 sm:px-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-lg text-[var(--primary)]">
        •
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 sm:text-base">{item.description}</p>
    </article>
  );
}
