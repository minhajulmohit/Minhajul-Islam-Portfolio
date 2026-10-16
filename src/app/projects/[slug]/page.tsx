import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectPreview from "@/components/projects/project-preview";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project ? `${project.name} | Minhajul Islam Mohit` : "Project",
    description: project?.summary,
  };
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-heading">{title}</h2>
      {items.length > 0 ? (
        <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-6 text-muted">
          Details will be added soon.
        </p>
      )}
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="relative isolate min-h-screen overflow-clip px-4 pb-16 pt-6 sm:px-8 sm:pt-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg text-sm text-body transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <FaArrowLeft aria-hidden="true" className="size-3" />
          Back to projects
        </Link>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-heading sm:text-4xl">
            {project.name}
          </h1>
        </header>

        <div className="mt-7">
          <ProjectPreview slug={project.slug} name={project.name} />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(250px,0.8fr)]">
          <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-heading">
              About this project
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {project.description}
            </p>
            <h3 className="mt-6 text-sm font-semibold text-accent">
              Main technology stack
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-accent/15 bg-accent/5 px-3 py-1.5 text-xs text-body"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-heading">Project links</h2>
            <div className="mt-4 flex flex-col gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-on-accent hover:bg-accent-hi"
                >
                  <FaExternalLinkAlt aria-hidden="true" className="size-3" />
                  Live project
                </a>
              ) : (
                <p className="rounded-xl border border-line px-4 py-3 text-sm text-muted">
                  Live project link will be added.
                </p>
              )}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold text-heading hover:border-accent/30"
                >
                  <FaGithub aria-hidden="true" className="size-4" />
                  GitHub repository
                </a>
              ) : (
                <p className="rounded-xl border border-line px-4 py-3 text-sm text-muted">
                  GitHub repository link will be added.
                </p>
              )}
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <DetailList title="Key features" items={project.features} />
          <DetailList title="Challenges" items={project.challenges} />
          <DetailList title="Future plans" items={project.futurePlans} />
        </div>
      </div>
    </main>
  );
}
