import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qrious Tech Team LLP | Enterprise Software, AI Innovation & Scalable Platforms",
  description: "Premier technology engineering partner empowering enterprises with AI/ML, cloud-native web & mobile development, Power BI analytics, and Salesforce multi-cloud ecosystems. 20+ years of proven delivery.",
  keywords: [
    "Qrious Tech",
    "Qrious Tech Team LLP",
    "Software Development Company",
    "AI Development",
    "LangGraph Multi-Agent",
    "Next.js Development",
    "Flutter App Development",
    "Salesforce Consulting",
    "Power BI Development",
    "Dedicated Development Teams",
    "Offshore Software Engineering"
  ],
  authors: [{ name: "Qrious Tech Team LLP" }],
  creator: "Qrious Tech Team LLP",
  openGraph: {
    title: "Qrious Tech Team LLP | Enterprise Engineering & AI Innovation",
    description: "Partnering with visionary enterprises to build mission-critical web, mobile, AI/ML, and Salesforce platforms.",
    url: "https://www.qrioustech.com",
    siteName: "Qrious Tech Team LLP",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070b14] text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
