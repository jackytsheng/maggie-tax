"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localizePath, stripLocaleFromPathname, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  currentLocale: Locale;
  label: string;
}

export function LocaleSwitcher({ currentLocale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const routeWithoutLocale = stripLocaleFromPathname(pathname);

  return (
    <div aria-label={label} className="inline-flex items-center rounded-full border border-[var(--border)] bg-white p-1">
      {(["cn", "en"] as const).map((locale) => (
        <Link
          key={locale}
          className={cn(
            "focus-ring rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition",
            locale === currentLocale
              ? "primary-surface bg-[var(--primary)] text-white"
              : "text-[var(--muted)] hover:text-[var(--primary)]"
          )}
          href={localizePath(locale, routeWithoutLocale)}
          hrefLang={locale === "cn" ? "zh-Hans" : "en-AU"}
          lang={locale === "cn" ? "zh-Hans" : "en-AU"}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
