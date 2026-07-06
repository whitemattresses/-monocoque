import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "2.40 × 4.05m", label: "The single CLT module every typology is built from" },
  { value: "0%", label: "Unpredictable costs — factory pricing agreed before site work begins" },
  { value: "1", label: "Season, typically, from order to a site-assembled cabin" },
];

export default function Philosophy() {
  return (
    <section className="section-y">
      <div className="container-editorial">
        <Reveal>
          <p className="font-serif text-3xl leading-[1.35] text-charcoal md:text-5xl md:leading-[1.3]">
            Monocoque is named for what it is: a shell that is its own
            structure, with no columns hidden inside it.{" "}
            <span className="text-charcoal/40">
              A rigid, self-supporting box of solid engineered timber,
              produced off-site and assembled in days rather than months —
              replacing the delays and cost surprises of conventional Greek
              construction with an industrialized process.
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-charcoal/60 md:text-lg">
            The same mass and continuous insulation that make the shell rigid
            also make it quiet — the starting point for WHITE&apos;s{" "}
            <span className="italic">Sleep Philosophy</span>, carried into
            every Monocoque bedroom.
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
