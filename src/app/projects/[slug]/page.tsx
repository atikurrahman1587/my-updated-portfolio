import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  Sparkles,
  Tag,
  Trophy,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "../../../data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
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

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.overview,
    keywords: [
      project.title,
      project.tagline,
      project.category,
      project.type,
      project.status,
      ...project.techStack,
      ...project.features,
      ...project.highlights,
    ],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: `${project.title} | Atikur.dev`,
      description: project.overview,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Atikur.dev`,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .filter(
      (item) =>
        item.category === project.category ||
        item.techStack.some((tech) => project.techStack.includes(tech)),
    )
    .slice(0, 3);

  return (
    <main className="portfolio-shell min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-14">
        <div className="absolute inset-0 opacity-35">
          <Image
            src={project.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover project-image-zoom"
          />
          <div className="absolute inset-0 bg-slate-950/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.72fr] gap-10 items-end">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold rounded-full backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full" />
                  {project.status}
                </span>
                <span
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-sm ${
                    categoryColors[project.category] ||
                    "bg-slate-700/70 text-slate-300 border-slate-600"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              <p className="text-cyan-300 font-semibold text-sm uppercase tracking-widest mb-3">
                Project Case Study
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-xl text-violet-300 font-semibold">
                {project.tagline}
              </p>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
                {project.overview}
              </p>
            </div>

            <div className="glass-card p-5 sm:p-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-5">
                <Layers className="w-4 h-4 text-violet-300" />
                {project.type}
              </div>
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
                    className="px-2.5 py-1 text-xs rounded-lg border border-white/[0.08] bg-white/[0.04] text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/40">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 1180px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <section className="lg:col-span-2 glass-card p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-2xl font-black text-white mb-6">
                <Sparkles className="w-6 h-6 text-violet-300" />
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <aside className="space-y-8">
              <section className="glass-card p-6">
                <h2 className="flex items-center gap-2 text-xl font-black text-white mb-5">
                  <Trophy className="w-5 h-5 text-amber-300" />
                  Highlights
                </h2>
                <div className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-300 mt-2 flex-shrink-0" />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="glass-card p-6">
                <h2 className="text-xl font-black text-white mb-5">Outcomes</h2>
                <div className="space-y-3">
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>

          {relatedProjects.length > 0 && (
            <section className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-black text-white">
                  Related Projects
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {relatedProjects.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/projects/${item.slug}`}
                    className="glass-card group block overflow-hidden"
                  >
                    <div className="relative aspect-video bg-slate-800">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-lg font-black text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                        {item.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
