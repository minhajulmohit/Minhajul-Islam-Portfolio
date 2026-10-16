import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaDownload, FaFileAlt } from "react-icons/fa";

const CV_PATH = "/asset/Minhajul_Islam_Mohit_CV.pdf";
const CV_FILE = "Minhajul_Islam_Mohit_CV.pdf";

export const metadata: Metadata = {
  title: "CV | Minhajul Islam Mohit",
  description: "View or download the CV of Minhajul Islam Mohit.",
};

export default function CvPage() {
  return (
    <main className="flex h-dvh flex-col px-4 py-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg text-sm text-body transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <FaArrowLeft aria-hidden="true" className="size-3" />
          Back
        </Link>

        <p className="flex min-w-0 items-center gap-2 text-sm font-semibold text-heading">
          <FaFileAlt aria-hidden="true" className="size-4 shrink-0 text-accent" />
          CV
        </p>

        <a
          href={CV_PATH}
          download={CV_FILE}
          className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <FaDownload aria-hidden="true" className="size-3.5" />
          Download
        </a>
      </div>

      <div className="mx-auto mt-4 w-full max-w-6xl min-h-0 flex-1 overflow-hidden rounded-2xl border border-line bg-white">
        <iframe src={CV_PATH} title="CV preview" className="h-full w-full" />
      </div>

      <p className="mx-auto mt-3 w-full max-w-6xl text-center text-xs text-muted">
        Preview not loading? Use the Download button above to get the file.
      </p>
    </main>
  );
}
