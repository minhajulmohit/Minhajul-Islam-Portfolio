const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-32 border-t border-purple-400/20 py-10 sm:py-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
        What I work with
      </p>
      <h2
        id="skills-heading"
        className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
      >
        Skills
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
        A selection of technologies and tools I use to design and build web
        experiences.
      </p>
    </section>
  );
};

export default Skills;
