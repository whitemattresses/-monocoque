import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import TypologyCard from "@/components/sections/TypologyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Typologies",
  description:
    "Four Monocoque typologies, built by linking the same 2.40 × 4.05m CLT module — Extra Small, Small, Medium, and Large.",
};

const typologies = [
  {
    name: "Extra Small",
    sizeLabel: "1 module",
    modules: "Live",
    description:
      "A single elemental module — the base unit of the whole system, on its own. Used as a compact studio, a home office, or an auxiliary pavilion alongside a larger configuration.",
    imageLabel: "Place your image here: images/typology-xs.jpg — see PDF: Extra Small isometric render",
    imageSrc: "/images/typology-xs.jpg",
  },
  {
    name: "Small",
    sizeLabel: "19 m²",
    modules: "Sleep + Service Pod",
    description:
      "Two modules, end to end: a sleeping module and a service pod combining bathroom and kitchenette. The complete compact suite for a single guest or couple.",
    imageLabel: "Place your image here: images/typology-small.jpg — see PDF: Small isometric render",
    imageSrc: "/images/typology-small.jpg",
  },
  {
    name: "Medium",
    sizeLabel: "29 m²",
    modules: "Sleep + Service Pod + Live",
    description:
      "The Small configuration extended by one module — a dedicated living space added alongside the sleeping and service modules, for longer stays.",
    imageLabel: "Place your image here: images/typology-medium.jpg — see PDF: Medium isometric render",
    imageSrc: "/images/typology-medium.jpg",
  },
  {
    name: "Large",
    sizeLabel: "49 m²",
    modules: "Balcony + Sleep + Service Pod + Eat + Live + Balcony",
    description:
      "The full sequence — sleeping, service, dining, and living modules bookended by two covered terraces, one at each end of the shell.",
    imageLabel: "Place your image here: images/typology-large.jpg — see PDF: Large isometric render",
    imageSrc: "/images/typology-large.jpg",
  },
];

const floorPlans = [
  { name: "Extra Small", imageSrc: "/images/floorplan-xs.jpg", imageLabel: "Place your image here: images/floorplan-xs.jpg" },
  { name: "Small", imageSrc: "/images/floorplan-small.jpg", imageLabel: "Place your image here: images/floorplan-small.jpg" },
  { name: "Medium", imageSrc: "/images/floorplan-medium.jpg", imageLabel: "Place your image here: images/floorplan-medium.jpg" },
  { name: "Large", imageSrc: "/images/floorplan-large.jpg", imageLabel: "Place your image here: images/floorplan-large.jpg" },
];

export default function TypologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Typologies"
        title="One Module, Linked in Sequence"
        description="Every Monocoque typology is built from the same 2.40 × 4.05m CLT module, added end to end along a constant section. Length and sequence change; the engineered core does not."
      />

      <section className="section-y border-b border-line">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              The System
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] md:text-5xl">
              Five Modules, One Logic
            </h2>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-charcoal/65 md:text-lg">
                Each module carries a single, primary use — <strong className="text-charcoal">Balcony</strong>,{" "}
                <strong className="text-charcoal">Sleep</strong>,{" "}
                <strong className="text-charcoal">Service Pod</strong>,{" "}
                <strong className="text-charcoal">Eat</strong>, or{" "}
                <strong className="text-charcoal">Live</strong>. Adding modules
                in sequence produces a continuous interior, where use is
                defined by position rather than enclosure.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-charcoal/65 md:text-lg">
                The Sleep module is where WHITE&apos;s{" "}
                <span className="italic">Sleep Philosophy</span> meets the CLT
                shell most directly: solid mass timber and continuous
                insulation hold out sound, temperature swings, and light,
                shaping a room built around undisturbed rest rather than
                fitted to it afterward.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10">
                <ImagePlaceholder
                  label="Place your image here: images/module-system.jpg — see PDF: Standardization diagram (A. Balcony, B. Sleep, B+. Service Pod, C. Eat, B. Live)"
                  src="/images/module-system.jpg"
                  ratio="aspect-[3/4]"
                  className="max-w-sm"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-line">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="The Range"
            title="Four Configurations, One Engineered Core"
            description="Each typology is the same module, repeated a different number of times. Sequences shown here are the proven starting point — adapted to your site during design development."
          />

          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {typologies.map((typology, i) => (
              <TypologyCard key={typology.name} {...typology} delay={(i % 4) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-line bg-cream-dim">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Floor Plans"
            title="Plan, Drawn to the Same Section"
            description="1.2m structural bays, repeated. Openings are positioned to regulate light, enable cross ventilation, and frame the landscape."
          />

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {floorPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08}>
                <ImagePlaceholder
                  label={plan.imageLabel}
                  src={plan.imageSrc}
                  ratio="aspect-[3/4]"
                  fit="contain"
                />
                <p className="mt-4 text-center text-sm tracking-wide text-charcoal/55">
                  {plan.name}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-line">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="tracking-wide-label text-[0.7rem] uppercase text-wood">
              Customisation
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] md:text-5xl">
              Beyond the Standard Range
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-charcoal/65 md:text-lg">
              The four typologies shown here represent Monocoque&apos;s proven
              module sequences. For sites with unusual topography, code
              requirements, or a distinct architectural brief, our design team
              works directly with your architect of record to adapt the
              sequence to a bespoke plan — without leaving the engineered
              tolerances that make the system reliable to build.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Request Full Typology Specifications"
        description="Get detailed floor plans, structural specifications, and finish options for every typology in the Monocoque range."
        primaryLabel="Request Specifications"
      />
    </>
  );
}
