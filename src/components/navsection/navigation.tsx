"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const mdLinks = ["#home", "#skills", "#projects", "#contact"];

const desktopLinkCls =
  "rounded-lg px-2 py-2 text-center text-xs text-heading transition-colors hover:text-accent-2 [&[aria-current='page']]:text-accent-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 sm:px-3 sm:text-sm";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { cycleTheme } = useTheme();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header className="sticky top-[15px] z-50 mx-3 mt-4 sm:mx-6">
      <div className="nav-glass mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-2xl border-b border-line px-3 py-3 sm:px-5">
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-lg text-sm font-semibold tracking-wide text-heading focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Minhajul Islam Mohit, home"
        >
          <Image
            src="/asset/PPN2.jpg"
            alt="Minhajul Islam Mohit"
            width={36}
            height={36}
            className="size-9 rounded-xl border border-accent/30 object-cover"
          />
          <span className="hidden sm:inline">Minhajul Islam</span>
          <span className="sm:hidden">Mohit</span>
        </a>

        {/* md only: reduced links */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex lg:hidden"
        >
          {links
            .filter(({ href }) => mdLinks.includes(href))
            .map(({ label, href }) => (
              <a key={href} href={href} className={desktopLinkCls}>
                {label}
              </a>
            ))}
        </nav>

        {/* lg+: all links (unchanged) */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map(({ label, href }) => (
            <a key={href} href={href} className={desktopLinkCls}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={cycleTheme}
            aria-label="Toggle theme"
            title="Toggle theme (T)"
            className="rounded-xl border border-line bg-surface text-body transition-colors hover:border-accent/30 hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FaSun className="theme-icon-sun size-4" aria-hidden="true" />
            <FaMoon className="theme-icon-moon size-4" aria-hidden="true" />
          </button>

          <a
            href="/asset/Minhajul_Islam_Mohit_CV.pdf"
            download="Minhajul_Islam_Mohit_CV.pdf"
            className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent transition-colors hover:border-accent/60 hover:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
          </a>

          {/* mobile only: hamburger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-xl border border-line bg-surface text-body transition-colors hover:border-accent/30 hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            {open ? (
              <FaTimes aria-hidden="true" className="size-4" />
            ) : (
              <FaBars aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>

        {/* mobile only: dropdown panel */}
        {open && (
          <nav
            aria-label="Mobile navigation"
            className="w-full border-t border-line pt-2 md:hidden"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-body transition-colors hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
