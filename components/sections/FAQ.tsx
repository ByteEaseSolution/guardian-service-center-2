"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white">
      <div className="gsc-container gsc-section">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="gsc-eyebrow justify-center text-brand-black">FAQ</p>
            <h2 className="mt-6 gsc-h2 text-brand-black">Common questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-brand-yellow shadow-sm"
                      : "border-brand-black/10"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-display text-base font-semibold text-brand-black md:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brand-black/10 transition-transform ${
                        isOpen ? "rotate-45 bg-brand-yellow" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-brand-black/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
