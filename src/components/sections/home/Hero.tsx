"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroVideo from "@/components/sections/home/HeroVideo";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

export default function Hero({ locale }: { locale: Locale }) {
  const { hero } = getDictionary(locale).home;

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/10" />
      </div>

      <div className="container-editorial relative flex min-h-[88vh] flex-col justify-end pb-20 pt-40 md:min-h-screen md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="tracking-wide-label text-[0.7rem] uppercase text-cream [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-4xl font-serif text-6xl leading-[1.03] text-cream md:text-8xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl"
        >
          {hero.paragraph1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-xl text-base leading-relaxed text-cream/65 md:text-lg"
        >
          {hero.paragraph2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-5"
        >
          <Link href={withLocale(ROUTES.theLogic, locale)} className="btn-outline-inverse">
            {hero.ctaPrimary}
          </Link>
          <Link
            href={withLocale(ROUTES.contact, locale)}
            className="tracking-wide-label group inline-flex items-center gap-2 text-[0.72rem] uppercase text-cream/80 transition-colors duration-300 hover:text-cream"
          >
            {hero.ctaSecondary}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
