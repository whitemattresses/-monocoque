"use client";

import { useEffect, useRef, useState } from "react";

const POSTER = "/images/hero-monocoque-poster.jpg";
const SRC_WEBM = "/videos/hero-monocoque.webm";
const SRC_MP4 = "/videos/hero-monocoque.mp4";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!prefersReducedMotion) {
      video.play().catch(() => {});
    }

    // Not every failure to load cleanly fires a MediaError `error` event
    // (e.g. an aborted or stalled request can leave the video silently
    // stuck at HAVE_NOTHING). As a safety net, fall back to the still
    // frame if no playable data has arrived after a few seconds.
    const stallTimeout = window.setTimeout(() => {
      if (video.readyState < 2) {
        setFailed(true);
      }
    }, 6000);

    return () => window.clearTimeout(stallTimeout);
  }, []);

  if (failed) {
    // The video failed to load entirely (unsupported format, network
    // failure, etc.) — fall back to the still frame as a plain image.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={POSTER}
        alt="Monocoque cabin among pines, opening onto the sea"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER}
      onLoadedData={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`h-full w-full bg-charcoal object-cover transition-opacity duration-1000 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <source src={SRC_WEBM} type="video/webm" />
      <source src={SRC_MP4} type="video/mp4" />
    </video>
  );
}
