import Reveal from "@/components/ui/Reveal";

type Step = {
  index: string;
  title: string;
  copy: string;
};

type ProcessStepsProps = {
  eyebrow?: string;
  title?: string;
  steps: readonly Step[];
};

export default function ProcessSteps({
  eyebrow = "Process",
  title = "From Drawing to Handover",
  steps,
}: ProcessStepsProps) {
  return (
    <section className="section-y border-b border-line">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] md:text-5xl">
              {title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.06}>
              <div
                className={`h-full border-t border-line py-8 pr-6 ${
                  i > 0 ? "lg:border-l lg:pl-8" : ""
                }`}
              >
                <p className="font-serif text-lg text-wood">{step.index}</p>
                <p className="mt-4 font-serif text-xl">{step.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
