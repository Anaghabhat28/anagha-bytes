import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/page-header";
import { skillGroups } from "@/data/portfolio";

const title = "Technical Skills | J Anagha Bhat";
const description =
  "Technical skills of J Anagha Bhat: C, C++, Java, Python, HTML5, CSS, JavaScript, SQL, MongoDB, Git, GitHub, VS Code, Scilab and Microsoft Excel, plus areas of interest such as AI, ML and cybersecurity.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Technical skills"
        intro="Technologies and topics I work with and continue to learn, grouped by category."
      />

      <div className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <section
              key={group.title}
              aria-labelledby={`skill-${group.title.replace(/\s|&/g, "-").toLowerCase()}`}
              className="card-surface-interactive relative overflow-hidden p-6"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-1 font-display text-6xl font-bold text-accent/10"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2
                id={`skill-${group.title.replace(/\s|&/g, "-").toLowerCase()}`}
                className="relative text-lg font-semibold text-foreground"
              >
                {group.title}
              </h2>
              <div aria-hidden="true" className="accent-rule mt-3 w-10" />
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>


        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          These are the technologies and topics I have worked with as part of coursework, projects,
          and self-learning. I am continuing to build depth in each of them.
        </p>
      </div>
    </>
  );
}
