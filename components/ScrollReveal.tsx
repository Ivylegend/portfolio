import type { ReactNode } from "react";

export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className ? `scroll-reveal ${className}` : "scroll-reveal"}>{children}</div>;
}
