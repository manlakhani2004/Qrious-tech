"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Cpu,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Workflow,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

export default function AboutProductIdeaSection() {
  // Authentic 6 Value Points with Modern Engineering Icons
  const valuePoints = [
    {
      title: "Tailored IT Solutions",
      desc: "Providing tailored IT solutions for your unique business & other needs.",
      icon: Cpu
    },
    {
      title: "Technological Advancement",
      desc: "Driving technological advancement to keep your business ahead.",
      icon: Sparkles
    },
    {
      title: "Robust Data Security",
      desc: "Implementing robust measures to safeguard your data and systems.",
      icon: ShieldCheck
    },
    {
      title: "Seamless Scalability",
      desc: "Adapting solutions to accommodate your company's growth seamlessly.",
      icon: TrendingUp
    },
    {
      title: "Continuous Evolution",
      desc: "Committed to staying ahead through ongoing learning and technical evolution.",
      icon: Workflow
    },
    {
      title: "Transparent Partnership",
      desc: "Open and clear communication to foster a strong, long-lasting partnership.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 relative transition-colors duration-200 isolate overflow-hidden">
      {/* Ambient Dot Pattern Watermark & Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        <div
          className="absolute inset-0 opacity-15 dark:opacity-10"
          style={{
            backgroundImage: "url('/images/icons/background-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "280px"
          }}
        />
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Content with Modern High-End Styling */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-md">
                <Lightbulb className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>Have a Product Idea?</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
                Let us be your next <br />
                <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-neutral-200 dark:to-neutral-500 font-normal">
                  Preferred IT Partner
                </span>
              </h2>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Qrious Tech Team LLP is your go-to IT partner for simple and effective solutions. We&apos;re here to provide you with the right tech support, tailored to your business. Count on us as more than just service providers — we&apos;re your reliable friends in the world of tech, helping you succeed in the digital age.
              </p>
            </ScrollReveal>

            {/* 6 Value Points in Refined Interactive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
              {valuePoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="flex items-start space-x-3.5 p-2 -mx-2 rounded-2xl hover:bg-neutral-50 dark:hover:bg-white/[0.04] transition-colors group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-neutral-800 dark:text-neutral-200 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-black dark:group-hover:border-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-[13.5px] font-bold text-black dark:text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <ScrollReveal delay={0.2} className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Authentic Cards with Modernized Design */}
          <ScrollReveal duration={0.7} yOffset={25} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1: Executive Strategy (tall) + Engineering Pods (compact) */}
              <div className="space-y-4">
                {/* 1. Executive Strategy */}
                <div className="relative h-56 sm:h-64 rounded-[26px] overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-lg bg-neutral-900 group">
                  <Image
                    src="/images/meeting-room.png"
                    alt="Qrious Tech Conference Room"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Executive Strategy</span>
                    </span>
                  </div>
                </div>

                {/* 2. Engineering Pods */}
                <div className="relative h-48 sm:h-52 rounded-[26px] overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-lg bg-neutral-900 group">
                  <Image
                    src="/images/home-page-2.webp"
                    alt="Qrious Tech Development Center"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Engineering Pods</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Column 2: Mobile & Cloud (compact) + 500+ Projects Card (tall) */}
              <div className="space-y-4 pt-6 sm:pt-8">
                {/* 3. Mobile & Cloud */}
                <div className="relative h-48 sm:h-52 rounded-[26px] overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-lg bg-neutral-900 group">
                  <Image
                    src="/images/home-page-3.webp"
                    alt="Qrious Tech Mobile Engineering"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Mobile &amp; Cloud</span>
                    </span>
                  </div>
                </div>

                {/* 4. 500+ Projects Delivered Card */}
                <div className="relative h-56 sm:h-64 rounded-[26px] p-6 sm:p-7 border border-neutral-200/90 dark:border-white/10 shadow-lg bg-[#f8f8f9] dark:bg-[#121215] flex flex-col justify-between transition-all duration-300 group hover:shadow-xl dark:hover:border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-extrabold text-xs shadow-md">
                      QT
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 bg-neutral-200/60 dark:bg-white/10 px-2.5 py-1 rounded-full">
                      Since 2017
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight leading-none">
                      500+
                    </div>
                    <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mt-2">
                      Projects Delivered
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
                      Proven track record serving clients worldwide since 2017 with dedicated engineering talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
