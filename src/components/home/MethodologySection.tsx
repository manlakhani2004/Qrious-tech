import React from "react";
import Link from "next/link";
import {
  FileText,
  Users2,
  Code2,
  CheckCircle,
  Rocket,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { METHODOLOGY_STEPS } from "@/data/company";

export default function MethodologySection() {
  const stepIcons = [
    <FileText key="1" className="w-5 h-5 text-orange-400" />,
    <Users2 key="2" className="w-5 h-5 text-amber-400" />,
    <Code2 key="3" className="w-5 h-5 text-cyan-400" />,
    <CheckCircle key="4" className="w-5 h-5 text-emerald-400" />,
    <Rocket key="5" className="w-5 h-5 text-purple-400" />
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#050811] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
            Predictable Agile Engineering Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Partner: Our 5-Step <br />
            <span className="gradient-text-orange">Guaranteed Delivery Methodology</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Eliminating onboarding friction and communication barriers. Our refined 5-step operational framework ensures you interview, onboard, and deploy dedicated senior engineering talent within days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-500/40 hover:bg-slate-900/80 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Step indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-lg border border-orange-500/20">
                    Step {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-medium text-slate-500 flex items-center">
                <span>Phase {step.step} of 05</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border border-slate-700/60 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mr-2" />
              100% Risk-Free Developer Onboarding
            </h4>
            <p className="text-xs text-slate-300">
              Conduct technical interviews with prospective developers before signing any contract.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all shrink-0"
          >
            <span>Request Developer Profiles</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
