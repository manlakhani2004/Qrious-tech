"use client";

import React from "react";
import Image from "next/image";
import {
  LayoutGrid,
  Crosshair,
  BarChart2,
  Code2,
  Rocket
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MethodologySection() {
  // Authentic Working Methodology Steps from Legacy Qtech Website (working-methodology.html)
  const steps = [
    {
      id: "01",
      icon: <Crosshair className="w-5 h-5 text-neutral-800" />,
      title: "Share Your Business Requirements",
      description:
        "Provide us with your technical requirements, goals, and timeline, and we will tailor the best senior resources to meet your exact criteria."
    },
    {
      id: "02",
      icon: <BarChart2 className="w-5 h-5 text-neutral-800" />,
      title: "Shortlist Developer Profiles",
      description:
        "Within 48 hours, our talent engine shares pre-vetted senior engineer profiles aligned with your tech stack, domain, and time zone for screening."
    },
    {
      id: "03",
      icon: <Code2 className="w-5 h-5 text-neutral-800" />,
      title: "Schedule Technical Interview",
      description:
        "Conduct direct 1-on-1 technical interviews and live coding assessments with the candidates to validate architectural and cultural alignment."
    },
    {
      id: "04",
      icon: <Rocket className="w-5 h-5 text-neutral-800" />,
      title: "Review Contract & Commence Work",
      description:
        "Review transparent agreements with 100% IP ownership and zero hidden fees. Upon confirmation, developers commence work on the agreed date."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Motive Tall Portrait Photo with Scroll Reveal (Screenshot 6) */}
          <ScrollReveal
            duration={0.7}
            yOffset={40}
            className="lg:col-span-5 h-full"
          >
            <div className="relative rounded-[28px] overflow-hidden bg-neutral-100 h-[500px] lg:h-[660px] w-full shadow-lg group">
              <Image
                src="/images/resource/IMG_2294.webp"
                alt="Engineers collaborating at Qrious Tech"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right Column: Motive 4 Simple Steps (Screenshot 6) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Motive Pill Badge with Scroll Reveal */}
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
                <LayoutGrid className="w-3.5 h-3.5 text-neutral-600" />
                <span>4 Simple Steps</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.12] mb-3">
                From strategy to success <br />
                in four steps
              </h2>

              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                Our approach combines strategy, optimization, and engineering rigor to help your brand grow faster with dependable offshore talent.
              </p>
            </ScrollReveal>

            {/* Motive Step Cards Stack with Staggered Scroll Reveal */}
            <div className="space-y-4 pt-2">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-[#f8f8f9] rounded-2xl p-6 sm:p-7 hover:shadow-md transition-shadow duration-200 group"
                >
                  {/* Circular White Icon Pill */}
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xs mb-4 group-hover:scale-105 transition-transform duration-200">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-bold text-black mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
