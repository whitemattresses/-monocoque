import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ContactForm from "@/components/sections/contact/ContactForm";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default function ContactPageContent({ locale }: { locale: Locale }) {
  const { contactPage: t } = getDictionary(locale);

  return (
    <section className="section-y">
      <div className="container-editorial grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              {t.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-5xl leading-[1.1] md:text-6xl">
              {t.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/65">
              {t.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <ImagePlaceholder
                label="Place your image here: images/contact-general.jpg"
                src="/images/contact-general.jpg"
                alt={t.imageAlt}
                ratio="aspect-[16/10]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 space-y-3 border-t border-line pt-8 text-sm text-charcoal/65">
              <p>{t.email}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
