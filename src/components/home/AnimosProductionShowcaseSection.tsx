"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Database,
  FileText,
  ShieldCheck,
  Bot,
  Zap,
  Lock,
  Workflow,
  Cpu,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface ShowcaseItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: { value: string; label: string };
  badge: string;
  accentColor: string;
  previewType: "invoice" | "rag" | "crm" | "code" | "sql";
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "invoice",
    tag: "Autonomous Operations",
    title: "Invoice & ERP Automated Reconciliation",
    description: "Multi-agent OCR pipeline that ingests vendor PDFs, validates PO variances, and posts clean journal entries into NetSuite ERP.",
    metrics: { value: "< 1.4s", label: "Average Execution" },
    badge: "99.8% Accuracy",
    accentColor: "from-blue-500/20 to-cyan-500/10",
    previewType: "invoice"
  },
  {
    id: "rag",
    tag: "Private Knowledge",
    title: "Air-Gapped Sovereign Enterprise RAG",
    description: "Self-hosted vector intelligence indexing contracts, SOPs, and compliance rules inside client VPC with zero third-party training.",
    metrics: { value: "14ms", label: "Vector Latency" },
    badge: "100% Air-Gapped",
    accentColor: "from-purple-500/20 to-indigo-500/10",
    previewType: "rag"
  },
  {
    id: "crm",
    tag: "Sales & Support",
    title: "24/7 Conversational Qualification Pod",
    description: "Inbound AI sales agent that answers technical questions, qualifies prospects, and books qualified meetings directly on calendar.",
    metrics: { value: "+38%", label: "Lead Conversion" },
    badge: "24/7 Live Coverage",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    previewType: "crm"
  },
  {
    id: "code",
    tag: "Engineering Acceleration",
    title: "Dedicated AI Systems Engineering Squad",
    description: "In-house senior engineers committed directly into your GitHub repository with daily standup overlapping timezone sprints.",
    metrics: { value: "14 Days", label: "Working POC Delivery" },
    badge: "100% Code Ownership",
    accentColor: "from-amber-500/20 to-orange-500/10",
    previewType: "code"
  },
  {
    id: "sql",
    tag: "Data Intelligence",
    title: "Natural Language SQL Data Warehouse",
    description: "Executive conversational portal translating complex business questions into deterministic SQL across Snowflake and Postgres.",
    metrics: { value: "100%", label: "Schema Determinism" },
    badge: "SOC2 Aligned",
    accentColor: "from-sky-500/20 to-blue-500/10",
    previewType: "sql"
  }
];

export default function AnimosProductionShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
  };

  const scrollPrev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length);
  };

  return (
    <section
      id="showcase"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-200/80 dark:border-white/10 relative transition-colors duration-200 overflow-hidden"
    >
      {/* Ambient Lighting Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-blue-600/8 via-cyan-500/8 to-purple-600/8 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header: Animos Showcase Style */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span>Production Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-3">
              Built by Qrious Tech. <br />
              <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                Running in Real Enterprise Workflows.
              </span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Real systems engineered by our dedicated in-house pods — deployed into production across US, UK, EU, UAE, and APAC.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-2 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-[2px] bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/10 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer shadow-2xs"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-[2px] bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/10 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer shadow-2xs"
              aria-label="Next showcase"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* 3D Interactive Showcase Cards Stream (Animos-style kinetic cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASE_ITEMS.map((item, idx) => {
            const isFeatured = idx === activeIndex;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveIndex(idx)}
                className={`group relative rounded-none sm:rounded-[3px] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${
                  isFeatured
                    ? "bg-white dark:bg-[#111114] border-blue-500/80 dark:border-cyan-500/50 shadow-xl"
                    : "bg-[#fbfbfc]/80 dark:bg-[#0c0c0e]/80 border-neutral-200/80 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 shadow-xs"
                }`}
              >
                {/* Hairline Specular Beam */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

                <div>
                  {/* Category Tag & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-[2px] bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/70 dark:border-white/10 text-[10px] font-mono font-bold text-neutral-800 dark:text-neutral-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  {/* Visual Miniature UI Mockup (Animos Editor style) */}
                  <div className="p-3.5 rounded-[2px] bg-neutral-50 dark:bg-[#18181c] border border-neutral-200/70 dark:border-white/[0.07] mb-6 space-y-2 text-left font-mono text-[11px]">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 pb-1.5 border-b border-neutral-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Pipeline Status</span>
                      </span>
                      <span className="text-neutral-500">{item.metrics.value}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-neutral-700 dark:text-neutral-300 font-semibold truncate">
                        {item.id === "invoice" && "INV-8492 ➔ NetSuite Sync"}
                        {item.id === "rag" && "DocIndex ➔ Grounded Retrieval"}
                        {item.id === "crm" && "LeadInbound ➔ Calendly Book"}
                        {item.id === "code" && "GitPush ➔ Deterministic CI/CD"}
                        {item.id === "sql" && "Prompt ➔ Safe Query Execution"}
                      </span>
                      <span className="text-emerald-600 dark:text-cyan-400 font-bold shrink-0">
                        ✓ 200 OK
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Metric & Link */}
                <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-mono font-extrabold text-base text-black dark:text-white">
                      {item.metrics.value}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-medium">
                      {item.metrics.label}
                    </div>
                  </div>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center space-x-1 font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors group text-xs"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

