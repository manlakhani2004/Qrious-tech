"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { FAQS_LIST } from "@/data/company";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#f8f8f8] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Sticky in Motive style) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight leading-[1.15]">
              Got questions? <br />
              <span className="text-orange-500">We&apos;ve got answers.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              Transparent details regarding intellectual property, agile sprints, developer allocation timelines, and early contract flexibility.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center pl-6 pr-2 py-2 text-xs font-bold text-white bg-[#0c0407] hover:bg-orange-500 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span>Have More Questions?</span>
                <div className="w-8 h-8 rounded-full bg-white text-[#0c0407] flex items-center justify-center ml-4 group-hover:rotate-45 group-hover:text-orange-500 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS_LIST.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#ececec] rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 flex items-center justify-between space-x-4 hover:bg-[#fafafa] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#0c0407]">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#f8f8f8] border border-[#ececec] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#0c0407] text-white" : "text-[#777777]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#555555] leading-relaxed border-t border-[#f0f0f0] pt-4">
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
