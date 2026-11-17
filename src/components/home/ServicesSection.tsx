"use client";

import React from "react";
import Link from "next/link";
import {
  Palette,
  Monitor,
  Smartphone,
  Search,
  Bell,
  ArrowRight
} from "lucide-react";

export default function ServicesSection() {
  const topServices = [
    {
      id: "product-architect",
      icon: <Palette className="w-5 h-5 text-neutral-800" />,
      title: "Branding and Product Architecture",
      description:
        "We create distinctive software architectures and AI foundations that communicate your enterprise values clearly and build resilient, long-term connections with your users."
    },
    {
      id: "web-development",
      icon: <Monitor className="w-5 h-5 text-neutral-800" />,
      title: "Web Design and Development",
      description:
        "Our team designs and develops modern, high-performing websites and web applications that combine beautiful visuals with seamless, cloud-native user experiences."
    }
  ];

  const bottomServices = [
    {
      id: "mobile-development",
      icon: <Smartphone className="w-5 h-5 text-neutral-800" />,
      title: "Mobile App Engineering",
      description:
        "We craft native iOS, Android, and Flutter mobile applications that increase brand visibility and keep customers engaged anytime, anywhere."
    },
    {
      id: "power-bi",
      icon: <Search className="w-5 h-5 text-neutral-800" />,
      title: "Power BI & Business Intelligence",
      description:
        "Our focus is on turning disparate operational data into executive dashboards and predictive intelligence, helping your business grow steadily."
    },
    {
      id: "salesforce",
      icon: <Bell className="w-5 h-5 text-neutral-800" />,
      title: "Salesforce & Growth Strategy",
      description:
        "We help brands scale through strategic planning, Salesforce CRM multi-cloud workflows, performance insights, and automated sales operations."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Section Header (Screenshot 5) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            How can we support your <br />
            business growth?
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Whether you&apos;re launching a new digital initiative or modernizing legacy infrastructure, we&apos;re here to create solutions that move your brand forward.
          </p>
        </div>

        {/* Motive Asymmetric 5-Card Layout (Screenshot 5) */}
        <div className="space-y-6">
          {/* Top Row: 2 Wide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#f8f8f9] rounded-[28px] p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Circular White Icon Pill (Screenshot 5) */}
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
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#f8f8f9] rounded-[28px] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Circular White Icon Pill (Screenshot 5) */}
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
              </div>
            ))}
          </div>
        </div>

        {/* Explore All Services Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center space-x-2 text-sm font-semibold text-black hover:text-neutral-600 transition-colors"
          >
            <span>Explore full engineering practices & architectures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
