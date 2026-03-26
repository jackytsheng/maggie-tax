import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

interface BreadcrumbsProps {
  locale: Locale;
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted-soft)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link className="transition hover:text-[var(--primary)]" href={localizePath(locale, item.href)}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-semibold text-[var(--foreground)]" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
