"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "james-walker",
      avatar: "/images/staff-headshots/15.webp",
      name: "James Walker",
      role: "Brand & Engineering Manager",
      logoMark: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-neutral-300">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      quote:
        "The level of insight and attention to detail from Qrious Tech was impressive. Our platforms became more scalable, and we started seeing stronger engineering results within a short period of time."
    },
    {
      id: "caleb-turner",
      avatar: "/images/staff-headshots/19.webp",
      name: "Caleb Turner",
      role: "Head of Technology",
      logoMark: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-neutral-300">
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
        </svg>
      ),
      quote:
        "Before partnering with Qrious Tech, our internal engineering roadmap lacked clear velocity. Their dedicated team helped us refine our technical strategy and achieve far higher sprint performance across all releases."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#fafafa] border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Pill Badge with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
            <Quote className="w-3.5 h-3.5 text-neutral-600" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            The experiences behind <br />
            our success
          </h2>

          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Our clients share how our approach helped them achieve more growth and improved software performance.
          </p>
        </ScrollReveal>

        {/* Motive Testimonial Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
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
              {/* Header: User Avatar + Name + Subtitle + Logo Mark */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-100">
                <div className="flex items-center space-x-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100 shadow-2xs shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">{item.name}</h3>
                    <p className="text-xs text-neutral-500 font-medium">{item.role}</p>
                  </div>
                </div>
                <div>{item.logoMark}</div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
