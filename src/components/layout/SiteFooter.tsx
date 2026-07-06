import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line-inverse bg-charcoal text-cream">
      <div className="container-editorial grid gap-16 py-20 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-24">
        <div>
          <p className="font-serif text-2xl tracking-[0.08em]">MONOCOQUE</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            A prefabricated cross-laminated timber system, built from a
            single 2.40 × 4.05m module. A creation of WHITE, designed in
            collaboration with P4Architecture.
          </p>
        </div>

        <div>
          <p className="tracking-wide-label text-[0.68rem] uppercase text-wood-light">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="text-cream/70 hover:text-cream">
                Home
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
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>partnerships@monocoque.build</li>
            <li>+1 (000) 000&nbsp;0000</li>
            <li>By appointment — global</li>
          </ul>
        </div>

        <div>
          <p className="tracking-wide-label text-[0.68rem] uppercase text-wood-light">
            For Developers
          </p>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Request the technical dossier and site-feasibility checklist for
            your next hospitality asset.
          </p>
          <Link href="/contact" className="btn-outline-inverse mt-6">
            Request Dossier
          </Link>
        </div>
      </div>

      <div className="border-t border-line-inverse">
        <div className="container-editorial flex flex-col gap-3 py-6 text-xs text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Monocoque. All rights reserved.</p>
          <p>A collaboration between WHITE and P4Architecture.</p>
        </div>
      </div>
    </footer>
  );
}
