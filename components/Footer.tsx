import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex sm:justify-between">
        <div className="flex min-w-0 items-center gap-2.5">
          <svg viewBox="0 0 200 200" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="82" cy="50" r="10" className="fill-foreground" />
            <path d="M 82 78 L 82 148 L 132 78" className="stroke-foreground" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="lowercase text-foreground">icha.ng</span>
          <span className="ml-3 truncate">© {new Date().getFullYear()} Icha Victory</span>
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <div className="flex items-center gap-5">
            <Link href="/projects" className="hover:text-foreground">Work</Link>
            <Link href="/process" className="hover:text-foreground">Process</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </div>
          <span className="h-4 w-px bg-hairline" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/Ivylegend" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://x.com/Ivy_codes" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="X (formerly Twitter)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/victory-icha" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
