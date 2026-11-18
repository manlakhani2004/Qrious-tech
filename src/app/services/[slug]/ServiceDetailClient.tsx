"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  Layers,
  FolderGit2,
  Sparkles,
  ShieldCheck,
  Clock,
  PhoneCall,
  BarChart3,
  Globe,
  Smartphone,
  CloudLightning,
  Brain,
  Users2,
  Rocket,
  Cpu,
  Check
} from "lucide-react";
import { motion } from "motion/react";
import { CaseStudy } from "@/data/projects";

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
}

interface ServiceDetailClientProps {
  service: ServiceItem;
  relevantCaseStudies: CaseStudy[];
}

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  Cpu: <Cpu className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  Globe: <Globe className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  Smartphone: <Smartphone className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  CloudLightning: <CloudLightning className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  Brain: <Brain className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  Users2: <Users2 className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
  Sparkles: <Sparkles className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
};

export default function ServiceDetailClient({
  service,
  relevantCaseStudies
}: ServiceDetailClientProps) {
  const serviceIcon = iconMap[service.iconName] || <Layers className="w-5 h-5 text-black" />;

  const executionSteps = [
    {
      num: "01",
      title: "Technical Scoping & Architecture Review",
      desc: "Our principal engineers review your requirements, schema design, and technical dependencies to establish a battle-tested architecture plan."
    },
    {
      num: "02",
      title: "48-Hour Senior Pod Allocation",
      desc: "We match and onboard pre-vetted senior developers into your Jira, Slack, and GitHub with complete NDA protection and zero recruiting delays."
    },
    {
      num: "03",
      title: "Sprint Delivery & Continuous Deployments",
      desc: "Daily commits, automated CI/CD pipeline runs, and transparent weekly sprint demonstrations with 100% intellectual property ownership to you."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Motive 2-Column Service Hero with Modern Background Images */}
      <section className="relative isolate overflow-hidden py-10 sm:py-16 lg:py-20 border-b border-neutral-100 dark:border-white/[0.06]">
        {/* Background Images for Dark & Light Themes */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          {/* Dark Mode Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 dark:block hidden"
            style={{
              backgroundImage: "url('/images/resource/services-header-bg-dark.webp')"
            }}
          />
          {/* Light Mode Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 dark:hidden block"
            style={{
              backgroundImage: "url('/images/resource/services-header-bg-light.webp')"
            }}
          />
          {/* Ambient Dot Pattern Watermark */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-15"
            style={{
              backgroundImage: "url('/images/icons/background-pattern.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "280px"
            }}
          />
          {/* Gradient Vignette for Text & Card Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-[#09090b]/50 dark:via-transparent dark:to-[#09090b]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,rgba(255,255,255,0.7)_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,rgba(9,9,11,0.75)_100%)]" />
          {/* Subtle Ambient Color Glow */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-[100px] pointer-events-none" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl space-y-6 sm:space-y-8"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/90 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs backdrop-blur-sm">
              {serviceIcon}
              <span>Tech Practice &amp; Architecture Spec</span>
            </div>

            {/* Heading - Full size & wide impact */}
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] xl:text-[72px] font-extrabold text-black dark:text-white tracking-tight leading-[1.08] break-words">
              {service.title}: <br />
              <span className="text-neutral-400 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">
                {service.tagline}
              </span>
            </h1>

            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-xl max-w-3xl leading-relaxed font-normal">
              {service.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="group inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Hire {service.title} Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/working-methodology"
                className="inline-flex items-center space-x-2 px-7 py-4 rounded-full bg-white dark:bg-white/[0.05] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-50 dark:hover:bg-white/[0.09] hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-200 shadow-2xs"
              >
                <span>Our Delivery Methodology</span>
              </Link>
            </div>

            {/* Core Tech Stack Badges Strip */}
            <div className="pt-6 border-t border-neutral-200/70 dark:border-neutral-800 max-w-4xl">
              <span className="text-[11px] text-neutral-400 dark:text-neutral-500 block mb-3 font-bold uppercase tracking-wider">
                Core Technologies &amp; Frameworks:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full bg-[#f8f8f9] dark:bg-[#18181b] text-neutral-800 dark:text-neutral-200 border border-neutral-200/70 dark:border-neutral-800 shadow-2xs hover:border-black/30 dark:hover:border-neutral-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        {/* Practice Metrics Strip Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left"
        >
          {[
            { val: "89+", lbl: "In-House Engineers", desc: "No freelance middlemen" },
            { val: "48 Hours", lbl: "Pod Allocation", desc: "Rapid team embedding" },
            { val: "100%", lbl: "IP Ownership", desc: "Full code transfer" },
            { val: "99.8%", lbl: "SLA Adherence", desc: "On-time milestone delivery" }
          ].map((metric, mIdx) => (
            <div
              key={mIdx}
              className="bg-white dark:bg-[#121215] rounded-2xl p-4 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="text-xl sm:text-2xl font-black text-black dark:text-white font-mono tracking-tight">
                {metric.val}
              </div>
              <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">{metric.lbl}</div>
              <div className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">{metric.desc}</div>
            </div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Core Architectural Features & Deliverables Grid (Lazy-Loaded / While In View) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="py-16 sm:py-20 bg-[#f8f8f9] dark:bg-[#0c0c0e] border-y border-neutral-200/80 dark:border-neutral-800 transition-colors duration-200"
      >
        <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Key Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                  Core Engineering Capabilities
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                  How our senior pod delivers results
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  Engineered with production-grade security, automated testing, and zero technical debt.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {service.features.map((feat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="bg-white dark:bg-[#121215] rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-black dark:text-white">{feat}</h3>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                        Engineered with enterprise security protocols, automated CI/CD validation, and strict adherence to architectural best practices.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Tech Stack & Deliverables */}
            <div className="lg:col-span-5 space-y-6">
              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-[#1f1f23] flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black dark:text-white">Technology Stack &amp; Frameworks</h3>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500">Industry-standard tooling</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {service.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#1f1f23] border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Guaranteed Deliverables Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black dark:text-white">Guaranteed Deliverables</h3>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500">Tangible client milestones</p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1">
                  {service.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 space-x-2.5 bg-neutral-50 dark:bg-[#18181b] px-3.5 py-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Client Commitment Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-neutral-900 text-white rounded-[28px] p-7 sm:p-8 border border-neutral-800 shadow-xl space-y-3"
              >
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Risk-Free Engagement SLA</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Every engagement is protected by a bilateral Mutual NDA, complete IP code rights, dedicated communication channels, and a 2-week risk-free trial period.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3-Step Execution Model (Transparent Onboarding) */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-16"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border border-neutral-200/80 dark:border-white/10 shadow-2xs backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>Delivery Framework</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
            How we kick off your project
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mt-1">
            Zero bureaucracy. Direct collaboration with senior engineers from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {executionSteps.map((step, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-black dark:text-white tracking-tight font-mono block mb-4">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-black dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Relevant Case Studies with Lazy Loading Images */}
      {relevantCaseStudies.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="py-16 sm:py-20 bg-white dark:bg-[#09090b] transition-colors duration-200"
        >
          <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border border-neutral-200/80 dark:border-white/10 shadow-2xs backdrop-blur-sm">
                  <FolderGit2 className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                  <span>Production Impact</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                  Related Case Studies in {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  Real client outcomes achieved through our senior engineering pods.
                </p>
              </div>

              <Link
                href="/case-studies"
                className="mt-4 md:mt-0 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white flex items-center space-x-1 group"
              >
                <span>View All 37 Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantCaseStudies.map((cs, cIdx) => {
                const imgUrl = cs.image ? (cs.image.startsWith("/") ? cs.image : `/${cs.image}`) : "/images/resource/power-bi-dashboard.png";
                return (
                  <motion.div
                    key={cs.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                    className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Lazy Loaded Cover Image */}
                      <div className="relative w-full h-48 sm:h-52 bg-neutral-200/80 dark:bg-neutral-800 overflow-hidden">
                        <Image
                          src={imgUrl}
                          alt={cs.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                            {cs.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-base sm:text-lg font-bold text-black dark:text-white mb-2 leading-snug group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                          {cs.title}
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {cs.heroDesc}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-neutral-200/60 dark:border-neutral-800 mt-auto">
                      <Link
                        href={`/case-studies/${cs.id}`}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white hover:underline pt-4"
                      >
                        <span>Explore Architecture &amp; Metrics</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}

      {/* Motive Bottom Consultation Banner with Smooth Motion */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pb-10"
      >
        <div className="bg-[#f8f8f9] dark:bg-[#121215] rounded-3xl p-8 sm:p-14 border border-neutral-200/80 dark:border-neutral-800 shadow-sm text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1f1f23] border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>Ready to accelerate your software delivery?</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.12]">
            Book a 30-min architecture <br />
            <span className="text-neutral-400 dark:text-neutral-500 font-normal">review with our technical leads</span>
          </h3>

          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discuss your tech roadmap, review architectural blueprints, or scope a dedicated engineering pod with zero upfront commitment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href={`/contact?subject=${encodeURIComponent(service.title)}`}
              className="group inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95 w-full sm:w-auto"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+916355794606"
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-50 dark:hover:bg-[#202025] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-2xs w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call +91 63557 94606</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
