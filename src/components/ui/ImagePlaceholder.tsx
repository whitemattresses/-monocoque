type ImagePlaceholderProps = {
  label: string;
  src?: string;
  alt?: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
  fit?: "cover" | "contain";
  containBg?: string;
};

export default function ImagePlaceholder({
  label,
  src,
  alt,
  ratio = "aspect-[4/5]",
  dark = false,
  className = "",
  fit = "cover",
  containBg = "bg-cream-dim",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={`overflow-hidden ${ratio} w-full ${
          fit === "contain" ? containBg : ""
        } ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          className={`h-full w-full ${
            fit === "contain" ? "object-contain p-4" : "object-cover"
          }`}
        />
      </div>
    );
  }

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
