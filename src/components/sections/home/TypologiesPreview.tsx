import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

// Images are language-neutral and aligned by position with the three
// dictionary items (Small, Medium, Large).
const images = [
  { label: "Place your image here: images/typology-small.jpg", src: "/images/typology-small.jpg" },
  { label: "Place your image here: images/typology-medium.jpg", src: "/images/typology-medium.jpg" },
  { label: "Place your image here: images/typology-large.jpg", src: "/images/typology-large.jpg" },
];

export default function TypologiesPreview({ locale }: { locale: Locale }) {
  const { typologiesPreview } = getDictionary(locale).home;
  const typologiesHref = withLocale(ROUTES.typologies, locale);

  return (
    <section className="section-y border-b border-line">
      <div className="container-editorial">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={typologiesPreview.eyebrow}
            title={typologiesPreview.title}
            description={typologiesPreview.description}
          />
          <Reveal delay={0.1}>
            <Link
              href={typologiesHref}
              className="tracking-wide-label hidden shrink-0 items-center gap-3 text-[0.72rem] uppercase text-charcoal hover:text-wood md:flex"
            >
              {typologiesPreview.viewAll} <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {typologiesPreview.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <ImagePlaceholder label={images[i].label} src={images[i].src} />
              <p className="mt-6 font-serif text-2xl">{item.name}</p>
              <p className="mt-2 text-sm tracking-wide text-charcoal/55">
                {item.note}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-wood">
                {item.useCase}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            href={typologiesHref}
            className="tracking-wide-label mt-14 inline-flex items-center gap-3 text-[0.72rem] uppercase text-charcoal hover:text-wood md:hidden"
          >
            {typologiesPreview.viewAll} <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
