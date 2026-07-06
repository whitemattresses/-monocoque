import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <p
            className={`tracking-wide-label mb-5 text-[0.7rem] uppercase ${
              dark ? "text-wood-light" : "text-wood"
            }`}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`font-serif text-4xl leading-[1.15] md:text-5xl ${
            dark ? "text-cream" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 text-base leading-relaxed md:text-lg ${
              dark ? "text-cream/70" : "text-charcoal/65"
            } ${isCenter ? "mx-auto max-w-xl" : "max-w-xl"}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
