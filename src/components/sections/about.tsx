import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import Profile from "../../../public/asset/PP.jpg";

const stackBadges = [
  { label: "HTML", Icon: FaHtml5, position: "stack-badge-one" },
  { label: "CSS", Icon: FaCss3Alt, position: "stack-badge-two" },
  { label: "JavaScript", Icon: FaJs, position: "stack-badge-three" },
  { label: "TypeScript", Icon: BiLogoTypescript, position: "stack-badge-four" },
  { label: "React", Icon: FaReact, position: "stack-badge-five" },
  { label: "Next.js", Icon: SiNextdotjs, position: "stack-badge-six" },
  { label: "Node.js", Icon: FaNodeJs, position: "stack-badge-seven" },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-32 border-t border-cyan-400/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-10 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            A little
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
          >
            About Me
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(250px,0.8fr)_minmax(0,1.5fr)] lg:gap-14">
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div className="relative aspect-4/5 rounded-4xl border border-cyan-300/30 bg-linear-to-br from-cyan-400/20 via-slate-900 to-purple-500/20 p-2 shadow-2xl shadow-cyan-950/30">
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={Profile}
                  alt="Minhajul Islam Mohit"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-3 -right-3 rounded-xl border border-cyan-300/25 bg-slate-950/90 px-4 py-2 text-xs font-medium text-cyan-100 shadow-lg backdrop-blur">
                Full-Stack Web Developer
              </span>
              {stackBadges.map(({ label, Icon, position }) => (
                <span
                  key={label}
                  className={`stack-badge ${position}`}
                  title={label}
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              <p>
                Hi, I’m Minhajul Islam Mohit, an aspiring Full-Stack Web
                Developer passionate about building modern, responsive, and
                user-friendly web applications. My programming journey started
                with learning the fundamentals of HTML, CSS, and JavaScript, and
                gradually expanded into TypeScript, React, Next.js, and other
                modern web technologies.
              </p>
              <p>
                I enjoy turning ideas into functional digital experiences,
                solving problems through code, exploring new technologies, and
                continuously improving my development skills. Through projects
                like Bazar-Dor, Bangla-News-24, and FitLog, I’ve gained
                practical experience with reusable components, API integration,
                responsive UI design, authentication, and version control using
                Git and GitHub.
              </p>
              <p>
                Beyond programming, I enjoy exploring technology, learning new
                things, and challenging myself to grow both personally and
                professionally. I believe consistency, curiosity, and a
                willingness to learn are essential for becoming a great
                developer. My goal is to become a skilled Full-Stack Web
                Developer who builds meaningful digital products and creates
                real value through technology.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-purple-300/40 hover:bg-purple-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
              >
                Explore My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
