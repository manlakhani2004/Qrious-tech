"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { motion } from "motion/react";
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
  Layers,
  Code2,
  Star,
  ShieldCheck,
  CheckCircle2,
  Search,
  Command
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    }, 160);
  };

  // Group 1: AI Solutions & Engineering Practices
  const techPractices = [
    {
      title: "Autonomous AI Agents",
      tagline: "LangGraph • Multi-Agent Swarms • 24/7 Ops",
      desc: "Deterministic agentic pipelines with self-correcting tool execution and automated ERP/CRM dispatch.",
      href: "/services/ai-ml-development",
      icon: <Brain className="w-4 h-4 text-white" />,
      subItems: ["LangGraph", "Tool Calling", "24/7 Swarms"],
      isFeatured: true,
      badge: "Flagship"
    },
    {
      title: "Zero-Leakage Private RAG",
      tagline: "Air-Gapped VPC • Hybrid Vector Search",
      desc: "Instant search across enterprise documents and databases with exact citations and zero external training.",
      href: "/services/ai-ml-development",
      icon: <ShieldCheck className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Private VPC", "Hybrid Search", "14ms Match"]
    },
    {
      title: "Custom AI Software & Web Apps",
      tagline: "Next.js 16 • React 19 • Embedded Copilots",
      desc: "High-concurrency enterprise web and mobile platforms with native AI copilots and serverless scale.",
      href: "/services/web-development",
      icon: <Globe className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Next.js 16", "Server Components", "Full-Stack"]
    },
    {
      title: "Predictive BI & Microsoft Fabric",
      tagline: "Fabric Lakehouse • DAX • ML Forecasting",
      desc: "Turn messy operational data into automated executive dashboards and predictive revenue forecasting.",
      href: "/services/data-visualization",
      icon: <BarChart3 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Microsoft Fabric", "OneLake", "ML Forecasts"]
    },
    {
      title: "Salesforce Multi-Cloud AI",
      tagline: "Agentforce • Service Cloud • Custom LWC",
      desc: "Automated CRM dispatch, custom Lightning components, and intelligent lead/ticket triage.",
      href: "/services/salesforce-development",
      icon: <CloudLightning className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Agentforce", "Service Cloud", "LWC"]
    },
    {
      title: "Dedicated AI Pods & All Services",
      tagline: "100+ In-House Engineers • Rapid Agile Delivery",
      desc: "Explore our full architectural capabilities, dedicated sprint pods, and tailored enterprise solutions.",
      href: "/services",
      icon: <Sparkles className="w-4 h-4 text-white" />,
      subItems: ["10 Practices", "Agile Sprints", "Explore All →"],
      isSpecial: true
    }
  ];

  // Group 2: Industries grouped into 3 distinct sectors
  const industrySectors = [
    {
      sectorName: "Enterprise & FinTech",
      items: [
        {
          name: "Healthcare",
          desc: "HIPAA-compliant patient portals & diagnostic data security",
          href: "/industries/healthcare",
          icon: <Stethoscope className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "HIPAA / EHR"
        },
        {
          name: "Finance",
          desc: "Scalable fintech apps, wealth dashboards & encrypted payments",
          href: "/industries/finance",
          icon: <Landmark className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "FinTech / PCI"
        },
        {
          name: "Human Capital (HCM)",
          desc: "Shift scheduling, workforce dispatch & payroll compliance",
          href: "/industries/hcm",
          icon: <Briefcase className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "Workforce"
        }
      ]
    },
    {
      sectorName: "Commerce & On-Demand",
      items: [
        {
          name: "Retail & Ecommerce",
          desc: "Headless commerce, inventory synchronization & dynamic loyalty",
          href: "/industries/retail",
          icon: <ShoppingBag className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "Omnichannel"
        },
        {
          name: "On Demand",
          desc: "Instant geo-dispatch, driver tracking & in-app booking",
          href: "/industries/on-demand",
          icon: <Zap className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "Real-time GPS"
        }
      ]
    },
    {
      sectorName: "Media, Sports & Education",
      items: [
        {
          name: "Sports",
          desc: "Real-time match scoring, tournament brackets & telemetry",
          href: "/industries/sports",
          icon: <Trophy className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "Live Telemetry"
        },
        {
          name: "Entertainment",
          desc: "Low-latency media streaming apps & high-concurrency systems",
          href: "/industries/entertainment",
          icon: <Tv className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "Streaming"
        },
        {
          name: "Education",
          desc: "Interactive e-learning platforms, LMS & AI quizzing",
          href: "/industries/education",
          icon: <GraduationCap className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
          badge: "EdTech"
        }
      ]
    }
  ];

  // Group 3: How We Work
  const howWeWorkItems = [
    {
      title: "Dedicated Development Teams",
      desc: "Pre-vetted senior software engineers embedded directly into your sprints.",
      href: "/how-we-work",
      icon: <Users2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "SaaS Development Partner",
      desc: "Turn enterprise workflows into scalable production AI platforms with high velocity.",
      href: "/how-we-work",
      icon: <Layers className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "AI Modernization Partner",
      desc: "Embed LLMs, intelligent automations, and agentic workflows into legacy stacks.",
      href: "/how-we-work",
      icon: <Sparkles className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "Working Methodology",
      desc: "Explore QTech's 5-step operational framework and SLA commitments.",
      href: "/working-methodology",
      icon: <Workflow className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    }
  ];

  // Group 4: Case Studies & Work
  const workItems = [
    {
      title: "All 37 Case Studies",
      desc: "Interactive decks across AI, HealthTech, FinTech, and Enterprise platforms.",
      href: "/case-studies",
      icon: <FolderGit2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "Enterprise AI & Systems Portfolio",
      desc: "Exploration of client mobile apps, AI copilots, and data analytics engines.",
      href: "/portfolio",
      icon: <Code2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    }
  ];

  // Group 5: Company
  const companyItems = [
    {
      title: "The Company",
      desc: "QTech pioneers innovative, client-focused enterprise technology solutions.",
      href: "/company",
      icon: <Building2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "Life @ Qtech",
      desc: "Dynamic tech culture, workplace celebrations, and engineering all-hands.",
      href: "/life-at-qtech",
      icon: <HeartHandshake className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "Join The Crew",
      desc: "Explore open engineering roles and join our senior technical squad.",
      href: "/crew",
      icon: <Users2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "Client Testimonials",
      desc: "Verified endorsements from founders, CTOs, and global engineering leaders.",
      href: "/testimonials",
      icon: <Star className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    },
    {
      title: "FAQs",
      desc: "Frequently asked questions regarding engagement models and IP ownership.",
      href: "/faqs",
      icon: <HelpCircle className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    }
  ];

  return (
    <header id="site-header-nav" className="sticky top-0 z-50 w-full transition-all duration-300 font-sans">
      <div
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/90 dark:bg-[#070709]/90 backdrop-blur-xl border-neutral-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-2.5 sm:py-3"
            : "bg-white/70 dark:bg-[#070709]/70 backdrop-blur-md border-neutral-200/50 dark:border-white/[0.04] py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Authentic Qrious Tech Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0 transition-opacity hover:opacity-90 py-0.5">
            <Image
              src="/images/qrious-tech-team-logo.png"
              alt="Qrious Tech Team LLP"
              width={220}
              height={32}
              priority
              className="h-6 sm:h-7 md:h-7.5 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] dark:hidden"
            />
            <Image
              src="/images/qrious-tech-team-logo-dark.png"
              alt="Qrious Tech Team LLP"
              width={220}
              height={32}
              priority
              className="h-6 sm:h-7 md:h-7.5 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation: Centered with Kiro.dev Glider Hover Animation */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 absolute left-1/2 -translate-x-1/2"
              onMouseLeave={() => {
                setHoveredNav(null);
                handleMouseLeave();
              }}
            >
              {/* 1. AI Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  handleMouseEnter("services");
                  setHoveredNav("services");
                }}
              >
                <Link
                  href="/services"
                  onClick={() => setActiveDropdown(null)}
                  className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-[2px] text-xs font-semibold tracking-tight transition-colors duration-150 z-10 ${
                    activeDropdown === "services" || pathname.startsWith("/services")
                      ? "text-black dark:text-white"
                      : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {hoveredNav === "services" && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 rounded-[2px] bg-black/[0.06] dark:bg-white/[0.08] pointer-events-none -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span>AI Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                    }`}
                  />
                </Link>

              {/* Services Mega Menu */}
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-[720px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-white/[0.08] rounded-[2px] p-6 shadow-2xl dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_50px_rgba(0,0,0,0.8)]">
                    <div className="mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                          AI Solutions &amp; Engineering Practices
                        </h4>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-[2px] bg-blue-600 text-white">
                          Milestone-Driven Sprints
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Production-grade autonomous agents, private RAG, and dedicated engineering pods.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {techPractices.map((tech) => (
                        (tech as any).isSpecial ? (
                          <Link
                            key={tech.title}
                            href={tech.href}
                            onClick={() => setActiveDropdown(null)}
                            className="p-3.5 rounded-[2px] bg-black dark:bg-[#1c1917] hover:bg-neutral-900 dark:hover:bg-neutral-900 transition-all flex items-start space-x-3 group shadow-md text-white border border-neutral-800 dark:border-neutral-700"
                          >
                            <div className="w-9 h-9 rounded-[2px] bg-white/15 border border-white/25 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-white/25 transition-all text-white">
                              {tech.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white group-hover:text-neutral-200 transition-colors">
                                  {tech.title}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 group-hover:text-white transition-all" />
                              </div>
                              <div className="text-[11px] text-neutral-300 line-clamp-1 mt-0.5 font-medium">
                                {tech.tagline}
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {tech.subItems.map((sub, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-[2px] ${
                                      sIdx === tech.subItems.length - 1
                                        ? "bg-white text-black font-bold"
                                        : "bg-white/15 text-white border border-white/20"
                                    }`}
                                  >
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            key={tech.title}
                            href={tech.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`p-3.5 rounded-[2px] transition-all flex items-start space-x-3 group relative overflow-hidden ${
                              (tech as any).isFeatured
                                ? "bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/90 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 shadow-xs"
                                : "bg-[#f8f8f9] dark:bg-[#18181b] hover:bg-neutral-100/80 dark:hover:bg-[#202025]"
                            }`}
                          >
                            <div
                              className={`w-9 h-9 rounded-[2px] border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-all ${
                                (tech as any).isFeatured
                                  ? "bg-blue-600 text-white border-blue-500 shadow-sm"
                                  : "bg-white dark:bg-[#27272a] border-neutral-200/80 dark:border-neutral-700 text-black dark:text-white"
                              }`}
                            >
                              {(tech as any).isFeatured ? <Brain className="w-4 h-4 text-white" /> : tech.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1.5">
                                  <span className="text-xs font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                                    {tech.title}
                                  </span>
                                  {(tech as any).badge && (
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-[2px] bg-blue-600 text-white tracking-wide">
                                      {(tech as any).badge}
                                    </span>
                                  )}
                                </div>
                                <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                              </div>
                              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5 font-medium">
                                {tech.tagline}
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {tech.subItems.map((sub, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-[2px] ${
                                      (tech as any).isFeatured
                                        ? "bg-white dark:bg-blue-900/40 text-blue-900 dark:text-blue-200 border border-blue-200/60 dark:border-blue-800/60"
                                        : "bg-white dark:bg-[#27272a] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700"
                                    }`}
                                  >
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Industries Mega-Dropdown Grouped by Sectors */}
            <div
              className="relative"
              onMouseEnter={() => {
                handleMouseEnter("industries");
                setHoveredNav("industries");
              }}
            >
              <button
                className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-[2px] text-xs font-semibold tracking-tight transition-colors duration-150 z-10 ${
                  activeDropdown === "industries" || pathname.startsWith("/industries")
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {hoveredNav === "industries" && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 rounded-[2px] bg-black/[0.06] dark:bg-white/[0.08] pointer-events-none -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "industries" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                  }`}
                />
              </button>

              {/* Grouped Industries Mega Menu */}
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[920px] xl:w-[940px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-neutral-800 rounded-[2px] p-6 shadow-2xl grid grid-cols-12 gap-6">
                    {/* Left: Featured Industry Pods Card */}
                    <div className="col-span-4 bg-[#f8f8f9] dark:bg-[#18181b] rounded-[2px] p-5 border border-neutral-200/70 dark:border-neutral-800 flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 rounded-[2px] bg-white dark:bg-[#27272a] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-3 shadow-2xs">
                          <ShieldCheck className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                        </div>
                        <h4 className="text-sm font-bold text-black dark:text-white mb-1">
                          Domain-Engineered Pods
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                          Specialized engineering teams equipped with domain compliance, security protocols, and enterprise SLAs.
                        </p>
                        <div className="space-y-1.5 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>HIPAA & EMR Compliance</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>PCI-DSS & FinTech Security</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>Sub-second Geo-Dispatch</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                        <Link
                          href="/case-studies"
                          className="text-xs font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 flex items-center space-x-1"
                        >
                          <span>Explore Industry Case Studies</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: 3 Distinct Industry Sectors with Harmonized Header Baseline */}
                    <div className="col-span-8 grid grid-cols-3 gap-4">
                      {industrySectors.map((sector, sIdx) => (
                        <div key={sIdx} className="space-y-3">
                          <h5 className="text-[10.5px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide pb-1.5 border-b border-neutral-100 dark:border-neutral-800 h-8 flex items-end whitespace-nowrap overflow-hidden">
                            <span>{sector.sectorName}</span>
                          </h5>
                          <div className="space-y-1">
                            {sector.items.map((ind) => (
                              <Link
                                key={ind.name}
                                href={ind.href}
                                className="p-2 rounded-[2px] hover:bg-neutral-100/70 dark:hover:bg-[#18181b] transition-all duration-150 flex items-center space-x-3 group"
                              >
                                <div className="w-8 h-8 rounded-[2px] bg-neutral-100/90 dark:bg-[#27272a] border border-neutral-200/50 dark:border-neutral-700 flex items-center justify-center shrink-0 text-black dark:text-white group-hover:bg-white dark:group-hover:bg-[#323238] group-hover:shadow-2xs group-hover:scale-105 transition-all">
                                  {ind.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors flex items-center justify-between">
                                    <span>{ind.name}</span>
                                    <ArrowRight className="w-3 h-3 text-neutral-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                  </div>
                                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors block truncate">
                                    {ind.badge}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Case Studies & Work */}
            <div
              className="relative"
              onMouseEnter={() => {
                handleMouseEnter("work");
                setHoveredNav("work");
              }}
            >
              <Link
                href="/case-studies"
                onClick={() => setActiveDropdown(null)}
                className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-[2px] text-xs font-semibold tracking-tight transition-colors duration-150 z-10 ${
                  activeDropdown === "work" ||
                  pathname.startsWith("/case-studies") ||
                  pathname === "/portfolio"
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {hoveredNav === "work" && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 rounded-[2px] bg-black/[0.06] dark:bg-white/[0.08] pointer-events-none -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span>Case Studies</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "work" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                  }`}
                />
              </Link>

              {/* Work Dropdown */}
              {activeDropdown === "work" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-white/[0.08] rounded-[2px] p-5 shadow-2xl dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_50px_rgba(0,0,0,0.8)] space-y-2">
                    {workItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="p-3.5 rounded-[2px] bg-[#f8f8f9] dark:bg-[#18181b] hover:bg-neutral-100/80 dark:hover:bg-[#202025] transition-all flex items-start space-x-3 group"
                      >
                        <div className="w-9 h-9 rounded-[2px] bg-white dark:bg-[#27272a] border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-all text-neutral-900 dark:text-neutral-100">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-black dark:text-white">{item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-white transition-all" />
                          </div>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. How We Work Direct Tab */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredNav("how-we-work")}
            >
              <Link
                href="/how-we-work"
                className={`relative px-3 py-1.5 rounded-[2px] text-xs font-semibold tracking-tight transition-colors duration-150 z-10 block ${
                  pathname === "/how-we-work" || pathname === "/working-methodology"
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {hoveredNav === "how-we-work" && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 rounded-[2px] bg-black/[0.06] dark:bg-white/[0.08] pointer-events-none -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span>How We Work</span>
              </Link>
            </div>

            {/* 5. Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                handleMouseEnter("company");
                setHoveredNav("company");
              }}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/company"
                onClick={() => setActiveDropdown(null)}
                className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-[2px] text-xs font-semibold tracking-tight transition-colors duration-150 z-10 ${
                  activeDropdown === "company" ||
                  pathname === "/company" ||
                  pathname === "/life-at-qtech" ||
                  pathname === "/crew" ||
                  pathname === "/testimonials" ||
                  pathname === "/faqs"
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {hoveredNav === "company" && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 rounded-[2px] bg-black/[0.06] dark:bg-white/[0.08] pointer-events-none -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span>Company</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "company" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                  }`}
                />
              </Link>

              {/* Company Mega Menu */}
              {activeDropdown === "company" && (
                <div className="absolute top-full right-0 w-[580px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-white/[0.08] rounded-[2px] p-6 shadow-2xl dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_50px_rgba(0,0,0,0.8)] grid grid-cols-12 gap-5">
                    {/* Left Feature Card */}
                    <div className="col-span-5 bg-[#f8f8f9] dark:bg-[#18181b] rounded-[2px] p-5 flex flex-col justify-between border border-neutral-100 dark:border-neutral-800">
                      <div>
                        <div className="w-9 h-9 rounded-[2px] bg-white dark:bg-[#27272a] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-3 shadow-2xs">
                          <Building2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                        </div>
                        <h4 className="text-sm font-bold text-black dark:text-white mb-1">
                          Qrious Tech Team LLP
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          Building and deploying production AI solutions and scalable software for businesses since 2017.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800 text-[11px] text-neutral-700 dark:text-neutral-300 font-semibold flex items-center space-x-1">
                        <span>Founded 2017 • Ahmedabad</span>
                      </div>
                    </div>

                    {/* Right Link List */}
                    <div className="col-span-7 space-y-1.5">
                      {companyItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="p-2.5 rounded-[2px] hover:bg-neutral-100/70 dark:hover:bg-[#18181b] transition-all flex items-start space-x-3 group"
                        >
                          <div className="w-8 h-8 rounded-[2px] bg-neutral-100/90 dark:bg-[#27272a] border border-neutral-200/50 dark:border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-black dark:text-white group-hover:bg-white dark:group-hover:bg-[#323238] group-hover:shadow-2xs group-hover:scale-105 transition-all">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                              {item.title}
                            </div>
                            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
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
          </nav>

          {/* Right Actions: Kiro-Style Command+K Search + Theme Toggle + Liquid Expanding Bubble CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Command+K Search Trigger (Kiro style) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center space-x-2 px-2.5 py-1.5 rounded-[2px] bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/10 text-xs text-neutral-500 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-white/20 transition-all font-mono cursor-pointer"
              title="Quick Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Search</span>
              <kbd className="text-[10px] bg-neutral-200/70 dark:bg-white/10 px-1 py-0.5 rounded-[2px] text-neutral-600 dark:text-neutral-300">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Kiro.dev Signature Radial Expansion CTA Button */}
            <Link
              href="/contact"
              className="group relative overflow-hidden px-4.5 py-2 rounded-[2px] text-xs font-mono font-bold tracking-wider uppercase bg-black text-white dark:bg-white dark:text-black hover:text-white transition-all duration-300 border border-black/10 dark:border-white/20 shadow-xs flex items-center space-x-1.5"
            >
              <span className="relative z-20 flex items-center space-x-1.5">
                <span>Schedule Discovery</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Kiro Liquid Bubble Animation */}
              <span className="absolute inset-0 z-10 translate-y-[50%] scale-0 rounded-full transition-transform duration-350 ease-out group-hover:scale-x-[180%] group-hover:scale-y-[250%] bg-purple-600 dark:bg-purple-600 pointer-events-none" />
            </Link>
          </div>

          {/* Mobile Actions: Search + ThemeToggle + Hamburger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-[2px] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[2px] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation Drawer: Floating Frosted Card */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-3 p-5 rounded-[2px] bg-white/95 dark:bg-[#121215]/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl max-h-[80vh] overflow-y-auto space-y-3">
            {/* AI Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileOpenSection(mobileOpenSection === "services" ? null : "services")}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-black dark:text-white"
              >
                <span>AI Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileOpenSection === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenSection === "services" && (
                <div className="pl-4 pr-2 space-y-1 mt-1 border-l-2 border-neutral-200 dark:border-neutral-800 ml-3">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-xs font-bold text-black dark:text-white border-b border-neutral-100 dark:border-neutral-800 mb-1 flex items-center justify-between"
                  >
                    <span>All AI Solutions Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black dark:text-white" />
                  </Link>
                  {techPractices.map((tech) => (
                    <Link
                      key={tech.title}
                      href={tech.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-xs font-semibold ${
                        (tech as any).isSpecial
                          ? "text-black dark:text-white font-bold flex items-center justify-between mt-1 pt-1.5 border-t border-neutral-100 dark:border-neutral-800"
                          : (tech as any).isFeatured
                          ? "text-blue-600 dark:text-blue-400 font-bold flex items-center justify-between"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{tech.title}</span>
                        {(tech as any).badge && (
                          <span className="text-[8.5px] font-extrabold px-1.5 py-0.5 rounded-[2px] bg-blue-600 text-white">
                            {(tech as any).badge}
                          </span>
                        )}
                      </div>
                      {((tech as any).isSpecial || (tech as any).isFeatured) && (
                        <ArrowRight className="w-3.5 h-3.5 text-current" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Grouped Accordion */}
            <div>
              <button
                onClick={() => setMobileOpenSection(mobileOpenSection === "industries" ? null : "industries")}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-black dark:text-white"
              >
                <span>Industries (8 Verticals)</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileOpenSection === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenSection === "industries" && (
                <div className="pl-4 pr-2 space-y-3 mt-2 border-l-2 border-neutral-200 dark:border-neutral-800 ml-3">
                  {industrySectors.map((sec, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        {sec.sectorName}
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {sec.items.map((ind) => (
                          <Link
                            key={ind.name}
                            href={ind.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                          >
                            {ind.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Case Studies (37 Decks) & Portfolio */}
            <div className="space-y-1">
              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-bold text-black dark:text-white"
              >
                Case Studies (37 Decks)
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              >
                Portfolio Platforms
              </Link>
            </div>

            {/* 4. How We Work Direct Tab */}
            <div>
              <Link
                href="/how-we-work"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-bold text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300"
              >
                How We Work
              </Link>
            </div>

            {/* Company Accordion */}
            <div>
              <button
                onClick={() => setMobileOpenSection(mobileOpenSection === "company" ? null : "company")}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-black dark:text-white"
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileOpenSection === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpenSection === "company" && (
                <div className="pl-4 pr-2 space-y-1 mt-1 border-l-2 border-neutral-200 dark:border-neutral-800 ml-3">
                  {companyItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Theme switcher row for mobile */}
            <div className="flex items-center justify-between px-3 py-2 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Switch Theme</span>
              <ThemeToggle showLabel />
            </div>

            {/* CTA in Mobile */}
            <div className="pt-2 px-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-[2px] bg-black text-white dark:bg-white dark:text-black text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        )}

      {/* Kiro-Style Interactive Command Palette Dialog */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-[2px] bg-white dark:bg-[#0f0f12] border border-neutral-200 dark:border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 dark:border-white/10">
              <Search className="w-4 h-4 text-neutral-400 dark:text-neutral-500 shrink-0 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI solutions, case studies, industries, services..."
                className="w-full bg-transparent text-sm text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-hidden font-medium"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[11px] font-mono px-1.5 py-0.5 rounded-[2px] bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              >
                ESC
              </button>
            </div>

            {/* Search Results / Quick Suggestions */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                {searchQuery ? "Matching Results" : "Quick Navigation"}
              </div>

              {[
                { title: "Autonomous AI Agents", category: "AI Solutions", href: "/services/ai-ml-development", icon: Brain },
                { title: "Zero-Leakage Private RAG", category: "AI Solutions", href: "/services/ai-ml-development", icon: ShieldCheck },
                { title: "Custom AI Software & Web Apps", category: "Services", href: "/services/web-development", icon: Globe },
                { title: "Microsoft Fabric & BI Lakehouse", category: "Services", href: "/services/data-visualization", icon: BarChart3 },
                { title: "Salesforce Multi-Cloud & Agentforce", category: "Services", href: "/services/salesforce-development", icon: CloudLightning },
                { title: "Healthcare & HIPAA Pods", category: "Industry", href: "/industries/healthcare", icon: Stethoscope },
                { title: "FinTech & Secure Banking", category: "Industry", href: "/industries/finance", icon: Landmark },
                { title: "HCM & Workforce Dispatch", category: "Industry", href: "/industries/hcm", icon: Briefcase },
                { title: "All 37 Enterprise Case Studies", category: "Work", href: "/case-studies", icon: FolderGit2 },
                { title: "Dedicated Pods & Methodology", category: "Process", href: "/how-we-work", icon: Workflow },
                { title: "Schedule Discovery Session", category: "Contact", href: "/contact", icon: Sparkles },
                {
                  title: "Replay Opening Animation",
                  category: "Experience",
                  action: () => {
                    setSearchOpen(false);
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("replay-qtech-intro"));
                    }
                  },
                  icon: Sparkles
                }
              ]
                .filter((item) =>
                  !searchQuery ||
                  item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.category.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item, idx) => {
                  const ItemIcon = item.icon;
                  const content = (
                    <div className="flex items-center justify-between px-3 py-2.5 rounded-[2px] hover:bg-neutral-100 dark:hover:bg-white/[0.06] transition-colors group cursor-pointer w-full">
                      <div className="flex items-center space-x-3">
                        <div className="w-7 h-7 rounded-[2px] bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <ItemIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400">
                          {item.category}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  );

                  if (item.action) {
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={item.action}
                        className="w-full text-left"
                      >
                        {content}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={idx}
                      href={item.href || "#"}
                      onClick={() => setSearchOpen(false)}
                      className="block w-full"
                    >
                      {content}
                    </Link>
                  );
                })}
            </div>

            {/* Footer with keyboard hints */}
            <div className="px-4 py-2.5 border-t border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02] flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">
              <div className="flex items-center space-x-3">
                <span>Navigate <kbd className="px-1 py-0.5 rounded-[2px] bg-neutral-200/60 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">↑↓</kbd></span>
                <span>Select <kbd className="px-1 py-0.5 rounded-[2px] bg-neutral-200/60 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">↵</kbd></span>
              </div>
              <span>Close <kbd className="px-1 py-0.5 rounded-[2px] bg-neutral-200/60 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">esc</kbd></span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
