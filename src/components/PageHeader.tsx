import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-card">
      <div className="container-page py-12 md:py-16">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-3xl md:text-4xl">{title}</h1>
        <span className="rule-gold mt-5" />
        {lead && <p className="prose-measure mt-5 text-muted-foreground">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
