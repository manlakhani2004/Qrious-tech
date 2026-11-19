"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Database,
  MessageSquare,
  TrendingUp,
  Cpu,
  Layers,
  Clock,
  Check,
  XCircle
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";

interface DepartmentUseCase {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  headline: string;
  description: string;
  metrics: { value: string; label: string }[];
  manualProcess: {
    title: string;
    description: string;
    time: string;
    steps: string[];
  };
  aiProcess: {
    title: string;
    description: string;
    time: string;
    steps: string[];
    badge: string;
  };
}

const DEPARTMENTS: DepartmentUseCase[] = [
  {
    id: "support-sales",
    name: "Customer Support & Inbound Sales",
    badge: "24/7 Revenue & Retention",
    icon: <MessageSquare className="w-4 h-4" />,
    headline: "Never Miss a Lead or Make Customers Wait Again",
    description:
      "We deploy custom conversational AI agents that understand your catalog, qualify inbound prospects, answer complex customer inquiries, and schedule appointments on your calendar 24 hours a day.",
    metrics: [
      { value: "< 4s", label: "Average Response Time" },
      { value: "24/7", label: "Uninterrupted Coverage" },
      { value: "+38%", label: "Lead Qualification Rate" }
    ],
    manualProcess: {
      title: "Traditional Human Queue",
      description: "Leads wait 4 to 12 hours for email follow-ups; customer tickets pile up over weekends causing churn.",
      time: "Avg 4-12 Hours",
      steps: [
        "Inbound lead fills web form",
        "Waits overnight for sales rep to open CRM",
        "Manual email follow-up sent",
        "High drop-off rate before meeting booked"
      ]
    },
    aiProcess: {
      title: "Qrious Tech Conversational Pod",
      description: "Autonomous agent engages leads instantly, resolves questions from your knowledge base, and writes directly to CRM.",
      time: "Instant (< 4 Seconds)",
      steps: [
        "Instant greeting & intent parsing",
        "Contextual knowledge retrieval (pricing, features)",
        "Qualification against your business rules",
        "Direct calendar booking & CRM synchronization"
      ],
      badge: "Real-Time Action"
    }
  },
  {
    id: "operations-admin",
    name: "Back-Office & Operations",
    badge: "85% Manual Work Eliminated",
    icon: <FileText className="w-4 h-4" />,
    headline: "Automate Document Processing & Accounting Reconciliation",
    description:
      "Eliminate tedious copy-pasting. Our custom vision & document models read PDFs, vendor invoices, contracts, and shipping manifests, cross-checking line items against purchase orders and updating your ERP automatically.",
    metrics: [
      { value: "85%", label: "Manual Time Saved" },
      { value: "99.8%", label: "Data Extraction Accuracy" },
      { value: "0", label: "Manual Data Entry Variances" }
    ],
    manualProcess: {
      title: "Manual Paperwork Review",
      description: "Operations staff manually type data from PDFs into spreadsheets and ERPs, leading to typos and invoice backlogs.",
      time: "20-45 Mins Per File",
      steps: [
        "Download PDF invoice from email",
        "Manually retype vendor and line items",
        "Cross-check against ERP purchase orders",
        "Flag discrepancies via back-and-forth emails"
      ]
    },
    aiProcess: {
      title: "Autonomous Doc-to-ERP Pipeline",
      description: "Intelligent document agent ingests PDFs via webhook, verifies math invariants, and posts transactions straight to ERP.",
      time: "< 1.5 Seconds",
      steps: [
        "Automated OCR & document parsing",
        "Schema & invariant validation (Zod / Pydantic)",
        "Zero-discrepancy database reconciliation",
        "Direct post to NetSuite, QuickBooks, or SAP"
      ],
      badge: "Automated Reconciliation"
    }
  },
  {
    id: "company-knowledge",
    name: "Internal Company Knowledge",
    badge: "Zero-Leakage Private Search",
    icon: <Database className="w-4 h-4" />,
    headline: "Give Your Team Instant Answers From All Company Files",
    description:
      "Stop losing hours searching through scattered Google Drive folders, Notion pages, and Slack channels. We build an internal AI search engine that answers staff questions with exact citations — hosted privately with zero data leakage.",
    metrics: [
      { value: "14ms", label: "Semantic Search Latency" },
      { value: "100%", label: "Private Cloud VPC" },
      { value: "0%", label: "Public Model Retraining" }
    ],
    manualProcess: {
      title: "Fragmented File Chaos",
      description: "Employees spend up to 2 hours every day searching for policies, product specs, and past client deliverables.",
      time: "1-2 Hours Daily Lost",
      steps: [
        "Search Google Drive, Slack, and Notion",
        "Read outdated versions of SOP manuals",
        "Interrupt senior staff with repetitive questions",
        "Delays in executing critical business tasks"
      ]
    },
    aiProcess: {
      title: "Private Sovereign Knowledge RAG",
      description: "Secure semantic search engine index that retrieves verified answers with source citations in milliseconds.",
      time: "< 14 Milliseconds",
      steps: [
        "Unified vector indexing of all company files",
        "Grounded semantic search with exact source links",
        "Role-based access permissions enforced",
        "Isolated inside your cloud with zero data leaks"
      ],
      badge: "Grounded & Secure"
    }
  },
  {
    id: "custom-products",
    name: "Custom AI-Powered Software",
    badge: "Product Modernization",
    icon: <Cpu className="w-4 h-4" />,
    headline: "Add Smart AI Features Directly Into Your Existing Software",
    description:
      "Transform your existing web platform or mobile app into an intelligent software powerhouse. We engineer custom AI copilots, recommendation algorithms, automated reporting, and predictive analytics that delight your customers.",
    metrics: [
      { value: "100+", label: "In-House Engineers" },
      { value: "14 Days", label: "Working POC Delivery" },
      { value: "100%", label: "Direct IP Ownership" }
    ],
    manualProcess: {
      title: "Static Legacy Software",
      description: "Applications without AI feel clunky and require users to perform repetitive manual tasks, reducing user retention.",
      time: "Slow Manual Workflows",
      steps: [
        "Users click through 10+ manual menus",
        "No personalized intelligence or suggestions",
        "Data export requires manual spreadsheet manipulation",
        "Risk of falling behind AI-native competitors"
      ]
    },
    aiProcess: {
      title: "AI-Embedded Software Platform",
      description: "Native AI copilots and smart predictive algorithms embedded directly into your Next.js, React, or mobile application.",
      time: "Real-Time Intelligence",
      steps: [
        "Natural language command & copilot bar",
        "Smart automated summaries & recommendations",
        "High-concurrency serverless streaming APIs",
        "Full source code ownership transferred to you"
      ],
      badge: "Modern AI Stack"
    }
  }
];

export default function BusinessAITransformationsSection() {
  const [activeDeptIdx, setActiveDeptIdx] = useState(0);
  const activeDept = DEPARTMENTS[activeDeptIdx];

  // Motion 3D tilt tracking for card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2.5, -2.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-2.5, 2.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="business-ai-transformations"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Ambient Neon Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] 2xl:w-[1100px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Bot className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
            <span>Real-World Business Impact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-black dark:text-white tracking-tight leading-[1.14] mb-4">
            Where AI Transforms <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">
              Your Daily Business Operations
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We don’t build toy prototypes. We design, build, and deploy production-grade AI that eliminates repetitive manual tasks, speeds up operations, and creates measurable business value.
          </p>
        </ScrollReveal>

        {/* Department Switcher Tabs with Motion.dev Spring Glider */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-3 mb-10 border-b border-neutral-100 dark:border-neutral-800/80">
          {DEPARTMENTS.map((dept, idx) => {
            const isActive = activeDeptIdx === idx;
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveDeptIdx(idx)}
                className={`relative px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                  isActive
                    ? "text-black dark:text-white font-bold"
                    : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBusinessDeptGlider"
                    className="absolute inset-0 bg-neutral-100 dark:bg-white/[0.08] rounded-full border border-neutral-200/90 dark:border-white/15 shadow-2xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-1.5">
                  <span className={isActive ? "text-blue-600 dark:text-cyan-400" : "text-neutral-400"}>
                    {dept.icon}
                  </span>
                  <span>{dept.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Container with 3D Tilt & Specular Highlights (Animos style) */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="perspective-[1200px] max-w-5xl mx-auto"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            className="rounded-[28px] border border-neutral-200/80 dark:border-white/[0.1] bg-white/90 dark:bg-[#0c0c0e]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
          >
            {/* Top Specular Line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-cyan-400/70 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDept.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Department Header & Value Statement */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-100 dark:border-white/5">
                  <div className="space-y-2 max-w-2xl text-left">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold border border-blue-200/60 dark:border-blue-500/20">
                      <span>{activeDept.badge}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-black dark:text-white tracking-tight">
                      {activeDept.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                      {activeDept.description}
                    </p>
                  </div>

                  {/* 3 Key Department Metrics */}
                  <div className="grid grid-cols-3 gap-3 shrink-0">
                    {activeDept.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.08] text-center"
                      >
                        <div className="text-lg sm:text-xl font-black text-black dark:text-white tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-medium leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Process Comparison (Before vs. After AI) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                  {/* Left: Manual Legacy Process */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-neutral-400" />
                        <span className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-500">
                          {activeDept.manualProcess.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400 bg-neutral-200/60 dark:bg-white/5 px-2.5 py-0.5 rounded-full">
                        {activeDept.manualProcess.time}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                      {activeDept.manualProcess.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-neutral-200/50 dark:border-white/5">
                      {activeDept.manualProcess.steps.map((s, sIdx) => (
                        <div key={sIdx} className="flex items-start space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 mt-1.5 shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Qrious Tech AI Process */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-800/40 space-y-4 relative overflow-hidden shadow-xs">
                    {/* Glowing highlight corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-bold font-mono uppercase tracking-wider text-black dark:text-white">
                          {activeDept.aiProcess.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-700/40">
                        {activeDept.aiProcess.time}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal relative z-10">
                      {activeDept.aiProcess.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-blue-200/60 dark:border-white/10 relative z-10">
                      {activeDept.aiProcess.steps.map((s, sIdx) => (
                        <div key={sIdx} className="flex items-start space-x-2 text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-100 dark:border-white/5">
                  <div className="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    <span>Deployed directly into your stack • Zero data training on public models</span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm group"
                  >
                    <span>Discuss AI for Your {activeDept.name.split("&")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
