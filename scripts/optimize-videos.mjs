#!/usr/bin/env node
/**
 * Re-encodes project preview videos for fast, small web playback.
 *
 * Usage:
 *   npm run optimize:videos            # every project with a preview.mp4
 *   npm run optimize:videos -- fitlog  # only the given slugs
 *
 * For each public/projects/<slug>/preview.mp4 this:
 *   - keeps the source resolution, frame rate and audio (no visual loss)
 *   - re-encodes the video with x264 CRF 22 + preset slow
 *   - adds +faststart so metadata loads instantly and playback can start
 *   - extracts the first frame as poster.jpg (shown before the video plays)
 *
 * Requires the dev-only `ffmpeg-static` package (npm i -D ffmpeg-static).
 */
import { execFileSync } from "node:child_process";
import {
  existsSync,
  readdirSync,
  renameSync,
  statSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectsDir = join(root, "public", "projects");

const slugs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(projectsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

const mb = (bytes) => `${(bytes / 1e6).toFixed(2)} MB`;

let optimized = 0;

for (const slug of slugs) {
  const dir = join(projectsDir, slug);
  const input = join(dir, "preview.mp4");

  if (!existsSync(input)) {
    console.log(`skip ${slug}: no preview.mp4`);
    continue;
  }

  const tmp = join(dir, "preview.tmp.mp4");
  const poster = join(dir, "poster.jpg");
  const before = statSync(input).size;

  console.log(`encoding ${slug} ...`);
  execFileSync(
    ffmpegPath,
    [
      "-y",
      "-hide_banner",
      "-loglevel",
      "error",
      "-i",
      input,
      "-c:v",
      "libx264",
      "-crf",
      "22",
      "-preset",
      "slow",
      "-pix_fmt",
      "yuv420p",
      "-c:a",
      "copy",
      "-movflags",
      "+faststart",
      tmp,
    ],
    { stdio: "inherit" },
  );

  execFileSync(
    ffmpegPath,
    [
      "-y",
      "-hide_banner",
      "-loglevel",
      "error",
      "-ss",
      "0.3",
      "-i",
      tmp,
      "-frames:v",
      "1",
      "-q:v",
      "3",
      poster,
    ],
    { stdio: "inherit" },
  );

  renameSync(tmp, input);
  optimized += 1;
  console.log(`  ${slug}: ${mb(before)} -> ${mb(statSync(input).size)}`);
}

console.log(`done (${optimized} video${optimized === 1 ? "" : "s"} optimized)`);
