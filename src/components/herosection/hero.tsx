import OrbitProfile from "./orbitprofile";
import { FaArrowRight, FaEye, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Enter from "@/components/enter";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/minhajulmohit",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-minhajul-islam-mohit/",
    Icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801906104529",
    Icon: FaWhatsapp,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Home"
      className="scroll-mt-38 mt-10 flex flex-col items-center gap-12 px-4 py-3 sm:mt-20 sm:flex-row sm:justify-between sm:gap-8"
    >
      <div className="w-full min-w-0 sm:w-1/2 sm:text-left">
        <h1 className="text-4xl font-bold sm:text-5xl">
          <Enter as="span" variant="rise" className="block text-heading">
            Hi, I&apos;m
          </Enter>
          <Enter as="span" variant="rise" delay={120} className="block">
            <span className="name-shine text-gradient-cyber block">
              Minhajul Islam Mohit
            </span>
          </Enter>
        </h1>
        <Enter variant="fade-up" delay={220}>
          <p className="text-body font-bold">Full Stack Web Developer.</p>
        </Enter>
        <Enter variant="fade-up" delay={300}>
          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
            <Link
              href="/cv"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-accent btn-gradient-cyber btn-gradient-dracula btn-gradient-light px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
            >
              <FaEye aria-hidden="true" className="size-4" />
              View CV
            </Link>
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-accent-2 bg-transparent px-5 py-2.5 text-sm font-semibold text-accent-2 transition-colors hover:bg-accent-2/20 btn-outline-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
            >
              View My Work
              <FaArrowRight aria-hidden="true" className="size-3" />
            </a>
          </div>
        </Enter>
        <div className="mt-6 flex items-center gap-3">
          {socials.map(({ label, href, Icon }, index) => (
            <Enter
              key={label}
              as="span"
              variant="pop"
              delay={420 + index * 100}
              className="inline-block"
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex size-11 items-center justify-center rounded-xl border border-line bg-surface text-body transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            </Enter>
          ))}
        </div>
      </div>
      <Enter
        variant="pop"
        delay={150}
        className="flex w-full min-w-0 justify-center sm:w-1/2"
      >
        <OrbitProfile />
      </Enter>
    </section>
  );
};

export default Hero;
