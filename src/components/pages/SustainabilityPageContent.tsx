import PageHero from "@/components/sections/PageHero";
import SplitFeature from "@/components/sections/SplitFeature";
import StatGrid from "@/components/sections/StatGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

export default function SustainabilityPageContent({ locale }: { locale: Locale }) {
  const { sustainabilityPage: t, common } = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />

      <section className="border-b border-line pb-16 md:pb-20">
        <div className="container-editorial">
          <Reveal>
            <p className="max-w-2xl text-base leading-relaxed text-charcoal/65 md:text-lg">
              {t.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <StatGrid eyebrow={t.stats.eyebrow} title={t.stats.title} stats={t.stats.items} />

      <SplitFeature
        eyebrow={t.foundations.eyebrow}
        title={t.foundations.title}
        description={t.foundations.description}
        bullets={t.foundations.bullets}
        imageLabel="Place your image here: images/sustainability-nature.jpg"
        imageSrc="/images/sustainability-nature.jpg"
        href={withLocale(ROUTES.b2bValue, locale)}
        linkLabel={t.foundations.linkLabel}
      />

      <SplitFeature
        eyebrow={t.lifecycle.eyebrow}
        title={t.lifecycle.title}
        description={t.lifecycle.description}
        bullets={t.lifecycle.bullets}
        imageLabel="Place your image here: images/the-logic-assembly.jpg"
        imageSrc="/images/the-logic-assembly.jpg"
        imageFit="contain"
        href={withLocale(ROUTES.theLogic, locale)}
        linkLabel={t.lifecycle.linkLabel}
        reverse
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
