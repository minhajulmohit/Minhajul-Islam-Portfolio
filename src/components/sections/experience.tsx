import { FaBriefcase } from "react-icons/fa";
import Reveal from "@/components/reveal";

const experience = [
  {
    role: "Accounts Associate",
    period: "August 18, 2025 – February 15, 2026",
    responsibilities: [
      "Supported accounts-related office tasks and documentation.",
      "Maintained records and assisted with routine data processing.",
      "Used Microsoft Office tools for day-to-day administrative work.",
    ],
    accent: "text-accent",
    marker: "border-accent/50 bg-accent/10",
  },
  {
    role: "HR Associate",
    period: "December 26, 2024 – August 17, 2025",
    responsibilities: [
      "Supported human resources and administrative activities.",
      "Maintained employee-related records and documentation.",
      "Assisted with office coordination and day-to-day HR tasks.",
    ],
    accent: "text-accent-2",
    marker: "border-accent-2/50 bg-accent-2/10",
  },
  {
    role: "Data Entry Operator",
    period: "August 14, 2024 – December 25, 2024",
    responsibilities: [
      "Completed data-entry and document-related tasks.",
      "Maintained accuracy and consistency across records.",
    ],
    accent: "text-accent",
    marker: "border-accent/50 bg-accent/10",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-4 border-t border-accent/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal variant="from-bottom" className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Professional background
          </p>
          <h2
            id="experience-heading"
            className="mt-2 text-2xl font-semibold text-heading sm:text-3xl"
          >
            Work Experience
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Roles and responsibilities from my professional experience.
          </p>
        </Reveal>

        <div className="relative space-y-5 before:absolute before:bottom-10 before:left-5 before:top-10 before:w-px before:bg-linear-to-b before:from-accent/50 before:via-accent-2/40 before:to-transparent sm:space-y-6 sm:before:left-6">
          {experience.map(({ role, period, responsibilities, accent, marker }, expIndex) => (
            <Reveal
              key={role}
              variant="from-right"
              delay={expIndex * 120}
              className="relative pl-12 sm:pl-16"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-6 flex size-10 items-center justify-center rounded-full border sm:left-1 sm:size-11 ${marker}`}
              >
                <FaBriefcase className={`size-4 sm:size-5 ${accent}`} />
              </span>

              <div className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/25 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-heading sm:text-xl">
                      {role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-body">
                      Intelligent Image Management Limited (IIMI)
                    </p>
                  </div>
                  <span
                    className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${marker} ${accent}`}
                  >
                    {period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 border-t border-line pt-4 text-sm leading-6 text-muted">
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className={`mt-2 size-1.5 shrink-0 rounded-full bg-current ${accent}`}
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
