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
          {skillGroups.map((group) => (
            <section
              key={group.title}
              aria-labelledby={`skill-${group.title.replace(/\s|&/g, "-").toLowerCase()}`}
              className="card-surface-interactive p-6"
            >
              <h2
                id={`skill-${group.title.replace(/\s|&/g, "-").toLowerCase()}`}
                className="text-lg font-semibold text-foreground"
              >
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
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
