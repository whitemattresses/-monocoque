import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Stat = {
  value: string;
  label: string;
};

type StatGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  stats: Stat[];
  dark?: boolean;
};

export default function StatGrid({
  eyebrow,
  title,
  description,
  stats,
  dark = false,
}: StatGridProps) {
  return (
    <section
      className={`section-y border-b ${
        dark ? "border-line-inverse bg-charcoal text-cream" : "border-line"
      }`}
    >
      <div className="container-editorial">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          dark={dark}
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p
                className={`font-serif text-4xl md:text-5xl ${
                  dark ? "text-wood-light" : "text-wood"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  dark ? "text-cream/65" : "text-charcoal/60"
                }`}
              >
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
