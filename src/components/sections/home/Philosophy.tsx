import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default function Philosophy({ locale }: { locale: Locale }) {
  const { philosophy } = getDictionary(locale).home;

  return (
    <section className="section-y">
      <div className="container-editorial">
        <Reveal>
          <p className="font-serif text-3xl leading-[1.35] text-charcoal md:text-5xl md:leading-[1.3]">
            {philosophy.quoteLead}{" "}
            <span className="text-charcoal/40">{philosophy.quoteRest}</span>
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-charcoal/60 md:text-lg">
            {philosophy.sleepLine1}{" "}
            <span className="italic">{philosophy.sleepPhilosophy}</span>
            {philosophy.sleepLine2}
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-line pt-12 sm:grid-cols-3">
          {philosophy.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <p className="font-serif text-5xl text-wood">{stat.value}</p>
              <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-charcoal/60">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
