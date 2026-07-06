"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Hero — Flagship Villa, Dusk Exterior"
          ratio="aspect-auto h-full"
          className="h-full rounded-none border-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/10" />
      </div>

      <div className="container-editorial relative flex min-h-[88vh] flex-col justify-end pb-20 pt-40 md:min-h-screen md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="tracking-wide-label text-[0.7rem] uppercase text-wood-light"
        >
          Prefabricated CLT Systems for Luxury Hospitality
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-4xl font-serif text-6xl leading-[1.03] text-cream md:text-8xl"
        >
          Structure as Sanctuary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl"
        >
          Monocoque engineers cross-laminated timber into a single, precise
          architectural system — built off-site, assembled in days, and
          designed to hold its value across a fifty-year hospitality
          lifecycle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-5"
        >
          <Link href="/the-logic" className="btn-outline-inverse">
            Discover the Logic
          </Link>
          <Link
            href="/contact"
            className="tracking-wide-label text-[0.72rem] uppercase text-cream/80 hover:text-cream"
          >
            Enquire for Your Site →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
