"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  TrendingUp,
  MousePointerClick,
  Sparkles,
  ArrowRight,
  Clock,
  PhoneCall
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

export default function WhyChooseUsSection() {
  // Authentic 3 Pillars from Legacy Qtech Website (index.html lines 1728-1791)
  const pillars = [
    {
      id: "easier-to-implement",
      title: "Easier To Implement",
      subtitle: "Seamless Transition",
      description:
        "Make tech changes smoothly with our easy-to-use systems and helpful support.",
      icon: <MousePointerClick className="w-5 h-5 text-current" />
    },
    {
      id: "increase-growth-rates",
      title: "Increase Growth Rates",
      subtitle: "Accelerated Scaling",
      description:
        "Grow your business faster with our tech that adapts and improves your work.",
      icon: <TrendingUp className="w-5 h-5 text-current" />
    },
    {
      id: "branding-of-the-future",
      title: "Branding Of The Future",
      subtitle: "Modern Digital Presence",
      description:
        "Get your brand ready for tomorrow with our cool tech that attracts more people online.",
      icon: <Sparkles className="w-5 h-5 text-current" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 relative transition-colors duration-200">
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Motive Centered Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-4">
            Why Choose <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">Qrious Tech Team LLP</span>
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Schedule a meeting with our specialists for tailored solutions and insights. We help customers achieve digital transformation through dependable IT solutions.
          </p>
        </ScrollReveal>

        {/* 3 Authentic Feature Cards Grid with Smooth Left-to-Right Running Black Hover Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-8 border border-neutral-200/60 dark:border-neutral-800/80 group-hover:border-black dark:group-hover:border-white/30 shadow-xs hover:shadow-2xl dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] hover:-translate-y-1.5 transition-all duration-700 flex flex-col justify-between group overflow-hidden cursor-pointer"
            >
              {/* Smooth Left-to-Right Running Color Fill: Black in Light Mode, White in Dark Mode */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none rounded-[28px] z-0"
              />

              {/* Card Content - elevated above sliding fill */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white dark:bg-[#1f1f23] border border-neutral-200/60 dark:border-neutral-800 group-hover:bg-white/15 dark:group-hover:bg-black/10 group-hover:border-white/25 dark:group-hover:border-black/15 rounded-full flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 text-neutral-800 dark:text-neutral-200 group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                  {pillar.icon}
                </div>
                <div className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-300 dark:group-hover:text-neutral-600 uppercase tracking-wider mb-1 transition-colors duration-500">
                  {pillar.subtitle}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-white dark:group-hover:text-black mb-3 transition-colors duration-500">
                  {pillar.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-200 dark:group-hover:text-neutral-700 text-sm leading-relaxed transition-colors duration-500">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Row - elevated above sliding fill */}
              <div className="relative z-10 pt-6 mt-6 border-t border-neutral-200/60 dark:border-neutral-800 group-hover:border-white/20 dark:group-hover:border-black/15 flex items-center justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                <span>Tailored Engineering</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-300 dark:group-hover:text-emerald-600 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authentic Motive Theme Appointment CTA (Open, Clean, Minimalist Typography) */}
        <ScrollReveal duration={0.7} yOffset={30} className="pt-16 border-t border-neutral-100 dark:border-neutral-800">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Motive Bold Heading */}
            <h3 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight leading-[1.14]">
              Book your appointment for <br />
              <span className="text-neutral-400 dark:text-neutral-500 font-normal">tailored solutions & insights</span>
            </h3>

            {/* Focused Motive Subtitle */}
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Connect with our senior technical specialists to review your architecture, scope dedicated engineering pods, and explore proven delivery frameworks with zero commitment.
            </p>

            {/* Motive Dual Action Pill Buttons (Black Primary + White Border Secondary) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95 w-full sm:w-auto"
              >
                <span>Schedule a Meeting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+916355794606"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-50 dark:hover:bg-[#18181b] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-2xs w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Call +91 63557 94606</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

