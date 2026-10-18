import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import Reveal from "@/components/reveal";

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
      className="scroll-mt-3 border-t border-accent/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal
          variant="from-bottom"
          className="mb-8 text-center sm:mb-10 lg:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            A little
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-2xl font-semibold text-heading sm:text-3xl"
          >
            About Me
          </h2>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(250px,0.8fr)_minmax(0,1.5fr)] lg:gap-14">
          <Reveal
            variant="from-left"
            className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
          >
            <div className="about-photo relative aspect-4/5 rounded-4xl border border-accent/30 bg-linear-to-br from-accent/20 via-ink to-accent-2/20 p-2 shadow-2xl shadow-accent/30">
              <div className="relative h-full overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/asset/PPP.jpg"
                  alt="Minhajul Islam Mohit"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
              </div>
              <span className="about-photo-tag absolute -bottom-3 -right-3 rounded-xl border border-accent/25 bg-ink/90 px-4 py-2 text-xs font-medium text-accent shadow-lg backdrop-blur">
                Full-Stack Web Developer
              </span>
              {stackBadges.map(({ label, Icon, position }) => (
                <span
                  key={label}
                  className={`stack-badge ${position}`}
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal variant="from-right" className="min-w-0">
            <div className="space-y-4 text-sm leading-7 text-body sm:text-base sm:leading-8">
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
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent-2/40 hover:bg-accent-2/10 btn-outline-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
              >
                Explore My Projects
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
