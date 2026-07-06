import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type SplitFeatureProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  imageLabel: string;
  href: string;
  linkLabel: string;
  reverse?: boolean;
  dark?: boolean;
};

export default function SplitFeature({
  eyebrow,
  title,
  description,
  bullets,
  imageLabel,
  href,
  linkLabel,
  reverse = false,
  dark = false,
}: SplitFeatureProps) {
  return (
    <section
      className={`section-y ${
        dark ? "bg-charcoal text-cream" : ""
      } ${
        reverse ? "" : dark ? "border-b border-line-inverse" : "border-b border-line"
      }`}
    >
      <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className={reverse ? "lg:order-2" : ""}>
          <Reveal>
            <ImagePlaceholder label={imageLabel} dark={dark} />
          </Reveal>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <Reveal>
            <p
              className={`tracking-wide-label text-[0.7rem] uppercase ${
                dark ? "text-wood-light" : "text-wood"
              }`}
            >
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] md:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p
              className={`mt-6 max-w-lg text-base leading-relaxed md:text-lg ${
                dark ? "text-cream/70" : "text-charcoal/65"
              }`}
            >
              {description}
            </p>
          </Reveal>

          {bullets && bullets.length > 0 && (
            <Reveal delay={0.2}>
              <ul
                className={`mt-8 space-y-4 border-t pt-8 ${
                  dark ? "border-line-inverse" : "border-line"
                }`}
              >
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-sm leading-relaxed md:text-base"
                  >
                    <span className="text-wood">—</span>
                    <span className={dark ? "text-cream/80" : "text-charcoal/75"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={0.26}>
            <Link
              href={href}
              className={`tracking-wide-label mt-10 inline-flex items-center gap-3 text-[0.72rem] uppercase ${
                dark
                  ? "text-cream hover:text-wood-light"
                  : "text-charcoal hover:text-wood"
              }`}
            >
              {linkLabel}
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
