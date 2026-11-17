"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { FAQS_LIST } from "@/data/company";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#050811] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
            Clarity & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions <br />
            <span className="gradient-text-orange">About Partnering with Qrious Tech</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Transparent answers regarding intellectual property, agile sprints, developer allocation, and contractual flexibility.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-semibold text-orange-400/90 bg-orange-500/10 px-2.5 py-0.5 rounded-md border border-orange-500/20 shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-orange-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
