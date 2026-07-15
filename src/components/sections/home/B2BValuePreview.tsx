import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

export default function B2BValuePreview({ locale }: { locale: Locale }) {
  const { b2bValuePreview } = getDictionary(locale).home;

  return (
    <section className="section-y border-b border-line bg-cream-dim">
      <div className="container-editorial">
        <SectionHeading
          eyebrow={b2bValuePreview.eyebrow}
          title={b2bValuePreview.title}
          description={b2bValuePreview.description}
        />

        <Reveal delay={0.05}>
          <blockquote className="mt-12 border-l-2 border-wood pl-6 font-serif text-2xl italic leading-snug text-charcoal md:text-3xl">
            &ldquo;{b2bValuePreview.quote}&rdquo;
          </blockquote>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-3">
          {b2bValuePreview.values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <p className="font-serif text-lg text-wood">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-4 font-serif text-2xl">{value.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
                {value.copy}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href={withLocale(ROUTES.b2bValue, locale)}
            className="tracking-wide-label group mt-14 inline-flex items-center gap-3 text-[0.72rem] uppercase text-charcoal transition-colors duration-300 hover:text-wood"
          >
            {b2bValuePreview.linkLabel}{" "}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
