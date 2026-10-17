import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "@/data/projects";
import ProjectPreview from "@/components/projects/project-preview";
import Reveal, { type RevealVariant } from "@/components/reveal";

const cardVariants: RevealVariant[] = ["from-left", "from-right", "from-bottom"];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-4 border-t border-accent/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal variant="from-bottom" className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Selected work
          </p>
          <h2
            id="projects-heading"
            className="mt-2 text-2xl font-semibold text-heading sm:text-3xl"
          >
            Projects
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            A few projects I’ve built and the ideas behind them.
          </p>
        </Reveal>

        <div className="space-y-5 sm:space-y-7">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              variant={cardVariants[index % cardVariants.length]}
              className="project-card glass-card group grid min-w-0 gap-5 rounded-2xl border border-line bg-surface p-4 transition duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/20 sm:gap-7 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-8"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <ProjectPreview slug={project.slug} name={project.name} />
              </div>
              <div
                className={`flex min-w-0 flex-col py-1 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-2">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-heading">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {project.summary}
                </p>
                <ul
                  aria-label={`${project.name} technology stack`}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 text-xs text-body"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent/50 hover:bg-accent/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  View Details
                  <FaArrowRight aria-hidden="true" className="size-3" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
