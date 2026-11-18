"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";
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
  CheckCircle2
} from "lucide-react";

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
    }, 160);
  };

  // Group 1: Services & Tech Practices
  const techPractices = [
    {
      title: "Power BI Analytics",
      tagline: "Data Modeling, DAX & Executive Analytics",
      desc: "Custom dashboard development, ETL pipelines, and embedded Power BI reports.",
      href: "/services/data-visualization",
      icon: <BarChart3 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Data Modeling", "Embedded BI", "Migration"]
    },
    {
      title: "Web Development",
      tagline: "React, Next.js, Node.js & Cloud Native",
      desc: "High-performance web apps, scalable APIs, and serverless backends.",
      href: "/services/web-development",
      icon: <Globe className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["React 19 & Next.js", "Node.js", "Full-Stack"]
    },
    {
      title: "Mobile Apps",
      tagline: "iOS, Android & Flutter Cross-Platform",
      desc: "Intuitive touch apps with sub-second response times and offline resilience.",
      href: "/services/mobile-development",
      icon: <Smartphone className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Swift (iOS)", "Kotlin (Android)", "Flutter"]
    },
    {
      title: "Salesforce Multi-Cloud",
      tagline: "Sales Cloud, Service Cloud & Conga CPQ",
      desc: "Enterprise CRM workflows, Experience Cloud portals, and Lightning components.",
      href: "/services/salesforce-development",
      icon: <CloudLightning className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Sales & Service Cloud", "Conga CPQ", "LWC"]
    },
    {
      title: "AI / ML Development",
      tagline: "LLMs, LangGraph Agents & Predictive Intelligence",
      desc: "Enterprise AI modernization, custom fine-tuning, and multi-agent workflows.",
      href: "/services/ai-ml-development",
      icon: <Brain className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />,
      subItems: ["Generative AI", "LangChain Agents", "Predictive ML"]
    },
    {
      title: "All Services",
      tagline: "Explore All 10+ Engineering Practices",
      desc: "Full architectural capabilities across cloud, AI, mobile, data, and dedicated pods.",
      href: "/services",
      icon: <Sparkles className="w-4 h-4 text-white" />,
      subItems: ["10 Practices", "Full Stacks", "Explore All →"],
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
      desc: "Turn product roadmaps into production SaaS platforms with high velocity.",
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
      title: "Live Product Portfolio",
      desc: "Exploration of client mobile apps, SaaS tools, and data analytics engines.",
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/90 dark:bg-[#09090b]/80 backdrop-blur-xl ${
        scrolled
          ? "border-b border-neutral-200/80 dark:border-white/[0.08] shadow-xs dark:shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-2.5 sm:py-3"
          : "border-b border-neutral-100/80 dark:border-white/[0.06] py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex items-center justify-between">
          {/* Authentic Qrious Tech Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0 transition-opacity hover:opacity-90 py-0.5">
            <Image
              src="/images/qrious-tech-team-logo.png"
              alt="Qrious Tech Team LLP"
              width={240}
              height={36}
              priority
              className="h-7 sm:h-7.5 md:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] dark:hidden"
            />
            <Image
              src="/images/qrious-tech-team-logo-dark.png"
              alt="Qrious Tech Team LLP"
              width={240}
              height={36}
              priority
              className="h-7 sm:h-7.5 md:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] hidden dark:block"
            />
          </Link>

          {/* Desktop Motive Navigation with Grouped Mega-Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
            {/* 1. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                onClick={() => setActiveDropdown(null)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-150 ${
                  activeDropdown === "services" || pathname.startsWith("/services")
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                  }`}
                />
              </Link>

              {/* Services Mega Menu */}
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-[720px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-white/[0.08] rounded-3xl p-6 shadow-2xl dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_50px_rgba(0,0,0,0.8)]">
                    <div className="mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                      <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                        Engineering Practices & Tech Stacks
                      </h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Pre-vetted senior engineering pods across our flagship technical disciplines.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {techPractices.map((tech) => (
                        (tech as any).isSpecial ? (
                          <Link
                            key={tech.title}
                            href={tech.href}
                            onClick={() => setActiveDropdown(null)}
                            className="p-3.5 rounded-2xl bg-black dark:bg-[#1c1917] hover:bg-neutral-900 dark:hover:bg-neutral-900 transition-all flex items-start space-x-3 group shadow-md text-white border border-neutral-800 dark:border-neutral-700"
                          >
                            <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-white/25 transition-all text-white">
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
                                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
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
                            className="p-3.5 rounded-2xl bg-[#f8f8f9] dark:bg-[#18181b] hover:bg-neutral-100/80 dark:hover:bg-[#202025] transition-all flex items-start space-x-3 group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#27272a] border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-all text-black dark:text-white">
                              {tech.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                                  {tech.title}
                                </span>
                                <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                              </div>
                              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5 font-medium">
                                {tech.tagline}
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {tech.subItems.map((sub, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white dark:bg-[#27272a] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700"
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
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1.5 px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-150 ${
                  activeDropdown === "industries" || pathname.startsWith("/industries")
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "industries" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                  }`}
                />
              </button>

              {/* Grouped Industries Mega Menu */}
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[920px] xl:w-[940px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 shadow-2xl grid grid-cols-12 gap-6">
                    {/* Left: Featured Industry Pods Card */}
                    <div className="col-span-4 bg-[#f8f8f9] dark:bg-[#18181b] rounded-2xl p-5 border border-neutral-200/70 dark:border-neutral-800 flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#27272a] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-3 shadow-2xs">
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
                                className="p-2 rounded-xl hover:bg-neutral-100/70 dark:hover:bg-[#18181b] transition-all duration-150 flex items-center space-x-3 group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-neutral-100/90 dark:bg-[#27272a] border border-neutral-200/50 dark:border-neutral-700 flex items-center justify-center shrink-0 text-black dark:text-white group-hover:bg-white dark:group-hover:bg-[#323238] group-hover:shadow-2xs group-hover:scale-105 transition-all">
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

            {/* 3. Case Studies & Work (Industry Standard: Proof of Capabilities & Verticals) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("work")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/case-studies"
                onClick={() => setActiveDropdown(null)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-150 ${
                  activeDropdown === "work" ||
                  pathname.startsWith("/case-studies") ||
                  pathname === "/portfolio"
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>Case Studies</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "work" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                  }`}
                />
              </Link>

              {/* Work Dropdown */}
              {activeDropdown === "work" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-white/[0.08] rounded-3xl p-5 shadow-2xl dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_50px_rgba(0,0,0,0.8)] space-y-2">
                    {workItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="p-3.5 rounded-2xl bg-[#f8f8f9] dark:bg-[#18181b] hover:bg-neutral-100/80 dark:hover:bg-[#202025] transition-all flex items-start space-x-3 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#27272a] border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-all text-neutral-900 dark:text-neutral-100">
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
            <Link
              href="/how-we-work"
              className={`px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-150 ${
                pathname === "/how-we-work" || pathname === "/working-methodology"
                  ? "text-black dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              How We Work
            </Link>

            {/* 5. Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/company"
                onClick={() => setActiveDropdown(null)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 text-[15px] font-semibold tracking-tight transition-colors duration-150 ${
                  activeDropdown === "company" ||
                  pathname === "/company" ||
                  pathname === "/life-at-qtech" ||
                  pathname === "/crew" ||
                  pathname === "/testimonials" ||
                  pathname === "/faqs"
                    ? "text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "company" ? "rotate-180 text-black dark:text-white opacity-100" : "opacity-50"
                  }`}
                />
              </Link>

              {/* Company Mega Menu */}
              {activeDropdown === "company" && (
                <div className="absolute top-full right-0 w-[580px] pt-3 z-50">
                  <div className="bg-white dark:bg-[#121215] border border-neutral-200/90 dark:border-white/[0.08] rounded-3xl p-6 shadow-2xl dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_50px_rgba(0,0,0,0.8)] grid grid-cols-12 gap-5">
                    {/* Left Feature Card */}
                    <div className="col-span-5 bg-[#f8f8f9] dark:bg-[#18181b] rounded-2xl p-5 flex flex-col justify-between border border-neutral-100 dark:border-neutral-800">
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#27272a] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-3 shadow-2xs">
                          <Building2 className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                        </div>
                        <h4 className="text-sm font-bold text-black dark:text-white mb-1">
                          Qrious Tech Team LLP
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          Empowering global enterprises with dependable offshore software engineering since 2017.
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
                          className="p-2.5 rounded-xl hover:bg-neutral-100/70 dark:hover:bg-[#18181b] transition-all flex items-start space-x-3 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-neutral-100/90 dark:bg-[#27272a] border border-neutral-200/50 dark:border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-black dark:text-white group-hover:bg-white dark:group-hover:bg-[#323238] group-hover:shadow-2xs group-hover:scale-105 transition-all">
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

          {/* Right Motive Pill Actions: Theme Toggle + Let's Connect */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 px-6.5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Button + ThemeToggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-neutral-100 dark:border-neutral-800 space-y-3 max-h-[80vh] overflow-y-auto">
            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setMobileOpenSection(mobileOpenSection === "services" ? null : "services")}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-black dark:text-white"
              >
                <span>Services</span>
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
                    <span>All Services Overview</span>
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
                          : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      <span>{tech.title}</span>
                      {(tech as any).isSpecial && <ArrowRight className="w-3.5 h-3.5 text-black dark:text-white" />}
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
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
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
