import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";

const pathname = "/services/business-tax";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);
  const content = dictionary.serviceDetails.businessTax;

  return buildMetadata({
    locale,
    pathname,
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function BusinessTaxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return (
    <ServiceDetailPage
      content={dictionary.serviceDetails.businessTax}
      dictionary={dictionary}
      locale={locale}
      pathname={pathname}
    />
  );
}
