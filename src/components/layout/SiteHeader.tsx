"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
        scrolled || menuOpen
          ? "border-b border-line bg-cream/95 backdrop-blur-sm"
          : "border-b border-transparent bg-cream/0"
      }`}
    >
      <div className="container-editorial flex h-20 items-center justify-between md:h-24">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.08em] text-charcoal md:text-2xl"
        >
          MONOCOQUE
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`tracking-wide-label text-[0.72rem] uppercase transition-colors hover:text-wood ${
                pathname === link.href ? "text-charcoal" : "text-charcoal/55"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-outline">
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="h-px w-6 bg-charcoal"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="h-px w-6 bg-charcoal"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="h-px w-6 bg-charcoal"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-cream lg:hidden"
          >
            <nav className="container-editorial flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`py-3 font-serif text-2xl ${
                    pathname === link.href ? "text-wood" : "text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={closeMenu} className="btn-primary mt-4 w-fit">
                Enquire
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
