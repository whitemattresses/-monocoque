import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type TypologyCardProps = {
  name: string;
  sizeLabel: string;
  modules: string;
  description: string;
  useCase: string;
  imageLabel: string;
  imageSrc?: string;
  delay?: number;
  exploreLabel: string;
  onExploreInterior: () => void;
};

export default function TypologyCard({
  name,
  sizeLabel,
  modules,
  description,
  useCase,
  imageLabel,
  imageSrc,
  delay = 0,
  exploreLabel,
  onExploreInterior,
}: TypologyCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(28,28,28,0.28)]">
        <ImagePlaceholder label={imageLabel} src={imageSrc} />
        <div className="mt-6 flex items-start justify-between gap-4">
          <p className="font-serif text-2xl">{name}</p>
          <p className="tracking-wide-label whitespace-nowrap pt-1 text-[0.65rem] uppercase text-wood">
            {sizeLabel}
          </p>
        </div>
        <p className="mt-2 text-sm tracking-wide text-charcoal/55">
          {modules}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
          {description}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-wood">
          {useCase}
        </p>
        <button
          type="button"
          onClick={onExploreInterior}
          className="tracking-wide-label group mt-5 inline-flex items-center gap-3 text-[0.7rem] uppercase text-charcoal transition-colors duration-300 hover:text-wood"
        >
          {exploreLabel}
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>
    </Reveal>
  );
}
