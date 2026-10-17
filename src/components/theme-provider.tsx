"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";

export const THEMES = [
  "dark-neon",
  "cyberpunk",
  "dracula",
  "nord-light",
  "clean-light",
  "mocha",
  "midnight-purple",
] as const;

export type Theme = (typeof THEMES)[number];

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<{
  theme: Theme;
  cycleTheme: () => void;
}>({ theme: "dark-neon", cycleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

/* Applies data-theme to <html> (runs before paint, no flash) and
   persists the choice. Cat clicks cycle through THEMES in order. */
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark-neon";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return (THEMES as readonly string[]).includes(saved ?? "")
      ? (saved as Theme)
      : "dark-neon";
  });

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* private mode — theme just won't persist */
    }
  }, [theme]);

  const cycleTheme = useCallback(() => {
    setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]);
  }, []);

  /* "T" key cycles themes too. Ignores typing contexts and
     modifier/browser shortcuts (Ctrl+T etc.) and held keys. */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) return;
      if (event.key.toLowerCase() !== "t") return;
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.isContentEditable ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT")
      ) {
        return;
      }
      cycleTheme();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cycleTheme]);

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
