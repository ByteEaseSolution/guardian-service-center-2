"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services, site } from "@/lib/content";
import Logo from "@/components/Logo";

const menu = [
  { num: "01", label: "Home", href: "/" },
  {
    num: "02",
    label: "Services",
    href: "/our-services",
    children: services.map((s) => ({ title: s.name, href: `/${s.slug}` })),
  },
  { num: "03", label: "About", href: "/about-us" },
  { num: "04", label: "Contact", href: "/contactus" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  useEffect(() => {
    let prev = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 0) {
        setHidden(false);
        prev = 0;
      } else {
        setHidden(y > prev);
        prev = y;
      }
      setScrolled(y > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          hidden && !mobileOpen ? "header-hidden" : ""
        } ${scrolled || mobileOpen ? "header-scrolled" : ""}`}
      >
        <div className="gsc-container flex items-center justify-between py-5 lg:py-6">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <Logo size={44} />
            <span className="leading-none">
              <span className="block font-display text-lg font-bold text-white md:text-xl">
                Guardian<span className="text-brand-yellow">.</span>
              </span>
              <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                Service Center
              </span>
            </span>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {menu.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    item.children && setDropdownOpen(false)
                  }
                >
                  <Link
                    href={item.href}
                    className="group flex items-start gap-2 text-sm text-white/90 transition hover:text-brand-yellow"
                  >
                    <span className="text-xs text-brand-yellow">{item.num}</span>
                    <span className="font-medium">{item.label}</span>
                    {item.children && (
                      <span className="ml-0.5 text-xs">▾</span>
                    )}
                  </Link>
                  {item.children && (
                    <div
                      className={`absolute left-0 top-full mt-4 w-64 rounded-2xl border border-white/10 bg-brand-black/95 p-2 shadow-2xl backdrop-blur-md transition-all duration-200 ${
                        dropdownOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="mb-2 px-3 pt-2">
                        <div className="h-px w-10 bg-brand-yellow" />
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-brand-yellow"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/contactus" className="gsc-btn !py-3 !px-5 !text-xs">
              Get a Quote
              <span aria-hidden>→</span>
            </Link>
            <a
              href={`tel:${site.phoneRaw}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-brand-yellow hover:text-brand-yellow"
              aria-label="Call"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label="Menu"
          >
            <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  mobileOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  mobileOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-brand-black transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="gsc-container flex min-h-full flex-col justify-between pb-10 pt-28">
          <nav>
            <ul className="space-y-5">
              {menu.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-baseline gap-4 font-display text-3xl text-white transition hover:text-brand-yellow"
                    >
                      <span className="text-sm text-brand-yellow">
                        {item.num}
                      </span>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileSubOpen(!mobileSubOpen)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white"
                        aria-label="Toggle services"
                      >
                        <span className={`transition ${mobileSubOpen ? "rotate-180" : ""}`}>▾</span>
                      </button>
                    )}
                  </div>
                  {item.children && mobileSubOpen && (
                    <ul className="mt-3 space-y-2 pl-10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-base text-white/70 transition hover:text-brand-yellow"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contactus"
                onClick={() => setMobileOpen(false)}
                className="gsc-btn"
              >
                Get a Quote <span aria-hidden>→</span>
              </Link>
            </div>
          </nav>
          <div className="mt-10 space-y-3 text-sm text-white/60">
            <a href={`tel:${site.phoneRaw}`} className="block text-white">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block">
              {site.email}
            </a>
            <p>{site.addressLine3}</p>
          </div>
        </div>
      </div>
    </>
  );
}
