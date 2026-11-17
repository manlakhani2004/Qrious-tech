import React from "react";
import Link from "next/link";
import {
  FileText,
  Users2,
  Code2,
  CheckCircle,
  Rocket,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";
import { METHODOLOGY_STEPS } from "@/data/company";

export default function MethodologySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Sticky in Motive style) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>5 Simple Steps</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight leading-[1.15]">
              From strategy to success in <br />
              <span className="text-orange-500">five steps</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              We eliminate offshore hiring friction and technical alignment guesswork. Our refined 5-step operational framework ensures you interview, validate, and deploy dedicated senior engineering talent within days.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center pl-6 pr-2 py-2 text-xs font-bold text-white bg-[#0c0407] hover:bg-orange-500 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span>Start Your Sprint</span>
                <div className="w-8 h-8 rounded-full bg-white text-[#0c0407] flex items-center justify-center ml-4 group-hover:rotate-45 group-hover:text-orange-500 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-white border border-[#ececec] text-xs text-[#555555] space-y-1 shadow-xs">
              <div className="flex items-center font-bold text-[#0c0407]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5" />
                <span>Zero Risk Guarantee</span>
              </div>
              <p>
                Conduct technical interviews with developers before signing any engagement contracts.
              </p>
            </div>
          </div>

          {/* Right Column: Step Cards */}
          <div className="lg:col-span-7 space-y-4">
            {METHODOLOGY_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#ececec] rounded-2xl p-6 sm:p-8 hover:shadow-md hover:border-[#d1d5db] transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                    Step {step.step}
                  </span>
                  <span className="text-xs text-[#888888] font-medium">Phase {step.step} of 05</span>
                </div>

                <h3 className="text-xl font-bold text-[#0c0407]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-[#555555] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
