import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import {
  certifications,
  experienceAreas,
  hackathons,
  internships,
  projects,
} from "@/data/portfolio";

const title = "Experience & Achievements | J Anagha Bhat";
const description =
  "Experience and achievements of J Anagha Bhat: hackathons including the Scilab GUIVerse Hackathon 2026, technical projects, courses, certifications, and cybersecurity activities.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience & achievements"
        title="Experience & achievements"
        intro="I am currently building experience through projects, hackathons, courses, and self-directed technical learning."
      />

      <div className="container-page space-y-16 py-16">
        <section aria-labelledby="building-heading">
          <h2 id="building-heading" className="text-2xl font-semibold text-foreground">
            How I am building experience
          </h2>
          <ul className="mt-5 grid-cards">
            {experienceAreas.map((area) => (
              <li key={area} className="card-surface px-5 py-4 text-sm font-medium text-foreground">
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="hackathons-heading">
          <h2 id="hackathons-heading" className="text-2xl font-semibold text-foreground">
            Hackathons & technical activities
          </h2>
          <ol className="mt-6 space-y-6 border-l border-border pl-6">
            {hackathons.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-1 inline-flex size-6 items-center justify-center rounded-full border border-border bg-card text-accent"
                >
                  <CalendarCheck className="size-3.5" />
                </span>
                <article>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  {item.organization ? (
                    <p className="mt-1 text-sm font-medium text-accent">{item.organization}</p>
                  ) : null}
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  {item.details ? (
                    <ul className="cluster mt-3">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="internship-heading">
          <h2 id="internship-heading" className="text-2xl font-semibold text-foreground">
            Internships
          </h2>
          {internships.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {internships.map((item) => (
                <li key={item.title} className="card-surface p-5">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  {item.organization ? (
                    <p className="mt-1 text-sm font-medium text-accent">{item.organization}</p>
                  ) : null}
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              No internship experience yet. I am actively looking for internship opportunities in
              software development, web development, AI/ML, and cybersecurity.
            </p>
          )}
        </section>

        <section aria-labelledby="projects-summary-heading">
          <h2 id="projects-summary-heading" className="text-2xl font-semibold text-foreground">
            Technical projects
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug} className="card-surface p-5">
                <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/projects"
            className="mt-5 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            View full project details
          </Link>
        </section>

        <section aria-labelledby="courses-heading">
          <h2 id="courses-heading" className="text-2xl font-semibold text-foreground">
            Courses & certifications
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <li key={`${cert.name}-${cert.organization}`} className="card-surface p-5">
                <h3 className="text-base font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.organization}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/certifications"
            className="mt-5 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            View all certifications
          </Link>
        </section>
      </div>
    </>
  );
}
