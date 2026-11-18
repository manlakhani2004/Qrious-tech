"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import { CASE_STUDIES, CASE_STUDY_TABS, CaseStudy } from "@/data/projects";
import { CategoryTabIcon } from "@/components/case-studies/CategoryTabIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CaseStudiesSpotlight() {
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredStudies =
    selectedTab === "all"
      ? CASE_STUDIES.slice(0, 6)
      : CASE_STUDIES.filter((c) => c.tab === selectedTab).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Header with Scroll Reveal */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
              <FolderGit2 className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Latest works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
              Performance that delivers <br />
              visible growth
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors group"
            >
              <span>Explore All 37 Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Motive Category Tabs */}
        <ScrollReveal delay={0.1} className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-neutral-100 dark:border-neutral-800">
          {CASE_STUDY_TABS.map((tab) => {
            const isActive = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-xs"
                    : "bg-neutral-100 dark:bg-[#18181b] text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-800"
                }`}
              >
                <span className={`w-3.5 h-3.5 shrink-0 flex items-center justify-center ${isActive ? "text-white dark:text-black" : "text-neutral-500 dark:text-neutral-400"}`}>
                  <CategoryTabIcon id={tab.id} className="w-3.5 h-3.5" />
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Motive Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="h-full"
            >
              <Link
                href={`/case-studies/${study.id}`}
                className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 h-full"
              >
                <div className="space-y-4">
                  {/* Top Category Badge & Circular Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white dark:bg-[#18181b] text-neutral-800 dark:text-neutral-200 shadow-2xs border border-neutral-200/60 dark:border-neutral-700">
                      {study.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-black dark:text-white group-hover:rotate-45 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors line-clamp-2">
                    {study.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                    {study.heroDesc}
                  </p>

                  {/* KPIs Row */}
                  {study.kpis && study.kpis.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-200/60 dark:border-neutral-800">
                      {study.kpis.slice(0, 3).map((kpi, kIdx) => (
                        <div key={kIdx} className="bg-white dark:bg-[#18181b] rounded-xl p-2 text-center shadow-2xs">
                          <div className="text-sm font-extrabold text-black dark:text-white">
                            {kpi.val}
                          </div>
                          <div className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate mt-0.5 font-medium">
                            {kpi.lbl}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500">Architecture Spec</span>
                  <span className="font-semibold text-black dark:text-white group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Inspect Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center space-x-2 px-6 py-3 text-xs sm:text-sm font-semibold text-black dark:text-white bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 rounded-full hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all shadow-2xs"
          >
            <span>Browse Complete Directory of 37 Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
