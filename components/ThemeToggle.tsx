"use client";

import { useSyncExternalStore } from "react";

/**
 * Subscribe to changes on <html>'s class attribute so React re-renders
 * whenever the theme class is toggled externally (e.g. by another tab).
 */
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

/** Client snapshot: read the real DOM state. */
function getSnapshot() {
  return document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}

/** Server snapshot: always dark to match the SSR default. */
function getServerSnapshot(): "dark" {
  return "dark";
}

export function ThemeToggle() {
  // useSyncExternalStore is the canonical React 18 way to subscribe to
  // external state. No setState in any effect → no cascading renders.
  // getServerSnapshot returns "dark" so SSR and the first client render agree,
  // eliminating the hydration mismatch.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      suppressHydrationWarning
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="grid h-9 w-9 place-items-center rounded-full hairline text-foreground transition-colors hover:bg-accent"
    >
      {isDark ? (
        // Sun
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // Moon
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
