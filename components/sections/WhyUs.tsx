import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white">
      <div className="gsc-container gsc-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="mb-6 h-px w-24 bg-brand-black/20" />
            <p className="gsc-eyebrow text-brand-black">Why Guardian</p>
            <h3 className="mt-6 font-display text-2xl leading-tight text-brand-black/70 md:text-3xl">
              Built on expertise.
            </h3>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-xl text-lg text-brand-black/70">
              For over two decades we&apos;ve worked on one principle —
              large-format printing is complex, and great results come from
              expertise, not shortcuts. Customers trust us because we invest
              in the best technology, the best materials, and the best
              people.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-brand-black/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl"
            >
              <div className="h-px w-10 bg-brand-yellow" />
              <div
                className="mt-6 grid h-20 w-20 place-items-center rounded-2xl text-brand-black"
                style={{ backgroundColor: item.color }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-brand-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-brand-black/65">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
