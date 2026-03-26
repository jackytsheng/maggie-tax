import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n";

export async function getLocaleDictionary(params: Promise<{ locale: string }>) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;

  return {
    locale,
    dictionary: getDictionary(locale)
  };
}
