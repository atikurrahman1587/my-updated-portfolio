"use client";

import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolio";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const name = "Atikur Rahman";

  useEffect(() => {
    let index = 0;
    let pauseTimeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setTypedName("");
      index = 0;

      interval = setInterval(() => {
        index += 1;
        setTypedName(name.slice(0, index));

        if (index >= name.length) {
          clearInterval(interval);
          pauseTimeout = setTimeout(startTyping, 2600);
        }
      }, 95);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(pauseTimeout);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-violet-300 border border-violet-400/30 bg-violet-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
                Hi, I&apos;m{" "}
                <span className="gradient-text inline-flex min-w-[10.5ch] items-center">
                  {typedName}
                  <span className="ml-1 h-[0.85em] w-1 rounded-full bg-violet-300 animate-pulse" />
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-neutral-300">
                Full Stack Developer building Laravel, Next.js, and
                business-critical web platforms.
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
              CSE student at{" "}
              <span className="text-white font-medium">
                State University of Bangladesh
              </span>{" "}
              with <span className="text-white font-medium">5+ years</span> of
              experience shipping government services, SaaS tools, payment
              systems, and digital platforms.
            </p>

            <div className="code-block max-w-md">
              <div className="px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full code-dot-red" />
                <span className="w-2.5 h-2.5 rounded-full code-dot-yellow" />
                <span className="w-2.5 h-2.5 rounded-full code-dot-green" />
                <span className="ml-2 text-xs text-neutral-500 font-mono">
                  atikur.ts
                </span>
              </div>
              <div className="px-5 py-4 font-mono text-sm leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>
                  <span className="text-white"> dev </span>
                  <span className="text-blue-400">=</span>
                  <span className="text-white"> {"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">name</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">
                    &quot;Md. Atikur Rahman&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">stack</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">
                    [&quot;Laravel&quot;, &quot;Next.js&quot;,
                    &quot;MySQL&quot;]
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">focus</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">
                    &quot;Scalable web systems&quot;
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">open_to_work</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-400">true</span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/cv/md-atikur-rahman.pdf" className="btn-outline">
                <Download className="w-4 h-4" />
                Download CV
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { value: "50+", label: "Projects Shipped" },
                { value: "5+", label: "Years Experience" },
                { value: "20+", label: "Clients Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl pulse-glow opacity-70" />
              <div className="relative float-animation w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-violet-400/30 bg-white/[0.03] shadow-2xl shadow-violet-950/40">
                <Image
                  src="/images/profile.jpg"
                  alt="Md. Atikur Rahman"
                  width={384}
                  height={384}
                  priority
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30">
                    AR
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">
                      {personalInfo.name}
                    </div>
                    <div className="text-neutral-400 text-xs">
                      Laravel & Next.js Developer
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3">
                <div className="text-white text-xs font-bold">
                  Production Ready
                </div>
                <div className="text-violet-300 text-xs">Systems & APIs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
          <span className="text-neutral-500 text-sm">Find me on:</span>
          {[
            { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
            {
              icon: LinkedinIcon,
              href: personalInfo.linkedin,
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-neutral-400 hover:text-violet-300 hover:border-violet-400/40 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-violet-300 transition-colors animate-bounce cursor-pointer"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
