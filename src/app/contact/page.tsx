"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Building
} from "lucide-react";
import {
  LinkedInIcon,
  XTwitterIcon,
  InstagramIcon,
  FacebookIcon
} from "@/components/icons/SocialIcons";
import { COMPANY_INFO } from "@/data/company";

export default function ContactPage() {
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

  useEffect(() => {
    // Check if subject param passed in URL
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const subj = params.get("subject");
      if (subj) {
        setFormData((prev) => ({
          ...prev,
          message: `Inquiry regarding: ${subj}\n\n`
        }));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Contact Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              Get in Touch with Our Leadership
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Start Your Next <br />
              <span className="gradient-text-orange">Technology Journey</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Schedule a discovery session with our software architects. We provide tailored technical roadmaps, dedicated engineering pods, and rapid talent allocation.
            </p>
          </div>
        </section>

        {/* Contact Details & Form Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Office & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Building className="w-5 h-5 text-orange-400 mr-2" />
                  Qrious Tech Team LLP
                </h2>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white block text-sm mb-1">
                        Corporate Headquarters
                      </strong>
                      <p className="leading-relaxed text-slate-400">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Telephone:</strong>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-orange-400 hover:underline"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-1">
                    <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Business & Sales:</strong>
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="text-orange-400 hover:underline"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-1">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Careers & HR:</strong>
                      <a
                        href={`mailto:${COMPANY_INFO.hrEmail}`}
                        className="text-amber-400 hover:underline"
                      >
                        {COMPANY_INFO.hrEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block mb-3 font-semibold uppercase tracking-wider">
                    Follow Our Updates
                  </span>
                  <div className="flex items-center space-x-3">
                    <a
                      href={COMPANY_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <XTwitterIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Strict NDA Before Any Code or Architecture Review</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>Senior Developer Matching within 48 Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Submission Form */}
            <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you. An engineering lead will review your submission and contact you within 24 hours with prospective developer profiles and NDA details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-white mb-2">
                    Request an Engineering Proposal
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
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
                        placeholder="john@enterprise.com"
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
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
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Technology Practice Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="ai-ml">AI & LangGraph Multi-Agent Systems</option>
                        <option value="web-dev">Cloud-Native Web (Next.js / Node.js)</option>
                        <option value="mobile-dev">Mobile App (Flutter / React Native)</option>
                        <option value="salesforce">Salesforce Multi-Cloud Consulting</option>
                        <option value="data-power-bi">Power BI & Microsoft Fabric</option>
                        <option value="dedicated-pod">Dedicated Engineering Pod</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Expected Scope / Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="under-$10k">Discovery / MVP ($5k - $10k)</option>
                        <option value="$10k-$25k">Standard Delivery ($10k - $25k)</option>
                        <option value="$25k-$50k">Enterprise Deployment ($25k - $50k)</option>
                        <option value="dedicated-monthly">Dedicated Pod ($5k - $15k / mo)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Project Requirements & Timeline
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project scope, target timeline, technical requirements, or team scale needs..."
                      className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Submit & Request Specialist Discovery</span>
                    <Send className="w-4 h-4 ml-1.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
