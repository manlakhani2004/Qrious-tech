"use client";

import React from "react";
import {
  X,
  Calendar,
  Layers,
  CheckCircle2,
  Code2,
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { PortfolioProject } from "@/data/projects";

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0b101f] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0b101f]/95 backdrop-blur-md border-b border-slate-800/80 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: `${project.accent || "#f97316"}20`,
                color: project.accent || "#f97316"
              }}
            >
              {project.category}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">•</span>
            <span className="text-xs text-slate-400 hidden sm:inline flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Delivered {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
            <div className="text-sm font-medium text-orange-400 mt-1">
              {project.originalContext}
            </div>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          {project.overview && project.overview.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Layers className="w-4 h-4 text-orange-400 mr-2" />
                Product Context & Goals
              </h3>
              <div className="space-y-2">
                {project.overview.map((para, idx) => (
                  <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Technical Architecture */}
          {project.technicalOverview && project.technicalOverview.length > 0 && (
            <div className="space-y-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <h3 className="text-base font-bold text-white flex items-center">
                <Code2 className="w-4 h-4 text-cyan-400 mr-2" />
                Technical Architecture & Engineering Highlights
              </h3>
              <div className="space-y-2">
                {project.technicalOverview.map((para, idx) => (
                  <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Core Technologies & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech badges */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white">Technologies Deployed</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white">Key Capabilities Built</h4>
              <ul className="space-y-2">
                {project.features.slice(0, 8).map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#0b101f]/95 backdrop-blur-md border-t border-slate-800/80 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-slate-400">
            Want to build a platform like {project.name}?
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <a
              href={`/contact?subject=${encodeURIComponent("Platform Development: " + project.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all"
            >
              <span>Build with Our Pods</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
