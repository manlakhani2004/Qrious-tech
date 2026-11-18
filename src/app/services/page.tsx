"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  BrainCircuit,
  Globe,
  Smartphone,
  CloudLightning,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
  PhoneCall,
  Rocket,
  Cpu,
  Brain,
  Users2
} from "lucide-react";
import { SERVICES_LIST, TECH_PRACTICES_CATEGORIES } from "@/data/company";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useScroll, useTransform } from "motion/react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  Cpu: <Cpu className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  Globe: <Globe className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  Smartphone: <Smartphone className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  CloudLightning: <CloudLightning className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  Brain: <Brain className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  Users2: <Users2 className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  Users: <Users className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />,
  Sparkles: <Sparkles className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />
};

// Single Overlapping Card component with scroll-linked scale and depth
function OverlappingServiceCard({
  service,
  index,
  total,
  icon
}: {
  service: (typeof SERVICES_LIST)[0];
  index: number;
  total: number;
  icon: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  // Scale down subtly as subsequent cards scroll over it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // Subtle opacity dimming for depth as newer cards overlap
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index === total - 1 ? 1 : 0.88]
  );

  return (
    <div
      ref={cardRef}
      id={service.id}
      className="sticky scroll-mt-28"
      style={{
        // Staggered sticky top position so cards overlap smoothly
        top: `calc(84px + ${Math.min(index, 6) * 14}px)`,
        zIndex: index + 10,
        marginBottom: `${(total - index - 1) * 16}px`
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="bg-white dark:bg-[#111114] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_-12px_36px_rgba(0,0,0,0.06),0_24px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-300 relative overflow-hidden"
      >
        {/* Subtle top edge specular highlight in dark mode */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent dark:block hidden pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Number, Title, Capabilities, Deliverables */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-13 h-13 rounded-2xl bg-neutral-100/90 dark:bg-white/[0.06] border border-neutral-200/60 dark:border-white/10 flex items-center justify-center shrink-0 shadow-2xs text-black dark:text-white">
                {icon}
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wider">
                  Practice ({String(index + 1).padStart(2, "0")})
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight leading-tight">
                  {service.title}
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              {service.description}
            </p>

            {/* Key Capabilities */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                Key Capabilities &amp; Architectural Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {service.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start text-xs sm:text-[13px] text-neutral-800 dark:text-neutral-200 space-x-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                Standard Engineering Deliverables
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.deliverables.map((deliv, dIdx) => (
                  <span
                    key={dIdx}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-white/10 shadow-2xs"
                  >
                    {deliv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & CTAs */}
          <div className="lg:col-span-5 bg-[#f8f8f9] dark:bg-[#16161a] rounded-2xl p-6 sm:p-7 space-y-6 border border-neutral-200/70 dark:border-white/[0.08] shadow-xs">
            <div>
              <h3 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider mb-3">
                Core Tech Stack &amp; Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs sm:text-[13px] font-semibold px-3.5 py-1.5 rounded-full bg-white dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 border border-neutral-200/70 dark:border-white/10 shadow-2xs hover:border-neutral-300 dark:hover:border-white/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#111114] border border-neutral-200/80 dark:border-white/[0.08] space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400 shadow-2xs">
              <div className="font-bold text-black dark:text-white flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-1.5" />
                Engagement Guarantees
              </div>
              <p className="leading-relaxed">
                Backed by strict bilateral NDAs, 100% client IP code ownership, agile sprint reviews, and direct developer access.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <Link
                href={`/services/${service.slug}`}
                className="group w-full inline-flex items-center justify-between px-5 py-3 text-xs font-bold text-black dark:text-white bg-white dark:bg-white/[0.06] hover:bg-neutral-50 dark:hover:bg-white/[0.1] border border-neutral-200/90 dark:border-white/10 rounded-full transition-all duration-200 shadow-2xs"
              >
                <span>View Practice Architecture &amp; FAQs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={`/contact?subject=${encodeURIComponent(service.title)}`}
                className="group w-full inline-flex items-center justify-between px-5 py-3.5 text-xs font-bold text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Discuss {service.title} Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pb-20 lg:pb-28">
        {/* Motive Centered Hero with Modern Background Images */}
        <section className="relative isolate overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-neutral-100 dark:border-white/[0.06]">
          {/* Background Images for Dark and Light Mode */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
            {/* Dark mode background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 dark:block hidden"
              style={{
                backgroundImage: "url('/images/resource/services-header-bg-dark.webp')"
              }}
            />
            {/* Light mode background image */}
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
            {/* Subtle Vignette Masks */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-[#09090b]/50 dark:via-transparent dark:to-[#09090b]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,rgba(255,255,255,0.7)_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,rgba(9,9,11,0.75)_100%)]" />
            {/* Ambient Radial Color Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-[100px] pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
                <Layers className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>Services &amp; Capabilities</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
                Modern Enterprise Services &amp; <br />
                <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">
                  Technology Practices
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                From autonomous multi-agent AI ecosystems to high-concurrency cloud architectures and multi-cloud Salesforce integrations, we design and scale solutions engineered for real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-8">
                <a
                  href="#practices"
                  className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-sm dark:shadow-[0_0_24px_rgba(255,255,255,0.18)] active:scale-95"
                >
                  <span>Explore Practices</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-white/10 text-[14px] font-semibold hover:bg-neutral-200 dark:hover:bg-white/[0.09] transition-all duration-200 backdrop-blur-sm"
                >
                  <span>Schedule a Consultation</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Overlapping Stacking Service Cards */}
        <section id="practices" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-16 pb-20">
            {SERVICES_LIST.map((srv, idx) => (
              <OverlappingServiceCard
                key={srv.id}
                service={srv}
                index={idx}
                total={SERVICES_LIST.length}
                icon={iconMap[srv.iconName] || <Sparkles className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />}
              />
            ))}
          </div>
        </section>

        {/* Master Tech Stack Matrix */}
        <section className="py-20 bg-white dark:bg-[#09090b] border-y border-neutral-100 dark:border-neutral-800 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                Complete Technology Practice Matrix
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                Our 89+ in-house engineers are certified across multi-cloud and modern language ecosystems.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_PRACTICES_CATEGORIES.map((cat, idx) => (
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
                  className="bg-[#f8f8f9] dark:bg-[#111114] border border-neutral-200/80 dark:border-white/[0.08] rounded-3xl p-6 sm:p-7 space-y-3.5 hover:bg-white dark:hover:bg-[#16161a] hover:shadow-lg dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Motive Bottom Appointment CTA Banner */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal duration={0.7} yOffset={30}>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.14]">
                Book your appointment for <br />
                <span className="text-neutral-400 dark:text-neutral-500 font-normal">tailored solutions &amp; insights</span>
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
                  className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-white dark:bg-white/[0.05] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-50 dark:hover:bg-white/[0.09] hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-200 shadow-2xs w-full sm:w-auto"
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
