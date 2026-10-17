import { FaGraduationCap, FaSchool } from "react-icons/fa";
import Reveal from "@/components/reveal";

const education = [
  {
    level: "Bachelor of Social Science",
    degree: "B.S.S. (Honours) in Economics",
    institution: "Government Titumir College",
    location: "Dhaka, Bangladesh",
    period: "2022 – Present",
    detail: "4th Year",
    result: "CGPA: 3.08",
    status: "In progress",
    Icon: FaGraduationCap,
    accent: "text-accent",
    marker: "border-accent/50 bg-accent/10",
  },
  {
    level: "Higher Secondary Certificate",
    degree: "HSC · Humanities",
    institution: "Shaheed Police Smrity College",
    location: "Mirpur, Dhaka",
    period: "2021",
    detail: "Humanities",
    result: "GPA: 4.17",
    status: "Completed",
    Icon: FaSchool,
    accent: "text-accent-2",
    marker: "border-accent-2/50 bg-accent-2/10",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-4 border-t border-accent-2/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal variant="from-bottom" className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
            Academic background
          </p>
          <h2
            id="education-heading"
            className="mt-2 text-2xl font-semibold text-heading sm:text-3xl"
          >
            Education
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            My academic journey and ongoing studies.
          </p>
        </Reveal>

        <div className="relative space-y-5 before:absolute before:bottom-10 before:left-5 before:top-10 before:w-px before:bg-linear-to-b before:from-accent/50 before:via-accent-2/40 before:to-transparent sm:space-y-6 sm:before:left-6">
          {education.map(
            (
              {
                level,
                degree,
                institution,
                location,
                period,
                detail,
                result,
                status,
                Icon,
                accent,
                marker,
              },
              eduIndex,
            ) => (
              <Reveal
                key={level}
                variant="from-right"
                delay={eduIndex * 120}
                className="relative pl-12 sm:pl-16"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-6 flex size-10 items-center justify-center rounded-full border sm:left-1 sm:size-11 ${marker}`}
                >
                  <Icon className={`size-4 sm:size-5 ${accent}`} />
                </span>

                <div className="glass-card rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/25 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.15em] ${accent}`}
                      >
                        {level}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-heading sm:text-xl">
                        {degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-body">
                        {institution}
                      </p>
                      <p className="mt-1 text-sm text-muted">{location}</p>
                    </div>
                    <span
                      className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${marker} ${accent}`}
                    >
                      {status}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                    <span className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-xs text-body">
                      {period}
                    </span>
                    <span className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-xs text-body">
                      {detail}
                    </span>
                    <span className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-xs text-body">
                      {result}
                    </span>
                  </div>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
