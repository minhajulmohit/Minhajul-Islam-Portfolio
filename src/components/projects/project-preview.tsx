"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

type ProjectPreviewProps = {
  slug: string;
  name: string;
};

const ProjectPreview = ({ slug, name }: ProjectPreviewProps) => {
  const [hasVideo, setHasVideo] = useState(true);
  const videoPath = `/projects/${slug}/preview.mp4`;

  return (
    <div
      className="relative isolate aspect-video overflow-hidden rounded-xl border border-line bg-ink"
    >
      {hasVideo ? (
        <video
          className="absolute inset-0 size-full object-cover"
          src={videoPath}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${name} screen recording preview`}
          onError={() => setHasVideo(false)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.16),_transparent_48%),linear-gradient(145deg,_#0f172a,_#020617_70%)] p-5 text-center">
          <span className="mb-3 flex size-10 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
            <FaPlay aria-hidden="true" className="ml-0.5 size-3" />
          </span>
          <p className="text-sm font-medium text-body">{name} preview</p>
          <p className="mt-1 text-xs text-muted">
            Add preview.mp4 to public/projects/{slug}/
          </p>
        </div>
      )}
      <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line/50" />
    </div>
  );
};

export default ProjectPreview;
