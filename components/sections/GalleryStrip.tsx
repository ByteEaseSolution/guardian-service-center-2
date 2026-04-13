import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";

// A curated mix across every service so the home page feels like a portfolio teaser.
const highlights = [
  { src: "/gallery/vinyl/wall-4.jpg", label: "Vinyl Printing", href: "/vinyl-printing" },
  { src: "/gallery/wallpaper/wp-7.jpg", label: "Wallpaper Printing", href: "/wallpaper-printing" },
  { src: "/gallery/signage/acrylic-6.jpg", label: "Signage", href: "/signage" },
  { src: "/gallery/vinyl/wall-2.jpg", label: "Wall Vinyl", href: "/vinyl-printing" },
  { src: "/gallery/signage/auto-4.jpg", label: "Vehicle Branding", href: "/signage" },
  { src: "/gallery/banners/event-2.jpg", label: "Event Banners", href: "/banners" },
  { src: "/gallery/wallpaper/wp-3.jpg", label: "Custom Wallpaper", href: "/wallpaper-printing" },
  { src: "/gallery/vinyl/frosted-1.jpg", label: "Frosted Film", href: "/vinyl-printing" },
];

export default function GalleryStrip() {
  void services; // keep import for future use
  return (
    <section className="bg-brand-cream">
      <div className="gsc-container gsc-section">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="yellow-line mb-6" />
            <p className="gsc-eyebrow text-brand-black">Our Work</p>
            <h2 className="mt-6 gsc-h2 text-brand-black">
              A look at what we&apos;ve printed.
            </h2>
          </div>
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-black transition hover:gap-4"
          >
            Browse services
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-16 grid auto-rows-[minmax(180px,1fr)] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {highlights.map((item, i) => {
            const isFeature = i === 0 || i === 3;
            return (
              <Link
                key={item.src}
                href={item.href}
                className={`group relative overflow-hidden rounded-2xl bg-white ${
                  isFeature ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/75 via-brand-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="h-px w-8 bg-brand-yellow" />
                  <p className="mt-3 font-display text-sm font-semibold uppercase tracking-widest text-white md:text-base">
                    {item.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
