import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { projects } from "@/data/portfolio";

const title = "Projects | J Anagha Bhat";
const description =
  "Projects by J Anagha Bhat, including GraphXplore (a Scilab graph theory visualizer), Anu's Kitchen recipe book website, and an accessible semantic HTML5 personal portfolio.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        intro="A selection of projects I have built while learning software and web development."
      />

      <div className="container-page py-16">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <article className="card-surface-interactive group flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-surface/90 font-display text-sm font-bold text-surface-foreground"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
                  <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-foreground">
                    Technologies
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="chip text-xs">
                        {tech}
                      </li>
                    ))}
                  </ul>


                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <Github aria-hidden="true" className="size-4" />
                        {project.title} on GitHub
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Repository link not available yet.
                      </p>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-input bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                      >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        Live demo of {project.title}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
