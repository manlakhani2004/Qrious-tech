"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Star,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { COMPANY_STATS } from "@/data/company";

export default function HeroSection() {
  const marqueeTech = [
    "Next.js",
    "React 19",
    "Python",
    "LangGraph Multi-Agent",
    "Flutter",
    "Swift (iOS)",
    "Salesforce Multi-Cloud",
    "Power BI & Fabric",
    "Node.js",
    "Amazon Web Services",
    "PostgreSQL / pgvector",
    "Kotlin (Android)",
    "Docker & Kubernetes",
    "NestJS",
    "Tableau CRM"
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-28 bg-[#f8f8f8]">
      {/* Light subtle grid */}
      <div className="absolute inset-0 grid-pattern-light pointer-events-none opacity-60"></div>
      
      {/* Subtle warm glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-orange-200/40 via-amber-100/30 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Motive Style Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-semibold text-[#0c0407] shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span className="text-orange-600 font-bold">Qrious Tech Team LLP</span>
          <span className="text-[#cccccc]">•</span>
          <span className="text-[#555555]">20+ Years Engineering Excellence</span>
        </div>

        {/* Big Bold Motive Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0c0407] max-w-5xl mx-auto leading-[1.08]">
          Engineering Intelligent <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600">
            Digital Platforms
          </span>{" "}
          & Modern Software
        </h1>

        {/* Motive Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed font-normal">
          We partner with ambitious enterprises and high-growth brands to build production-ready AI systems, cloud-native web architectures, fluid mobile apps, and Salesforce multi-cloud ecosystems.
        </p>

        {/* Motive CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/case-studies"
            className="w-full sm:w-auto group inline-flex items-center justify-between sm:justify-center pl-7 pr-2 py-2 text-sm font-bold text-white bg-[#0c0407] hover:bg-orange-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Explore 37 Case Studies</span>
            <div className="w-9 h-9 rounded-full bg-white text-[#0c0407] flex items-center justify-center ml-4 group-hover:rotate-45 group-hover:text-orange-500 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-[#0c0407] bg-white hover:bg-[#f3f4f6] border border-[#e5e5e5] rounded-full shadow-sm hover:border-[#111111] transition-all duration-200"
          >
            <span>Book A Free Technical Call</span>
            <Sparkles className="w-4 h-4 ml-2 text-orange-500" />
          </Link>
        </div>

        {/* Trust Endorsements Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#555555]">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Strict NDA & 100% IP Ownership</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>48-Hour Developer Matching</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Dedicated Pods & Nested OEM</span>
          </div>
        </div>

        {/* Motive Metrics Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-[#ececec] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0c0407]">
              {COMPANY_STATS.yearsInBusiness}
            </div>
            <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-1">
              Years in Tech
            </div>
            <p className="text-xs text-[#777777] mt-1.5">
              Continuous IT delivery since 2004
            </p>
          </div>

          <div className="bg-white border border-[#ececec] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0c0407]">
              {COMPANY_STATS.teamSize}
            </div>
            <div className="text-xs font-bold text-[#0c0407] uppercase tracking-wider mt-1">
              Senior Engineers
            </div>
            <p className="text-xs text-[#777777] mt-1.5">
              In-house architects & tech specialists
            </p>
          </div>

          <div className="bg-white border border-[#ececec] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0c0407]">
              {COMPANY_STATS.projectsCompleted}
            </div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1">
              Deployments
            </div>
            <p className="text-xs text-[#777777] mt-1.5">
              Production solutions delivered globally
            </p>
          </div>

          <div className="bg-white border border-[#ececec] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0c0407]">
              {COMPANY_STATS.clientSatisfaction}
            </div>
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1">
              Satisfaction
            </div>
            <p className="text-xs text-[#777777] mt-1.5">
              Long-term client partnerships
            </p>
          </div>
        </div>

        {/* Motive Infinite Running Marquee */}
        <div className="mt-16 pt-10 border-t border-[#e5e5e5] max-w-6xl mx-auto overflow-hidden">
          <div className="text-xs font-bold uppercase tracking-widest text-[#777777] mb-6">
            Technologies, Frameworks & Stacks We Master
          </div>
          <div className="relative w-full overflow-hidden mask-fade-edges">
            <div className="animate-marquee flex items-center space-x-4">
              {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm hover:border-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
