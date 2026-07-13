import PageHero from "@/components/sections/PageHero";
import SplitFeature from "@/components/sections/SplitFeature";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CtaBanner from "@/components/sections/CtaBanner";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

export default function TheLogicPageContent({ locale }: { locale: Locale }) {
  const { theLogicPage: t, common } = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />

      <ProcessSteps eyebrow={t.process.eyebrow} title={t.process.title} steps={t.process.steps} />

      <SplitFeature
        eyebrow={t.material.eyebrow}
        title={t.material.title}
        description={t.material.description}
        bullets={t.material.bullets}
        imageLabel="Place your image here: images/the-logic-structure.png"
        imageSrc="/images/the-logic-structure.png"
        imageFit="contain"
        imageContainBg="bg-cream"
        href={withLocale(ROUTES.sustainability, locale)}
        linkLabel={t.material.linkLabel}
      />

      <ComparisonTable
        eyebrow={t.comparison.eyebrow}
        title={t.comparison.title}
        description={t.comparison.description}
        headers={t.comparison.headers}
        rows={t.comparison.rows}
      />

      <CtaBanner
        eyebrow={common.ctaEyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryHref={withLocale(ROUTES.contact, locale)}
        primaryLabel={common.ctaPrimaryLabel}
      />
    </>
  );
}
