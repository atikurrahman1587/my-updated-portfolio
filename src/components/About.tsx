"use client";

import { User, GraduationCap, Briefcase, Target } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const highlights = [
  {
    icon: Briefcase,
    title: "5+ Years Experience",
    desc: "Hands-on full stack web development",
    color: "gradient-bg",
    shadow: "shadow-indigo-500/20",
  },
  {
    icon: GraduationCap,
    title: "CSE Student",
    desc: "State University of Bangladesh",
    color: "gradient-bg",
    shadow: "shadow-violet-500/20",
  },
  {
    icon: Target,
    title: "50+ Projects",
    desc: "Production-ready web applications",
    color: "gradient-bg",
    shadow: "shadow-indigo-500/20",
  },
  {
    icon: User,
    title: "20+ Clients",
    desc: "Govt, startups & enterprises served",
    color: "gradient-bg",
    shadow: "shadow-indigo-500/20",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-xs font-bold">01</div>
          <h2 className="text-lg font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="mb-12 max-w-3xl">
          <p className="section-kicker mb-3">Get to Know Me</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            I build useful systems with a <span className="gradient-text">production-first mindset</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Story */}
          <div>
            <div className="space-y-5">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-base">
                  {paragraph.split(/(\*\*.*?\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <span key={j} className="text-white font-semibold">
                        {part.slice(2, -2)}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>

            {/* Key Specializations */}
            <div className="mt-8 glass-card p-6">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                I Specialize In
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Scalable Web Applications",
                  "SaaS Platforms",
                  "System Architecture",
                  "REST APIs",
                  "Government Platforms",
                  "Payment Systems",
                  "Digital Services",
                  "Database Design",
                ].map((item) => (
                  <span
                    key={item}
                    className="tech-badge text-neutral-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline cursor-pointer"
              >
                See My Projects
              </button>
            </div>
          </div>

          {/* Right — Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map(({ icon: Icon, title, desc, color, shadow }) => (
              <div
                key={title}
                className="glass-card p-6 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shadow-lg ${shadow} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            ))}

            {/* Tech Stack Mini */}
            <div className="sm:col-span-2 glass-card p-6">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "Next.js", "React.js", "PHP", "MySQL", "REST APIs", "Tailwind CSS", "Node.js", "VPS", "cPanel"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge text-sm text-neutral-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
