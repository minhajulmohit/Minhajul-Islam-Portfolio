import type { ReactNode } from "react";

/* Entrance variants used by the hero. "rise" is transform-only so the
   text paints at the first frame (keeps LCP small); the others also fade. */
export type EnterVariant = "rise" | "fade-up" | "pop";

type EnterProps = {
  variant: EnterVariant;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  children: ReactNode;
};

/* CSS-only entrance for above-the-fold content: it runs from the very
   first paint, never gated on hydration like the scroll-based <Reveal>. */
const Enter = ({
  variant,
  delay = 0,
  className = "",
  as = "div",
  children,
}: EnterProps) => {
  const cls = `enter enter-${variant} ${className}`;
  const style = delay ? { animationDelay: `${delay}ms` } : undefined;

  return as === "span" ? (
    <span className={cls} style={style}>
      {children}
    </span>
  ) : (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default Enter;
