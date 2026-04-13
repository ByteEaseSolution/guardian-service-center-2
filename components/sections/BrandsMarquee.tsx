import { materialBrands } from "@/lib/content";

export default function BrandsMarquee() {
  const loop = [...materialBrands, ...materialBrands];
  return (
    <section className="overflow-hidden border-y border-brand-black/10 bg-white py-10">
      <div className="gsc-container mb-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brand-black/50">
          Powered by the best brands
        </p>
      </div>
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {loop.map((brand, i) => (
          <span
            key={i}
            className="font-display text-2xl font-bold text-brand-black/30 transition hover:text-brand-black md:text-3xl"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
