import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type TypologyCardProps = {
  name: string;
  keys: string;
  size: string;
  setting: string;
  description: string;
  imageLabel: string;
  delay?: number;
};

export default function TypologyCard({
  name,
  keys,
  size,
  setting,
  description,
  imageLabel,
  delay = 0,
}: TypologyCardProps) {
  return (
    <Reveal delay={delay}>
      <ImagePlaceholder label={imageLabel} />
      <div className="mt-6 flex items-start justify-between gap-4">
        <p className="font-serif text-2xl">{name}</p>
        <p className="tracking-wide-label whitespace-nowrap pt-1 text-[0.65rem] uppercase text-wood">
          {setting}
        </p>
      </div>
      <p className="mt-2 text-sm tracking-wide text-charcoal/55">
        {keys} · {size}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
        {description}
      </p>
    </Reveal>
  );
}
