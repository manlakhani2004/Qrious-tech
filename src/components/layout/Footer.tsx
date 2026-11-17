"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <footer className="bg-white border-t border-neutral-100 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Motive Footer Grid (Screenshot 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-100">
          {/* Left Column: Brand & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Link href="/" className="text-2xl font-bold tracking-tight text-black">
                Qrious Tech
              </Link>
              <p className="mt-4 text-neutral-500 text-sm leading-relaxed max-w-sm">
                Start your journey toward better engineering performance. With the right strategy and insights, your brand can achieve more.
              </p>
            </div>

            {/* Circular Grey Icon Buttons for Contacts (Screenshot 8) */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-sm font-semibold text-neutral-800 hover:text-black transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.salesEmail}`}
                  className="text-sm font-semibold text-neutral-800 hover:text-black transition-colors"
                >
                  {COMPANY_INFO.salesEmail}
                </a>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm text-neutral-600">
                  Ahmedabad, Gujarat, India • Global Client Operations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Newsletter & 3 Link Columns (Screenshot 8) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Stay Connected Newsletter */}
            <div>
              <h3 className="text-sm font-bold text-black mb-1.5">
                Stay connected
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm mb-4">
                Join our newsletter and stay ahead with the latest insights and trends in digital design & software engineering.
              </p>

              {/* Motive Newsletter Input Pill (Screenshot 8) */}
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <div className="flex items-center border border-neutral-200 rounded-full p-1 pl-4 bg-white focus-within:border-black transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full text-xs sm:text-sm text-black placeholder-neutral-400 bg-transparent outline-none pr-3"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all duration-200 shrink-0 shadow-sm active:scale-95"
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
                <h4 className="text-xs font-bold text-black mb-4">Quick Links</h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-500">
                  <li>
                    <Link href="/" className="hover:text-black transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/company" className="hover:text-black transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="hover:text-black transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-black transition-colors">
                      Project Details
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Resource */}
              <div>
                <h4 className="text-xs font-bold text-black mb-4">Resource</h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-500">
                  <li>
                    <Link href="/services" className="hover:text-black transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#articles" className="hover:text-black transition-colors">
                      Blog & Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#methodology" className="hover:text-black transition-colors">
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-black transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Utility Pages */}
              <div>
                <h4 className="text-xs font-bold text-black mb-4">Utility Pages</h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-500">
                  <li>
                    <Link href="/company#faqs" className="hover:text-black transition-colors">
                      Security & FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-black transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-black transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-black transition-colors">
                      Book Discovery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Motive Bottom Bar (Screenshot 8) */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 space-y-3 sm:space-y-0">
          <div>
            Copyright @Qrious Tech Team LLP. All Rights Reserved
          </div>
          <div className="flex items-center space-x-2 text-neutral-400">
            <span>Design inspired by Motive</span>
            <span>•</span>
            <span>Powered by Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
