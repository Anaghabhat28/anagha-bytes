import { Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.title} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-4 text-sm">
          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              href={`mailto:${profile.email}`}
            >
              <Mail aria-hidden="true" className="size-4" />
              Email {profile.name}
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github aria-hidden="true" className="size-4" />
              GitHub profile
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin aria-hidden="true" className="size-4" />
              LinkedIn profile
            </a>
          </li>
        </ul>
      </div>
      
    </footer>
  );
}
