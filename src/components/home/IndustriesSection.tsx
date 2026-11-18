"use client";

import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Landmark,
  GraduationCap,
  Trophy,
  Users2,
  ShoppingBag,
  Tv,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

export default function IndustriesSection() {
  // Authentic 8 Industries from Legacy Qtech Website (index.html lines 596-935)
  const industries = [
    {
      id: "healthcare",
      href: "/services#industries",
      icon: <Stethoscope className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Healthcare",
      description:
        "Streamlining healthcare processes with innovative IT solutions. Plus enhancing patient care, smart data security, and operational efficiency.",
      metric: "HIPAA Compliant"
    },
    {
      id: "finance",
      href: "/services#industries",
      icon: <Landmark className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Finance",
      description:
        "Providing robust financial solutions for enhanced security. Enabling seamless transactions, risk management, and compliance.",
      metric: "PCI-DSS Aligned"
    },
    {
      id: "education",
      href: "/services#industries",
      icon: <GraduationCap className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Education",
      description:
        "Transforming education with technology-driven solutions. Fostering engaging learning experiences and administrative efficiency.",
      metric: "EdTech & LMS"
    },
    {
      id: "sports",
      href: "/services#industries",
      icon: <Trophy className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Sports",
      description:
        "Empowering sports with innovations. Enhancing fan engagement, athlete performance analysis, and sports management.",
      metric: "Real-Time Scoring"
    },
    {
      id: "hcm",
      href: "/services#industries",
      icon: <Users2 className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Human Capital Management",
      description:
        "Optimizing human resources with integrated IT solutions. Enhancing employee productivity, engagement, talent acquisition, and workforce management.",
      metric: "HR & Payroll"
    },
    {
      id: "retail",
      href: "/services#industries",
      icon: <ShoppingBag className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Retail and Ecommerce",
      description:
        "Elevating retail experiences through technology. Plus enhancing shopping, inventory management, and customer engagement.",
      metric: "Omnichannel Commerce"
    },
    {
      id: "entertainment",
      href: "/services#industries",
      icon: <Tv className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Entertainment",
      description:
        "Revolutionizing the way we experience the entertainment landscape through next-gen digital solutions. Enabling seamless content distribution, audience interaction, and immersive experiences.",
      metric: "Digital Media Streaming"
    },
    {
      id: "demand",
      href: "/services#industries",
      icon: <Zap className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "On Demand",
      description:
        "Transforming on-demand services through cutting-edge technology. Streamlining service delivery, logistics, and customer experiences to drive efficiency, satisfaction, and growth.",
      metric: "Instant Dispatch & Fleet"
    }
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>To Whom We Provide Solutions ?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-4">
            Industry-Tailored <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">Engineering Excellence</span>
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At Qrious Tech Team LLP, our innovative solutions cater to a diverse range of industries, empowering organizations to thrive in the digital landscape.
          </p>
        </ScrollReveal>

        {/* Motive 8-Card Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700"
            >
              <div>
                {/* Top Row: Icon + Metric Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-[#18181b] rounded-full flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200">
                    {ind.icon}
                  </div>
                  <span className="text-[10px] font-bold text-neutral-700 dark:text-neutral-300 bg-white dark:bg-[#18181b] px-2.5 py-1 rounded-full border border-neutral-200/70 dark:border-neutral-700 shadow-2xs">
                    {ind.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white mb-2.5 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {ind.title}
                </h3>

                <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {ind.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Learn more
                </span>
                <div className="w-7 h-7 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-black dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all shadow-2xs">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
