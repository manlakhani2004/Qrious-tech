"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Search,
  ArrowUpRight,
  TrendingUp,
  Sparkles
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
    <div className="min-h-screen bg-[#f8f8f8] text-[#111827] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[#ececec] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>37 Production Deployments</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0c0407] tracking-tight max-w-4xl mx-auto">
              Enterprise Case Studies & <br />
              <span className="text-orange-500">Architectural Deep-Dives</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#555555] max-w-3xl mx-auto leading-relaxed">
              Explore documented production solutions across AI/ML agents, high-concurrency web systems, mobile architectures, Salesforce integrations, and Power BI enterprise reporting.
            </p>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="py-6 bg-[#f8f8f8] border-b border-[#e5e5e5] sticky top-20 z-20 backdrop-blur-md bg-[#f8f8f8]/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0">
                {CASE_STUDY_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                      selectedTab === tab.id
                        ? "bg-[#0c0407] text-white shadow-sm"
                        : "bg-white text-[#555555] hover:text-[#0c0407] hover:bg-[#f0f0f0] border border-[#e5e5e5]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-[#e5e5e5] rounded-full text-xs text-[#0c0407] placeholder-[#888888] focus:outline-none focus:border-[#0c0407]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs text-[#666666]">
            <span>
              Showing <strong className="text-[#0c0407] font-bold">{filteredStudies.length}</strong> of {CASE_STUDIES.length} case studies
            </span>
            {selectedTab !== "all" && (
              <button
                onClick={() => setSelectedTab("all")}
                className="text-orange-600 font-bold hover:underline"
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
                className="bg-white border border-[#ececec] rounded-3xl p-6 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: `${study.themeColor || "#f97316"}15`,
                        color: study.themeColor || "#ea580c"
                      }}
                    >
                      {study.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#0c0407] group-hover:rotate-45 group-hover:bg-[#0c0407] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed">
                    {study.heroDesc}
                  </p>

                  {study.kpis && study.kpis.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#f0f0f0]">
                      {study.kpis.slice(0, 3).map((kpi, kIdx) => (
                        <div key={kIdx} className="bg-[#f8f8f8] border border-[#ececec] rounded-xl p-2 text-center">
                          <div
                            className="text-sm font-extrabold"
                            style={{ color: study.themeColor || "#ea580c" }}
                          >
                            {kpi.val}
                          </div>
                          <div className="text-[10px] text-[#777777] truncate mt-0.5 font-medium">
                            {kpi.lbl}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#777777]">
                  <span className="text-[11px] font-semibold text-[#888888]">Architecture Spec</span>
                  <span className="font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                    Inspect Solution &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20 bg-white border border-[#ececec] rounded-3xl">
              <p className="text-[#666666] text-sm">
                No case studies match your query &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedTab("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 text-xs font-bold text-white bg-[#0c0407] rounded-full"
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
