const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-32 border-t border-cyan-400/20 py-10 sm:py-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        A little about me
      </p>
      <h2
        id="about-heading"
        className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
      >
        About
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
        I’m a full-stack web developer interested in creating thoughtful,
        responsive experiences for the web.
      </p>
    </section>
  );
};

export default About;
