import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Layers, Tag } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects } from "../../data/portfolio";

const projectCategories = [...new Set(projects.map((project) => project.category))];
const projectTypes = [...new Set(projects.map((project) => project.type))];
const projectTechStack = [...new Set(projects.flatMap((project) => project.techStack))];

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected full-stack, government, SaaS, fintech, messaging, EdTech, and marketplace projects by Md. Atikur Rahman.",
  keywords: [
    "Atikur Rahman projects",
    "Full stack projects",
    "Laravel projects",
    "Next.js projects",
    "SaaS portfolio",
    ...projectCategories,
    ...projectTypes,
    ...projectTechStack,
    ...projects.map((project) => project.title),
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Projects | Atikur.dev",
    description:
      "Selected production-ready government, SaaS, fintech, messaging, EdTech, marketplace, and content platforms by Md. Atikur Rahman.",
    images: projects.slice(0, 4).map((project) => ({
      url: project.image,
      alt: project.title,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Atikur.dev",
    description:
      "Explore full-stack Laravel, Next.js, SaaS, civic tech, fintech, messaging, and marketplace projects.",
    images: [projects[0].image],
  },
};

const categoryColors: Record<string, string> = {
  "Government Platform": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Marketplace: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  FinTech: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Content Platform": "bg-orange-500/15 text-orange-300 border-orange-500/30",
  Communications: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "Marketing SaaS": "bg-rose-500/15 text-rose-300 border-rose-500/30",
  EdTech: "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

const accentStyles = [
  "from-cyan-400/20 via-blue-500/10 to-slate-900/0 border-cyan-400/30 shadow-cyan-950/40",
  "from-emerald-400/20 via-teal-500/10 to-slate-900/0 border-emerald-400/30 shadow-emerald-950/40",
  "from-violet-400/20 via-fuchsia-500/10 to-slate-900/0 border-violet-400/30 shadow-violet-950/40",
  "from-amber-400/20 via-orange-500/10 to-slate-900/0 border-amber-400/30 shadow-amber-950/40",
];

export default function ProjectPage() {
  return (
    <main className="portfolio-shell min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={projects[0].image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover project-image-zoom"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <p className="text-cyan-300 font-semibold text-sm uppercase tracking-widest mb-3">
              Project Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Production systems built for <span className="gradient-text">real operations</span>.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
              A focused collection of government platforms, payment monitoring tools, messaging systems,
              rental marketplaces, app discovery products, and learning software pulled from the project briefs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl">
            {[
              ["8", "Projects"],
              ["5+", "Years Experience"],
              ["Laravel", "Core Backend"],
              ["Next.js", "Modern Frontend"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="glass-card px-4 py-4"
              >
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10">
            {projects.map((project, index) => {
              const accent = accentStyles[index % accentStyles.length];

              return (
              <article
                id={project.slug}
                key={project.slug}
                className={`group/card glass-card scroll-mt-24 relative overflow-hidden rounded-2xl transition-all duration-500 ${accent}`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br opacity-100 transition-opacity duration-500 group-hover/card:opacity-80 pointer-events-none" />

                <div className={`grid lg:grid-cols-[0.95fr_1.25fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-72 lg:min-h-full bg-slate-800 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover project-image-zoom transition-transform duration-700 ease-out group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-500 group-hover/card:bg-slate-950/10" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold rounded-full backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full" />
                        {project.status}
                      </span>
                      <span
                        className={`px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-sm ${
                          categoryColors[project.category] || "bg-slate-700/70 text-slate-300 border-slate-600"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-neutral-950/55 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md transition-colors hover:border-violet-400/50 hover:text-white"
                      >
                        <span className="text-violet-300">{String(index + 1).padStart(2, "0")}</span>
                        View Case Study
                      </Link>
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-3">
                      <Layers className="w-4 h-4 text-violet-300" />
                      {project.type}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">{project.title}</h2>
                    <p className="text-violet-300 font-semibold mt-2">{project.tagline}</p>
                    <p className="text-slate-300 leading-relaxed mt-5">{project.overview}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-outline mt-6 w-fit px-4 py-2 text-sm"
                    >
                      View Details
                    </Link>

                    <div className="mt-8 border-l border-amber-300/30 pl-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-slate-500" />
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                          Tech Stack
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-lg border border-white/[0.08] bg-white/[0.04] text-slate-300 font-medium transition-colors duration-200 hover:border-violet-400/40 hover:text-violet-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
