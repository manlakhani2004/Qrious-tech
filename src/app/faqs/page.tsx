"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FAQS_LIST } from "@/data/company";
import { HelpCircle, ChevronDown, ArrowRight, Search } from "lucide-react";
import { motion } from "motion/react";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "About Qtech",
    "Team & Expertise",
    "Staffing",
    "Project Management",
    "Collaboration",
    "IP Security",
    "Contracts"
  ];

  const filteredFaqs = FAQS_LIST.filter((faq) => {
    const matchesCat = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        {/* Motive Centered Hero */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Ambient background glow for luxury dark mode */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
              <HelpCircle className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Common Tech Queries</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              Frequently Asked <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">Technical & Staffing Questions</span>
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Everything you need to know about our senior engineering pods, IP ownership, sprint delivery, and contract frameworks.
            </p>

            {/* Search Input Pill */}
            <div className="max-w-md mx-auto relative mb-8">
              <div className="flex items-center bg-[#f8f8f9] dark:bg-[#18181b] border border-neutral-200/80 dark:border-neutral-700 rounded-full px-4 py-2.5 shadow-2xs focus-within:border-black dark:focus-within:border-white focus-within:bg-white dark:focus-within:bg-[#121215] transition-all">
                <Search className="w-4 h-4 text-neutral-400 dark:text-neutral-500 mr-2.5 shrink-0" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. contracts, developers, IP)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-transparent outline-none text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-xs"
                      : "bg-neutral-100 dark:bg-[#18181b] text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-neutral-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* FAQ Accordion List */}
        <section className="py-12 bg-[#f8f8f9] dark:bg-[#0c0c0e] border-t border-neutral-100 dark:border-neutral-800/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.05 }}
                      className="bg-white dark:bg-[#121215] rounded-3xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between space-x-4 cursor-pointer"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                            {faq.category}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-black dark:text-white leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                        <div
                          className={`w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 bg-black text-white dark:bg-white dark:text-black" : "text-black dark:text-white"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 sm:px-8 pb-7 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-16 bg-white dark:bg-[#121215] rounded-3xl border border-neutral-200 dark:border-neutral-800">
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">No questions matching your search criteria.</p>
                </div>
              )}
            </div>

            {/* Still have questions? Motive CTA Card */}
            <div className="mt-16 bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-8 sm:p-10 text-center hover:shadow-xl transition-all duration-300 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Have a question not listed here?</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mb-6 max-w-md mx-auto">
                Reach out to our leadership directly and receive answers within 24 hours.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

