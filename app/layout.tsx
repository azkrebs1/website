import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZ Krebs — Mechanical Engineer & Roboticist",
  description:
    "Portfolio of AZ Krebs — MIT Mechanical Engineering student passionate about robotics, autonomous systems, and the intersection of hardware and software.",
  keywords: [
    "AZ Krebs",
    "MIT",
    "Mechanical Engineering",
    "Robotics",
    "Portfolio",
    "Autonomous Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
