"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  const avatarImages = [
    "/images/staff-headshots/1.webp",
    "/images/staff-headshots/12.webp",
    "/images/staff-headshots/24.webp",
    "/images/staff-headshots/31.webp"
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Motive Rating Pill Badge with Overlapping Avatars (Screenshot 1) */}
        <div className="inline-flex items-center space-x-3 mb-8">
          <div className="flex items-center -space-x-2">
            {avatarImages.map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-neutral-200 relative shadow-2xs"
              >
                <Image
                  src={src}
                  alt={`Client avatar ${i + 1}`}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-xs font-bold text-black ml-1">4.9/5</span>
            </div>
            <span className="text-[11px] text-neutral-500 font-medium leading-tight">
              250+ Global Clients
            </span>
          </div>
        </div>

        {/* Motive Large Bold Headline (Screenshot 1) */}
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight text-black max-w-5xl mx-auto leading-[1.08] mb-6">
          Turn business vision into powerful <br className="hidden sm:inline" />
          digital growth
        </h1>

        {/* Motive Subtitle (Screenshot 1) */}
        <p className="text-neutral-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-9">
          Partner with certified senior engineering pods, AI architects, and cloud specialists designed to accelerate your roadmap and unlock new market opportunities.
        </p>

        {/* Motive Dual CTAs with Radiant Glow Behind (Screenshot 1) */}
        <div className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 z-10">
          {/* Subtle cyan/blue/purple glow orb exactly matching Motive screenshot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[220px] bg-gradient-to-r from-cyan-200/50 via-blue-200/40 to-purple-200/50 blur-[90px] rounded-full pointer-events-none -z-10" />

          {/* Primary Solid Black Pill */}
          <Link
            href="/contact"
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-black text-white text-[14px] font-semibold hover:bg-neutral-800 transition-all duration-200 shadow-md active:scale-95"
          >
            <span>Start a call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Secondary White Pill */}
          <Link
            href="/case-studies"
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white text-black border border-neutral-200 hover:border-black transition-all duration-200 text-[14px] font-semibold shadow-2xs active:scale-95"
          >
            <span>Book A demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Motive Large Hero Image Card (Screenshot 1 & 2) */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden border border-black/[0.08] shadow-2xl bg-neutral-100 aspect-[16/9] sm:aspect-[21/9] group">
            <Image
              src="/images/qtech-team.webp"
              alt="Qrious Tech Team in modern workspace"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Very soft gradient overlay at bottom edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
