"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels } from "@/i18n/config";
import { localizedAlternates, splitLocaleFromPathname } from "@/i18n/paths";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "default" | "inverse";
};

export default function LanguageSwitcher({ className = "", variant = "default" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = splitLocaleFromPathname(pathname).locale;
  const alternates = localizedAlternates(pathname);

  const dividerClass = variant === "inverse" ? "text-cream/30" : "text-charcoal/30";
  const activeClass = variant === "inverse" ? "text-cream" : "text-charcoal";
  const inactiveClass = variant === "inverse" ? "text-cream/45" : "text-charcoal/45";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {alternates.map(({ locale, href }, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 && (
            <span className={dividerClass} aria-hidden>
              /
            </span>
          )}
          <Link
            href={href}
            aria-current={locale === currentLocale ? "true" : undefined}
            className={`tracking-wide-label text-[0.68rem] uppercase transition-colors hover:text-wood ${
              locale === currentLocale ? activeClass : inactiveClass
            }`}
          >
            {localeLabels[locale]}
          </Link>
        </span>
      ))}
    </div>
  );
}
