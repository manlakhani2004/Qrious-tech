"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { FAQS_LIST } from "@/data/company";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 relative transition-colors duration-200">
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Sticky in Motive style with Scroll Reveal) */}
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs backdrop-blur-sm">
              <HelpCircle className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.15]">
              Got questions? <br />
              We&apos;ve got answers.
            </h2>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Transparent details regarding intellectual property, agile developer allocations, NDA protocols, and sprint trial periods.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Have more questions?</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Accordion with Staggered Scroll Animations */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS_LIST.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-[#f8f8f9] dark:bg-[#121215] border border-transparent dark:border-neutral-800 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 flex items-center justify-between space-x-4 hover:bg-neutral-200/40 dark:hover:bg-[#18181b] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#27272a] border border-neutral-200/70 dark:border-neutral-700 px-2.5 py-0.5 rounded-full shrink-0 shadow-2xs">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-black dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 bg-black text-white dark:bg-white dark:text-black"
                          : "bg-white dark:bg-[#27272a] text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-200/60 dark:border-neutral-800 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
