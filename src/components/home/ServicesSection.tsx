"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Workflow,
  BarChart3,
  CheckCircle2,
  Cloud,
  ArrowRight,
  Layers
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesSection() {
  // Authentic 5 Focus Areas from Legacy Qtech Website (index.html lines 350-575)
  const topServices = [
    {
      id: "product-development",
      href: "/services/product-development",
      icon: <Code2 className="w-5 h-5 text-neutral-800" />,
      title: "Product Development",
      description:
        "Crafting visionary products from concept to reality, our development team turns ideas into impactful solutions for market success."
    },
    {
      id: "product-architect",
      href: "/services/product-architect",
      icon: <Workflow className="w-5 h-5 text-neutral-800" />,
      title: "Product Architect",
      description:
        "Product architecture is the strategic design plan orchestrating the arrangement and interaction of components for optimal functionality and user experience."
    }
  ];

  const bottomServices = [
    {
      id: "power-bi",
      href: "/services/data-visualization",
      icon: <BarChart3 className="w-5 h-5 text-neutral-800" />,
      title: "Power BI",
      description:
        "Unlock insights at a glance with Power BI. Transform your data into stunning visualizations for smarter decisions."
    },
    {
      id: "product-testing",
      href: "/company#methodology",
      icon: <CheckCircle2 className="w-5 h-5 text-neutral-800" />,
      title: "Product Testing",
      description:
        "Ensure seamless functionality and optimal performance with our rigorous product testing, guaranteeing a flawless user experience for your IT solutions."
    },
    {
      id: "cloud-service",
      href: "/services",
      icon: <Cloud className="w-5 h-5 text-neutral-800" />,
      title: "Cloud Service",
      description:
        "Elevate your business to new heights with our cutting-edge Cloud Services, delivering seamless scalability, security, and efficiency for your IT infrastructure."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
            <Layers className="w-3.5 h-3.5 text-neutral-600" />
            <span>Solutions & Focus Areas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            What we do to support <br />
            your business growth
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We’re ready to discover and unlock your potential with dedicated engineering expertise and scalable IT solutions.
          </p>
        </ScrollReveal>

        {/* Motive Asymmetric 5-Card Layout with Staggered Scroll Animations */}
        <div className="space-y-6">
          {/* Top Row: 2 Wide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topServices.map((srv, idx) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-[#f8f8f9] rounded-[28px] p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Circular White Icon Pill */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xs mb-6 group-hover:scale-110 transition-transform duration-200">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-neutral-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomServices.map((srv, idx) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + idx * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-[#f8f8f9] rounded-[28px] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Circular White Icon Pill */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xs mb-6 group-hover:scale-110 transition-transform duration-200">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-neutral-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore All Services Link */}
        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center space-x-2 text-sm font-semibold text-black hover:text-neutral-600 transition-colors"
          >
            <span>Explore full engineering practices & architectures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
