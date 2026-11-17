import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { ARTICLES_LIST } from "@/data/company";

export default function ArticlesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Read Qtech IT News</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
              Latest News & <br />
              <span className="text-orange-500">Engineering Insights</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-bold text-[#777777]">
            Practical guidance & tech trends from our senior developers
          </div>
        </div>

        {/* Motive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_LIST.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-[#ececec] rounded-3xl p-6 sm:p-7 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 text-[10px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-[#888888]">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                  Read Article
                </span>
                <div className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#0c0407] group-hover:rotate-45 group-hover:bg-[#0c0407] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

