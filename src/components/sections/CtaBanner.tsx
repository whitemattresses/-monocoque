import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBanner({
  eyebrow = "Start a Conversation",
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Inquire About a Project",
  secondaryHref,
  secondaryLabel,
}: CtaBannerProps) {
  return (
    <section className="section-y bg-charcoal text-cream">
      <div className="container-editorial text-center">
        <Reveal>
          <p className="tracking-wide-label text-[0.7rem] uppercase text-wood-light">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1.15] md:text-5xl">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65">
              {description}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href={primaryHref} className="btn-outline-inverse">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="tracking-wide-label text-[0.72rem] uppercase text-cream/70 hover:text-cream"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
