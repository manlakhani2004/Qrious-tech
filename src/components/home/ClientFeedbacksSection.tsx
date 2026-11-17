"use client";

import React from "react";
import Image from "next/image";
import { User, Star } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientFeedbacksSection() {
  const authenticTestimonials = [
    {
      id: "stuart-rox",
      image: "/images/meeting-room.png",
      quote:
        "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable.",
      author: "STUART ROX",
      role: "Founder / CEO",
      domain: "Healthcare & Enterprise Client",
      initials: "SR",
      rating: 5
    },
    {
      id: "lorel-parker",
      image: "/images/home-page-2.webp",
      quote:
        "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support.",
      author: "LOREL PARKER",
      role: "Chief Technology Officer",
      domain: "SaaS & CRM Enterprise Client",
      initials: "LP",
      rating: 5
    },
    {
      id: "shota-oda",
      image: "/images/home-page-3.webp",
      quote:
        "Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementation helped us achieve significant milestones. Despite the complexity of our project in the oil industry, their team delivered beyond expectations. Their ability to work discreetly and efficiently is unmatched.",
      author: "SHOTA ODA",
      role: "Chief Executive Officer",
      domain: "Oil & Energy / Mobile Apps",
      initials: "SO",
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Pill Badge */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
            <User className="w-3.5 h-3.5 text-neutral-600" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            Client experiences that <br />
            speak for us
          </h2>

          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Authentic reviews from founders, CEOs, and CTOs who trust Qrious Tech Team LLP for dedicated software engineering.
          </p>
        </ScrollReveal>

        {/* Motive 3 Testimonial Cards Grid with Real Client Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {authenticTestimonials.map((item, idx) => (
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
                {/* Real Qtech Office / Platform Photo */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200/60">
                  <Image
                    src={item.image}
                    alt={item.domain}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-black shadow-2xs">
                    {item.domain}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Authentic Quote from Old Site */}
                <p className="text-neutral-800 text-sm leading-relaxed font-normal mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Real Client Author Info */}
              <div className="flex items-center space-x-3.5 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-black">{item.author}</div>
                  <div className="text-xs text-neutral-500 font-medium">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
