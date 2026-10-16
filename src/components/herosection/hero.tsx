import OrbitProfile from "./orbitprofile";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

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
        <h1 className="name-shine text-4xl font-bold sm:text-5xl">
          Hi, I&apos;m <br />
          Minhajul Islam Mohit
        </h1>
        <p className="text-white font-bold">Full Stack Web Developer.</p>
        <div className="mt-6 flex items-center gap-3">
          {socials.map(({ label, href, Icon }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              style={{ animationDelay: `${0.15 * index + 0.2}s` }}
              className="social-reveal flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <Icon aria-hidden="true" className="size-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex w-full min-w-0 justify-center sm:w-1/2">
        <OrbitProfile />
      </div>
    </section>
  );
};

export default Hero;
