"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { heroSlides } from "@/lib/content";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((i) => (i + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-brand-black text-white">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            className={`object-cover transition-transform duration-[8000ms] ${
              i === active ? "scale-110" : "scale-100"
            }`}
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-end pb-24 md:items-center md:pb-0">
        <div className="gsc-container">
          <div className="max-w-3xl">
            <div key={active} className="animate-fade-up">
              <div className="mb-6 flex items-center gap-4">
                <div className="yellow-line" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                  {heroSlides[active].eyebrow}
                </p>
              </div>
              <h1 className="gsc-h1 text-white">
                {heroSlides[active].heading}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75 md:text-xl">
                {heroSlides[active].content}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contactus" className="gsc-btn">
                  Get a Quote
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/our-services" className="gsc-btn-outline">
                  Our Services
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-8 z-10 flex gap-3 md:right-16">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 w-10 rounded-full transition-all ${
              i === active ? "bg-brand-yellow" : "bg-white/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-8 z-10 hidden items-center gap-3 text-xs uppercase tracking-widest text-white/60 md:left-16 md:flex">
        <div className="h-px w-10 bg-white/40" />
        Scroll
      </div>
    </section>
  );
}
