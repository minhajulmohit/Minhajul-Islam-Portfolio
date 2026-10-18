"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

type ProjectPreviewProps = {
  slug: string;
  name: string;
};

/* Preview videos only mount and play while they are near the viewport.
   Off-screen videos never download or decode — cards show the poster. */
const ProjectPreview = ({ slug, name }: ProjectPreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [needsTap, setNeedsTap] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hasError, setHasError] = useState(false);

  const videoPath = `/projects/${slug}/preview.mp4`;
  const posterPath = `/projects/${slug}/poster.jpg`;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (needsTap) return;
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.play().catch(() => setNeedsTap(true));
    } else {
      video.pause();
    }
  }, [inView, shouldLoad, needsTap]);

  return (
    <div
      ref={containerRef}
      className="relative isolate aspect-video overflow-hidden rounded-xl border border-line bg-ink"
    >
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.16),_transparent_48%),linear-gradient(145deg,_#0f172a,_#020617_70%)] p-5 text-center">
          <span className="mb-3 flex size-10 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
            <FaPlay aria-hidden="true" className="ml-0.5 size-3" />
          </span>
          <p className="text-sm font-medium text-body">{name} preview</p>
          <p className="mt-1 text-xs text-muted">
            Add preview.mp4 to public/projects/{slug}/
          </p>
        </div>
      ) : (
        <>
          <Image
            src={posterPath}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            aria-hidden="true"
          />
          {shouldLoad && (
            <video
              ref={videoRef}
              className="absolute inset-0 size-full object-cover"
              src={videoPath}
              muted
              loop
              playsInline
              preload="none"
              aria-label={`${name} screen recording preview`}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onError={() => setHasError(true)}
            />
          )}
          {shouldLoad && needsTap && !playing && (
            <button
              type="button"
              onClick={() => setNeedsTap(false)}
              aria-label={`Play ${name} preview`}
              className="absolute inset-0 m-auto flex size-12 cursor-pointer items-center justify-center rounded-full border border-accent/40 bg-ink/80 text-accent transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <FaPlay aria-hidden="true" className="ml-0.5 size-3" />
            </button>
          )}
        </>
      )}
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line/50" />
    </div>
  );
};

export default ProjectPreview;
