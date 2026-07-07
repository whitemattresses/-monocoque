import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const typologies = [
  {
    name: "Small",
    note: "19 m² — Sleep + Service Pod",
    useCase: "Designed for boutique hotel rooms, glamping villas, or solo retreat units.",
    image: "Place your image here: images/typology-small.jpg",
    src: "/images/typology-small.jpg",
  },
  {
    name: "Medium",
    note: "29 m² — Sleep + Service Pod + Live",
    useCase: "A premium suite for extended stays — flexible enough for couples or business travellers.",
    image: "Place your image here: images/typology-medium.jpg",
    src: "/images/typology-medium.jpg",
  },
  {
    name: "Large",
    note: "49 m² — Full module sequence",
    useCase: "The flagship unit. Family villas, honeymoon suites, or anchor rooms for luxury resorts.",
    image: "Place your image here: images/typology-large.jpg",
    src: "/images/typology-large.jpg",
  },
];

export default function TypologiesPreview() {
  return (
    <section className="section-y border-b border-line">
      <div className="container-editorial">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Typologies"
            title="One Module, Linked in Sequence"
            description="Every typology is the same 2.40 × 4.05m CLT module, added end to end — the sequence changes, the engineered core does not."
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
              <ImagePlaceholder label={item.image} src={item.src} />
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
