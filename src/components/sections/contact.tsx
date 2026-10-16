import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const contactMethods = [
  {
    label: "Email",
    value: "minhajul.mohit@gmail.com",
    href: "mailto:minhajul.mohit@gmail.com",
    Icon: FaEnvelope,
    accent: "text-cyan-300",
  },
  {
    label: "Phone",
    value: "01906104529",
    href: "tel:+8801906104529",
    Icon: FaPhoneAlt,
    accent: "text-purple-300",
  },
  {
    label: "WhatsApp",
    value: "+880 1906-104529",
    href: "https://wa.me/8801906104529",
    Icon: FaWhatsapp,
    accent: "text-cyan-300",
  },
  {
    label: "GitHub",
    value: "github.com/minhajulmohit",
    href: "https://github.com/minhajulmohit",
    Icon: FaGithub,
    accent: "text-purple-300",
  },
  {
    label: "LinkedIn",
    value: "in/md-minhajul-islam-mohit",
    href: "https://www.linkedin.com/in/md-minhajul-islam-mohit/",
    Icon: FaLinkedinIn,
    accent: "text-cyan-300",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-32 border-t border-cyan-400/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
          >
            Contact
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Have a project in mind or want to connect? Choose the easiest way
            to reach me.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map(({ label, value, href, Icon, accent }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-cyan-300/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:p-5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70">
                <Icon
                  aria-hidden="true"
                  className={`size-4 ${accent} transition-transform group-hover:scale-110`}
                />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {label}
                </span>
                <span className="mt-1 block break-all text-sm font-medium text-slate-200 group-hover:text-cyan-100 sm:text-base">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
