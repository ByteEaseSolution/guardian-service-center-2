import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/content";

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      {service.subServices && service.subServices.length > 0 && (
        <section className="bg-brand-yellow">
          <div className="gsc-container gsc-section">
            <div className="yellow-line !bg-brand-black mb-6" />
            <p className="gsc-eyebrow text-brand-black">What we offer</p>
            <h2 className="mt-6 gsc-h2 text-brand-black">
              Specialised solutions.
            </h2>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {service.subServices.map((sub) => (
                <div
                  key={sub.title}
                  className="card-hover rounded-2xl bg-white p-8"
                >
                  <div className="h-px w-10 bg-brand-yellow" />
                  <h3 className="mt-6 font-display text-xl font-bold text-brand-black">
                    {sub.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-black/70">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="gsc-container gsc-section">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="mb-6 h-px w-24 bg-brand-black/20" />
              <p className="gsc-eyebrow text-brand-black">
                {service.featureHeading ?? "Why choose us"}
              </p>
              <h2 className="mt-6 gsc-h2 text-brand-black">
                {service.featureSubheading ?? "Quality you can count on."}
              </h2>
              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {service.features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-brand-black/10 bg-white p-6 transition hover:border-brand-yellow hover:shadow-md"
                  >
                    <div className="h-2 w-2 rounded-full bg-brand-yellow" />
                    <h3 className="mt-4 font-display text-base font-bold text-brand-black">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-black/65">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="bg-brand-cream">
          <div className="gsc-container gsc-section">
            <div className="yellow-line mb-6" />
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="gsc-eyebrow text-brand-black">Recent Work</p>
                <h2 className="mt-6 gsc-h2 text-brand-black">
                  {service.name} gallery.
                </h2>
              </div>
              <p className="max-w-md text-brand-black/60">
                A glimpse of projects we&apos;ve delivered across Ahmedabad.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {service.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`group relative overflow-hidden rounded-2xl bg-white ${
                    i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${service.name} project ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand-black">
        <div className="gsc-container py-24 text-center md:py-32">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-6 h-px w-24 bg-brand-yellow" />
            <h2 className="gsc-h2 text-white">
              Interested in {service.name}?
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Let us know about your project and we&apos;ll get back with a
              custom quote.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contactus" className="gsc-btn">
                Get a Quote <span aria-hidden>→</span>
              </Link>
              <Link href="/our-services" className="gsc-btn-outline">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
