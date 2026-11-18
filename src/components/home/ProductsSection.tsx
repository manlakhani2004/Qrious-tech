import React from "react";
import Link from "next/link";
import {
  Calculator,
  Palette,
  Gamepad2,
  BookOpen,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Smartphone
} from "lucide-react";
import { IN_HOUSE_PRODUCTS } from "@/data/company";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Calculator: <Calculator className="w-5 h-5 text-black dark:text-white" />,
    Palette: <Palette className="w-5 h-5 text-black dark:text-white" />,
    Gamepad2: <Gamepad2 className="w-5 h-5 text-black dark:text-white" />,
    BookOpen: <BookOpen className="w-5 h-5 text-black dark:text-white" />
  };

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b] relative border-t border-neutral-100 dark:border-neutral-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Smartphone className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>In-House R&D & Consumer Products</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.12]">
            Proprietary products built by <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">Qrious Tech engineers</span>
          </h2>

          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Beyond client software, we engineer, publish, and scale our own consumer mobile products—demonstrating our capability to build intuitive, high-retention applications.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IN_HOUSE_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#f8f8f9] dark:bg-[#121215] border border-neutral-200/80 dark:border-neutral-800 rounded-[28px] p-6 sm:p-7 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white dark:bg-[#18181b] border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center text-black dark:text-white shadow-2xs group-hover:scale-105 transition-transform">
                    {iconMap[prod.icon] || <Sparkles className="w-5 h-5 text-black dark:text-white" />}
                  </div>
                  <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 bg-white dark:bg-[#18181b] px-2.5 py-1 rounded-full border border-neutral-200/60 dark:border-neutral-700 shadow-2xs">
                    {prod.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                    {prod.title}
                  </h3>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold mt-1">
                    {prod.subtitle}
                  </div>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {prod.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-[11px] text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white mr-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  Product Overview
                </span>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-[#18181b] border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center text-black dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shadow-2xs">
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
