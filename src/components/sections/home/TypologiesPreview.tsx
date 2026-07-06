import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const typologies = [
  { name: "The Pavilion Suite", note: "Single-key, 68m²", image: "Pavilion Suite — Exterior" },
  { name: "The Canopy Villa", note: "Two-key, 140m²", image: "Canopy Villa — Elevated Deck" },
  { name: "The Overwater Residence", note: "Three-key, 210m²", image: "Overwater Residence — Water Level" },
];

export default function TypologiesPreview() {
  return (
    <section className="section-y border-b border-line">
      <div className="container-editorial">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Typologies"
            title="One System, Many Silhouettes"
            description="Every typology shares the same engineered core — reconfigured in plan and elevation to answer the brief of the site."
          />
          <Reveal delay={0.1}>
            <Link
              href="/typologies"
              className="tracking-wide-label hidden shrink-0 items-center gap-3 text-[0.72rem] uppercase text-charcoal hover:text-wood md:flex"
            >
              View All Typologies <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {typologies.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <ImagePlaceholder label={item.image} />
              <p className="mt-6 font-serif text-2xl">{item.name}</p>
              <p className="mt-2 text-sm tracking-wide text-charcoal/55">
                {item.note}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            href="/typologies"
            className="tracking-wide-label mt-14 inline-flex items-center gap-3 text-[0.72rem] uppercase text-charcoal hover:text-wood md:hidden"
          >
            View All Typologies <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
