import React from "react";
import Link from "next/link";
import {
  Calculator,
  Palette,
  Gamepad2,
  BookOpen,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { IN_HOUSE_PRODUCTS } from "@/data/company";

export default function ProductsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Calculator: <Calculator className="w-5 h-5 text-amber-600" />,
    Palette: <Palette className="w-5 h-5 text-rose-500" />,
    Gamepad2: <Gamepad2 className="w-5 h-5 text-emerald-600" />,
    BookOpen: <BookOpen className="w-5 h-5 text-blue-600" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#ffffff] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>In-House R&D & Consumer Products</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
            Proprietary products built by <br />
            <span className="text-orange-500">Qrious Tech engineers</span>
          </h2>
          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            Beyond client software, we engineer, publish, and scale our own consumer mobile products—demonstrating our capability to build intuitive, high-retention applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IN_HOUSE_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#f8f8f8] border border-[#ececec] rounded-3xl p-6 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#ececec] flex items-center justify-center">
                    {iconMap[prod.icon] || <Sparkles className="w-5 h-5 text-orange-500" />}
                  </div>
                  <span className="text-[10px] font-bold text-[#666666] bg-white px-2.5 py-1 rounded-full border border-[#ececec]">
                    {prod.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                    {prod.title}
                  </h3>
                  <div className="text-xs text-orange-600 font-semibold mt-0.5">
                    {prod.subtitle}
                  </div>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {prod.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-[11px] text-[#333333]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
                <span className="text-xs font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                  Product Overview
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
