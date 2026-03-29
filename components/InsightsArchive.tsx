import Link from "next/link";

import type { Dictionary } from "@/content/i18n/schema";
import type { InsightArchiveResult } from "@/content/insights/types";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { InsightCard } from "@/components/InsightCard";

interface InsightsArchiveProps {
  archive: InsightArchiveResult;
  copy: Dictionary["insightsPage"]["archive"];
  locale: Locale;
  readMoreLabel: string;
}

function buildArchiveHref(locale: Locale, params: { page?: number; year?: number; month?: number }) {
  const searchParams = new URLSearchParams();

  if (params.year) {
    searchParams.set("year", String(params.year));
  }

  if (params.month) {
    searchParams.set("month", String(params.month));
  }

  if (params.page && params.page > 1) {
    searchParams.set("page", String(params.page));
  }

  const queryString = searchParams.toString();
  const pathname = localizePath(locale, "/insights");

  return queryString ? `${pathname}?${queryString}` : pathname;
}

export function InsightsArchive({ archive, copy, locale, readMoreLabel }: InsightsArchiveProps) {
  const hasFilters = Boolean(archive.filters.year || archive.filters.month);
  const latestItem = archive.latestItem;
  const latestHref = latestItem ? localizePath(locale, `/insights/${latestItem.slug}`) : null;
  const headerDescription = latestItem?.excerpt ?? copy.resultsDescription;

  return (
    <div className="space-y-6">
      <div className="section-card px-6 py-7 sm:px-8">
        {latestHref && latestItem ? (
          <Link
            className="group block max-w-4xl rounded-[1.4rem] transition"
            href={latestHref}
          >
            <span className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] transition group-hover:text-[var(--primary)]">
              <span>{copy.resultsTitle}</span>
              <span aria-hidden="true" className="text-lg transition group-hover:translate-x-0.5">
                →
              </span>
            </span>
            <span className="mt-3 block text-base leading-8 text-[var(--foreground)]/78 transition group-hover:text-[var(--foreground)] sm:text-lg">
              {headerDescription}
            </span>
            <span className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--muted-soft)]">
              <span>{latestItem.publishedLabel}</span>
              <span aria-hidden="true">•</span>
              <span>{latestItem.readTimeLabel}</span>
            </span>
          </Link>
        ) : (
          <>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">{copy.resultsTitle}</h2>
            <p className="mt-3 max-w-4xl text-base leading-8 sm:text-lg">{headerDescription}</p>
          </>
        )}

        <div className="mt-6 space-y-5 border-t border-[var(--border)] pt-5">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{copy.yearLabel}</p>
            <div className="flex flex-wrap gap-2">
              <Link
                className={cn(
                  "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition",
                  !archive.filters.year
                    ? "border-[var(--primary)] bg-[var(--surface-sage)] text-[var(--primary)]"
                    : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                )}
                href={buildArchiveHref(locale, {})}
              >
                {copy.allDatesLabel}
              </Link>
              {archive.availableYears.map((year) => (
                <Link
                  key={year.value}
                  className={cn(
                    "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition",
                    archive.filters.year === year.value
                      ? "border-[var(--primary)] bg-[var(--surface-sage)] text-[var(--primary)]"
                      : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  )}
                  href={buildArchiveHref(locale, { year: year.value })}
                >
                  {year.value} ({year.count})
                </Link>
              ))}
            </div>
          </div>

          {archive.availableMonths.length ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">{copy.monthLabel}</p>
                {hasFilters ? (
                  <Link
                    className="focus-ring text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-deep)]"
                    href={buildArchiveHref(locale, {})}
                  >
                    {copy.clearFiltersLabel}
                  </Link>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2">
                {archive.availableMonths.map((month) => (
                  <Link
                    key={month.value}
                    className={cn(
                      "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition",
                      archive.filters.month === month.value
                        ? "border-[var(--primary)] bg-[var(--surface-sage)] text-[var(--primary)]"
                        : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    )}
                    href={buildArchiveHref(locale, {
                      year: archive.filters.year,
                      month: month.value
                    })}
                  >
                    {month.label} ({month.count})
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {archive.totalItems ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {archive.items.map((card) => (
              <InsightCard card={card} key={card.slug} locale={locale} readMoreLabel={readMoreLabel} />
            ))}
          </div>

          {archive.totalPages > 1 ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                aria-disabled={archive.page <= 1}
                className={cn(
                  "focus-ring inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold transition",
                  archive.page <= 1
                    ? "pointer-events-none border-[var(--border)] bg-white/70 text-[var(--muted-soft)]"
                    : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                )}
                href={buildArchiveHref(locale, {
                  year: archive.filters.year,
                  month: archive.filters.month,
                  page: archive.page - 1
                })}
              >
                {copy.previousPageLabel}
              </Link>
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: archive.totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <Link
                    aria-label={`${copy.pageLabel} ${pageNumber}`}
                    className={cn(
                      "focus-ring inline-flex h-11 min-w-11 items-center justify-center rounded-full border px-4 text-sm font-semibold transition",
                      pageNumber === archive.page
                        ? "primary-button border-[var(--primary)] bg-[var(--primary)] "
                        : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    )}
                    href={buildArchiveHref(locale, {
                      year: archive.filters.year,
                      month: archive.filters.month,
                      page: pageNumber
                    })}
                    key={pageNumber}
                  >
                    {pageNumber}
                  </Link>
                ))}
              </div>
              <Link
                aria-disabled={archive.page >= archive.totalPages}
                className={cn(
                  "focus-ring inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold transition",
                  archive.page >= archive.totalPages
                    ? "pointer-events-none border-[var(--border)] bg-white/70 text-[var(--muted-soft)]"
                    : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                )}
                href={buildArchiveHref(locale, {
                  year: archive.filters.year,
                  month: archive.filters.month,
                  page: archive.page + 1
                })}
              >
                {copy.nextPageLabel}
              </Link>
            </div>
          ) : null}
        </>
      ) : (
        <div className="section-card px-6 py-8 sm:px-8">
          <h3 className="text-xl font-semibold text-[var(--foreground)]">{copy.noResultsTitle}</h3>
          <p className="mt-3 text-base leading-8">{copy.noResultsDescription}</p>
          <div className="mt-5">
            <Link
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] bg-white px-5 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              href={buildArchiveHref(locale, {})}
            >
              {copy.clearFiltersLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
