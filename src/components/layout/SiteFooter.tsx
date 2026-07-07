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
            single 2.40 × 4.05m module.
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
            <li>info@monocoque.gr</li>
          </ul>
        </div>

        <div>
          <p className="tracking-wide-label text-[0.68rem] uppercase text-wood-light">
            For Developers
          </p>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Discuss your site requirements and receive a preliminary
            feasibility assessment, indicative delivery timeline, and
            recommended Monocoque configuration for your project.
          </p>
          <Link href="/contact" className="btn-outline-inverse mt-6">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="border-t border-line-inverse">
        <div className="container-editorial py-6 text-xs text-cream/45">
          <p>
            © {new Date().getFullYear()} Monocoque. A creation of WHITE, in
            collaboration with P4Architecture.
          </p>
        </div>
      </div>
    </footer>
  );
}
