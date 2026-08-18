import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/page-header";
import { education, hackathons, profile, skillGroups } from "@/data/portfolio";

const title = "About J Anagha Bhat | CSE Student Portfolio";
const description =
  "About J Anagha Bhat — a 3rd-year Computer Science and Engineering student at Canara Engineering College, Bantwal, with interests in software development, web development, AI/ML, and cybersecurity.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const interests = skillGroups.find((g) => g.title === "Areas of Interest")?.items ?? [];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About me"
        intro={`${profile.title} at ${education.institution}, currently in the ${education.year}.`}
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-12">
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-2xl font-semibold text-foreground">
              Introduction
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a 3rd-year Computer Science and Engineering student at Canara Engineering
                College with an interest in software development, web development, artificial
                intelligence, cybersecurity, and emerging technologies.
              </p>
              <p>
                I enjoy learning new technologies, building practical projects, participating in
                hackathons, and improving my technical skills through hands-on experience.
              </p>
              <p>
                I am currently developing my skills in programming, web development, AI/ML,
                cybersecurity, data structures, databases, and software development.
              </p>
            </div>
          </section>

          <section aria-labelledby="journey-heading">
            <h2 id="journey-heading" className="text-2xl font-semibold text-foreground">
              Technical journey
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                My learning so far has come from coursework, self-study, and building things end to
                end. Programming fundamentals in C, C++, Java, and Python gave me a base for data
                structures and algorithms, while HTML, CSS, and JavaScript let me turn ideas into
                working web pages.
              </p>
              <p>
                Alongside that, I work with SQL and MongoDB for data, use Git and GitHub to manage
                my code, and continue exploring AI/ML and cybersecurity concepts through courses and
                practical activities.
              </p>
            </div>
          </section>

          <section aria-labelledby="hackathon-heading">
            <h2 id="hackathon-heading" className="text-2xl font-semibold text-foreground">
              Hackathons and project experience
            </h2>
            <ul className="mt-4 space-y-4">
              {hackathons.map((item) => (
                <li key={item.title} className="card-surface p-5">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  {item.organization ? (
                    <p className="mt-1 text-sm font-medium text-accent">{item.organization}</p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  {item.details ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
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
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside aria-labelledby="aside-heading" className="space-y-8">
          <h2 id="aside-heading" className="sr-only">
            Education and interests
          </h2>

          <section aria-labelledby="education-heading" className="card-surface p-6">
            <h3 id="education-heading" className="text-lg font-semibold text-foreground">
              Education
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-medium text-foreground">Institution</dt>
                <dd className="text-muted-foreground">{education.institution}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Degree</dt>
                <dd className="text-muted-foreground">{education.degree}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Branch</dt>
                <dd className="text-muted-foreground">{education.branch}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Year</dt>
                <dd className="text-muted-foreground">{education.year}</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="interest-heading" className="card-surface p-6">
            <h3 id="interest-heading" className="text-lg font-semibold text-foreground">
              Areas of interest
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </>
  );
}
