"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";

/* ------------------------- Customize DevPet here -------------------------
 * SPEED        pixels per second the cat walks
 * FRAME_FPS    walk-cycle frames per second
 * PET_SIZE     display size in px (sprite frames are 64px)
 * FOLLOW_RANGE how close the mouse must be to attract the cat
 * MESSAGES     speech-bubble lines, shown in rotation on click/tap
 * HOVER_TEXT   bubble line shown on desktop hover (fine pointers only)
 * ------------------------------------------------------------------------ */
const SPEED = 90;
const FRAME_FPS = 8;
const FRAME_COUNT = 4;
const FRAME_SIZE = 64;
const PET_SIZE = 64;
const FOLLOW_RANGE = 340;
const MESSAGES = [
  "Meow! Keep coding! 🐾",
  "Hello Developer!",
  "Keep building!",
  "Purr-fect code today?",
  "Ship it! 🚀",
];
const HOVER_TEXT = "Psst… click me! 🐾";
const BUBBLE_MS = 2600;
const SIT_MS = 2400;
const SIT_COOL_MS = 12000;

/* Themes where the meteors actually run — keep in sync with the
   particle allowlist in globals.css. The cat reacts (and gets its
   "!" mark) to fast streaks in exactly these themes. */
const METEOR_THEMES = ["dark-neon", "clean-light", "midnight-purple"];

type Align = "left" | "center" | "right";

type Meteor = { delay: number; dur: number };

const DevPet = () => {
  const { cycleTheme, theme } = useTheme();
  const trackRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLButtonElement>(null);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [facing, setFacing] = useState<1 | -1>(-1);
  const [sitting, setSitting] = useState(false);
  const [bubble, setBubble] = useState<string | null>(null);
  const [showMark, setShowMark] = useState(false);
  const [stunned, setStunned] = useState(false);
  const [align, setAlign] = useState<Align>("center");
  const [still] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const live = useRef({
    x: 0,
    dir: 1 as 1 | -1,
    frame: 0,
    acc: 0,
    msgIndex: 0,
    targetX: null as number | null,
    mouseX: -9999,
    mouseY: -9999,
    lastMove: 0,
    coolUntil: 0,
    tick: 0,
    mark: false,
    resumeAt: 0,
    meteors: [] as Meteor[],
  });
  const sittingRef = useRef(false);
  const themeRef = useRef(theme);

  useEffect(() => {
    sittingRef.current = sitting;
  }, [sitting]);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  const showBubble = useCallback((text: string) => {
    setBubble(text);
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(null), BUBBLE_MS);
  }, []);

  const hideBubble = useCallback(() => {
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    setBubble(null);
  }, []);

  /* Movement + walk-cycle loop. Pauses when the tab is hidden. */
  useEffect(() => {
    if (still) return;
    const s = live.current;
    let frame = 0;
    let prev = performance.now();
    let running = true;

    const onPoint = (x: number, y: number) => {
      /* A real move (not hand tremor) re-engages the cat immediately,
         cancelling any cooldown. */
      if (Math.hypot(x - s.mouseX, y - s.mouseY) > 50) s.coolUntil = 0;
      s.mouseX = x;
      s.mouseY = y;
      s.lastMove = performance.now();
    };
    const onMouse = (e: MouseEvent) => onPoint(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) onPoint(t.clientX, t.clientY);
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    /* Fast-meteor schedule, read from the live CSS values themselves —
       so it stays correct whatever delays/durations are set in
       globals.css. Progress runs on our own clock anchored at mount. */
    const parseT = (v: string) => {
      const first = v.split(",")[0].trim();
      return first.endsWith("ms") ? parseFloat(first) : parseFloat(first) * 1000;
    };
    s.meteors = Array.from(
      document.querySelectorAll(".shooting-star-fast"),
    ).map((el) => {
      const cs = getComputedStyle(el);
      return {
        delay: parseT(cs.animationDelay),
        dur: parseT(cs.animationDuration) || 18000,
      };
    });
    let t0 = performance.now();
    let wasOnMeteorTheme = METEOR_THEMES.includes(themeRef.current);

    const fastMidScreen = (now: number) => {
      /* Meteors run only in METEOR_THEMES (see the allowlist in
         globals.css) — and none animate under reduced motion. */
      const onMeteorTheme = METEOR_THEMES.includes(themeRef.current);
      /* Entering a meteor theme from one without them restarts the CSS
         animations — re-anchor our clock so the reaction stays in sync. */
      if (onMeteorTheme && !wasOnMeteorTheme) t0 = now;
      wasOnMeteorTheme = onMeteorTheme;
      if (!onMeteorTheme) return false;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return false;
      const t = now - t0;
      for (const m of s.meteors) {
        if (t < m.delay || !m.dur) continue;
        /* Fast streak crosses in keyframes 1% -> 3.8%, with slack. */
        const p = ((t - m.delay) % m.dur) / m.dur;
        if (p >= 0.014 && p <= 0.045) return true;
      }
      return false;
    };

    const place = (frameX: number) => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${s.x.toFixed(1)}px, 0, 0)`;
      }
      if (spriteRef.current) {
        spriteRef.current.style.backgroundPosition = `-${frameX * FRAME_SIZE}px 0px`;
      }
      const vw = window.innerWidth;
      const next: Align =
        s.x < 110 ? "left" : s.x > vw - 110 - PET_SIZE ? "right" : "center";
      setAlign((a) => (a === next ? a : next));
    };

    const loop = (now: number) => {
      if (!running) return;
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      const vw = window.innerWidth;
      const minX = 0;
      const maxX = Math.max(vw - PET_SIZE, 1);

      s.tick = (s.tick + 1) % 12;
      if (s.tick === 0) {
        const on = fastMidScreen(now);
        if (on !== s.mark) {
          s.mark = on;
          setShowMark(on);
          /* Meteor gone → stay stunned 1s more before walking. */
          if (!on) s.resumeAt = now + 1000;
          if (on) setStunned(true);
        }
      }

      if (!sittingRef.current && !s.mark && now >= s.resumeAt) {
        setStunned((v) => (v ? false : v));
        /* A resting cursor near the bottom always attracts the cat;
           after each visit it walks free for a while, then comes back. */
        const mouseFresh = now - s.lastMove < 2500;
        const mouseLow = s.mouseY > window.innerHeight - 220;
        const cooled = now > s.coolUntil;
        if (
          (mouseFresh || mouseLow) &&
          cooled &&
          Math.abs(s.mouseX - (s.x + PET_SIZE / 2)) < FOLLOW_RANGE
        ) {
          const want = Math.min(
            Math.max(s.mouseX - PET_SIZE / 2, minX),
            maxX,
          );
          if (Math.abs(want - s.x) > 28) s.targetX = want;
        }
        if (s.targetX !== null) {
          if (Math.abs(s.targetX - s.x) <= 10) {
            s.targetX = null;
            /* Arrived: sit, meow, and stare at the mouse. */
            setFacing(s.mouseX >= s.x + PET_SIZE / 2 ? 1 : -1);
            showBubble(MESSAGES[s.msgIndex % MESSAGES.length]);
            s.msgIndex += 1;
            if (!sittingRef.current) {
              setSitting(true);
              if (sitTimer.current) clearTimeout(sitTimer.current);
              sitTimer.current = setTimeout(() => {
                setSitting(false);
                s.coolUntil = performance.now() + SIT_COOL_MS;
              }, SIT_MS);
            }
          } else {
            s.dir = s.targetX > s.x ? 1 : -1;
          }
        }
        s.x += s.dir * SPEED * dt;
        if (s.x <= minX) {
          s.x = minX;
          s.dir = 1;
          s.targetX = null;
        } else if (s.x >= maxX) {
          s.x = maxX;
          s.dir = -1;
          s.targetX = null;
        }
        setFacing((f) => (f === s.dir ? f : s.dir));
        s.acc += dt;
        const nextFrame = Math.floor(s.acc * FRAME_FPS) % FRAME_COUNT;
        if (nextFrame !== s.frame) s.frame = nextFrame;
        place(s.frame);
      } else {
        /* Click-sit shows frame 0. */
        place(sittingRef.current ? 0 : s.frame);
      }
      frame = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        prev = performance.now();
        frame = requestAnimationFrame(loop);
      }
    };

    place(s.frame);
    frame = requestAnimationFrame(loop);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
      if (sitTimer.current) clearTimeout(sitTimer.current);
    };
  }, [still, showBubble]);

  /* Click/tap: next theme + sit + speech bubble, then resume walking. */
  const handlePet = () => {
    cycleTheme();
    const s = live.current;
    showBubble(MESSAGES[s.msgIndex % MESSAGES.length]);
    s.msgIndex += 1;
    if (still) return;
    setSitting(true);
    if (sitTimer.current) clearTimeout(sitTimer.current);
    sitTimer.current = setTimeout(() => {
      setSitting(false);
      s.coolUntil = performance.now() + SIT_COOL_MS;
    }, SIT_MS);
  };

  const handleHover = () => {
    if (still) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    showBubble(HOVER_TEXT);
  };

  /* Sprite art faces left natively; flip when walking right. */
  const scaleX = facing === 1 ? -1 : 1;

  return (
    <div className="pointer-events-none fixed inset-x-0 -bottom-4 z-30">
      <div
        ref={trackRef}
        className="relative"
        style={{ width: `${PET_SIZE}px`, height: `${PET_SIZE}px` }}
      >
        {showMark && !sitting && !bubble && (
          <div
            aria-hidden="true"
            className="devpet-pop pointer-events-none absolute -top-9 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border border-amber-300/50 bg-ink/95 text-sm font-bold text-amber-300 shadow-lg shadow-amber-950/40"
          >
            !
          </div>
        )}
        {bubble && (
          <div
            role="status"
            aria-live="polite"
            className={`devpet-pop pointer-events-none absolute -top-2 w-max max-w-[calc(100vw-2rem)] -translate-y-full rounded-xl border border-accent/25 bg-ink/95 px-3 py-2 text-xs font-medium whitespace-normal text-accent shadow-lg shadow-accent/40 backdrop-blur ${
              align === "left"
                ? "left-0"
                : align === "right"
                  ? "right-0"
                  : "left-1/2 -translate-x-1/2"
            }`}
          >
            {bubble}
          </div>
        )}
        <button
          ref={spriteRef}
          type="button"
          onClick={handlePet}
          onMouseEnter={handleHover}
          onMouseLeave={hideBubble}
          onKeyDown={(e) => {
            if (e.key === "Escape") hideBubble();
          }}
          aria-label="Developer pet cat — activate for a message"
          className="pixelated pointer-events-auto block cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          style={{
            width: `${PET_SIZE}px`,
            height: `${PET_SIZE}px`,
            backgroundImage: `url(${sitting || still || stunned ? "/pets/cat-sit.png" : "/pets/cat-walk.png"})`,
            backgroundRepeat: "no-repeat",
            transform: `scaleX(${scaleX})`,
          }}
        />
      </div>
    </div>
  );
};

export default DevPet;
