import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="bg-brand-yellow">
      <div className="gsc-container pb-24 md:pb-32">
        <div className="yellow-line !bg-brand-black mb-6" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="gsc-eyebrow text-brand-black">Our Services</p>
            <h2 className="gsc-h2 mt-6 text-brand-black">
              Everything you need, <br className="hidden md:block" />
              printed.
            </h2>
          </div>
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-black transition hover:gap-4"
          >
            View all
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group card-hover block rounded-2xl bg-white p-6"
            >
              <div className="mb-6 flex items-start gap-3 border-t-2 border-brand-black pt-6">
                <h3 className="font-display text-2xl font-bold text-brand-black">
                  {service.name}
                </h3>
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-brand-black/70">
                {service.shortDescription}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-black">
                Learn more
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
