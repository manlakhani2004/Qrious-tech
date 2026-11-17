import React from "react";
import {
  Quote,
  Star
} from "lucide-react";
import { TESTIMONIALS_LIST } from "@/data/company";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
            The experiences behind <br />
            <span className="text-orange-500">our shared success</span>
          </h2>
          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            Read direct feedback from executive partners, founders, and CTOs who trust our dedicated engineering pods and software delivery teams.
          </p>
        </div>

        {/* Motive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#ececec] rounded-3xl p-8 hover:shadow-xl hover:border-[#d1d5db] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-orange-200" />
                </div>

                <blockquote className="text-sm sm:text-base text-[#222222] leading-relaxed italic font-normal">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-[#f0f0f0] flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-[#0c0407] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {item.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0c0407]">
                    {item.name}
                  </div>
                  <div className="text-xs text-orange-600 font-semibold">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-[#777777]">
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
