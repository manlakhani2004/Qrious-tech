import React from "react";
import Link from "next/link";
import {
  Quote,
  Target,
  ShieldCheck,
  Sparkles,
  Lock,
  ArrowUpRight,
  CheckCircle2,
  Users2
} from "lucide-react";
import { CEO_MESSAGE, CORE_VALUES } from "@/data/company";

export default function ExecutiveOverview() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-orange-500" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
    Lock: <Lock className="w-5 h-5 text-emerald-600" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
            Why we’re the perfect technology <br />
            <span className="text-orange-500">partner for your brand</span>
          </h2>
          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            Qtech is not merely a vendor; it is a close-knit engineering family dedicated to translating innovative ideas into resilient, production-grade reality for over two decades.
          </p>
        </div>

        {/* CEO Message Banner in Motive Style */}
        <div className="bg-white border border-[#ececec] rounded-3xl p-8 lg:p-12 shadow-sm mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* CEO Quote */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-orange-500">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0c0407]">Message from the CEO</h3>
                  <p className="text-xs text-[#777777]">Leadership Vision & Core Commitments</p>
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
                    <strong className="text-[#111111]">Fixed-Price MVP Delivery:</strong> Transparent milestones, rapid 8-week launch cycles.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-[#0c0407] bg-white hover:bg-[#0c0407] hover:text-white border border-[#e5e5e5] rounded-full transition-colors duration-200"
                >
                  <span>Inquire About Dedicated Pods</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Motive Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ececec] rounded-2xl p-6 hover:shadow-md hover:border-[#d1d5db] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center">
                {iconMap[val.icon] || <Sparkles className="w-5 h-5 text-orange-500" />}
              </div>
              <h4 className="text-base font-bold text-[#0c0407] mt-4">{val.title}</h4>
              <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
