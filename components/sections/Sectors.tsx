import { sectors } from "@/lib/content";

export default function Sectors() {
  return (
    <section id="sectors" className="bg-brand-black text-white">
      <div className="gsc-container gsc-section">
        <div className="yellow-line mb-6" />
        <p className="gsc-eyebrow text-brand-yellow">Sectors</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="gsc-h2 text-white">
              Print solutions for every industry we serve.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-white/70">
              From retail storefronts and corporate lobbies to restaurants,
              hotels, and event venues — Guardian has been the go-to print
              partner for brands that refuse to compromise on quality.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-brand-yellow hover:bg-white/[0.06]"
            >
              <div className="mb-8 h-px w-12 bg-brand-yellow" />
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 7H4V4h16v3zM2 7h20v13H2V7zm6 3v2h8v-2H8z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {sector.name}
              </h3>
              <p className="mt-4 text-sm text-white/60">{sector.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
