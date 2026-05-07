import { Code2, Database, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/5",
    iconBg: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 96 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-violet-500 to-purple-600",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/5",
    iconBg: "from-violet-500 to-purple-600",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "PHP", level: 93 },
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 92 },
      { name: "Queue & Workers", level: 85 },
      { name: "API Integration", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/5",
    iconBg: "from-emerald-500 to-teal-600",
    skills: [
      { name: "MySQL", level: 93 },
      { name: "MongoDB", level: 72 },
      { name: "Database Design", level: 88 },
      { name: "Query Optimization", level: 85 },
      { name: "Data Migration", level: 82 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-orange-500 to-rose-600",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/5",
    iconBg: "from-orange-500 to-rose-600",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Linux / Nginx", level: 85 },
      { name: "VPS Management", level: 86 },
      { name: "cPanel", level: 84 },
      { name: "AWS S3", level: 72 },
      { name: "Figma", level: 75 },
    ],
  },
];

const techBadges = [
  "Laravel", "PHP", "Next.js", "React.js", "Node.js",
  "MySQL", "MongoDB", "VPS", "cPanel", "AWS S3", "Tailwind CSS",
  "REST API", "Git", "Linux", "Nginx", "Queue Workers",
  "bKash API", "Nagad API", "Firebase", "TypeScript", "JavaScript",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-xs font-bold">02</div>
          <h2 className="text-lg font-bold text-white">Technical Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="mb-16 max-w-3xl">
          <p className="section-kicker mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            A practical toolkit for <span className="gradient-text">shipping full-stack products</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl">
            A comprehensive toolkit built over 5+ years of hands-on development across diverse projects.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass-card p-6 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-neutral-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-neutral-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-bg rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* All Technologies Badge Cloud */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="tech-badge text-neutral-300 text-sm cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
