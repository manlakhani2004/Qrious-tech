import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
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
    <footer className="bg-[#ffffff] text-[#555555] border-t border-[#e5e5e5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#e5e5e5]">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-4">
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

            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pr-6">
              A premier technology partner empowering enterprises and high-growth innovators with AI/ML, cloud-native web & mobile development, and enterprise Salesforce ecosystems. Delivering excellence with 60+ skilled engineers for over two decades.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#555555]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-bold text-[#0c0407] hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.salesEmail}`}
                  className="text-orange-600 hover:underline font-semibold"
                >
                  Sales: {COMPANY_INFO.salesEmail}
                </a>
                <span className="text-[#cccccc]">|</span>
                <a
                  href={`mailto:${COMPANY_INFO.hrEmail}`}
                  className="text-[#666666] hover:underline"
                >
                  Careers: {COMPANY_INFO.hrEmail}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-3">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#555555] hover:text-white hover:bg-[#0c0407] hover:border-[#0c0407] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#555555] hover:text-white hover:bg-[#0c0407] hover:border-[#0c0407] transition-all"
                aria-label="Twitter / X"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#555555] hover:text-white hover:bg-[#0c0407] hover:border-[#0c0407] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#555555] hover:text-white hover:bg-[#0c0407] hover:border-[#0c0407] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Motive Newsletter Stay Connected */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#0c0407] tracking-wider uppercase">
              Stay Connected
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Join our engineering newsletter and receive quarterly updates on AI agents, cloud architectures, and digital scaling.
            </p>
            <div className="flex items-center bg-[#f8f8f8] border border-[#e5e5e5] rounded-full p-1 shadow-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-3 pr-2 py-1 text-xs bg-transparent text-[#0c0407] focus:outline-none placeholder-[#999999]"
              />
              <button
                type="button"
                className="px-4 py-1.5 bg-[#0c0407] hover:bg-orange-500 text-white font-bold text-xs rounded-full transition-colors shrink-0"
              >
                Join
              </button>
            </div>
            <div className="flex items-center text-[11px] text-emerald-700 pt-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              <span>Strict bilateral NDA & zero spam policy</span>
            </div>
          </div>

          {/* Column 3: Practices */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#0c0407] tracking-wider uppercase">
              Practices
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#0c0407] tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-orange-500 transition-colors">
                  About Qrious Tech
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-orange-500 transition-colors">
                  37 Case Studies
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-orange-500 transition-colors">
                  16 Portfolio Apps
                </Link>
              </li>
              <li>
                <Link href="/company#methodology" className="hover:text-orange-500 transition-colors">
                  Working Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition-colors">
                  Schedule Discovery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#777777] space-y-4 sm:space-y-0">
          <div>
            Copyright @Qrious Tech Team LLP. All Rights Reserved 2026.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/company#methodology" className="hover:text-[#0c0407] transition-colors">
              Methodology
            </Link>
            <Link href="/company#faqs" className="hover:text-[#0c0407] transition-colors">
              Security & FAQs
            </Link>
            <Link href="/contact" className="hover:text-[#0c0407] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#0c0407] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
