import Link from "next/link";

import type { ServiceCardCopy } from "@/content/i18n/schema";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

import { Container } from "@/components/Container";

interface HeroSectionProps {
  locale: Locale;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    trustPoints: string[];
    panel: {
      title: string;
      description: string;
      expectationsLabel: string;
      summaryLabel: string;
    };
    quickLinks: {
      title: string;
      description: string;
    };
  };
  trustBar: string[];
  previewCards: ServiceCardCopy[];
}

export function HeroSection({ locale, content, trustBar, previewCards }: HeroSectionProps) {
  const cards = previewCards.slice(0, 3);

  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="pill-label">{content.eyebrow}</span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 sm:text-lg">{content.description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="primary-button focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-deep)]"
                href={localizePath(locale, content.primary.href)}
              >
                {content.primary.label}
              </Link>
              <Link
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                href={localizePath(locale, content.secondary.href)}
              >
                {content.secondary.label}
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3">
              {trustBar.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-white/75 px-4 py-3 text-sm font-medium text-[var(--foreground)] shadow-[var(--shadow-card)] backdrop-blur"
                >
                  {item}
                </li>
              ))}
            </ul>
          <div className="section-card px-5 py-6 sm:px-7">
            <div className="space-y-5">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{content.panel.summaryLabel}</p>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{content.panel.expectationsLabel}</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {content.trustPoints.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-[1.45rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(237,244,241,0.72))] px-4 py-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-sage)] text-sm font-semibold text-[var(--primary)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-7 text-[var(--foreground)]">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>


          <div className="shell-card relative overflow-hidden px-5 py-5 sm:px-7 sm:py-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,167,155,0.18),_transparent_30%),radial-gradient(circle_at_left_center,_rgba(47,111,107,0.12),_transparent_36%)]" />
            <div className="relative space-y-4">
              <div className="rounded-[1.7rem] border border-white/60 bg-white/88 p-5 shadow-[var(--shadow-card)] sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{content.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)] sm:text-[2rem]">{content.panel.title}</h2>
                <p className="mt-3 text-sm leading-7 sm:text-base">{content.panel.description}</p>
              </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{content.quickLinks.title}</p>
                <p className="mt-2 text-sm leading-7 sm:text-base">{content.quickLinks.description}</p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {cards.map((card, index) => (
                    <Link
                      key={`hero-link-${card.title}`}
                      className={`group rounded-[1.6rem] border border-[var(--border)] p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] ${
                        index === 0 ? "bg-[var(--surface-sage)] sm:col-span-2" : "bg-white/88"
                      }`}
                      href={localizePath(locale, card.href)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{card.tag}</p>
                          <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{card.title}</h3>
                        </div>
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-base font-semibold text-[var(--muted-soft)] transition group-hover:text-[var(--primary)]"
                        >
                          →
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7">{card.description}</p>
                    </Link>
                  ))}
                </div>
            </div>
          </div>
        </div>

        <div className="mt-8">

        </div>
      </Container>
    </section>
  );
}
