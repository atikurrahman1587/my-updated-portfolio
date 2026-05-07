import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Atikur Rahman | Full Stack Developer",
  description:
    "Atikur.dev is the personal portfolio of Atikur Rahman, a full stack developer specializing in PHP, Laravel, React, Next.js, Node.js, and MongoDB. Explore his projects, skills, and experience in web development.",
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
