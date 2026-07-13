"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavLinks } from "@/lib/nav";
import { getDictionary } from "@/i18n/getDictionary";
import { ROUTES } from "@/i18n/routes";
import { withLocale, splitLocaleFromPathname } from "@/i18n/paths";

export default function SiteFooter() {
  const pathname = usePathname();
  const { locale, canonicalPath } = splitLocaleFromPathname(pathname);
  const isHome = canonicalPath === "/";
  const dict = getDictionary(locale);
  const navLinks = getNavLinks(locale, dict);
  const homeHref = withLocale(ROUTES.home, locale);
  const contactHref = withLocale(ROUTES.contact, locale);

  return (
    <footer className="border-t border-line-inverse bg-charcoal text-cream">
      <div className="container-editorial grid gap-16 py-20 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-24">
        <div>
          <p className="font-serif text-2xl tracking-[0.08em]">MONOCOQUE</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            {dict.footer.description}
          </p>
        </div>

        <div>
          <p className="tracking-wide-label text-[0.68rem] uppercase text-wood-light">
            {dict.footer.exploreHeading}
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href={homeHref} className="text-cream/70 hover:text-cream">
                {dict.nav.home}
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/70 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracking-wide-label text-[0.68rem] uppercase text-wood-light">
            {dict.footer.contactHeading}
          </p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>{dict.footer.email}</li>
          </ul>
        </div>

        <div>
          <p className="tracking-wide-label text-[0.68rem] uppercase text-wood-light">
            {dict.footer.forDevelopersHeading}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            {dict.footer.forDevelopersText}
          </p>
          <Link href={contactHref} className="btn-outline-inverse mt-6">
            {dict.footer.getInTouch}
          </Link>
        </div>
      </div>

      <div className="border-t border-line-inverse">
        <div className="container-editorial py-6 text-xs text-cream/45">
          <p>
            {dict.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
            {isHome && ` ${dict.footer.creditLine}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
