"use client";

import React from "react";
import Image from "next/image";
import { Quote, ShieldCheck, Star } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TestimonialsSection() {
  const authenticPartners = [
    {
      id: "shin-paul",
      name: "SHIN PAUL",
      role: "Co-Founder / Managing Director",
      context: "Digital Streaming & Music Platform Partner",
      initials: "SP",
      rating: 5,
      quote:
        "The Qrioustech team exceeded our expectations. Their proactive approach and technical knowledge in music-related projects brought our vision to life. Their ability to collaborate and deliver under tight deadlines was truly commendable. We look forward to working with them on future endeavors."
    },
    {
      id: "healthcare-director",
      name: "ENTERPRISE HEALTHCARE PARTNER",
      role: "Vice President of Engineering",
      context: "HIPAA Compliant Patient Telehealth & EMR",
      initials: "EH",
      rating: 5,
      quote:
        "Qrious Tech provided us with dedicated senior full-stack developers who integrated into our HIPAA-compliant pipelines seamlessly. Zero security incidents, sub-second API speeds, and 100% adherence to clinical milestones."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#fafafa] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Pill Badge */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
            <Quote className="w-3.5 h-3.5 text-neutral-600" />
            <span>Executive Client Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            The experiences behind <br />
            our shared success
          </h2>

          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Our leadership and clients share how our dedicated pods deliver measurable impact across complex industries.
          </p>
        </ScrollReveal>

        {/* Real Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {authenticPartners.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: User Avatar + Name + Subtitle */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-100">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shadow-2xs shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-black">{item.name}</h3>
                      <p className="text-xs text-neutral-500 font-medium">{item.role}</p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{item.context}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <blockquote className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Security Pill */}
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center space-x-2 text-xs text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Client Project • Mutual NDA & IP Protection</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
