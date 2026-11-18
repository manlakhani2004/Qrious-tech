"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Quote, Star, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  domain: string;
  initials: string;
  quote: string;
  rating: number;
  iconType: number;
  highlight: string;
}

// 4 Authentic Client Endorsements from Qrious Tech Team LLP
const AUTHENTIC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "stuart-rox",
    initials: "SR",
    author: "STUART ROX",
    role: "Founder / CEO",
    domain: "Healthcare & Enterprise AI",
    highlight: "Seamless integration & domain mastery",
    quote:
      "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable.",
    rating: 5,
    iconType: 0
  },
  {
    id: "lorel-parker",
    initials: "LP",
    author: "LOREL PARKER",
    role: "Chief Technology Officer",
    domain: "Autonomous SaaS & CRM",
    highlight: "Innovative ideas & AI-driven roadmap",
    quote:
      "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support.",
    rating: 5,
    iconType: 1
  },
  {
    id: "shota-oda",
    initials: "SO",
    author: "SHOTA ODA",
    role: "Chief Executive Officer",
    domain: "Energy & Mobile Systems",
    highlight: "Game-changer for mission-critical apps",
    quote:
      "Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementation helped us achieve significant milestones. Despite the complexity of our project in the oil industry, their team delivered beyond expectations. Their ability to work discreetly and efficiently is unmatched.",
    rating: 5,
    iconType: 2
  },
  {
    id: "shin-paul",
    initials: "SP",
    author: "SHIN PAUL",
    role: "Co-Founder / Managing Director",
    domain: "Digital Streaming & Media AI",
    highlight: "Tight deadlines met with proactive execution",
    quote:
      "The Qrioustech team exceeded our expectations. Their proactive approach and technical knowledge in music-related projects brought our vision to life. Their ability to collaborate and deliver under tight deadlines was truly commendable. We look forward to working with them on future endeavors.",
    rating: 5,
    iconType: 3
  }
];

function BrandMarkIcon({ type }: { type: number }) {
  if (type === 0) {
    return (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-neutral-400 dark:text-neutral-500">
        <path
          d="M16 4V28M4 16H28M7.5 7.5L24.5 24.5M24.5 7.5L7.5 24.5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === 1) {
    return (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-neutral-400 dark:text-neutral-500">
        <rect x="7" y="5" width="18" height="6" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="4" y="13" width="18" height="6" rx="3" fill="currentColor" opacity="0.85" />
        <rect x="10" y="21" width="18" height="6" rx="3" fill="currentColor" />
      </svg>
    );
  }
  if (type === 2) {
    return (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-neutral-400 dark:text-neutral-500">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="3" opacity="0.4" />
        <path
          d="M8 20L24 12"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-neutral-400 dark:text-neutral-500">
      <path
        d="M16 5L26 11V21L16 27L6 21V11L16 5Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

function TestimonialCard({
  item,
  index,
  total
}: {
  item: TestimonialItem;
  index: number;
  total: number;
}) {
  return (
    <div
      id={`testimonial-card-${item.id}`}
      className="group relative bg-white dark:bg-[#121215] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 xl:p-9 border border-neutral-200/90 dark:border-white/[0.09] shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 select-none overflow-hidden"
    >
      {/* Specular top highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300/40 dark:via-white/20 to-transparent pointer-events-none" />

      {/* Header: Initials Avatar + Author/Role + Index Badge + BrandMarkIcon */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-xs tracking-wider shadow-xs shrink-0 select-none">
            {item.initials}
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight leading-snug flex items-center gap-2">
              <span>{item.author}</span>
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
              {item.role}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-[11px] font-mono font-semibold text-neutral-400 dark:text-neutral-500 px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.05]">
            0{index + 1} / 0{total}
          </span>
          <div className="opacity-80 shrink-0">
            <BrandMarkIcon type={item.iconType} />
          </div>
        </div>
      </div>

      {/* Highlight & Domain Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3.5 border-b border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center space-x-1.5 text-amber-400">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
          ))}
          <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 ml-1.5">5.0</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/[0.06] px-2.5 py-1 rounded-full border border-neutral-200/70 dark:border-white/10">
          {item.domain}
        </span>
      </div>

      {/* Quote */}
      <p className="text-[13px] sm:text-[14.5px] text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal mb-5">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Verified footer */}
      <div className="pt-3.5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="font-semibold text-neutral-700 dark:text-neutral-300">Verified Client Project</span>
        </div>
        <div className="flex items-center space-x-1 text-neutral-400 dark:text-neutral-500 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
          <span>100% IP &amp; NDA</span>
        </div>
      </div>
    </div>
  );
}

export default function ClientFeedbacksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamic Scroll Spy: Updates left sidebar active index as right side cards scroll past
  useEffect(() => {
    const handleScroll = () => {
      const cards = AUTHENTIC_TESTIMONIALS.map((t) =>
        document.getElementById(`testimonial-card-${t.id}`)
      );
      const scrollPos = window.scrollY + window.innerHeight * 0.45;

      for (let i = cards.length - 1; i >= 0; i--) {
        const card = cards[i];
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardTop = rect.top + window.scrollY;
          if (scrollPos >= cardTop) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (id: string, index: number) => {
    setActiveIndex(index);
    const el = document.getElementById(`testimonial-card-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="reviews"
      className="relative py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 isolate"
    >
      {/* Ambient Radial Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[950px] h-[350px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start relative">
          
          {/* ========================================================================= */}
          {/* PINNED LEFT COLUMN: STAYS STICKY (STOPS) WHILE RIGHT SIDE SCROLLS (RUNS)   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
                <Quote className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>Verified Client Stories</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-black dark:text-white tracking-tight mb-4 leading-[1.12]">
                Client experiences that <br className="hidden sm:inline" />
                speak for our craftsmanship
              </h2>

              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
                Direct feedback from founders, CEOs, and CTOs who trust Qrious Tech Team LLP to build their AI solutions, automation workflows, and mission-critical software.
              </p>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-50/80 dark:bg-[#121215] border border-neutral-200/70 dark:border-neutral-800">
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-black dark:text-white">4.9 / 5</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">Clutch Rating</div>
              </div>
              <div className="border-x border-neutral-200/70 dark:border-neutral-800/80 px-3">
                <div className="text-lg sm:text-xl font-extrabold text-black dark:text-white">500+</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">Deployments</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-black dark:text-white">100%</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">IP &amp; NDA</div>
              </div>
            </div>

            {/* Interactive Client Card Navigation List with Motion Shared Glider */}
            <div className="hidden lg:block space-y-2 pt-2">
              <div className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                Client Endorsements ({AUTHENTIC_TESTIMONIALS.length})
              </div>
              {AUTHENTIC_TESTIMONIALS.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToCard(item.id, idx)}
                    className={`relative w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? "text-black dark:text-white font-bold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTestimonialGlider"
                        className="absolute inset-0 bg-neutral-100 dark:bg-white/[0.08] rounded-xl border border-neutral-200/80 dark:border-white/10 shadow-xs"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center space-x-3">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-neutral-400 dark:text-neutral-500"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="text-xs font-bold tracking-tight">{item.author}</div>
                        <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 relative z-10 transition-transform ${
                        isActive
                          ? "translate-x-0.5 text-blue-600 dark:text-blue-400"
                          : "opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Explore All Link */}
            <div className="pt-2">
              <Link
                href="/testimonials"
                className="inline-flex items-center space-x-2 text-xs font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group"
              >
                <span>Explore All Verified Client Stories</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: RUNNING LIST OF CARDS (ZERO OVERLAP BUG)                    */}
          {/* Cards scroll smoothly in standard document flow without crashing together */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 pb-12 relative">
            {AUTHENTIC_TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <TestimonialCard item={item} index={idx} total={AUTHENTIC_TESTIMONIALS.length} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
