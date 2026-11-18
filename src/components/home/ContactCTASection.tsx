"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "ai-ml",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#ffffff] dark:bg-[#09090b] relative border-t border-[#ececec] dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Style Enclosed Hero Card */}
        <div className="bg-[#f8f8f8] dark:bg-[#121215] border border-[#ececec] dark:border-neutral-800 rounded-3xl p-8 lg:p-14 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1f1f23] border border-[#e5e5e5] dark:border-neutral-800 text-xs font-bold text-[#0c0407] dark:text-white shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Let&apos;s Connect</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] dark:text-white tracking-tight leading-[1.15]">
                Ready to accelerate your <br />
                <span className="text-orange-500">software roadmap?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#555555] dark:text-neutral-400 leading-relaxed">
                Whether you need a dedicated senior engineering pod, an enterprise AI modernization roadmap, or an MVP built from scratch, our architects are ready to review your requirements.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#e5e5e5] dark:border-neutral-800">
                <div className="flex items-start space-x-3 text-xs text-[#555555] dark:text-neutral-400">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                  <span className="leading-relaxed">{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center space-x-3 text-xs text-[#555555] dark:text-neutral-400">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="hover:text-[#0c0407] dark:hover:text-white font-semibold transition-colors"
                  >
                    Direct: {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-[#555555] dark:text-neutral-400">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.salesEmail}`}
                    className="hover:text-[#0c0407] dark:hover:text-white font-semibold transition-colors"
                  >
                    Sales: {COMPANY_INFO.salesEmail}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-[#555555] dark:text-neutral-400">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.hrEmail}`}
                    className="hover:text-[#0c0407] dark:hover:text-white font-semibold transition-colors"
                  >
                    Careers & HR: {COMPANY_INFO.hrEmail}
                  </a>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white dark:bg-[#18181b] border border-[#ececec] dark:border-neutral-800 rounded-2xl p-4 space-y-2 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mutual NDA Executed Prior to Any Code Review</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#555555] dark:text-neutral-400">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Guaranteed Response Within 24 Business Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7 bg-white dark:bg-[#18181b] border border-[#ececec] dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c0407] dark:text-white">Inquiry Received!</h3>
                  <p className="text-sm text-[#555555] dark:text-neutral-400 max-w-md mx-auto">
                    Thank you for contacting Qrious Tech Team LLP. One of our senior architects will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-[#0c0407] dark:text-white bg-[#f8f8f8] dark:bg-[#27272a] hover:bg-[#ececec] dark:hover:bg-[#323238] rounded-full transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#0c0407] dark:text-white mb-2">
                    Schedule a Technical Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] dark:text-neutral-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] dark:bg-[#121215] border border-[#e5e5e5] dark:border-neutral-700 rounded-xl text-sm text-[#0c0407] dark:text-white placeholder-[#999999] dark:placeholder-neutral-500 focus:outline-none focus:border-[#0c0407] dark:focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] dark:text-neutral-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] dark:bg-[#121215] border border-[#e5e5e5] dark:border-neutral-700 rounded-xl text-sm text-[#0c0407] dark:text-white placeholder-[#999999] dark:placeholder-neutral-500 focus:outline-none focus:border-[#0c0407] dark:focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] dark:text-neutral-300 mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] dark:bg-[#121215] border border-[#e5e5e5] dark:border-neutral-700 rounded-xl text-sm text-[#0c0407] dark:text-white placeholder-[#999999] dark:placeholder-neutral-500 focus:outline-none focus:border-[#0c0407] dark:focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] dark:text-neutral-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] dark:bg-[#121215] border border-[#e5e5e5] dark:border-neutral-700 rounded-xl text-sm text-[#0c0407] dark:text-white placeholder-[#999999] dark:placeholder-neutral-500 focus:outline-none focus:border-[#0c0407] dark:focus:border-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333333] dark:text-neutral-300 mb-1">
                      Primary Engineering Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f8f8f8] dark:bg-[#121215] border border-[#e5e5e5] dark:border-neutral-700 rounded-xl text-sm text-[#0c0407] dark:text-white focus:outline-none focus:border-[#0c0407] dark:focus:border-white"
                    >
                      <option value="ai-ml">AI Agents & Workflow Automation</option>
                      <option value="web-dev">Custom AI Software & Web Apps</option>
                      <option value="mobile-dev">Mobile App (Flutter / React Native)</option>
                      <option value="salesforce">Salesforce Multi-Cloud / CPQ</option>
                      <option value="data-power-bi">Power BI & Microsoft Fabric</option>
                      <option value="dedicated-pod">Dedicated AI Engineering Pod</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333333] dark:text-neutral-300 mb-1">
                      Project Goals & Constraints
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your business goals, operational workflows, or AI requirements..."
                      className="w-full px-4 py-2.5 bg-[#f8f8f8] dark:bg-[#121215] border border-[#e5e5e5] dark:border-neutral-700 rounded-xl text-sm text-[#0c0407] dark:text-white placeholder-[#999999] dark:placeholder-neutral-500 focus:outline-none focus:border-[#0c0407] dark:focus:border-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-3.5 px-6 rounded-full text-xs font-bold text-white dark:text-black bg-[#0c0407] dark:bg-white hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Request Discovery Call & NDA</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:rotate-45 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
