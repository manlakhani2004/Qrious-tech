"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import { CASE_STUDIES, CASE_STUDY_TABS, CaseStudy } from "@/data/projects";
import CaseStudyModal from "@/components/modals/CaseStudyModal";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CaseStudiesSpotlight() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    selectedTab === "all"
      ? CASE_STUDIES.slice(0, 6)
      : CASE_STUDIES.filter((c) => c.tab === selectedTab).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Header with Scroll Reveal */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
              <FolderGit2 className="w-3.5 h-3.5 text-neutral-600" />
              <span>Latest works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
              Performance that delivers <br />
              visible growth
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-neutral-600 hover:text-black transition-colors group"
            >
              <span>Explore All 37 Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Motive Category Tabs */}
        <ScrollReveal delay={0.1} className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-neutral-100">
          {CASE_STUDY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedTab === tab.id
                  ? "bg-black text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
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
              onClick={() => setActiveModalStudy(study)}
              className="bg-[#f8f8f9] rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-neutral-200"
            >
              <div className="space-y-4">
                {/* Top Category Badge & Circular Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white text-neutral-800 shadow-2xs border border-neutral-200/60">
                    {study.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-45 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black group-hover:text-neutral-700 transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-500 line-clamp-3 leading-relaxed">
                  {study.heroDesc}
                </p>

                {/* KPIs Row */}
                {study.kpis && study.kpis.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-200/60">
                    {study.kpis.slice(0, 3).map((kpi, kIdx) => (
                      <div key={kIdx} className="bg-white rounded-xl p-2 text-center shadow-2xs">
                        <div className="text-sm font-extrabold text-black">
                          {kpi.val}
                        </div>
                        <div className="text-[10px] text-neutral-500 truncate mt-0.5 font-medium">
                          {kpi.lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                <span className="text-[11px] font-medium text-neutral-400">Architecture Spec</span>
                <span className="font-semibold text-black group-hover:underline">
                  Inspect Solution &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center space-x-2 px-6 py-3 text-xs sm:text-sm font-semibold text-black bg-white border border-neutral-200 rounded-full hover:border-black transition-all shadow-2xs"
          >
            <span>Browse Complete Directory of 37 Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>

      {/* Detail Modal */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
      />
    </section>
  );
}
