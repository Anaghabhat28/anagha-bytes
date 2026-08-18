import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-secondary/40 py-14">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h1>
        {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
      </div>
    </div>
  );
}
