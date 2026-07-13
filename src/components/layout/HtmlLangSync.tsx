"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { htmlLangByLocale } from "@/i18n/config";
import { localeFromPathname } from "@/i18n/paths";

// Static export has no request-time locale detection, so <html lang> is set
// client-side once the router knows which path (and therefore locale) is active.
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = htmlLangByLocale[localeFromPathname(pathname)];
  }, [pathname]);

  return null;
}
