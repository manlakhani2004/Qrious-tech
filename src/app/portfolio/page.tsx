"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Search,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Code2,
  CheckCircle2
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
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              16 Flagship Platforms
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Production Portfolio & <br />
              <span className="gradient-text-orange">Client Software Systems</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio spanning consumer fitness, clinical biomarker portals, enterprise workforce hubs, real-time sports tournaments, and Web3 platforms.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-[#050811] border-b border-slate-800/80 sticky top-20 z-20 backdrop-blur-xl bg-[#050811]/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category buttons */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0">
                {PORTFOLIO_DOMAINS.map((dom) => (
                  <button
                    key={dom.id}
                    onClick={() => setSelectedDomain(dom.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedDomain === dom.id
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                        : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {dom.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, tech or sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredProjects.length}</strong> of {PORTFOLIO_PROJECTS.length} platforms
            </span>
            {selectedDomain !== "all" && (
              <button
                onClick={() => setSelectedDomain("all")}
                className="text-orange-400 hover:underline"
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
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className="font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[10px]"
                      style={{
                        backgroundColor: `${proj.accent || "#f97316"}20`,
                        color: proj.accent || "#f97316"
                      }}
                    >
                      {proj.domain}
                    </span>
                    <span className="text-slate-400 font-medium">Delivered {proj.year}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {proj.name}
                    </h3>
                    <div className="text-xs text-orange-400/80 font-medium mt-0.5">
                      {proj.originalContext}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {proj.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 5 && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-400">
                        +{proj.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] text-slate-400">Inspect Architecture</span>
                  <span className="font-semibold text-orange-400 flex items-center group-hover:translate-x-1 transition-transform">
                    <span>View Platform Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
