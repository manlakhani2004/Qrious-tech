"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Quote,
  Target,
  ShieldCheck,
  Sparkles,
  Lock,
  Building2,
  Users2,
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import {
  CEO_MESSAGE,
  COMPANY_INFO,
  CORE_VALUES
} from "@/data/company";
import FAQSection from "@/components/home/FAQSection";
import ProductsSection from "@/components/home/ProductsSection";
import MethodologySection from "@/components/home/MethodologySection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

export default function CompanyPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-black dark:text-white" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-black dark:text-white" />,
    Sparkles: <Sparkles className="w-5 h-5 text-black dark:text-white" />,
    Lock: <Lock className="w-5 h-5 text-black dark:text-white" />
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-4 sm:pt-6 pb-20 lg:pb-28">
        {/* CEO Message Section (Top-of-Page Executive Showcase) */}
        <section className="pt-2 sm:pt-4 pb-16 sm:pb-20 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <ScrollReveal duration={0.7} yOffset={20}>
            <div className="bg-[#f8f8f9] dark:bg-[#121215] border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 lg:p-14 shadow-sm relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Message from the CEO */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs">
                    <Quote className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                    <span>Executive Address • About Qrious Tech</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
                    Message from the CEO
                  </h1>

                  <blockquote className="text-base sm:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed italic border-l-3 border-black dark:border-white pl-5 py-1 font-medium">
                    &ldquo;{CEO_MESSAGE.quote}&rdquo;
                  </blockquote>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {CEO_MESSAGE.details}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200/70 dark:border-neutral-800">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                        RT
                      </div>
                      <div>
                        <div className="text-base font-bold text-black dark:text-white">{CEO_MESSAGE.name}</div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold mt-0.5">
                          {CEO_MESSAGE.role} • {CEO_MESSAGE.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href="/crew"
                        className="group inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[13px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
                      >
                        <span>Meet The Crew</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-full bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-[13px] font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 shadow-2xs"
                      >
                        <span>Start a Project</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: CEO Photo */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group">
                    <Image
                      src="/images/resource/ASU07005.JPG"
                      alt="Rikin Thakkar - Founder & CEO"
                      fill
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-sm font-bold text-white tracking-tight leading-snug">
                        {CEO_MESSAGE.name}
                      </div>
                      <div className="text-xs text-neutral-300 font-medium">
                        {CEO_MESSAGE.role} • {CEO_MESSAGE.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Snapshot (Full-Width Strip Below CEO Message) */}
              <div className="mt-10 pt-8 border-t border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center space-x-2 text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-5">
                  <Building2 className="w-4 h-4 text-black dark:text-white" />
                  <span>Company Snapshot</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-[#18181b] rounded-2xl p-5 border border-neutral-200/70 dark:border-neutral-800 shadow-2xs hover:shadow-md transition-all">
                    <span className="text-neutral-500 dark:text-neutral-400 text-xs block font-medium">Corporate Headquarters:</span>
                    <strong className="text-black dark:text-white text-sm block mt-1.5 leading-snug">
                      Dev Aurum, Prahladnagar, Ahmedabad, Gujarat, India
                    </strong>
                  </div>

                  <div className="bg-white dark:bg-[#18181b] rounded-2xl p-5 border border-neutral-200/70 dark:border-neutral-800 shadow-2xs hover:shadow-md transition-all">
                    <span className="text-neutral-500 dark:text-neutral-400 text-xs block font-medium">Engineering Force:</span>
                    <strong className="text-black dark:text-white text-sm block mt-1.5 leading-snug">
                      89+ In-House Developers & Architects
                    </strong>
                  </div>

                  <div className="bg-white dark:bg-[#18181b] rounded-2xl p-5 border border-neutral-200/70 dark:border-neutral-800 shadow-2xs hover:shadow-md transition-all">
                    <span className="text-neutral-500 dark:text-neutral-400 text-xs block font-medium">Global Footprint:</span>
                    <strong className="text-black dark:text-white text-sm block mt-1.5 leading-snug">
                      India (Development HQ) & USA (Client Operations)
                    </strong>
                  </div>

                  <div className="bg-white dark:bg-[#18181b] rounded-2xl p-5 border border-neutral-200/70 dark:border-neutral-800 shadow-2xs hover:shadow-md transition-all">
                    <span className="text-neutral-500 dark:text-neutral-400 text-xs block font-medium">Key Partnerships:</span>
                    <strong className="text-black dark:text-white text-sm block mt-1.5 leading-snug">
                      Nested OEM Alliances, White-Label Pods, Enterprise Co-Development
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white dark:bg-[#09090b] border-y border-neutral-100 dark:border-neutral-800/70">
          <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                Our Core Engineering Values
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                The cultural foundation that has sustained our client relationships for over 20 years.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-6 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700"
                >
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-xs">
                    {iconMap[val.icon] || <Sparkles className="w-5 h-5 text-black dark:text-white" />}
                  </div>
                  <h4 className="text-base font-bold text-black dark:text-white mt-5">{val.title}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <div id="methodology">
          <MethodologySection />
        </div>

        {/* Proprietary In-House Products */}
        <div id="products">
          <ProductsSection />
        </div>

        {/* FAQs */}
        <div id="faqs">
          <FAQSection />
        </div>

        {/* Motive Bottom Appointment CTA Banner */}
        <section className="py-20 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <ScrollReveal duration={0.7} yOffset={30}>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.14]">
                Book your appointment for <br />
                <span className="text-neutral-400 dark:text-neutral-500 font-normal">tailored solutions & insights</span>
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Connect with our senior technical specialists to review your architecture, scope dedicated engineering pods, and explore proven delivery frameworks with zero commitment.
              </p>

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
        </section>
      </main>

      <Footer />
    </div>
  );
}
