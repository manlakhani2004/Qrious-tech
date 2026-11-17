"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { COMPANY_STATS, HERO_CONTENT } from "@/data/company";

export default function HeroSection() {
  const marqueeTech = [
    "AI / ML Innovation",
    "Python",
    "LangChain",
    "Product Architect",
    "Power BI",
    "React 19",
    "Next.js",
    "Node.js",
    "Flutter",
    "Swift (iOS)",
    "Kotlin (Android)",
    "Salesforce Development",
    "AWS & Google Cloud",
    "Microservices",
    "Docker & Kubernetes",
    "PostgreSQL",
    "Tableau"
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-28 bg-[#f8f8f8]">
      {/* Light subtle grid */}
      <div className="absolute inset-0 grid-pattern-light pointer-events-none opacity-60"></div>
      
      {/* Subtle warm glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-orange-200/40 via-amber-100/30 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Motive Style Pill Badge with Rating */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-semibold text-[#0c0407] shadow-sm mb-6">
          <div className="flex items-center text-amber-500 mr-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="ml-1 font-bold text-[#0c0407]">4.9/5</span>
          </div>
          <span className="text-[#cccccc]">•</span>
          <span className="text-orange-600 font-bold">Qrious Tech Team LLP</span>
          <span className="text-[#cccccc]">•</span>
          <span className="text-[#555555]">Over 2 Decades of IT Excellence</span>
        </div>

        {/* Big Bold Motive Headline from Old Qrious Tech Site */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0c0407] max-w-5xl mx-auto leading-[1.08]">
          Pioneering Business Growth with <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-600 to-orange-600">
            AI Innovation
          </span>{" "}
          & Scalable IT Solutions
        </h1>

        {/* Authentic Subtitle from Old Qrious Tech Site */}
        <p className="mt-6 text-base sm:text-lg text-[#555555] max-w-3xl mx-auto leading-relaxed font-normal">
          {HERO_CONTENT.subtitle}
        </p>

        {/* Motive Dual CTAs with sliding hover arrow */}
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
            <span>Book Your Appointment</span>
            <Sparkles className="w-4 h-4 ml-2 text-orange-500" />
          </Link>
        </div>

        {/* 4 Authentic Value Bullets from Old Qrious Tech Site */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto text-left">
          {HERO_CONTENT.bulletPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ececec] rounded-2xl p-3.5 flex items-start space-x-2.5 shadow-2xs"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-xs font-semibold text-[#333333] leading-snug">
                {point}
              </span>
            </div>
          ))}
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
              Team Members
            </div>
            <p className="text-xs text-[#777777] mt-1.5">
              Certified developers & architects
            </p>
          </div>

          <div className="bg-white border border-[#ececec] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0c0407]">
              {COMPANY_STATS.projectsCompleted}
            </div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1">
              Projects Done
            </div>
            <p className="text-xs text-[#777777] mt-1.5">
              Across global industries & USA
            </p>
          </div>

          <div className="bg-white border border-[#ececec] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0c0407]">
              {COMPANY_STATS.clientSatisfaction}
            </div>
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1">
              Happy Clients
            </div>
            <p className="text-xs text-[#777777] mt-1.5">
              Long-term client partnerships
            </p>
          </div>
        </div>

        {/* Motive Infinite Running Marquee */}
        <div className="mt-16 pt-10 border-t border-[#e5e5e5] max-w-6xl mx-auto overflow-hidden">
          <div className="text-xs font-bold uppercase tracking-widest text-[#777777] mb-6">
            Technologies @ Qtech
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
