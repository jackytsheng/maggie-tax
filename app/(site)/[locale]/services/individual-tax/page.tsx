import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { buildMetadata } from "@/lib/metadata";
import { getLocaleDictionary } from "@/lib/get-locale-dictionary";

const pathname = "/services/individual-tax";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);
  const content = dictionary.serviceDetails.individualTax;

  return buildMetadata({
    locale,
    pathname,
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: dictionary.meta.keywords
  });
}

export default async function IndividualTaxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dictionary } = await getLocaleDictionary(params);

  return (
    <ServiceDetailPage
      content={dictionary.serviceDetails.individualTax}
      dictionary={dictionary}
      locale={locale}
      pathname={pathname}
    />
  );
}
