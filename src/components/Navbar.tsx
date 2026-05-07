"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(
    pathname === "/projects" ? "Projects" : "Home",
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(pathname === "/projects" ? "Projects" : "Home");
  }, [pathname]);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setIsOpen(false);

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }

      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200 ${
        scrolled
          ? "bg-neutral-950/85 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNav("Home", "#home")}
          >
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-sm font-black text-white shadow-lg shadow-indigo-500/30">
              A
            </div>
            <span className="text-white font-bold text-lg tracking-tight transition-colors hover:text-blue-400">
              Atikur<span className="gradient-text">.dev</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === link.label
                    ? "text-violet-300 bg-white/5"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Link
              href="mailto:atikurrahman1587@gmail.com"
              className="btn-primary ml-3 px-5 py-2 text-sm"
            >
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neutral-400 hover:text-white p-2 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass border-t border-white/5 py-4 space-y-1 rounded-b-2xl">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.label, link.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active === link.label
                    ? "text-violet-300 bg-white/5"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="mailto:atikurrahman1587@gmail.com"
                className="btn-primary w-full py-2.5 text-sm"
              >
                <span>Hire Me</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
