import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Row = {
  label: string;
  conventional: string;
  monocoque: string;
};

type Headers = {
  consideration: string;
  conventional: string;
  monocoque: string;
};

type ComparisonTableProps = {
  eyebrow: string;
  title: string;
  description?: string;
  rows: readonly Row[];
  headers?: Headers;
};

const defaultHeaders: Headers = {
  consideration: "Consideration",
  conventional: "Conventional Construction",
  monocoque: "Monocoque",
};

export default function ComparisonTable({
  eyebrow,
  title,
  description,
  rows,
  headers = defaultHeaders,
}: ComparisonTableProps) {
  return (
    <section className="section-y border-b border-line">
      <div className="container-editorial">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="tracking-wide-label w-1/3 pb-4 text-[0.68rem] uppercase text-charcoal/50">
                    {headers.consideration}
                  </th>
                  <th className="tracking-wide-label w-1/3 pb-4 text-[0.68rem] uppercase text-charcoal/50">
                    {headers.conventional}
                  </th>
                  <th className="tracking-wide-label w-1/3 pb-4 text-[0.68rem] uppercase text-wood">
                    {headers.monocoque}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <td className="py-6 pr-6 font-serif text-lg">
                      {row.label}
                    </td>
                    <td className="py-6 pr-6 text-sm leading-relaxed text-charcoal/55">
                      {row.conventional}
                    </td>
                    <td className="py-6 pr-6 text-sm leading-relaxed text-charcoal">
                      {row.monocoque}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
