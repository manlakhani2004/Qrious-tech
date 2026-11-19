"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-transparent border-t border-neutral-200/80 dark:border-white/[0.08] pt-16 sm:pt-20 pb-12 transition-colors duration-200">
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Main Motive Footer Grid (Screenshot 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-200/80 dark:border-white/[0.08]">
          {/* Left Column: Brand & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Link href="/" className="inline-block group py-0.5" aria-label="Qrious Tech Home">
                <Image
                  src="/images/qt-logo/mark.png"
                  alt="Qrious Tech"
                  width={48}
                  height={48}
                  className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </Link>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm">
                Building and deploying production AI systems, autonomous agents, and scalable software for businesses worldwide.
              </p>
            </div>

            {/* Circular Grey Icon Buttons for Contacts (Screenshot 8) */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-center text-[#09090b] dark:text-[#f8f9fa] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-sm font-semibold text-[#09090b] dark:text-[#f8f9fa] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-center text-[#09090b] dark:text-[#f8f9fa] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.salesEmail}`}
                  className="text-sm font-semibold text-[#09090b] dark:text-[#f8f9fa] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {COMPANY_INFO.salesEmail}
                </a>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-center text-[#09090b] dark:text-[#f8f9fa] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Newsletter & 3 Link Columns (Screenshot 8) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Stay Connected Newsletter */}
            <div>
              <h3 className="text-sm font-bold text-[#09090b] dark:text-[#f8f9fa] mb-1.5">
                Stay connected
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-4">
                Join our newsletter and stay ahead with the latest insights and trends in digital design & software engineering.
              </p>

              {/* Motive Newsletter Input Pill (Screenshot 8) */}
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <div className="flex items-center border border-neutral-200/80 dark:border-white/[0.08] rounded-[2px] p-1 pl-4 bg-[#f8f9fa] dark:bg-[#0c0c10] focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full text-xs sm:text-sm text-[#09090b] dark:text-[#f8f9fa] placeholder-neutral-400 dark:placeholder-neutral-500 bg-transparent outline-none pr-3"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-[2px] bg-[#09090b] text-white dark:bg-[#f8f9fa] dark:text-[#09090b] text-xs font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-200 shrink-0 shadow-sm active:scale-95"
                  >
                    {subscribed ? (
                      <>
                        <span>Joined</span>
                        <Check className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Join</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* 3 Columns of Navigation Links (Screenshot 8) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
              {/* Column 1: Quick Links */}
              <div>
                <h4 className="text-xs font-bold text-[#09090b] dark:text-[#f8f9fa] mb-4">Quick Links</h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  <li>
                    <Link href="/" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/company" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Project Details
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Resource */}
              <div>
                <h4 className="text-xs font-bold text-[#09090b] dark:text-[#f8f9fa] mb-4">Resource</h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  <li>
                    <Link href="/services" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#articles" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Blog & Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#methodology" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Utility Pages */}
              <div>
                <h4 className="text-xs font-bold text-[#09090b] dark:text-[#f8f9fa] mb-4">Utility Pages</h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  <li>
                    <Link href="/company#faqs" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Security & FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#09090b] dark:hover:text-[#f8f9fa] transition-colors">
                      Book Discovery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Motive Bottom Bar (Screenshot 8) */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 dark:text-neutral-400 space-y-3 sm:space-y-0">
          <div>
            Copyright @Qrious Tech Team LLP. All Rights Reserved
          </div>
          <div className="flex items-center space-x-2 text-neutral-400 dark:text-neutral-500">
            <span>Design inspired by Motive</span>
            <span>•</span>
            <span>Powered by Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
