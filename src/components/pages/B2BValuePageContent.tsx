import PageHero from "@/components/sections/PageHero";
import ValuePillars from "@/components/sections/ValuePillars";
import StatGrid from "@/components/sections/StatGrid";
import SplitFeature from "@/components/sections/SplitFeature";
import CtaBanner from "@/components/sections/CtaBanner";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

export default function B2BValuePageContent({ locale }: { locale: Locale }) {
  const { b2bValuePage: t, common } = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />

      <ValuePillars eyebrow={t.pillars.eyebrow} title={t.pillars.title} pillars={t.pillars.items} />

      <StatGrid eyebrow={t.stats.eyebrow} title={t.stats.title} stats={t.stats.items} dark />

      <SplitFeature
        eyebrow={t.delivery.eyebrow}
        title={t.delivery.title}
        description={t.delivery.description}
        bullets={t.delivery.bullets}
        imageLabel="Place your image here: images/delivery-cabin-dusk.jpg"
        imageSrc="/images/delivery-cabin-dusk.jpg"
        imageFit="contain"
        imageRatio="aspect-[3/2]"
        href={withLocale(ROUTES.contact, locale)}
        linkLabel={t.delivery.linkLabel}
      />

      <CtaBanner
        eyebrow={common.ctaEyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryHref={withLocale(ROUTES.contact, locale)}
        primaryLabel={t.cta.primaryLabel}
      />
    </>
  );
}
