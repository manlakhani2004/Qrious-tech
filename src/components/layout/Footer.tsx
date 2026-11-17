import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST, INDUSTRIES_LIST } from "@/data/company";
import {
  LinkedInIcon,
  XTwitterIcon,
  InstagramIcon,
  FacebookIcon
} from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#04070e] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-orange-500/25">
                Q
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  QRIOUS <span className="text-orange-500">TECH</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                  Team LLP • Est. 2004
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              A premier technology partner empowering enterprises and high-growth innovators with AI/ML, cloud-native web & mobile development, and enterprise Salesforce ecosystems. Delivering excellence with 60+ skilled engineers for over two decades.
            </p>

            <div className="flex items-center space-x-3 text-xs text-slate-400 pt-2">
              <div className="flex items-center text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 mr-1" />
                <span>NDA & 100% IP Ownership Guaranteed</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                aria-label="Twitter / X"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Engineering Practices */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Tech Practices
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-orange-400 hover:text-orange-300 transition-colors font-medium flex items-center text-xs pt-1"
                >
                  <span>View All Services</span>
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5 text-sm">
              {INDUSTRIES_LIST.map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={`/services#industries`}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                <span className="text-xs leading-relaxed text-slate-400">
                  {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-xs text-slate-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.salesEmail}`}
                  className="text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Sales: {COMPANY_INFO.salesEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.hrEmail}`}
                  className="text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Careers: {COMPANY_INFO.hrEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
          <div>
            All Rights Reserved. &copy; 2026{" "}
            <strong className="text-slate-400">Qrious Tech Team LLP</strong>.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/company#methodology" className="hover:text-slate-400 transition-colors">
              Working Methodology
            </Link>
            <Link href="/company#faqs" className="hover:text-slate-400 transition-colors">
              Security & FAQs
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
