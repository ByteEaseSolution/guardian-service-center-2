import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="bg-white">
      <div className="gsc-container gsc-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="mb-6 h-px w-24 bg-brand-black/20" />
              <p className="gsc-eyebrow text-brand-black">Our Process</p>
              <h3 className="mt-8 font-display text-2xl leading-tight text-brand-black/70 md:text-3xl">
                A transparent, open-door approach to every print job.
              </h3>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="gsc-h2 text-brand-black">
              End-to-end printing service.
            </h2>
            <p className="mt-8 max-w-xl text-lg text-brand-black/70">
              Four simple stages — from first consultation to final delivery.
              We stay in touch the whole way, and every print passes strict
              quality checks before it leaves our studio.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="group relative rounded-2xl border border-brand-black/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-yellow hover:shadow-xl"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-5xl font-bold text-brand-yellow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-brand-black/30 transition-all group-hover:translate-x-1 group-hover:text-brand-black"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-black/65">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
