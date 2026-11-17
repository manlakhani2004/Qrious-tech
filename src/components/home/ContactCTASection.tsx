"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock
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
    <section id="contact" className="py-20 lg:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#0d1424] to-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Office Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                Let&apos;s Build Together
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Start Your Next <br />
                <span className="gradient-text-orange">IT Engineering Sprint</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need a dedicated senior engineering pod, an enterprise AI modernization roadmap, or an MVP built from scratch, our architects are ready to review your requirements.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-start space-x-3 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                  <span className="leading-relaxed">{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="hover:text-white transition-colors"
                  >
                    Direct: {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.salesEmail}`}
                    className="hover:text-white transition-colors"
                  >
                    Sales: {COMPANY_INFO.salesEmail}
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.hrEmail}`}
                    className="hover:text-white transition-colors"
                  >
                    Careers & HR: {COMPANY_INFO.hrEmail}
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mutual NDA Executed Prior to Code Review</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>Guaranteed Response Within 24 Business Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Qrious Tech Team LLP. One of our technical directors will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Schedule a Technical Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Primary Engineering Focus
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
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
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Expected Scope / Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="under-$10k">Pilot / Discovery ($5k - $10k)</option>
                        <option value="$10k-$25k">Standard MVP ($10k - $25k)</option>
                        <option value="$25k-$50k">Enterprise System ($25k - $50k)</option>
                        <option value="dedicated-monthly">Dedicated Pod ($5k - $15k / month)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Project Goals & Constraints
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current tech stack, key bottlenecks, desired timelines, or developer profiles needed..."
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request Discovery Call & NDA</span>
                    <Send className="w-4 h-4 ml-1" />
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
