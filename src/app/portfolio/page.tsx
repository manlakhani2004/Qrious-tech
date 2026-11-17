"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Search,
  ArrowUpRight,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PORTFOLIO_DOMAINS, PortfolioProject } from "@/data/projects";
import PortfolioModal from "@/components/modals/PortfolioModal";

export default function PortfolioPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesDomain = selectedDomain === "all" || proj.domain === selectedDomain;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        proj.name.toLowerCase().includes(q) ||
        proj.category.toLowerCase().includes(q) ||
        proj.summary.toLowerCase().includes(q) ||
        proj.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111827] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[#ececec] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>16 Flagship Platforms</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0c0407] tracking-tight max-w-4xl mx-auto">
              Production Portfolio & <br />
              <span className="text-orange-500">Client Software Platforms</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#555555] max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio spanning consumer fitness, clinical biomarker portals, enterprise workforce hubs, real-time sports tournaments, and Web3 platforms.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-6 bg-[#f8f8f8] border-b border-[#e5e5e5] sticky top-20 z-20 backdrop-blur-md bg-[#f8f8f8]/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category buttons */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0">
                {PORTFOLIO_DOMAINS.map((dom) => (
                  <button
                    key={dom.id}
                    onClick={() => setSelectedDomain(dom.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                      selectedDomain === dom.id
                        ? "bg-[#0c0407] text-white shadow-sm"
                        : "bg-white text-[#555555] hover:text-[#0c0407] hover:bg-[#f0f0f0] border border-[#e5e5e5]"
                    }`}
                  >
                    {dom.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, tech or sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-[#e5e5e5] rounded-full text-xs text-[#0c0407] placeholder-[#888888] focus:outline-none focus:border-[#0c0407]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs text-[#666666]">
            <span>
              Showing <strong className="text-[#0c0407] font-bold">{filteredProjects.length}</strong> of {PORTFOLIO_PROJECTS.length} platforms
            </span>
            {selectedDomain !== "all" && (
              <button
                onClick={() => setSelectedDomain("all")}
                className="text-orange-600 font-bold hover:underline"
              >
                Clear Sector Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setActiveModalProject(proj)}
                className="bg-white border border-[#ececec] rounded-3xl p-6 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className="font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[10px]"
                      style={{
                        backgroundColor: `${proj.accent || "#f97316"}15`,
                        color: proj.accent || "#ea580c"
                      }}
                    >
                      {proj.domain}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#0c0407] group-hover:rotate-45 group-hover:bg-[#0c0407] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                      {proj.name}
                    </h3>
                    <div className="text-xs text-orange-600 font-semibold mt-0.5">
                      {proj.originalContext} • Delivered {proj.year}
                    </div>
                  </div>

                  <p className="text-xs text-[#555555] leading-relaxed line-clamp-3">
                    {proj.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#f8f8f8] text-[#333333] border border-[#e5e5e5]"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 5 && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#f0f0f0] text-[#777777]">
                        +{proj.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#777777]">
                  <span className="text-[11px] font-semibold text-[#888888]">Architecture Spec</span>
                  <span className="font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                    View Platform Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      <PortfolioModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
