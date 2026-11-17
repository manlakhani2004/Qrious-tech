"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll-driven animation for the hero image expansion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.88, 1.04]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["32px", "16px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.92, 1]);

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Motive Style Overlapping Staff Avatars + Rating Pill (Authentic Qtech Data) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-3.5 px-4 py-2 rounded-full bg-neutral-100/90 border border-neutral-200/80 shadow-2xs mb-8"
        >
          {/* 4 Overlapping Authentic Staff Avatars */}
          <div className="flex items-center -space-x-2 overflow-hidden py-0.5">
            {[
              { src: "/images/staff-headshots/1.webp", alt: "Qtech Staff Member" },
              { src: "/images/staff-headshots/2.webp", alt: "Qtech Staff Member" },
              { src: "/images/staff-headshots/10.webp", alt: "Qtech Staff Member" },
              { src: "/images/staff-headshots/12.webp", alt: "Qtech Staff Member" }
            ].map((avatar, idx) => (
              <div
                key={idx}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-2xs bg-neutral-200"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-1.5 text-left">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-xs font-bold text-black">5.0</span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs font-semibold text-neutral-700">200+ Happy Clients</span>
          </div>
        </motion.div>

        {/* Authentic Headline from Old Qrious Tech Home Page */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-[74px] font-extrabold tracking-tight text-black max-w-5xl mx-auto leading-[1.08] mb-6"
        >
          Pioneering Business Growth with <br className="hidden sm:inline" />
          AI Innovation & IT Solutions
        </motion.h1>

        {/* Authentic Tagline & Value Statement from Old Qrious Tech Home Page */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal mb-8"
        >
          Building lasting relationships between IT companies and certified engineering experts. Simple, effective, and tailored technology solutions to help your business succeed in the digital age.
        </motion.p>

        {/* Authentic Qtech 4 Trust Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-9 text-left"
        >
          {[
            "Tailored IT solutions for unique business needs",
            "Driving tech advancement to keep you ahead",
            "Robust measures to safeguard data & systems",
            "Adapting solutions seamlessly as you scale"
          ].map((point, idx) => (
            <div
              key={idx}
              className="bg-[#f8f8f9] border border-neutral-200/70 rounded-2xl p-3 flex items-start space-x-2 shadow-2xs"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-xs font-semibold text-neutral-800 leading-snug">
                {point}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Dual Action Buttons matching Motive with Authentic Qtech Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 z-10"
        >
          {/* Subtle cyan/blue glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[220px] bg-gradient-to-r from-cyan-200/50 via-blue-200/40 to-purple-200/50 blur-[90px] rounded-full pointer-events-none -z-10" />

          {/* Primary Button: Let's Connect */}
          <Link
            href="/contact"
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white text-[14px] font-semibold hover:bg-neutral-800 transition-all duration-200 shadow-md active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Secondary Button: Case Studies */}
          <Link
            href="/case-studies"
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white text-black border border-neutral-200 hover:border-black transition-all duration-200 text-[14px] font-semibold shadow-2xs active:scale-95"
          >
            <span>Explore 37 Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Authentic Hero Media Container with Scroll-Driven Scale Motion */}
        <div className="mt-14 max-w-5xl mx-auto flex justify-center">
          <motion.div
            style={{
              scale,
              borderRadius,
              opacity,
              transformOrigin: "center top"
            }}
            className="w-full relative overflow-hidden border border-black/[0.08] shadow-2xl bg-neutral-100 aspect-[16/9] sm:aspect-[21/9] group"
          >
            <Image
              src="/images/qtech-team.webp"
              alt="Qrious Tech Team Ahmedabad Headquarters"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Authentic Fun Facts & Metrics from Old Qtech Home Page (200+, 500+, 100+, 20+) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-[#f8f8f9] rounded-2xl p-5 border border-neutral-200/60 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-black">200+</div>
            <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mt-1">Happy Clients</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Across USA & Global Markets</div>
          </div>

          <div className="bg-[#f8f8f9] rounded-2xl p-5 border border-neutral-200/60 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-black">500+</div>
            <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mt-1">Projects Done</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Delivered on Time & Scope</div>
          </div>

          <div className="bg-[#f8f8f9] rounded-2xl p-5 border border-neutral-200/60 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-black">100+</div>
            <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mt-1">Team Members</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Certified Engineers & Architects</div>
          </div>

          <div className="bg-[#f8f8f9] rounded-2xl p-5 border border-neutral-200/60 shadow-2xs text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-black">20+</div>
            <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider mt-1">Years in Tech</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Continuous Delivery Since 2004</div>
          </div>
        </div>
      </div>
    </section>
  );
}
