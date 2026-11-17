"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  BrainCircuit,
  Globe,
  Smartphone,
  CloudLightning,
  BarChart3,
  Users
} from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST } from "@/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: "services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Company", href: "/company", hasDropdown: "company" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Top micro bar for high-trust enterprise credentials */}
      <div className="bg-[#050811] text-xs text-slate-400 border-b border-slate-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-orange-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for New Projects & Dedicated Engineering Pods</span>
            </span>
            <span className="text-slate-500">|</span>
            <span>Ahmedabad, India • Global Operations (USA)</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span>{COMPANY_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070b14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50"
            : "bg-[#070b14]/70 backdrop-blur-md border-b border-slate-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
                Q
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  QRIOUS <span className="text-orange-500">TECH</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                  Team LLP • 20+ Yrs IT Legacy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown === "services") {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive || pathname.startsWith("/services")
                            ? "text-orange-400 bg-orange-500/10"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-4 h-4 ml-0.5" />
                      </button>

                      {/* Mega Dropdown */}
                      {servicesOpen && (
                        <div className="absolute top-full left-0 w-[540px] -mt-1 pt-2">
                          <div className="bg-[#0b101f] border border-slate-800 rounded-2xl p-4 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                            <div className="grid grid-cols-2 gap-2">
                              {SERVICES_LIST.map((srv) => (
                                <Link
                                  key={srv.id}
                                  href={`/services#${srv.id}`}
                                  className="p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/60 transition-all group flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors flex items-center">
                                      {srv.title}
                                    </div>
                                    <div className="text-xs text-slate-400 line-clamp-1 mt-1">
                                      {srv.tagline}
                                    </div>
                                  </div>
                                  <div className="text-[11px] text-orange-400/80 font-medium mt-2 flex items-center">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-800/80 flex justify-between items-center px-2">
                              <span className="text-xs text-slate-400">
                                Need custom multi-cloud architectures?
                              </span>
                              <Link
                                href="/contact"
                                className="text-xs font-semibold text-orange-400 hover:underline flex items-center"
                              >
                                Request Custom Discovery
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.hasDropdown === "company") {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setCompanyOpen(true)}
                      onMouseLeave={() => setCompanyOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive || pathname.startsWith("/company")
                            ? "text-orange-400 bg-orange-500/10"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-4 h-4 ml-0.5" />
                      </button>

                      {companyOpen && (
                        <div className="absolute top-full left-0 w-64 -mt-1 pt-2">
                          <div className="bg-[#0b101f] border border-slate-800 rounded-2xl p-2 shadow-2xl shadow-black/80">
                            <Link
                              href="/company"
                              className="block px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                            >
                              <div className="font-semibold text-white">About Qrious Tech</div>
                              <div className="text-xs text-slate-400">Our 20+ year journey & CEO message</div>
                            </Link>
                            <Link
                              href="/company#methodology"
                              className="block px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                            >
                              <div className="font-semibold text-white">Working Methodology</div>
                              <div className="text-xs text-slate-400">5-step guaranteed agile delivery</div>
                            </Link>
                            <Link
                              href="/company#products"
                              className="block px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                            >
                              <div className="font-semibold text-white">Proprietary Products</div>
                              <div className="text-xs text-slate-400">QT Kids educational suite</div>
                            </Link>
                            <Link
                              href="/company#faqs"
                              className="block px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                            >
                              <div className="font-semibold text-white">Client FAQs</div>
                              <div className="text-xs text-slate-400">Security, NDAs, & scaling pods</div>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-orange-400 bg-orange-500/10 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Schedule Discovery</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#070b14] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25"
              >
                <span>Schedule Discovery Call</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </Link>
              <div className="mt-4 flex flex-col space-y-2 text-xs text-slate-400 px-1">
                <div>📞 {COMPANY_INFO.phone}</div>
                <div>✉️ {COMPANY_INFO.salesEmail}</div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
