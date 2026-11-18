import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qrious Tech Team LLP | Enterprise Software, AI Innovation & Scalable Platforms",
  description: "Premier technology engineering partner empowering enterprises with AI/ML, cloud-native web & mobile development, Power BI analytics, and Salesforce multi-cloud ecosystems. 500+ successful projects delivered since 2017.",
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
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png" },
      { url: "/images/favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("qtech-theme");var d=s==="dark"||(!s&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.className} bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] antialiased min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
