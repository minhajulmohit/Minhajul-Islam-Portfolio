import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Reveal from "@/components/reveal";
import DirectMessage from "@/components/sections/direct-message";

const contactMethods = [
  {
    label: "Email",
    value: "minhajul.mohit@gmail.com",
    hint: "Best for detailed project briefs",
    href: "mailto:minhajul.mohit@gmail.com",
    Icon: FaEnvelope,
    accent: "text-accent",
  },
  {
    label: "Phone",
    value: "88 01906104529",
    hint: "Call or text, 10am-8pm",
    href: "tel:+8801906104529",
    Icon: FaPhoneAlt,
    accent: "text-accent-2",
  },
  {
    label: "WhatsApp",
    value: "+880 1906-104529",
    hint: "Fastest way to reach me",
    href: "https://wa.me/8801906104529",
    Icon: FaWhatsapp,
    accent: "text-accent",
  },
  {
    label: "GitHub",
    value: "github.com/minhajulmohit",
    hint: "Explore my code and projects",
    href: "https://github.com/minhajulmohit",
    Icon: FaGithub,
    accent: "text-accent-2",
  },
  {
    label: "LinkedIn",
    value: "in/md-minhajul-islam-mohit",
    hint: "Connect with me professionally",
    href: "https://www.linkedin.com/in/md-minhajul-islam-mohit/",
    Icon: FaLinkedinIn,
    accent: "text-accent",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-accent/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal variant="from-bottom" className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-2xl font-semibold text-heading sm:text-3xl"
          >
            Contact
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Have a project in mind or want to connect? Pick a channel on the
            left, or send a direct message and I&apos;ll get back to you.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactMethods.map(
                ({ label, value, hint, href, Icon, accent }, contactIndex) => (
                  <Reveal
                    key={label}
                    variant="zoom-in"
                    delay={contactIndex * 80}
                    className={
                      label === "LinkedIn" ? "sm:col-span-2 lg:col-span-1" : ""
                    }
                  >
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex h-full min-w-0 items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-5"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink/70">
                        <Icon
                          aria-hidden="true"
                          className={`size-4 ${accent} transition-transform group-hover:scale-110`}
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted">
                          {label}
                        </span>
                        <span className="mt-1 block break-all text-sm font-medium text-body group-hover:text-accent sm:text-base">
                          {value}
                        </span>
                        <span className="mt-1 block text-xs text-muted">
                          {hint}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                ),
              )}
            </div>
          </div>

          <Reveal variant="from-right" delay={160} className="lg:col-span-5">
            <DirectMessage />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
