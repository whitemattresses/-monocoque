"use client";

import { useEffect, useRef, useState } from "react";

type ImagePlaceholderProps = {
  label: string;
  src?: string;
  alt?: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
  fit?: "cover" | "contain";
  containBg?: string;
  hoverZoom?: boolean;
  kenBurns?: boolean;
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
  hoverZoom,
  kenBurns = false,
}: ImagePlaceholderProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const zoomOnHover = hoverZoom ?? fit === "cover";

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  if (src) {
    return (
      <div
        className={`overflow-hidden ${ratio} w-full ${
          fit === "contain" ? containBg : ""
        } ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt ?? label}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full transition-[opacity,transform] duration-700 ease-out ${
            fit === "contain" ? "object-contain p-4" : "object-cover"
          } ${loaded ? "opacity-100" : "opacity-0"} ${
            zoomOnHover ? "hover:scale-[1.04]" : ""
          } ${kenBurns ? "animate-ken-burns" : ""}`}
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
