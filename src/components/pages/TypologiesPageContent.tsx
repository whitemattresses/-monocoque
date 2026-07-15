"use client";

import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import TypologyCard from "@/components/sections/TypologyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ImageLightbox from "@/components/ui/ImageLightbox";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";
import TypologyWalkthrough, {
  type WalkthroughRoom,
} from "@/components/three/TypologyWalkthrough";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

// Images are language-neutral and aligned by position with the dictionary's
// typologiesPage.items / floorPlans.names arrays (Extra Small, Small, Medium, Large).
const typologyImages = [
  { label: "Place your image here: images/typology-xs.jpg", src: "/images/typology-xs.jpg" },
  { label: "Place your image here: images/typology-small.jpg", src: "/images/typology-small.jpg" },
  { label: "Place your image here: images/typology-medium.jpg", src: "/images/typology-medium.jpg" },
  { label: "Place your image here: images/typology-large.jpg", src: "/images/typology-large.jpg" },
];

const floorPlanImages = [
  { src: "/images/floorplan-xs.jpg", label: "Place your image here: images/floorplan-xs.jpg" },
  { src: "/images/floorplan-small.jpg", label: "Place your image here: images/floorplan-small.jpg" },
  { src: "/images/floorplan-medium.jpg", label: "Place your image here: images/floorplan-medium.jpg" },
  { src: "/images/floorplan-large.jpg", label: "Place your image here: images/floorplan-large.jpg" },
];

// One CLT module is 2.40 x 4.05m; each typology's interior length is that
// module repeated end to end (1, 2, 3, and 5 modules respectively).
const MODULE_LENGTH = 4.05;
const MODULE_WIDTH = 2.4;
const CEILING_HEIGHT = 2.8;
const roomDimensions = [1, 2, 3, 5].map((modules) => ({
  length: MODULE_LENGTH * modules,
  width: MODULE_WIDTH,
  height: CEILING_HEIGHT,
}));

export default function TypologiesPageContent({ locale }: { locale: Locale }) {
  const { typologiesPage: t, common } = getDictionary(locale);
  const moduleNames = t.system.moduleNames;

  const [activeRoom, setActiveRoom] = useState<WalkthroughRoom | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const handleExploreInterior = (index: number) => {
    const isMobile =
      typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      setLightbox({ src: typologyImages[index].src, alt: t.items[index].name });
    } else {
      setActiveRoom({ ...roomDimensions[index], name: t.items[index].name });
    }
  };

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />

      <section className="section-y border-b border-line">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              {t.system.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] md:text-5xl">
              {t.system.title}
            </h2>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-charcoal/65 md:text-lg">
                {t.system.paragraph1Prefix} <strong className="text-charcoal">{moduleNames.balcony}</strong>,{" "}
                <strong className="text-charcoal">{moduleNames.sleep}</strong>,{" "}
                <strong className="text-charcoal">{moduleNames.servicePod}</strong>,{" "}
                <strong className="text-charcoal">{moduleNames.eat}</strong>, {t.system.paragraph1Or}{" "}
                <strong className="text-charcoal">{moduleNames.live}</strong>
                {t.system.paragraph1Suffix}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-charcoal/65 md:text-lg">
                {t.system.paragraph2Prefix}{" "}
                <span className="italic">{t.system.sleepPhilosophy}</span>{" "}
                {t.system.paragraph2Suffix}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <ImagePlaceholder
                  label="Place your image here: images/module-system.png — see PDF: Standardization diagram (A. Balcony, B. Sleep, B+. Service Pod, C. Eat, B. Live)"
                  src="/images/module-system.png"
                  ratio="aspect-[3/4]"
                  fit="contain"
                  containBg="bg-cream"
                />
                <ImagePlaceholder
                  label="Place your image here: images/sleep-philosophy.jpg"
                  src="/images/sleep-philosophy.jpg"
                  alt={t.system.sleepImageAlt}
                  ratio="aspect-[3/4]"
                  fit="contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-line">
        <div className="container-editorial">
          <SectionHeading eyebrow={t.range.eyebrow} title={t.range.title} description={t.range.description} />

          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {t.items.map((typology, i) => (
              <TypologyCard
                key={typology.name}
                name={typology.name}
                sizeLabel={typology.sizeLabel}
                modules={typology.modules}
                description={typology.description}
                useCase={typology.useCase}
                imageLabel={typologyImages[i].label}
                imageSrc={typologyImages[i].src}
                delay={(i % 4) * 0.08}
                exploreLabel={t.walkthrough.exploreInterior}
                onExploreInterior={() => handleExploreInterior(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-line bg-cream-dim">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={t.floorPlans.eyebrow}
            title={t.floorPlans.title}
            description={t.floorPlans.description}
          />

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {t.floorPlans.names.map((name, i) => (
              <Reveal key={name} delay={i * 0.08}>
                <ImagePlaceholder
                  label={floorPlanImages[i].label}
                  src={floorPlanImages[i].src}
                  ratio="aspect-[3/4]"
                  fit="contain"
                />
                <p className="mt-4 text-center text-sm tracking-wide text-charcoal/55">
                  {name}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-line">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              {t.customisation.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] md:text-5xl">
              {t.customisation.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-charcoal/65 md:text-lg">
              {t.customisation.description}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        eyebrow={common.ctaEyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryHref={withLocale(ROUTES.contact, locale)}
        primaryLabel={t.cta.primaryLabel}
      />

      {activeRoom && (
        <TypologyWalkthrough
          room={activeRoom}
          labels={t.walkthrough}
          onClose={() => setActiveRoom(null)}
        />
      )}

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
