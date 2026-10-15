import { FaGraduationCap, FaSchool } from "react-icons/fa";

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
    accent: "text-cyan-300",
    marker: "border-cyan-300/50 bg-cyan-300/10",
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
    accent: "text-purple-300",
    marker: "border-purple-300/50 bg-purple-300/10",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-32 border-t border-purple-400/20 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            Academic background
          </p>
          <h2
            id="education-heading"
            className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
          >
            Education
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            My academic journey and ongoing studies.
          </p>
        </div>

        <div className="relative space-y-5 before:absolute before:bottom-10 before:left-5 before:top-10 before:w-px before:bg-linear-to-b before:from-cyan-300/50 before:via-purple-400/40 before:to-transparent sm:space-y-6 sm:before:left-6">
          {education.map(
            ({
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
            }) => (
              <article
                key={level}
                className="relative pl-12 sm:pl-16"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-6 flex size-10 items-center justify-center rounded-full border sm:left-1 sm:size-11 ${marker}`}
                >
                  <Icon className={`size-4 sm:size-5 ${accent}`} />
                </span>

                <div className="rounded-2xl border border-white/10 bg-white/3 p-5 transition-colors hover:border-cyan-300/25 hover:bg-white/5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.15em] ${accent}`}
                      >
                        {level}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                        {degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-300">
                        {institution}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">{location}</p>
                    </div>
                    <span
                      className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${marker} ${accent}`}
                    >
                      {status}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    <span className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300">
                      {period}
                    </span>
                    <span className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300">
                      {detail}
                    </span>
                    <span className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300">
                      {result}
                    </span>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
