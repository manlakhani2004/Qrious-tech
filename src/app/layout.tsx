import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qrious Tech Team LLP | Enterprise AI, Autonomous Systems & Cloud Platforms",
  description: "Enterprise technology engineering partner empowering businesses with autonomous multi-agent swarms, private RAG hubs, custom models, and dedicated engineering pods. 500+ successful systems delivered since 2017.",
  keywords: [
    "Enterprise AI Partner",
    "Autonomous AI Agents",
    "Private RAG",
    "Custom LLM Development",
    "LangGraph Multi-Agent",
    "Qrious Tech",
    "Qrious Tech Team LLP",
    "Dedicated AI Engineering Pods"
  ],
  authors: [{ name: "Qrious Tech Team LLP" }],
  creator: "Qrious Tech Team LLP",
  openGraph: {
    title: "Qrious Tech Team LLP | Enterprise AI, Autonomous Systems & Cloud Platforms",
    description: "Partnering with visionary enterprises to build, validate, and scale autonomous AI systems, private RAG, and custom models.",
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
      <body className={`${plusJakartaSans.className} bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] antialiased min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("qtech-theme");var d=s==="dark"||(!s&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})();`,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
