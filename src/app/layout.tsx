import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technical Portfolio | Software Engineer & Systems Architect",
  description: "Software systems engineered with mathematical and algorithmic rigor. Specializing in high-performance architectures, distributed systems, and AI/ML applications.",
  keywords: ["software engineer", "systems architecture", "full-stack developer", "machine learning", "AI", "distributed systems"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Technical Portfolio | Software Engineer",
    description: "Software systems engineered with mathematical and algorithmic rigor.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Portfolio | Software Engineer",
    description: "Software systems engineered with mathematical and algorithmic rigor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
