type ImagePlaceholderProps = {
  label: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  ratio = "aspect-[4/5]",
  dark = false,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${
        dark ? "img-placeholder-dark" : "img-placeholder"
      } ${ratio} w-full ${className}`}
    >
      <span className="tracking-wide-label px-6 text-center text-[0.7rem] uppercase">
        {label}
      </span>
    </div>
  );
}
