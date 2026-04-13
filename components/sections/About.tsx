import Link from "next/link";
import { stats } from "@/lib/content";

export default function About() {
  return (
    <section className="bg-brand-yellow">
      <div className="gsc-container gsc-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="yellow-line !bg-brand-black mb-6" />
              <p className="gsc-eyebrow text-brand-black">About Us</p>
              <h3 className="mt-8 font-display text-2xl leading-tight text-brand-black/80 md:text-3xl">
                From concept to completion — we print it all with precision
                and passion.
              </h3>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="gsc-h2 text-brand-black">
              Ahmedabad&apos;s trusted name in large-format printing.
            </h2>
            <p className="mt-8 max-w-xl text-lg text-brand-black/80">
              Founded in 2001, Guardian Service Center started with a simple
              mission — deliver the highest quality large-format digital
              prints in Ahmedabad. Over the past two decades, we&apos;ve
              grown from a small print shop into one of the region&apos;s
              most trusted printing partners, serving businesses across
              retail, hospitality, corporate, and events.
            </p>
            <div className="mt-10">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-3 rounded-full bg-brand-black px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-yellow transition-all hover:bg-white hover:text-brand-black"
              >
                About us
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-brand-black/20 pt-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-bold text-brand-black md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-brand-black/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
