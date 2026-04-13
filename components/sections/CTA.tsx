import Link from "next/link";
import { site } from "@/lib/content";

export default function CTA() {
  return (
    <section className="bg-brand-yellow">
      <div className="gsc-container py-24 md:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="yellow-line !bg-brand-black mb-6" />
            <h2 className="gsc-h2 text-brand-black">
              Ready to bring your vision to life? <br /> Let&apos;s print
              something extraordinary.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-3 rounded-full bg-brand-black px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-yellow transition-all hover:bg-white hover:text-brand-black"
              >
                Get a Quote
                <span aria-hidden>→</span>
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-3 rounded-full border border-brand-black px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-black transition-all hover:bg-brand-black hover:text-brand-yellow"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
