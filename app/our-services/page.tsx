import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/content";

export const metadata = {
  title: "Our Services — Guardian Service Center",
};

export default function OurServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="What we do best."
        subtitle="Comprehensive large-format digital printing services powered by HP Latex technology and premium materials from 3M, Avery, LG Hausys, and Technova."
      />
      <section className="bg-white">
        <div className="gsc-container gsc-section space-y-24">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <div className="yellow-line mb-6" />
                <p className="gsc-eyebrow text-brand-black">
                  0{i + 1} / {services.length.toString().padStart(2, "0")}
                </p>
                <h2 className="mt-6 font-display text-4xl font-bold text-brand-black md:text-5xl">
                  {service.name}
                </h2>
                <p className="mt-4 text-base text-brand-black/60">
                  {service.tagline}
                </p>
                <p className="mt-6 text-lg text-brand-black/70">
                  {service.shortDescription}
                </p>
                {service.subServices && (
                  <ul className="mt-8 space-y-3">
                    {service.subServices.map((sub) => (
                      <li
                        key={sub.title}
                        className="flex items-start gap-3 text-brand-black/80"
                      >
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-yellow text-xs text-brand-black">
                          ✓
                        </span>
                        <span>
                          <strong>{sub.title}</strong> — {sub.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href={`/${service.slug}`} className="gsc-btn">
                    Learn more <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/contactus"
                    className="inline-flex items-center gap-3 rounded-full border border-brand-black px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-black transition hover:bg-brand-black hover:text-brand-yellow"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
