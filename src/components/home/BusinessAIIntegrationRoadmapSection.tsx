"use client";

import React from "react";
import Link from "next/link";
import {
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Zap
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

interface RoadmapStep {
  number: string;
  timeframe: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  outcome: string;
}

const STEPS: RoadmapStep[] = [
  {
    number: "01",
    timeframe: "Days 1 – 3",
    badge: "Discovery",
    title: "Workflow & Opportunity Audit",
    description:
      "We sit down directly with your team and review daily operational bottlenecks. We inspect your data schemas, security boundaries, and manual steps to pinpoint guaranteed, high-ROI AI use cases.",
    deliverables: [
      "Process bottleneck & ROI audit",
      "Private cloud boundary & security scoping",
      "Target API & ERP mapping (NetSuite, CRM, DBs)"
    ],
    outcome: "De-Risked Architecture Plan"
  },
  {
    number: "02",
    timeframe: "Days 4 – 10",
    badge: "Engineering",
    title: "Custom Build & Tool Integration",
    description:
      "No need to switch tools. Our in-house engineers build custom autonomous agents and vector search pipelines that connect directly to your existing Slack, ERP, Salesforce, or database.",
    deliverables: [
      "Deterministic agent pipeline with Pydantic guardrails",
      "Private vector indexing on internal SOPs & contracts",
      "Continuous daily commits to your company GitHub"
    ],
    outcome: "14-Day Working POC"
  },
  {
    number: "03",
    timeframe: "Days 11 – 14",
    badge: "Production",
    title: "VPC Deployment & Continuous Support",
    description:
      "We deploy the AI systems inside your private VPC with zero client data retention. We train your staff so everyone feels empowered, and provide continuous 24/7 sprint monitoring.",
    deliverables: [
      "Air-gapped private cloud VPC deployment",
      "100% full source code & model weights transfer",
      "24/7 uptime telemetry & overlapping sprint pods"
    ],
    outcome: "100% Client IP Ownership"
  }
];

export default function BusinessAIIntegrationRoadmapSection() {
  return (
    <section
      id="how-we-bring-ai-to-business"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-200/80 dark:border-white/10 transition-colors duration-200 relative overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header: Minimalist & Bold */}
        <ScrollReveal className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>02 / Integration Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
            How We Bring AI Directly Into Your Business
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
            You don’t have to overhaul your operations to adopt AI. We connect intelligent automation into the software you already use — securely, predictably, and within two weeks.
          </p>
        </ScrollReveal>

        {/* 3-Column Roadmap Flow sitting directly on continuous grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/80 dark:divide-white/10 border-t border-b border-neutral-200/80 dark:border-white/10">
          {STEPS.map((s, idx) => (
            <div
              key={s.number}
              className={`py-10 lg:py-12 flex flex-col justify-between ${
                idx === 0 ? "lg:pr-10" : idx === 1 ? "lg:px-10" : "lg:pl-10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-black dark:text-white">
                    {s.number}
                  </span>
                  <span className="text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-white/[0.06] px-3 py-1 rounded-full">
                    {s.timeframe}
                  </span>
                </div>

                <div className="text-[11px] font-mono font-semibold text-blue-600 dark:text-sky-400 uppercase tracking-wider mb-2">
                  {s.badge}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mb-3">
                  {s.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                  {s.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 mb-8">
                  {s.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-500 dark:text-neutral-400">Outcome:</span>
                <span className="font-semibold text-black dark:text-white">{s.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA Action */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% In-House Ahmedabad HQ Engineers • Direct Slack &amp; GitHub Access</span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group"
          >
            <span>Schedule Your Architecture Discovery</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
