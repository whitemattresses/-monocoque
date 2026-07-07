import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about bringing the Monocoque CLT system to your next luxury hospitality site.",
};

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-editorial grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-5xl leading-[1.1] md:text-6xl">
              Start a Conversation
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/65">
              Tell us about your site and programme. Our team will follow up
              with a feasibility outline, typical timeline, and indicative
              cost range within five business days.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <ImagePlaceholder
                label="Place your image here: images/contact-general.jpg"
                src="/images/contact-general.jpg"
                alt="A Monocoque cabin among pines, at dusk"
                ratio="aspect-[16/10]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 space-y-3 border-t border-line pt-8 text-sm text-charcoal/65">
              <p>info@monocoque.gr</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
