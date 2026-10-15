import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-minhajul-islam-mohit/",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/minhajulmohit",
    Icon: FaGithub,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/qr/3CPWTRSFGSRWB1",
    Icon: FaWhatsapp,
  },
];

const Footer = () => (
  <footer className="border-t border-white/10 px-4 py-6 sm:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-center text-xs text-slate-400 sm:text-left">
        © 2026 Minhajul Islam Mohit
      </p>
      <nav aria-label="Social links" className="flex items-center gap-2">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <Icon aria-hidden="true" className="size-4" />
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
