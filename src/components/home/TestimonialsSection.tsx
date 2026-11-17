import React from "react";
import {
  Quote,
  Star,
  CheckCircle2,
  Building2,
  Users
} from "lucide-react";
import { TESTIMONIALS_LIST } from "@/data/company";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#050811] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
            Client Endorsements & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Founders, CTOs & <br />
            <span className="gradient-text-orange">Enterprise Technology Leaders</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Read authentic feedback from executive partners who rely on our dedicated engineering pods and technical delivery teams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Top Stars & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-orange-500/30" />
                </div>

                <blockquote className="text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-orange-500/20">
                  {item.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    {item.name}
                  </div>
                  <div className="text-xs text-orange-400 font-medium">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.companyContext}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
