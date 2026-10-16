"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealVariant =
  | "from-left"
  | "from-right"
  | "from-top"
  | "from-bottom"
  | "from-top-left"
  | "from-top-right"
  | "from-bottom-left"
  | "from-bottom-right"
  | "zoom-in";

type RevealProps = {
  variant: RevealVariant;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  children: ReactNode;
};

/* Fades/slides children in every time they scroll into view.
   Any `.reveal-item` inside appears after, with its own delay. */
const Reveal = ({
  variant,
  delay = 0,
  className = "",
  as = "div",
  children,
}: RevealProps) => {
  const elRef = useRef<HTMLElement | null>(null);
  const setRef = (node: HTMLElement | null) => {
    elRef.current = node;
  };
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    /* Reduced motion stays visible — no observing needed. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* Re-triggers every time the section enters or leaves the view. */
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `reveal reveal-${variant}${visible ? " is-visible" : ""} ${className}`;

  return as === "span" ? (
    <span
      ref={setRef}
      className={cls}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </span>
  ) : (
    <div
      ref={setRef}
      className={cls}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
