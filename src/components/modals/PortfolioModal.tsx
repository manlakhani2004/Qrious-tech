"use client";

import React from "react";
import {
  X,
  Calendar,
  Layers,
  CheckCircle2,
  Code2,
  ArrowUpRight
} from "lucide-react";
import { PortfolioProject } from "@/data/projects";

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#121215] border border-[#ececec] dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-b border-[#e5e5e5] dark:border-neutral-800 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: `${project.accent || "#f97316"}15`,
                color: project.accent || "#ea580c"
              }}
            >
              {project.category}
            </span>
            <span className="text-xs text-[#cccccc] dark:text-neutral-600 hidden sm:inline">•</span>
            <span className="text-xs text-[#666666] dark:text-neutral-400 hidden sm:inline flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-orange-500" />
              Delivered {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#666666] dark:text-neutral-400 hover:text-[#0c0407] dark:hover:text-white hover:bg-[#f3f4f6] dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#ffffff] dark:bg-[#121215]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c0407] dark:text-white tracking-tight">
              {project.name}
            </h2>
            <div className="text-xs font-bold text-orange-600 dark:text-orange-400 mt-1">
              {project.originalContext}
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#555555] dark:text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f8f8] dark:bg-[#18181b] border border-[#ececec] dark:border-neutral-800 rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0c0407] dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-[#666666] dark:text-neutral-400 mt-1 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          {project.overview && project.overview.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#0c0407] dark:text-white flex items-center">
                <Layers className="w-4 h-4 text-orange-500 mr-2" />
                Product Context & Goals
              </h3>
              <div className="space-y-2">
                {project.overview.map((para, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-[#555555] dark:text-neutral-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Technical Architecture */}
          {project.technicalOverview && project.technicalOverview.length > 0 && (
            <div className="space-y-3 bg-[#f8f8f8] dark:bg-[#18181b] border border-[#ececec] dark:border-neutral-800 rounded-2xl p-5">
              <h3 className="text-base font-bold text-[#0c0407] dark:text-white flex items-center">
                <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                Technical Architecture & Highlights
              </h3>
              <div className="space-y-2">
                {project.technicalOverview.map((para, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-[#555555] dark:text-neutral-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Technologies & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0c0407] dark:text-white uppercase tracking-wider">
                Technologies Deployed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f8f8f8] dark:bg-[#18181b] text-[#333333] dark:text-neutral-200 border border-[#e5e5e5] dark:border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0c0407] dark:text-white uppercase tracking-wider">
                Key Capabilities Built
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 8).map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-[#444444] dark:text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-t border-[#e5e5e5] dark:border-neutral-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-[#777777] dark:text-neutral-400">
            Want to build a platform like {project.name}?
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-[#555555] dark:text-neutral-400 hover:text-[#0c0407] dark:hover:text-white rounded-full hover:bg-[#f3f4f6] dark:hover:bg-neutral-800 transition-colors"
            >
              Close
            </button>
            <a
              href={`/contact?subject=${encodeURIComponent("Platform Development: " + project.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#0c0407] dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-all"
            >
              <span>Build with Our Pods</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
