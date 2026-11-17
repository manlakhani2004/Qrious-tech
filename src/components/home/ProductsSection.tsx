import React from "react";
import Link from "next/link";
import {
  Calculator,
  Palette,
  Gamepad2,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { IN_HOUSE_PRODUCTS } from "@/data/company";

export default function ProductsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Calculator: <Calculator className="w-5 h-5 text-amber-400" />,
    Palette: <Palette className="w-5 h-5 text-rose-400" />,
    Gamepad2: <Gamepad2 className="w-5 h-5 text-emerald-400" />,
    BookOpen: <BookOpen className="w-5 h-5 text-cyan-400" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
            In-House R&D & Consumer Apps
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proprietary Products Built by <br />
            <span className="gradient-text-orange">Qrious Tech Engineers</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Beyond client engineering, we build, publish, and maintain our own proprietary applications—proving our ability to engineer high-retention, child-safe, and scalable mobile products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IN_HOUSE_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:border-orange-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                    {iconMap[prod.icon] || <Sparkles className="w-5 h-5 text-orange-400" />}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                    {prod.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {prod.title}
                  </h3>
                  <div className="text-xs text-orange-400 font-medium mt-0.5">
                    {prod.subtitle}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {prod.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link
                  href={`/contact?subject=${encodeURIComponent("Consumer App Engineering: " + prod.title)}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-between"
                >
                  <span>Build A Consumer App</span>
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
