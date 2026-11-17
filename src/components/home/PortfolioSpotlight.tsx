"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/data/projects";
import PortfolioModal from "@/components/modals/PortfolioModal";

export default function PortfolioSpotlight() {
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const featured = PORTFOLIO_PROJECTS.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#ffffff] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Client Platforms</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
              Selected digital products & <br />
              <span className="text-orange-500">flagship implementations</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-xs font-bold text-[#0c0407] hover:text-orange-500 transition-colors group"
            >
              <span>Explore All 16 Portfolio Platforms</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModalProject(proj)}
              className="bg-[#f8f8f8] border border-[#ececec] rounded-3xl p-6 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Domain & Circular Arrow */}
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
                  <div className="w-8 h-8 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#0c0407] group-hover:rotate-45 group-hover:bg-[#0c0407] group-hover:text-white transition-all duration-300">
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

                {/* Tech tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white text-[#333333] border border-[#e5e5e5]"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#f0f0f0] text-[#777777]">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex items-center justify-between text-xs text-[#777777]">
                <span className="text-[11px] font-semibold text-[#888888]">Architecture Spec</span>
                <span className="font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                  View Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-[#0c0407] bg-white border border-[#e5e5e5] rounded-full hover:bg-[#0c0407] hover:text-white transition-all shadow-sm"
          >
            <span>View Full Portfolio Directory (16 Applications)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-orange-500" />
          </Link>
        </div>
      </div>

      {/* Modal */}
      <PortfolioModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
