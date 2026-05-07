"use client";

import {
  AlertCircle,
  CheckCircle,
  Clock,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "atikurrahman1587@gmail.com",
    href: "mailto:atikurrahman1587@gmail.com",
    color: "gradient-bg",
    shadow: "shadow-indigo-500/25",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+8801995871587",
    href: "https://wa.me/8801995871587",
    color: "gradient-bg",
    shadow: "shadow-indigo-500/25",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    color: "gradient-bg",
    shadow: "shadow-indigo-500/25",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to Opportunities",
    href: "#",
    color: "gradient-bg",
    shadow: "shadow-indigo-500/25",
  },
];

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/atikurrahman1587",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/atikurrahman1587",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/atikurrahman1587",
    label: "Facebook",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Message could not be sent.");
      }

      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setSending(false);
      setError(
        err instanceof Error ? err.message : "Message could not be sent.",
      );
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-xs font-bold">
            04
          </div>
          <h2 className="text-lg font-bold text-white">Contact</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="mb-16 max-w-3xl">
          <p className="section-kicker mb-3">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Let&apos;s talk about the{" "}
            <span className="gradient-text">next thing to build</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Let's Talk Business
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something great. Drop me a message!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map(
                ({ icon: Icon, label, value, href, color, shadow }) => (
                  <a
                    key={label}
                    href={href}
                    className="glass-card flex items-center gap-4 p-4 group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center shadow-lg ${shadow} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      <div className="text-white font-semibold text-sm">
                        {value}
                      </div>
                    </div>
                  </a>
                ),
              )}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-3">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neutral-400 hover:text-violet-300 hover:border-violet-400/40 transition-all duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">
                  Available for Hire
                </span>
              </div>
              <p className="text-slate-400 text-xs">
                Currently open to freelance projects, full-time roles, and
                collaboration opportunities.
              </p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-6">
                Send a Message
              </h3>

              {sent && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-400 text-sm font-medium">
                    Message sent! I also sent a confirmation email to you.
                  </span>
                </div>
              )}

              {error && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-300 text-sm font-medium">
                    {error}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-violet-400/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-violet-400/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    placeholder="Project Inquiry / Collaboration / Hiring..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-violet-400/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project, timeline, budget, or anything else..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-violet-400/60 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
