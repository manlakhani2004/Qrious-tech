"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Search,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  LayoutGrid,
  X
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PORTFOLIO_DOMAINS, PortfolioProject } from "@/data/projects";
import PortfolioModal from "@/components/modals/PortfolioModal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "motion/react";

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
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        {/* Motive Centered Hero */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Ambient background glow for luxury dark mode */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
              <LayoutGrid className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>16 Flagship Platforms</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              Production Portfolio & <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">Client Software Platforms</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio spanning consumer fitness, clinical biomarker portals, enterprise workforce hubs, real-time sports tournaments, and Web3 platforms.
            </p>
          </ScrollReveal>
        </section>

        {/* Sticky Filter & Search Toolbar */}
        <section className="bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-md border-y border-neutral-100 dark:border-neutral-800/80 sticky top-20 z-20 shadow-2xs py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            {/* Tier 1: Category Navigation Pills (Full-Width Responsive Grid) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {PORTFOLIO_DOMAINS.map((dom, idx) => (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`w-full py-2.5 px-2 rounded-full text-[11px] xl:text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center justify-center text-center cursor-pointer ${
                    idx === 6 ? "col-span-2 sm:col-span-2 lg:col-span-1" : ""
                  } ${
                    selectedDomain === dom.id
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-xs"
                      : "bg-neutral-100 dark:bg-[#18181b] text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-800"
                  }`}
                >
                  <span className="truncate">{dom.label}</span>
                </button>
              ))}
            </div>

            {/* Tier 2: Meta Sub-Bar (Live Result Counter + Active Filter Chips + Search Input) */}
            <div className="pt-2.5 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-400">
              {/* Left: Result Counter & Active Filter Pills */}
              <div className="flex items-center flex-wrap gap-2">
                <span>
                  Showing <strong className="text-black dark:text-white font-bold">{filteredProjects.length}</strong> of {PORTFOLIO_PROJECTS.length} platforms
                </span>
                {selectedDomain !== "all" && (
                  <button
                    onClick={() => setSelectedDomain("all")}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-[#18181b] hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    <span>{PORTFOLIO_DOMAINS.find((d) => d.id === selectedDomain)?.label}</span>
                    <X className="w-3 h-3 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white" />
                  </button>
                )}
                {(searchQuery || selectedDomain !== "all") && (
                  <button
                    onClick={() => {
                      setSelectedDomain("all");
                      setSearchQuery("");
                    }}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white underline ml-1 cursor-pointer"
                  >
                    Reset all
                  </button>
                )}
              </div>

              {/* Right: Sleek Search Bar */}
              <div className="relative w-full sm:w-80 shrink-0">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by name, tech or sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2 bg-[#f8f8f9] dark:bg-[#18181b] border border-neutral-200/80 dark:border-neutral-700 rounded-full text-xs text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-[#121215] transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-neutral-400 hover:text-black dark:hover:text-white rounded-full transition-colors cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, idx) => (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: (idx % 6) * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onClick={() => setActiveModalProject(proj)}
                  className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[10px] bg-white dark:bg-[#18181b] text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700 shadow-xs">
                        {proj.domain}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-black dark:text-white shadow-xs group-hover:rotate-45 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                        {proj.name}
                      </h3>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold mt-1">
                        {proj.originalContext} • Delivered {proj.year}
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                      {proj.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-[#18181b] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 5 && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                          +{proj.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-500">
                    <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">Platform Spec</span>
                    <span className="font-bold text-black dark:text-white group-hover:translate-x-0.5 transition-transform flex items-center space-x-1">
                      <span>View Platform</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-[#f8f8f9] dark:bg-[#121215] border border-neutral-200/80 dark:border-neutral-800 rounded-3xl mt-8">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                No software platforms match your filter or search &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedDomain("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2 text-xs font-bold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-full transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
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
