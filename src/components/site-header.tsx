import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const linkBase =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";
const activeClass = "bg-secondary text-foreground";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display text-base font-semibold tracking-tight text-foreground"
          aria-label={`${profile.name} — home`}
        >
          {profile.name}
          <span className="sr-only"> — home</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={linkBase}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: cn(linkBase, activeClass), "aria-current": "page" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cluster">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Main navigation"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(linkBase, "block min-h-11 leading-7")}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{
                    className: cn(linkBase, activeClass, "block min-h-11 leading-7"),
                    "aria-current": "page",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
