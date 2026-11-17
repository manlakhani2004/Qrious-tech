"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Calendar
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/data/projects";
import PortfolioModal from "@/components/modals/PortfolioModal";

export default function PortfolioSpotlight() {
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  // Take first 6 flagship projects
  const featured = PORTFOLIO_PROJECTS.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              Proven Production Platforms
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Digital Products & <br />
              <span className="gradient-text-orange">Flagship Implementations</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors group"
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
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Domain & Year */}
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

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {proj.name}
                  </h3>
                  <div className="text-xs text-orange-400/80 font-medium mt-0.5">
                    {proj.originalContext}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {proj.summary}
                </p>

                {/* Technologies */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-400">
                      +{proj.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-slate-400">Explore Stack & Specs</span>
                <span className="font-semibold text-orange-400 flex items-center group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-2xl hover:border-orange-500/50 hover:text-white transition-all shadow-lg"
          >
            <span>View Full Portfolio Directory (16 Applications)</span>
            <ArrowRight className="w-4 h-4 ml-2 text-orange-400" />
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
