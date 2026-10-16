import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaKey,
  FaLock,
  FaNodeJs,
  FaPlug,
  FaReact,
  FaServer,
  FaWindows,
} from "react-icons/fa";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";

import {
  SiBetterauth,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import Reveal, { type RevealVariant } from "@/components/reveal";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillGroup = {
  title: string;
  description: string;
  accent: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces and engaging web experiences.",
    accent: "text-accent",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F8FAFC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Server-side development and data persistence.",
    accent: "text-accent-2",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#F8FAFC" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Authentication & Security",
    description: "Authentication flows and secure sign-in integrations.",
    accent: "text-accent-2",
    skills: [
      { name: "Better Auth", icon: SiBetterauth, color: "#F8FAFC" },
      { name: "OAuth 2.0", icon: FaKey, color: "#A78BFA" },
      { name: "Authentication", icon: FaLock, color: "#67E8F9" },
    ],
  },
  {
    title: "API & Integration",
    description: "Connecting applications with services and data.",
    accent: "text-accent",
    skills: [
      { name: "REST APIs", icon: FaServer, color: "#67E8F9" },
      { name: "API Integration", icon: FaPlug, color: "#A78BFA" },
    ],
  },
  {
    title: "Development Tools",
    description: "Tools I use to build and manage projects.",
    accent: "text-accent",
    skills: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#F8FAFC" },
    ],
  },
  {
    title: "Operating System & Productivity",
    description: "Desktop and office tools for everyday work.",
    accent: "text-accent-2",
    skills: [
      { name: "Microsoft Windows", icon: FaWindows, color: "#0078D4" },
      {
        name: "Microsoft Office",
        icon: PiMicrosoftWordLogoFill,
        color: "#4472C4",
      },
      {
        name: "Microsoft Excel",
        icon: PiMicrosoftExcelLogoFill,
        color: "#217346",
      },
      {
        name: "Microsoft Powerpoint",
        icon: PiMicrosoftPowerpointLogoFill,
        color: "#ED7D31",
      },
    ],
  },
];

const cardVariants: RevealVariant[] = [
  "from-left",
  "from-top",
  "from-right",
  "from-bottom-left",
  "from-bottom",
  "from-bottom-right",
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-4 border-t border-accent-2/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal variant="from-bottom" className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            My technical expertise
          </p>
          <h2
            id="skills-heading"
            className="mt-2 text-2xl font-semibold text-heading sm:text-3xl"
          >
            Skills &amp; <span className="text-accent">Technologies</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Technologies I use and explore to build modern, responsive, and
            user-friendly web applications.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              variant={cardVariants[groupIndex % cardVariants.length]}
              className="skill-card group rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/20 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-9 w-1 shrink-0 rounded-full bg-linear-to-b from-accent to-accent-2"
                />
                <div>
                  <h3 className={`text-lg font-semibold ${group.accent}`}>
                    {group.title}
                  </h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                    {group.description}
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map(({ name, icon: Icon, color }, skillIndex) => (
                  <li
                    key={name}
                    style={{ transitionDelay: `${300 + skillIndex * 70}ms` }}
                    className="reveal-item inline-flex min-h-10 items-center gap-2 rounded-xl border border-line bg-ink/60 px-3 py-2 text-sm text-body transition-colors hover:border-accent/30 hover:bg-accent/5"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-4 shrink-0 sm:size-4.5"
                      style={{ color }}
                    />
                    <span className="whitespace-nowrap">{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
