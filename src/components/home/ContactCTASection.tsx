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
    budget: "$10k-$25k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#ffffff] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Style Enclosed Hero Card */}
        <div className="bg-[#f8f8f8] border border-[#ececec] rounded-3xl p-8 lg:p-14 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Let&apos;s Connect</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight leading-[1.15]">
                Ready to accelerate your <br />
                <span className="text-orange-500">software roadmap?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Whether you need a dedicated senior engineering pod, an enterprise AI modernization roadmap, or an MVP built from scratch, our architects are ready to review your requirements.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#e5e5e5]">
                <div className="flex items-start space-x-3 text-xs text-[#555555]">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                  <span className="leading-relaxed">{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center space-x-3 text-xs text-[#555555]">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="hover:text-[#0c0407] font-semibold transition-colors"
                  >
                    Direct: {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-[#555555]">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.salesEmail}`}
                    className="hover:text-[#0c0407] font-semibold transition-colors"
                  >
                    Sales: {COMPANY_INFO.salesEmail}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-[#555555]">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.hrEmail}`}
                    className="hover:text-[#0c0407] font-semibold transition-colors"
                  >
                    Careers & HR: {COMPANY_INFO.hrEmail}
                  </a>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white border border-[#ececec] rounded-2xl p-4 space-y-2 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mutual NDA Executed Prior to Any Code Review</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#555555]">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Guaranteed Response Within 24 Business Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Form */}
            <div className="lg:col-span-7 bg-white border border-[#ececec] rounded-2xl p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c0407]">Inquiry Received!</h3>
                  <p className="text-sm text-[#555555] max-w-md mx-auto">
                    Thank you for contacting Qrious Tech Team LLP. One of our senior architects will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-[#0c0407] bg-[#f8f8f8] hover:bg-[#ececec] rounded-full transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#0c0407] mb-2">
                    Schedule a Technical Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl text-sm text-[#0c0407] placeholder-[#999999] focus:outline-none focus:border-[#0c0407]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl text-sm text-[#0c0407] placeholder-[#999999] focus:outline-none focus:border-[#0c0407]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl text-sm text-[#0c0407] placeholder-[#999999] focus:outline-none focus:border-[#0c0407]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl text-sm text-[#0c0407] placeholder-[#999999] focus:outline-none focus:border-[#0c0407]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1">
                        Primary Engineering Focus
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl text-sm text-[#0c0407] focus:outline-none focus:border-[#0c0407]"
                      >
                        <option value="ai-ml">AI, GenAI & LangGraph Multi-Agent</option>
                        <option value="web-dev">Cloud-Native Web (Next.js / Node.js)</option>
                        <option value="mobile-dev">Mobile App (Flutter / React Native)</option>
                        <option value="salesforce">Salesforce Multi-Cloud / CPQ</option>
                        <option value="data-power-bi">Power BI & Microsoft Fabric</option>
                        <option value="dedicated-pod">Dedicated Engineering Pod / Staffing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] mb-1">
                        Expected Scope / Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl text-sm text-[#0c0407] focus:outline-none focus:border-[#0c0407]"
                      >
                        <option value="under-$10k">Discovery / MVP ($5k - $10k)</option>
                        <option value="$10k-$25k">Standard Delivery ($10k - $25k)</option>
                        <option value="$25k-$50k">Enterprise Deployment ($25k - $50k)</option>
                        <option value="dedicated-monthly">Dedicated Pod ($5k - $15k / mo)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#333333] mb-1">
                      Project Goals & Constraints
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current tech stack, desired timelines, or developer profiles needed..."
                      className="w-full px-4 py-2.5 bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl text-sm text-[#0c0407] placeholder-[#999999] focus:outline-none focus:border-[#0c0407]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-3.5 px-6 rounded-full text-xs font-bold text-white bg-[#0c0407] hover:bg-orange-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
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
