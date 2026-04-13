import PageHero from "@/components/PageHero";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import { stats } from "@/lib/content";

export const metadata = {
  title: "About — Guardian Service Center",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who we are."
        subtitle="Guardian Service Center has been Ahmedabad's premier large-format digital printing partner since 2001 — combining cutting-edge technology with premium materials to deliver prints that exceed expectations."
      />

      <section className="bg-brand-yellow">
        <div className="gsc-container py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-bold text-brand-black md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-brand-black/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="gsc-container gsc-section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="mb-6 h-px w-24 bg-brand-black/20" />
                <p className="gsc-eyebrow text-brand-black">Our Story</p>
                <h3 className="mt-6 font-display text-2xl text-brand-black/70 md:text-3xl">
                  Built on a foundation of quality.
                </h3>
              </div>
            </div>
            <div className="space-y-6 text-lg text-brand-black/75 lg:col-span-7">
              <p>
                Founded in 2001, Guardian Service Center started with a
                simple mission — deliver the highest quality large-format
                digital prints in Ahmedabad. Over the past two decades,
                we&apos;ve grown from a small print shop into one of the
                region&apos;s most trusted printing partners.
              </p>
              <p>
                Today, we serve businesses across industries — from retail
                and hospitality to corporate offices and events. Our
                investment in HP Latex printing technology ensures every
                job meets the exacting standards our clients have come to
                expect.
              </p>
              <p>
                Located on Ashram Road in the heart of Ahmedabad, we
                continue to push the boundaries of what&apos;s possible in
                large-format printing, one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <CTA />
    </>
  );
}
