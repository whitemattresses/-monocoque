import Hero from "@/components/sections/home/Hero";
import Philosophy from "@/components/sections/home/Philosophy";
import SplitFeature from "@/components/sections/SplitFeature";
import TypologiesPreview from "@/components/sections/home/TypologiesPreview";
import B2BValuePreview from "@/components/sections/home/B2BValuePreview";
import CtaBanner from "@/components/sections/CtaBanner";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

export default function HomePageContent({ locale }: { locale: Locale }) {
  const { home, common } = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} />
      <Philosophy locale={locale} />
      <SplitFeature
        eyebrow={home.theLogic.eyebrow}
        title={home.theLogic.title}
        description={home.theLogic.description}
        bullets={home.theLogic.bullets}
        imageLabel="Place your image here: images/the-logic-modules-lot.jpg"
        imageSrc="/images/the-logic-modules-lot.jpg"
        imageFit="contain"
        imageRatio="aspect-[3/2]"
        href={withLocale(ROUTES.theLogic, locale)}
        linkLabel={home.theLogic.linkLabel}
      />
      <TypologiesPreview locale={locale} />
      <SplitFeature
        eyebrow={home.sustainability.eyebrow}
        title={home.sustainability.title}
        description={home.sustainability.description}
        bullets={home.sustainability.bullets}
        imageLabel="Place your image here: images/sustainability-nature.jpg"
        imageSrc="/images/sustainability-nature.jpg"
        href={withLocale(ROUTES.sustainability, locale)}
        linkLabel={home.sustainability.linkLabel}
        reverse
      />
      <B2BValuePreview locale={locale} />
      <CtaBanner
        eyebrow={common.ctaEyebrow}
        title={home.cta.title}
        description={home.cta.description}
        primaryHref={withLocale(ROUTES.contact, locale)}
        primaryLabel={common.ctaPrimaryLabel}
      />
    </>
  );
}
