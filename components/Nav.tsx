"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/projects", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass" : "border border-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
            <svg viewBox="0 0 200 200" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="82" cy="50" r="10" className="fill-foreground" />
              <path d="M 82 78 L 82 148 L 132 78" className="stroke-foreground" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="lowercase">icha.ng</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={`transition-colors hover:text-foreground ${
                  pathname === l.to ? "text-foreground" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Work with me
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
