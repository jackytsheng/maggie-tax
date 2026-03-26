import { en } from "@/content/i18n/en";
import { zh } from "@/content/i18n/zh";
import type { Dictionary } from "@/content/i18n/schema";

export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

const dictionaries: Record<Locale, Dictionary> = {
  zh,
  en
};

export const localeToHtmlLang: Record<Locale, string> = {
  zh: "zh-Hans",
  en: "en-AU"
};

export const localeToOpenGraphLocale: Record<Locale, string> = {
  zh: "zh_CN",
  en: "en_AU"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function localizePath(locale: Locale, pathname = "") {
  const normalized = normalizePath(pathname);
  return normalized ? `/${locale}${normalized}` : `/${locale}`;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (!maybeLocale || !isLocale(maybeLocale)) {
    return pathname || "/";
  }

  const stripped = `/${segments.slice(2).join("/")}`.replace(/\/+$/, "");
  return stripped === "/" ? "" : stripped;
}
