"use client";

import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientFeedbacksSection() {
  const testimonials = [
    {
      id: "stuart-rox",
      image: "/images/resource/ASU07005.webp",
      quote:
        "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals.",
      author: "Stuart Rox",
      role: "Founder / CEO",
      company: "Oryno",
      companyLogo: (
        <div className="flex items-center space-x-1.5 text-black">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="font-bold text-sm tracking-tight">Oryno</span>
        </div>
      )
    },
    {
      id: "lorel-parker",
      image: "/images/resource/IMG_2530.webp",
      quote:
        "We were impressed by Qrioustech's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions from CRM to AI-driven projects. Highly recommended.",
      author: "Lorel Parker",
      role: "Chief Technology Officer",
      company: "Zentara",
      companyLogo: (
        <div className="flex items-center space-x-1.5 text-black">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-600">
            <path d="M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-5-6.5 5 2-7.5L2 9h7z" />
          </svg>
          <span className="font-bold text-sm tracking-tight">Zentara</span>
        </div>
      )
    },
    {
      id: "shota-oda",
      image: "/images/resource/IMG_7107.webp",
      quote:
        "Working with Qrioustech on our mobile and cloud architectures has been phenomenal. Their engineering rigor is top-notch, helping us scale multi-tenant systems while keeping operating costs under tight control.",
      author: "Charlotte Hayes",
      role: "Managing Director",
      company: "Ravento",
      companyLogo: (
        <div className="flex items-center space-x-1.5 text-black">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-600">
            <rect x="3" y="3" width="8" height="8" rx="2" />
            <rect x="13" y="13" width="8" height="8" rx="2" />
          </svg>
          <span className="font-bold text-sm tracking-tight">Ravento</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Pill Badge (Scroll-triggered reveal) */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
            <User className="w-3.5 h-3.5 text-neutral-600" />
            <span>Client Feedbacks</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            Client experiences that <br />
            speak for us
          </h2>

          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Real stories from clients who have experienced measurable results and meaningful progress with our support.
          </p>
        </ScrollReveal>

        {/* Motive 3 Testimonial Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
              className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Top Rounded Photo (Screenshot 3) */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Motive Quote in quotes */}
                <p className="text-neutral-800 text-sm leading-relaxed font-normal mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Author & Company Logo */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div>
                  <div className="text-sm font-bold text-black">{item.author}</div>
                  <div className="text-xs text-neutral-500 font-medium">{item.role}</div>
                </div>
                <div>{item.companyLogo}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
