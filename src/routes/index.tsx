import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

import heroImage from "@/assets/hero-abstract.jpg";
import { education, profile, projects, skillGroups } from "@/data/portfolio";

const title = "J Anagha Bhat | Computer Science & Engineering Student";
const description =
  "Portfolio of J Anagha Bhat, a Computer Science and Engineering student showcasing projects, technical skills, certifications, and experience in software development, web development, AI, and cybersecurity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const featured = projects.filter((p) => p.featured);
const interests = skillGroups.find((g) => g.title === "Areas of Interest")?.items ?? [];

function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-heading" className="border-b border-border bg-background">
        <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h1
              id="hero-heading"
              className="mt-3 text-4xl font-semibold leading-tight text-foreground sm:text-5xl"
            >
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground">{profile.title}</p>
            <p className="mt-2 text-base text-accent">{profile.tagline}</p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              I am a {education.year} {education.branch} student at {education.institution},
              interested in software development, web development, artificial intelligence, and
              cybersecurity. I build practical projects, take part in hackathons, and keep improving
              my technical skills through hands-on work.
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4" />
              {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View projects
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-input bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Mail aria-hidden="true" className="size-4" />
                Contact me
              </Link>
            </div>

            <ul className="mt-6 flex flex-wrap gap-5 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 hover:underline"
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
                  className="inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 hover:underline"
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

          <figure className="m-0">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
              <img
                src={heroImage}
                alt=""
                width={1200}
                height={1200}
                className="h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  aria-hidden="true"
                  className="font-display text-5xl font-bold text-surface-foreground"
                >
                  JAB
                </p>
              </div>
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Profile photo placeholder — replace with a photo of {profile.name}.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="container-page py-16">
        <h2 id="featured-heading" className="text-2xl font-semibold text-foreground">
          Featured project
        </h2>
        <div className="mt-6 grid items-start gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <article key={project.slug} className="card-surface-interactive overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                width={1024}
                height={640}
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title} — {project.subtitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <Link
                  to="/projects"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  See all projects
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </article>
          ))}

          <article className="card-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Areas of interest</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/skills"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Explore my skills
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
