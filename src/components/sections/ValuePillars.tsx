import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Pillar = {
  index: string;
  title: string;
  copy: string;
};

type ValuePillarsProps = {
  eyebrow: string;
  title: string;
  description?: string;
  pillars: readonly Pillar[];
};

export default function ValuePillars({
  eyebrow,
  title,
  description,
  pillars,
}: ValuePillarsProps) {
  return (
    <section className="section-y border-b border-line">
      <div className="container-editorial">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.index} delay={(i % 3) * 0.08}>
              <p className="font-serif text-lg text-wood">{pillar.index}</p>
              <p className="mt-4 font-serif text-2xl">{pillar.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
                {pillar.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
