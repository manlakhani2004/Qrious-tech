import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Landmark,
  ShoppingBag,
  Trophy,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { INDUSTRIES_LIST } from "@/data/company";

export default function IndustriesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-5 h-5 text-rose-400" />,
    Landmark: <Landmark className="w-5 h-5 text-emerald-400" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-orange-400" />,
    Trophy: <Trophy className="w-5 h-5 text-amber-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-cyan-400" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-purple-400" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              Domain Expertise & Specialization
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Deep Domain Knowledge Across <br />
              <span className="gradient-text-orange">Regulated & Fast-Growth Sectors</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors group"
            >
              <span>Consult an Industry Architect</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_LIST.map((ind) => (
            <div
              key={ind.id}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                    {iconMap[ind.iconName] || <Sparkles className="w-5 h-5 text-orange-400" />}
                  </div>
                  <span className="text-[11px] font-semibold text-orange-400/90 bg-orange-500/10 px-2.5 py-1 rounded-lg border border-orange-500/20">
                    {ind.stats}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {ind.name}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1">
                    {ind.tagline}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {ind.description}
                </p>

                {/* Solutions List */}
                <div className="pt-2 space-y-1.5">
                  {ind.keySolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link
                  href={`/contact?subject=${encodeURIComponent("Industry Solution: " + ind.name)}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-between"
                >
                  <span>Build For {ind.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
