"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp, ExternalLink, Tag, Layers, Zap } from "lucide-react";
import { projects } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  "Government Platform": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Marketplace": "bg-violet-500/15 text-violet-400 border-violet-500/30",
  "FinTech": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Content Platform": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "Communications": "bg-sky-500/15 text-sky-400 border-sky-500/30",
  "Marketing SaaS": "bg-rose-500/15 text-rose-400 border-rose-500/30",
  "EdTech": "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

const techColors = [
  "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "bg-orange-500/10 text-orange-300 border-orange-500/20",
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-xs font-bold">03</div>
          <h2 className="text-lg font-bold text-white">Featured Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="mb-16 max-w-3xl">
          <p className="section-kicker mb-3">
            What I've Built
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Real platforms with <span className="gradient-text">operational depth</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl">
            A selection of production-ready systems I've built — from government digital platforms to enterprise SaaS solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="glass-card overflow-hidden group"
              >
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Image */}
                  <div className="lg:w-2/5 xl:w-1/2 relative overflow-hidden">
                    <div className="aspect-video lg:aspect-auto lg:h-full min-h-56 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover project-image-zoom group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
                      {/* Status badge */}
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-semibold rounded-full backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          {project.status}
                        </span>
                      </div>
                      {/* Number */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30">
                        {String(project.id).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 xl:w-1/2 p-6 sm:p-8 flex flex-col">
                    {/* Category & Type */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${categoryColors[project.category] || "bg-slate-700 text-slate-300 border-slate-600"}`}
                      >
                        {project.category}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-slate-700/50 text-slate-400 border-slate-600/50 flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        {project.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-violet-300 text-sm font-medium mb-4">{project.tagline}</p>

                    {/* Overview */}
                    <p className="text-slate-400 leading-relaxed text-sm mb-5 line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-5">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Tag className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-slate-500 text-xs uppercase tracking-wider font-medium">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 text-xs rounded-lg border font-medium ${techColors[i % techColors.length]}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand Button */}
                    <div className="mt-auto flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="flex items-center gap-2 text-sm text-violet-300 hover:text-white font-semibold transition-colors cursor-pointer group/btn"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                            Hide Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                            View All Features
                          </>
                        )}
                      </button>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-white font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open Case Study
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Expanded Features */}
                {isExpanded && (
                  <div className="border-t border-white/[0.06] px-6 sm:px-8 py-6 bg-white/[0.02]">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Key Features & Capabilities
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0" />
                          <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-flex flex-col items-center gap-4 p-8 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Want to See More?</h3>
              <p className="text-slate-400 text-sm">
                These are just a few highlights. I've built dozens more — let's talk about your project.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="btn-primary"
              >
                <span>View Project Page</span>
              </Link>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline cursor-pointer"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
