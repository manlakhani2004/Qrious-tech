"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Phone,
  Mail,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST } from "@/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/case-studies" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/company" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Top Bar for Trust & Contacts */}
      <div className="bg-[#f0f0f0] text-xs text-[#555555] border-b border-[#e5e5e5] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center font-medium">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Dedicated Pods & Fixed-Scope Delivery</span>
            </span>
            <span className="text-[#cccccc]">|</span>
            <span className="text-[#666666]">Ahmedabad, India • Global Client Operations (USA)</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-[#111111] transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="flex items-center space-x-1.5 hover:text-[#111111] transition-colors"
            >
              <Mail className="w-3 h-3 text-orange-500" />
              <span>{COMPANY_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Motive Style Floating / Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5e5e5] shadow-sm py-3"
            : "bg-[#f8f8f8]/90 backdrop-blur-sm border-b border-[#ececec] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Motive Agency Style Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#0c0407] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-orange-500 transition-colors duration-300">
                Q
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#0c0407]">
                  Qrious <span className="text-orange-500">Tech</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#777777] uppercase font-semibold">
                  Team LLP • Est. 2004
                </span>
              </div>
            </Link>

            {/* Motive Center Pill Navigation */}
            <nav className="hidden lg:flex items-center bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-sm space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                          isActive || pathname.startsWith("/services")
                            ? "bg-[#0c0407] text-white"
                            : "text-[#555555] hover:text-[#0c0407] hover:bg-[#f3f4f6]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70" />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-3">
                          <div className="bg-white border border-[#ececec] rounded-2xl p-4 shadow-xl grid grid-cols-2 gap-2">
                            {SERVICES_LIST.map((srv) => (
                              <Link
                                key={srv.id}
                                href={`/services#${srv.id}`}
                                className="p-3 rounded-xl hover:bg-[#f8f8f8] border border-transparent hover:border-[#ececec] transition-all group flex flex-col justify-between"
                              >
                                <div>
                                  <div className="text-xs font-bold text-[#0c0407] group-hover:text-orange-500 transition-colors">
                                    {srv.title}
                                  </div>
                                  <div className="text-[11px] text-[#777777] line-clamp-1 mt-1">
                                    {srv.tagline}
                                  </div>
                                </div>
                                <div className="text-[10px] text-orange-500 font-semibold mt-2 flex items-center">
                                  <span>Explore spec</span>
                                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </Link>
                            ))}
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
                    className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                      isActive
                        ? "bg-[#0c0407] text-white shadow-sm"
                        : "text-[#555555] hover:text-[#0c0407] hover:bg-[#f3f4f6]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Motive Right Action Button with circular arrow */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/contact"
                className="group inline-flex items-center pl-5 pr-1.5 py-1.5 text-xs font-bold text-white bg-[#0c0407] hover:bg-orange-500 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span>Book A Call</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#0c0407] flex items-center justify-center ml-3 group-hover:rotate-45 group-hover:text-orange-500 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-full bg-white border border-[#ececec] text-[#0c0407] hover:bg-[#f3f4f6] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-[#ececec] px-4 pt-3 pb-6 mt-3 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#333333] hover:text-[#0c0407] hover:bg-[#f3f4f6] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#ececec]">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center py-3 text-xs font-bold text-white bg-[#0c0407] rounded-full shadow-sm"
              >
                <span>Book A Call</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
