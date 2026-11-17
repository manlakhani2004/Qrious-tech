"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Search,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Filter
} from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_TABS, CaseStudy } from "@/data/projects";
import CaseStudyModal from "@/components/modals/CaseStudyModal";

export default function CaseStudiesPage() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((study) => {
      const matchesTab = selectedTab === "all" || study.tab === selectedTab;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        study.title.toLowerCase().includes(q) ||
        study.category.toLowerCase().includes(q) ||
        study.heroDesc.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [selectedTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              37 Production Deployments
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Enterprise Case Studies & <br />
              <span className="gradient-text-orange">Architectural Deep-Dives</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore documented production solutions across AI/ML agents, high-concurrency web systems, mobile architectures, Salesforce integrations, and Power BI enterprise reporting.
            </p>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="py-8 bg-[#050811] border-b border-slate-800/80 sticky top-20 z-20 backdrop-blur-xl bg-[#050811]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0">
                {CASE_STUDY_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedTab === tab.id
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                        : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredStudies.length}</strong> of {CASE_STUDIES.length} case studies
            </span>
            {selectedTab !== "all" && (
              <button
                onClick={() => setSelectedTab("all")}
                className="text-orange-400 hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setActiveModalStudy(study)}
                className="bg-gradient-to-br from-slate-900/90 via-[#0a0f1d] to-slate-900/90 border border-slate-800/90 rounded-3xl p-6 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: `${study.themeColor || "#f97316"}20`,
                        color: study.themeColor || "#f97316"
                      }}
                    >
                      {study.category}
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-orange-400 transition-colors flex items-center">
                      <span>Inspect</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-2">
                    {study.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {study.heroDesc}
                  </p>

                  {/* KPIs */}
                  {study.kpis && study.kpis.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
                      {study.kpis.slice(0, 3).map((kpi, kIdx) => (
                        <div key={kIdx} className="bg-slate-800/40 rounded-xl p-2 text-center">
                          <div
                            className="text-sm font-extrabold"
                            style={{ color: study.themeColor || "#f97316" }}
                          >
                            {kpi.val}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">
                            {kpi.lbl}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] text-slate-400">Deep-Dive Ready</span>
                  <span className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                    View Architecture &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20 bg-slate-900/30 border border-slate-800 rounded-3xl">
              <p className="text-slate-400 text-sm">
                No case studies match your query &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedTab("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-xl"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* Modal */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
      />
    </div>
  );
}
