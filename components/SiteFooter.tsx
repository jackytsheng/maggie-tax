import Link from "next/link";

import { business } from "@/content/business";
import type { Dictionary } from "@/content/i18n/schema";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

import { Container } from "@/components/Container";
import { TrackedContactLink } from "@/components/TrackedContactLink";

interface SiteFooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const quickLinks = dictionary.nav.links;
  const serviceLinks = [
    { label: dictionary.serviceDetails.individualTax.hero.eyebrow, href: "/services/individual-tax" },
    { label: dictionary.serviceDetails.businessTax.hero.eyebrow, href: "/services/business-tax" },
    { label: dictionary.serviceDetails.atoSupport.hero.eyebrow, href: "/services/ato-support" }
  ];

  return (
    <footer className="border-t border-[var(--border)] py-10 sm:py-14">
      <Container>
        <div className="section-card px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
            <div className="space-y-4">
              <span className="pill-label">{business.name}</span>
              <p className="max-w-md text-sm leading-7 sm:text-base">{dictionary.footer.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                {dictionary.footer.quickLinksTitle}
              </h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link className="transition hover:text-[var(--primary)]" href={localizePath(locale, item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link className="transition hover:text-[var(--primary)]" href={localizePath(locale, "/privacy")}>
                    {dictionary.footer.privacyLabel}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                {dictionary.footer.servicesTitle}
              </h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link className="transition hover:text-[var(--primary)]" href={localizePath(locale, item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                {dictionary.footer.contactTitle}
              </h2>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <p>ABN: {business.abn}</p>
                </li>
                <li>
                  <TrackedContactLink
                    className="transition hover:text-[var(--primary)]"
                    eventName="click_email"
                    eventParameters={{ locale, placement: "footer" }}
                    href={`mailto:${business.email}`}
                  >
                    {dictionary.contactPage.details.filter(detail=>detail.value===business.email)[0]?.label || "Email"}: {business.email}
                  </TrackedContactLink>
                </li>
                <li>
                  <p>
                    {dictionary.contactPage.details.filter(detail=>detail.value===business.weChat)[0]?.label || "WeChat"}: {business.weChat}
                  </p>
                </li>
                <li>
                  <span className="font-medium text-[var(--foreground)]">{dictionary.footer.serviceAreaLabel}: </span>
                  <span>{business.serviceArea}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted-soft)]">
            © {new Date().getFullYear()} {business.name}. {dictionary.footer.rightsReserved}
          </div>
        </div>
      </Container>
    </footer>
  );
}
