"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { business } from "@/content/business";
import type { NavLink } from "@/content/i18n/schema";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

import { Container } from "@/components/Container";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

interface SiteHeaderProps {
  locale: Locale;
  links: NavLink[];
  ctaLabel: string;
  mobileMenuLabel: string;
  languageSwitcherLabel: string;
}

export function SiteHeader({
  locale,
  links,
  ctaLabel,
  mobileMenuLabel,
  languageSwitcherLabel
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(246,241,235,0.82)] backdrop-blur-xl">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link className="focus-ring inline-flex items-center gap-3" href={localizePath(locale, "")}>
            <span className="primary-surface inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-sm font-semibold text-white">
              M
            </span>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">Melbourne</p>
              <p className="text-base font-semibold text-[var(--foreground)]">{business.name}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const href = localizePath(locale, link.href);
              const isActive = pathname === href;

              return (
                <Link
                  key={link.href}
                  className={cn(
                    "focus-ring text-sm font-medium transition hover:text-[var(--primary)]",
                    isActive ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                  )}
                  href={href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher currentLocale={locale} label={languageSwitcherLabel} />
            <Link
              className="primary-button focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--primary-deep)]"
              href={localizePath(locale, "/contact")}
              onClick={() => trackEvent("consultation_cta_click", { locale, placement: "header" })}
            >
              {ctaLabel}
            </Link>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <span className="sr-only">{mobileMenuLabel}</span>
            <span aria-hidden="true">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity,padding] duration-200 lg:hidden",
            menuOpen ? "max-h-[30rem] pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
          )}
          id="mobile-navigation"
        >
          <div className="section-card flex flex-col gap-4 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--primary)]"
                href={localizePath(locale, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
              <LocaleSwitcher currentLocale={locale} label={languageSwitcherLabel} />
              <Link
                className="primary-button focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--primary-deep)]"
                href={localizePath(locale, "/contact")}
                onClick={() => trackEvent("consultation_cta_click", { locale, placement: "mobile_header" })}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
