import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("link-underline inline-flex items-baseline gap-0.5", className)}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 self-center opacity-70" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
