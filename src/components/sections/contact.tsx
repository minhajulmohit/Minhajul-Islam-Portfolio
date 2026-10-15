const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-32 border-t border-cyan-400/20 py-10 sm:py-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        Get in touch
      </p>
      <h2
        id="contact-heading"
        className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
      >
        Contact
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
        Have a project in mind or want to connect? Reach out through any of the
        social links below.
      </p>
    </section>
  );
};

export default Contact;
