"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { COMPANY_STATS } from "@/data/company";

export default function HeroSection() {
  const techLogos = [
    { name: "Next.js", category: "Web" },
    { name: "React 19", category: "Frontend" },
    { name: "Python / FastAPI", category: "AI & APIs" },
    { name: "LangGraph", category: "Multi-Agent AI" },
    { name: "Flutter", category: "Mobile" },
    { name: "Swift / iOS", category: "Mobile" },
    { name: "Salesforce CRM", category: "Multi-Cloud" },
    { name: "Power BI / Fabric", category: "Analytics" },
    { name: "Node.js / NestJS", category: "Backend" },
    { name: "Amazon Web Services", category: "Cloud" },
    { name: "PostgreSQL / pgvector", category: "Database" },
    { name: "Docker / K8s", category: "DevOps" }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-500/20 via-amber-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Trust Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-xl mb-8 backdrop-blur-xl">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
          <span className="text-orange-400 font-semibold">Qrious Tech Team LLP</span>
          <span className="text-slate-500">•</span>
          <span>20+ Years IT Engineering & Offshore Delivery</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
          Engineering Intelligent <br className="hidden sm:inline" />
          <span className="gradient-text-orange">Digital Platforms</span> & Enterprise Solutions
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          We empower global enterprises, high-growth startups, and OEM partners with production-ready AI/ML systems, cloud-native web architectures, cross-platform mobile apps, and certified Salesforce multi-cloud integrations.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>Explore 37 Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-2xl shadow-lg hover:border-slate-600 transition-all duration-200"
          >
            <span>Book Technical Discovery</span>
            <Sparkles className="w-4 h-4 ml-2 text-amber-400" />
          </Link>
        </div>

        {/* Enterprise Trust Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Strict NDA & 100% IP Ownership</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>48-Hour Senior Talent Matching</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero Vendor Lock-in Flexible Sprints</span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {COMPANY_STATS.yearsInBusiness}
            </div>
            <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mt-1">
              Years in Tech
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Continuous software innovation since 2004
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {COMPANY_STATS.teamSize}
            </div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-1">
              Full-Time Engineers
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Pre-vetted developers, architects & tech leads
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {COMPANY_STATS.projectsCompleted}
            </div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-1">
              Completed Deployments
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Production systems across global markets
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-xl">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {COMPANY_STATS.clientSatisfaction}
            </div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mt-1">
              Client Satisfaction
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Long-term retention & recurring OEM referrals
            </p>
          </div>
        </div>

        {/* Tech Stack Marquee Strip */}
        <div className="mt-16 max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Technologies, Frameworks & Multi-Cloud Stacks We Master
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {techLogos.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 hover:bg-slate-800/80 transition-all text-xs font-medium text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                <span className="text-slate-200 font-semibold">{tech.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
