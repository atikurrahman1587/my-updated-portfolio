import type { Metadata } from "next";
import { personalInfo, projects } from "../data/portfolio";
import "./globals.css";

const siteUrl = "https://atikur.dev";
const projectCategories = [...new Set(projects.map((project) => project.category))];
const projectTypes = [...new Set(projects.map((project) => project.type))];
const skills = Object.values(personalInfo.skills).flat();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Atikur.dev",
  title: {
    default: "Md Atikur Rahman | Full Stack Developer",
    template: "%s | Atikur.dev",
  },
  description:
    "Atikur.dev is the personal portfolio of Atikur Rahman, a full stack developer specializing in PHP, Laravel, React, Next.js, Node.js, and MongoDB. Explore his projects, skills, and experience in web development.",
  keywords: [
    personalInfo.name,
    personalInfo.title,
    personalInfo.university,
    "Atikur.dev",
    "Full Stack Developer Bangladesh",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    ...skills,
    ...projectCategories,
    ...projectTypes,
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Atikur.dev",
    title: "Md Atikur Rahman | Full Stack Developer",
    description:
      "Explore production-ready Laravel, Next.js, SaaS, government, fintech, messaging, and marketplace platforms built by Md. Atikur Rahman.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Md. Atikur Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Atikur Rahman | Full Stack Developer",
    description:
      "Full stack developer building Laravel, Next.js, API, SaaS, fintech, and civic technology platforms.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
