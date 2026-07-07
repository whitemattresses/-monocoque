import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    index: "01",
    title: "Compressed Timelines",
    copy: "Off-site fabrication runs in parallel with site works, shortening the path from order to opening — and to earlier operating revenue.",
  },
  {
    index: "02",
    title: "Fixed-Cost Certainty",
    copy: "A factory-controlled process locks material and labour costs early, protecting development pro formas from site-driven overruns and reducing investment risk.",
  },
  {
    index: "03",
    title: "Consistent Brand Quality",
    copy: "Every key is built to the same tolerances, so guest experience — and asset value — stays consistent across a portfolio.",
  },
];

export default function B2BValuePreview() {
  return (
    <section className="section-y border-b border-line bg-cream-dim">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="B2B Value"
          title="Built for Developers, Operators, and Investors"
          description="Monocoque is a capital-efficient answer to the operational demands of luxury hospitality development."
        />

        <Reveal delay={0.05}>
          <blockquote className="mt-12 border-l-2 border-wood pl-6 font-serif text-2xl italic leading-snug text-charcoal md:text-3xl">
            &ldquo;Every month saved in construction is another month of
            operating revenue.&rdquo;
          </blockquote>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.index} delay={i * 0.1}>
              <p className="font-serif text-lg text-wood">{value.index}</p>
              <p className="mt-4 font-serif text-2xl">{value.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
                {value.copy}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/b2b-value"
            className="tracking-wide-label mt-14 inline-flex items-center gap-3 text-[0.72rem] uppercase text-charcoal hover:text-wood"
          >
            Explore the Full Business Case <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
