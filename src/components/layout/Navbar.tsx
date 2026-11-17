"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Building2,
  Users2,
  HeartHandshake,
  Workflow,
  HelpCircle,
  BarChart3,
  Globe,
  Smartphone,
  CloudLightning,
  Brain,
  Stethoscope,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Trophy,
  Tv,
  Briefcase,
  Zap,
  FolderGit2,
  Layers
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Group 1: About (Exact items from old Qrious Tech navbar)
  const aboutItems = [
    {
      title: "The Company",
      desc: "QTech pioneers innovative, client-focused tech solutions.",
      href: "/company",
      icon: <Building2 className="w-4 h-4 text-black" />
    },
    {
      title: "Life @ Qtech",
      desc: "A dynamic tech community driving innovation, collaboration, and growth.",
      href: "/company#culture",
      icon: <HeartHandshake className="w-4 h-4 text-black" />
    },
    {
      title: "Join The Crew",
      desc: "Join our senior engineering team and shape exciting technological advancements.",
      href: "/company#careers",
      icon: <Users2 className="w-4 h-4 text-black" />
    },
    {
      title: "Working Methodology",
      desc: "Explore QTech's 5-step operational framework for project success.",
      href: "/company#methodology",
      icon: <Workflow className="w-4 h-4 text-black" />
    },
    {
      title: "FAQs",
      desc: "Check out FAQs on QTech's services, tech stack, and dedicated pods.",
      href: "/company#faqs",
      icon: <HelpCircle className="w-4 h-4 text-black" />
    }
  ];

  // Group 2: Tech Practices (Exact items & sub-technologies from old Qrious Tech navbar)
  const techPractices = [
    {
      title: "Power BI",
      tagline: "Data Modeling, DAX & Executive Analytics",
      desc: "Custom dashboard development, ETL pipelines, and embedded Power BI reports.",
      href: "/services#power-bi",
      icon: <BarChart3 className="w-4 h-4 text-black" />,
      subItems: ["Development", "Data Modeling", "Integration", "Embedded BI", "Migration"]
    },
    {
      title: "Web Development",
      tagline: "React, Next.js, Node.js & Cloud Architecture",
      desc: "High-performance web apps, scalable APIs, and serverless backends.",
      href: "/services#web-development",
      icon: <Globe className="w-4 h-4 text-black" />,
      subItems: ["React 19 & Next.js", "Node.js Microservices", "Full-Stack", "Cloud Native"]
    },
    {
      title: "Mobile Apps",
      tagline: "iOS, Android & Flutter Cross-Platform",
      desc: "Intuitive touch apps with sub-second response times and offline resilience.",
      href: "/services#mobile-development",
      icon: <Smartphone className="w-4 h-4 text-black" />,
      subItems: ["Swift (iOS)", "Kotlin (Android)", "Flutter", "React Native"]
    },
    {
      title: "Salesforce",
      tagline: "Sales Cloud, Service Cloud & Conga CPQ",
      desc: "Enterprise CRM workflows, Experience Cloud portals, and Lightning components.",
      href: "/services#salesforce",
      icon: <CloudLightning className="w-4 h-4 text-black" />,
      subItems: ["Sales & Service Cloud", "Experience Cloud", "Conga CPQ", "LWC Components"]
    },
    {
      title: "AI / ML Development",
      tagline: "LLMs, LangGraph Agents & Predictive Intelligence",
      desc: "Enterprise AI modernization, custom fine-tuning, and multi-agent workflows.",
      href: "/services#ai-ml",
      icon: <Brain className="w-4 h-4 text-black" />,
      subItems: ["Generative AI", "LangChain Agents", "Predictive Analytics", "Computer Vision"]
    }
  ];

  // Group 3: Industries (Exact 8 verticals from old Qrious Tech navbar)
  const industries = [
    {
      name: "Healthcare",
      desc: "HIPAA-compliant patient portals & diagnostic data security",
      href: "/services#industries",
      icon: <Stethoscope className="w-4 h-4 text-black" />
    },
    {
      name: "Finance",
      desc: "Scalable fintech apps, wealth dashboards & encrypted payments",
      href: "/services#industries",
      icon: <Landmark className="w-4 h-4 text-black" />
    },
    {
      name: "Education",
      desc: "Interactive e-learning platforms, LMS & AI quizzing",
      href: "/services#industries",
      icon: <GraduationCap className="w-4 h-4 text-black" />
    },
    {
      name: "Retail & Ecommerce",
      desc: "Headless commerce, inventory synchronization & dynamic loyalty",
      href: "/services#industries",
      icon: <ShoppingBag className="w-4 h-4 text-black" />
    },
    {
      name: "Sports",
      desc: "Real-time match scoring, tournament brackets & analytics",
      href: "/services#industries",
      icon: <Trophy className="w-4 h-4 text-black" />
    },
    {
      name: "Entertainment",
      desc: "Low-latency media streaming apps & high-concurrency systems",
      href: "/services#industries",
      icon: <Tv className="w-4 h-4 text-black" />
    },
    {
      name: "Human Capital (HCM)",
      desc: "Shift scheduling, workforce dispatch & payroll compliance",
      href: "/services#industries",
      icon: <Briefcase className="w-4 h-4 text-black" />
    },
    {
      name: "On Demand",
      desc: "Instant geo-dispatch, driver tracking & in-app booking",
      href: "/services#industries",
      icon: <Zap className="w-4 h-4 text-black" />
    }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/[0.06] shadow-2xs py-3.5"
          : "bg-white/90 backdrop-blur-sm border-b border-neutral-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Motive Style Brand Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-black leading-tight">
                Qrious Tech
              </span>
              <span className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase">
                Team LLP
              </span>
            </div>
          </Link>

          {/* Desktop Motive Navigation with Grouped Mega-Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* 1. About Dropdown (Old Qtech data) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1 px-3.5 py-2 text-[14px] font-medium transition-colors rounded-full ${
                  activeDropdown === "about" || pathname.startsWith("/company")
                    ? "text-black bg-neutral-100 font-semibold"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                }`}
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* About Mega Menu */}
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-[580px] pt-3 z-50">
                  <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 shadow-2xl grid grid-cols-12 gap-5">
                    {/* Left Feature Card */}
                    <div className="col-span-5 bg-[#f8f8f9] rounded-2xl p-5 flex flex-col justify-between border border-neutral-100">
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-3 shadow-2xs">
                          <Building2 className="w-4 h-4 text-black" />
                        </div>
                        <h4 className="text-sm font-bold text-black mb-1">
                          Qrious Tech Team LLP
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          Over two decades of proven offshore software engineering delivery for global enterprises.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-neutral-200/60 text-[11px] text-neutral-700 font-semibold flex items-center space-x-1">
                        <span>Founded 2004 • Ahmedabad</span>
                      </div>
                    </div>

                    {/* Right Link List */}
                    <div className="col-span-7 space-y-2">
                      {aboutItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="p-2.5 rounded-xl hover:bg-[#f8f8f9] transition-all flex items-start space-x-3 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white group-hover:shadow-2xs transition-all">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black group-hover:text-neutral-700 transition-colors">
                              {item.title}
                            </div>
                            <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Tech Practices Dropdown (Old Qtech data) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("practices")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1 px-3.5 py-2 text-[14px] font-medium transition-colors rounded-full ${
                  activeDropdown === "practices" || pathname.startsWith("/services")
                    ? "text-black bg-neutral-100 font-semibold"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                }`}
              >
                <span>Tech Practices</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                    activeDropdown === "practices" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Tech Practices Mega Menu */}
              {activeDropdown === "practices" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] pt-3 z-50">
                  <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                      <div>
                        <h4 className="text-xs font-bold text-black uppercase tracking-wider">
                          Engineering Practices & Specialized Stacks
                        </h4>
                        <p className="text-[11px] text-neutral-500">
                          Pre-vetted senior engineering pods across our 5 flagship technical disciplines.
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-black hover:underline flex items-center space-x-1"
                      >
                        <span>View All</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {techPractices.map((tech) => (
                        <Link
                          key={tech.title}
                          href={tech.href}
                          className="p-3.5 rounded-2xl bg-[#f8f8f9] hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-all flex items-start space-x-3 group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                            {tech.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-black group-hover:text-neutral-700 transition-colors">
                                {tech.title}
                              </span>
                              <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                            <div className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5 font-medium">
                              {tech.tagline}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {tech.subItems.slice(0, 3).map((sub, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white text-neutral-700 border border-neutral-200/60"
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Industries Dropdown (Old Qtech 8 industries) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1 px-3.5 py-2 text-[14px] font-medium transition-colors rounded-full ${
                  activeDropdown === "industries"
                    ? "text-black bg-neutral-100 font-semibold"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                }`}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Industries Grid Mega Menu */}
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-3 z-50">
                  <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 shadow-2xl">
                    <div className="mb-4 pb-3 border-b border-neutral-100">
                      <h4 className="text-xs font-bold text-black uppercase tracking-wider">
                        Domain-Specific Engineering
                      </h4>
                      <p className="text-[11px] text-neutral-500">
                        Tailored software solutions complying with specific industry standards and user demands.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {industries.map((ind) => (
                        <Link
                          key={ind.name}
                          href={ind.href}
                          className="p-3 rounded-2xl hover:bg-[#f8f8f9] border border-transparent hover:border-neutral-200/80 transition-all flex items-start space-x-3 group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white group-hover:shadow-2xs transition-all">
                            {ind.icon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black group-hover:text-neutral-700 transition-colors">
                              {ind.name}
                            </div>
                            <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                              {ind.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. How We Work (Working Methodology from old site) */}
            <Link
              href="/company#methodology"
              className="px-3.5 py-2 text-[14px] font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-full transition-colors"
            >
              How we work
            </Link>

            {/* 5. Case Studies (Real 37 case studies) */}
            <Link
              href="/case-studies"
              className={`px-3.5 py-2 text-[14px] font-medium transition-colors rounded-full ${
                pathname === "/case-studies"
                  ? "text-black bg-neutral-100 font-semibold"
                  : "text-neutral-600 hover:text-black hover:bg-neutral-50"
              }`}
            >
              Case Studies
            </Link>

            {/* 6. Portfolio Platforms */}
            <Link
              href="/portfolio"
              className={`px-3.5 py-2 text-[14px] font-medium transition-colors rounded-full ${
                pathname === "/portfolio"
                  ? "text-black bg-neutral-100 font-semibold"
                  : "text-neutral-600 hover:text-black hover:bg-neutral-50"
              }`}
            >
              Portfolio
            </Link>
          </nav>

          {/* Right Motive Solid Black Pill Button: Let's Connect */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-neutral-800 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-neutral-100 space-y-3 max-h-[80vh] overflow-y-auto">
            {/* About Accordion */}
            <div>
              <button
                onClick={() => setMobileOpenSection(mobileOpenSection === "about" ? null : "about")}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-black"
              >
                <span>About</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileOpenSection === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenSection === "about" && (
                <div className="pl-4 pr-2 space-y-1 mt-1 border-l-2 border-neutral-200 ml-3">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xs font-semibold text-neutral-600 hover:text-black"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tech Practices Accordion */}
            <div>
              <button
                onClick={() => setMobileOpenSection(mobileOpenSection === "practices" ? null : "practices")}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-black"
              >
                <span>Tech Practices</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileOpenSection === "practices" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenSection === "practices" && (
                <div className="pl-4 pr-2 space-y-1 mt-1 border-l-2 border-neutral-200 ml-3">
                  {techPractices.map((tech) => (
                    <Link
                      key={tech.title}
                      href={tech.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xs font-semibold text-neutral-600 hover:text-black"
                    >
                      {tech.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div>
              <button
                onClick={() => setMobileOpenSection(mobileOpenSection === "industries" ? null : "industries")}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-black"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileOpenSection === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenSection === "industries" && (
                <div className="pl-4 pr-2 grid grid-cols-2 gap-1.5 mt-1 border-l-2 border-neutral-200 ml-3">
                  {industries.map((ind) => (
                    <Link
                      key={ind.name}
                      href={ind.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-neutral-600 hover:text-black"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/company#methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-black"
            >
              How we work
            </Link>

            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-black"
            >
              Case Studies
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-black"
            >
              Portfolio
            </Link>

            {/* CTA in Mobile */}
            <div className="pt-3 px-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
