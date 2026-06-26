import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armory Systems | AI Automation Platform",
  description:
    "Armory Systems is an AI automation platform with semantic structure, responsive pricing logic, production workflow controls, and polished motion design.",
  keywords: [
    "AI automation platform",
    "workflow automation",
    "responsive SaaS landing page",
    "multi currency pricing",
    "semantic HTML",
    "AI operations",
  ],
  openGraph: {
    title: "Armory Systems | AI Automation Platform",
    description:
      "Architect AI workflows with observability, pricing clarity, and premium product storytelling.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armory Systems | AI Automation Platform",
    description:
      "Premium AI SaaS landing page built for semantic structure, motion polish, and responsive logic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
