import React from "react";
import Link from "next/link";
import {
  Quote,
  Target,
  ShieldCheck,
  Sparkles,
  Lock,
  ArrowRight,
  CheckCircle2,
  Users2
} from "lucide-react";
import { CEO_MESSAGE, CORE_VALUES } from "@/data/company";

export default function ExecutiveOverview() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-orange-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Lock: <Lock className="w-5 h-5 text-emerald-400" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#050811] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
            Executive Leadership & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Global Innovators Choose <br />
            <span className="gradient-text-orange">Qrious Tech Team LLP</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            We are not just a service vendor; we are an enduring technology extension. For over two decades, our engineering family has turned ambitious ideas into rock-solid software reality.
          </p>
        </div>

        {/* CEO Feature Banner */}
        <div className="mt-14 bg-gradient-to-br from-slate-900 via-[#0b101f] to-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* CEO Quote & Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Quote className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Message from Leadership</h3>
                  <p className="text-xs text-orange-400 font-medium">Guiding Vision & Core Commitments</p>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic border-l-2 border-orange-500/80 pl-4 py-1">
                &ldquo;{CEO_MESSAGE.quote}&rdquo;
              </blockquote>

              <p className="text-sm text-slate-300 leading-relaxed">
                {CEO_MESSAGE.details}
              </p>

              <div className="pt-2 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/25">
                  RT
                </div>
                <div>
                  <div className="text-base font-bold text-white">{CEO_MESSAGE.name}</div>
                  <div className="text-xs text-slate-400 font-medium">
                    {CEO_MESSAGE.role} • {CEO_MESSAGE.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Staffing & Partnership Highlights */}
            <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <Users2 className="w-4 h-4 text-orange-400" />
                <span>Our Partnership Engagement Models</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Dedicated Engineering Pods:</strong> Full-time senior developers dedicated 100% to your roadmap.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Nested OEM Development:</strong> White-label engineering seamlessly integrated inside your product.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Fixed-Scope MVP Sprints:</strong> Predictable budgets, defined deliverables, and rapid time-to-market.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">Direct Timezone Overlap:</strong> Dedicated sync hours aligned with North American, European & APAC teams.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
                >
                  <span>Inquire About Developer Pods</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconMap[val.icon] || <Sparkles className="w-5 h-5 text-orange-400" />}
              </div>
              <h4 className="text-base font-bold text-white mt-4">{val.title}</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
