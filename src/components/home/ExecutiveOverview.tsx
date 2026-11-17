import React from "react";
import Link from "next/link";
import {
  Quote,
  Target,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Users2
} from "lucide-react";
import { CEO_MESSAGE, WHY_CHOOSE_ITEMS } from "@/data/company";

export default function ExecutiveOverview() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-orange-500" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Header with Old Qrious Tech Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
            Why Choose <br />
            <span className="text-orange-500">Qrious Tech Team LLP</span>
          </h2>
          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            Schedule a meeting with our specialists for tailored solutions and insights. For over two decades, our certified tech experts and R&D team have helped global clientele save money with faster delivery.
          </p>
        </div>

        {/* 3 Authentic Why Choose Cards from Old Qrious Tech Site */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-[#ececec] rounded-3xl p-8 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#f8f8f8] border border-[#ececec] flex items-center justify-center">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-orange-500" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    Feature {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0c0407]">
                    {item.title}
                  </h3>
                  <div className="text-xs text-orange-600 font-semibold mt-0.5">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f0]">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#0c0407] hover:text-orange-600 flex items-center justify-between group"
                >
                  <span>Learn More</span>
                  <div className="w-7 h-7 rounded-full bg-[#f8f8f8] border border-[#ececec] flex items-center justify-center text-[#0c0407] group-hover:rotate-45 group-hover:bg-[#0c0407] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CEO Message Banner in Motive Style */}
        <div className="bg-white border border-[#ececec] rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* CEO Quote */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-orange-500">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0c0407]">Message from the CEO</h3>
                  <p className="text-xs text-[#777777]">Rikin Thakkar, CEO, Qrioustech Team LLP</p>
                </div>
              </div>

              <blockquote className="text-base sm:text-xl text-[#111111] leading-relaxed italic border-l-3 border-orange-500 pl-4 py-1 font-medium">
                &ldquo;{CEO_MESSAGE.quote}&rdquo;
              </blockquote>

              <p className="text-sm text-[#555555] leading-relaxed">
                {CEO_MESSAGE.details}
              </p>

              <div className="flex items-center space-x-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-[#0c0407] text-white flex items-center justify-center font-bold text-lg">
                  RT
                </div>
                <div>
                  <div className="text-base font-bold text-[#0c0407]">{CEO_MESSAGE.name}</div>
                  <div className="text-xs text-orange-600 font-semibold">
                    {CEO_MESSAGE.role} • {CEO_MESSAGE.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Models Box */}
            <div className="lg:col-span-4 bg-[#f8f8f8] border border-[#ececec] rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 text-[#0c0407] font-bold text-sm">
                <Users2 className="w-4 h-4 text-orange-500" />
                <span>Flexible Engagement Models</span>
              </div>
              <ul className="space-y-3 text-xs text-[#555555]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-[#111111]">Dedicated Engineering Pods:</strong> Full-time senior developers embedded directly in your sprint team.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-[#111111]">Nested OEM Partnerships:</strong> Confidential, white-label engineering for agency & tech partners.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-[#111111]">Fixed-Price MVP Delivery:</strong> Transparent milestones, rapid launch cycles.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-[#0c0407] bg-white hover:bg-[#0c0407] hover:text-white border border-[#e5e5e5] rounded-full transition-colors duration-200"
                >
                  <span>Inquire About Developer Pods</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
