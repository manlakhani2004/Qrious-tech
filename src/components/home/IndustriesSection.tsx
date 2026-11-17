import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Landmark,
  ShoppingBag,
  Trophy,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { INDUSTRIES_LIST } from "@/data/company";

export default function IndustriesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-5 h-5 text-rose-500" />,
    Landmark: <Landmark className="w-5 h-5 text-emerald-600" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-orange-500" />,
    Trophy: <Trophy className="w-5 h-5 text-amber-500" />,
    Briefcase: <Briefcase className="w-5 h-5 text-blue-600" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-purple-600" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#ffffff] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>Industry Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
            Deep domain knowledge across <br />
            <span className="text-orange-500">specialized industries</span>
          </h2>
          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            From HIPAA-compliant healthcare portals to high-throughput financial exchanges and real-time sports tournaments, our solutions are built to comply with strict domain standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_LIST.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#f8f8f8] border border-[#ececec] rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#ececec] flex items-center justify-center">
                    {iconMap[ind.iconName] || <Sparkles className="w-5 h-5 text-orange-500" />}
                  </div>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    {ind.stats}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                    {ind.name}
                  </h3>
                  <div className="text-xs text-[#777777] font-medium mt-1">
                    {ind.tagline}
                  </div>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {ind.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  {ind.keySolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center text-xs text-[#333333]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
                <span className="text-xs font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                  Explore {ind.name}
                </span>
                <div className="w-7 h-7 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#0c0407] group-hover:rotate-45 group-hover:bg-[#0c0407] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
