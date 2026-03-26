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
  };
  trustBar: string[];
  previewCards: ServiceCardCopy[];
}

export function HeroSection({ locale, content, trustBar, previewCards }: HeroSectionProps) {
  const cards = previewCards.slice(0, 3);
  const featuredCard = cards[0];

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
          </div>

          <div className="shell-card relative overflow-hidden px-5 py-5 sm:px-7 sm:py-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,167,155,0.18),_transparent_30%),radial-gradient(circle_at_left_center,_rgba(47,111,107,0.12),_transparent_36%)]" />
            <div className="relative space-y-4">
              <div className="rounded-[1.7rem] border border-white/60 bg-white/85 p-5 shadow-[var(--shadow-card)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{content.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                  {featuredCard?.title ?? content.primary.label}
                </h2>
                <p className="mt-3 text-sm leading-7">{featuredCard?.description ?? content.description}</p>
                <div className="mt-5 rounded-[1.55rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(237,244,241,0.92))] p-4">
                  <svg aria-hidden="true" className="h-40 w-full" viewBox="0 0 320 180">
                    <defs>
                      <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(47,111,107,0.28)" />
                        <stop offset="100%" stopColor="rgba(47,111,107,0.02)" />
                      </linearGradient>
                    </defs>
                    <g stroke="rgba(38,45,44,0.09)" strokeDasharray="4 6">
                      <line x1="12" x2="308" y1="32" y2="32" />
                      <line x1="12" x2="308" y1="72" y2="72" />
                      <line x1="12" x2="308" y1="112" y2="112" />
                      <line x1="12" x2="308" y1="152" y2="152" />
                    </g>
                    <path
                      d="M18 146C46 142 62 128 86 126C112 124 126 136 150 126C176 116 184 86 214 82C240 78 258 100 282 92L282 154L18 154Z"
                      fill="url(#hero-area)"
                    />
                    <path
                      d="M18 146C46 142 62 128 86 126C112 124 126 136 150 126C176 116 184 86 214 82C240 78 258 100 282 92"
                      fill="none"
                      stroke="var(--primary)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                    {[
                      { x: 86, y: 126 },
                      { x: 150, y: 126 },
                      { x: 214, y: 82 },
                      { x: 282, y: 92 }
                    ].map((point) => (
                      <g key={`${point.x}-${point.y}`}>
                        <circle cx={point.x} cy={point.y} fill="rgba(47,111,107,0.16)" r="10" />
                        <circle cx={point.x} cy={point.y} fill="var(--primary)" r="4.5" />
                      </g>
                    ))}
                  </svg>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cards.map((card) => (
                      <span
                        key={`${card.title}-pill`}
                        className="rounded-full bg-white/88 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]"
                      >
                        {card.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`rounded-[1.6rem] border border-[var(--border)] p-5 shadow-[var(--shadow-card)] ${
                      index === 0 ? "bg-[var(--surface-sage)] sm:col-span-2" : "bg-white/88"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{card.tag}</p>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7">{card.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
                <ul className="space-y-3">
                  {content.trustPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-[var(--foreground)]">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
