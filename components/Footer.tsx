import Link from "next/link";
import { services, site } from "@/lib/content";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="h-1 w-full bg-brand-yellow" />
      <div className="gsc-container py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <Logo size={52} />
              <span className="leading-none">
                <span className="block font-display text-2xl font-bold">
                  Guardian<span className="text-brand-yellow">.</span>
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                  Service Center
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-white/60">
              Premium large-format digital printing since 2001. Delivering
              excellence with cutting-edge HP Latex technology and trusted
              materials from 3M, Avery, LG Hausys, and Technova.
            </p>
            <p className="mt-6 text-sm text-white/50">
              {site.addressLine1}
              <br />
              {site.addressLine2}
              <br />
              {site.addressLine3}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-display text-sm uppercase tracking-widest text-brand-yellow">
              Services
            </h4>
            <ul className="space-y-3 text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="transition hover:text-brand-yellow"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 font-display text-sm uppercase tracking-widest text-brand-yellow">
              Company
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/about-us" className="hover:text-brand-yellow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-brand-yellow">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-brand-yellow">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 font-display text-sm uppercase tracking-widest text-brand-yellow">
              Contact
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="hover:text-brand-yellow"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneAltRaw}`}
                  className="hover:text-brand-yellow"
                >
                  {site.phoneAlt}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-brand-yellow"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-yellow">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-yellow">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
