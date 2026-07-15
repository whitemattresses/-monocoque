"use client";

import { useEffect, useRef } from "react";

const POSTER = "/images/hero-monocoque-poster.jpg";
const SRC_WEBM = "/videos/hero-monocoque.webm";
const SRC_MP4 = "/videos/hero-monocoque.mp4";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!prefersReducedMotion) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER}
      className="h-full w-full object-cover"
    >
      <source src={SRC_WEBM} type="video/webm" />
      <source src={SRC_MP4} type="video/mp4" />
    </video>
  );
}
