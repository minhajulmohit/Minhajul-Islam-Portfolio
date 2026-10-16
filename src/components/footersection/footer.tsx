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
    href: "https://wa.me/8801906104529",
    Icon: FaWhatsapp,
  },
];

const Footer = () => (
  <footer className="border-t border-line px-4 py-6 sm:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-center text-xs text-muted sm:text-left">
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
            className="flex size-10 items-center justify-center rounded-xl border border-line bg-surface text-body transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Icon aria-hidden="true" className="size-4" />
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
