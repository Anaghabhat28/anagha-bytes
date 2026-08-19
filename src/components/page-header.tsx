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
    <div className="relative overflow-hidden border-b border-border bg-secondary/40 py-14">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="glow-orb -top-24 right-[-4rem] size-72 animate-float md:right-10"
      />
      <div className="container-page relative max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl gradient-text">{title}</h1>
        <div aria-hidden="true" className="accent-rule mt-4" />
        {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
      </div>
    </div>
  );
}

