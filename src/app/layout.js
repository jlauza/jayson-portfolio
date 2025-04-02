import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jayson Lauza - My Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Jayson Lauza",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: ["Jayson Lauza"],
  description: "This is my portfolio website.",
  openGraph: {
    title: "Jayson Lauza - My Portfolio",
    description: "This is my portfolio website.",
    url: "https://jaysonlauza.com",
    siteName: "Jayson Lauza - My Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jayson Lauza - My Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
