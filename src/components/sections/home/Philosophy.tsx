import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "70%", label: "Reduction in on-site construction time" },
  { value: "1", label: "Monocoque shell, engineered as one system" },
  { value: "50+", label: "Year design life across coastal climates" },
];

export default function Philosophy() {
  return (
    <section className="section-y">
      <div className="container-editorial">
        <Reveal>
          <p className="font-serif text-3xl leading-[1.35] text-charcoal md:text-5xl md:leading-[1.3]">
            We believe the built environment of hospitality should be as
            considered as the experience it houses.{" "}
            <span className="text-charcoal/40">
              Monocoque removes the variability of traditional construction —
              replacing it with a single, engineered timber structure that is
              precise, repeatable, and quietly beautiful.
            </span>
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-line pt-12 sm:grid-cols-3">
          {stats.map((stat, i) => (
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
