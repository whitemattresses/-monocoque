import Reveal from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="container-editorial">
        <Reveal>
          <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.08] md:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/65 md:text-xl">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
