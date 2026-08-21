import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { certifications } from "@/data/portfolio";

const title = "Certifications & Courses | J Anagha Bhat";
const description =
  "Certifications and courses completed by J Anagha Bhat, including Microsoft Excel on Coursera, MongoDB Skill-a-thon 2026, IBM Exploring Cybersecurity, Infosys Springboard, and Skillsoft training.";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Certifications & courses"
        intro="Courses and certifications I have taken to build my technical foundation."
      />

      <div className="container-page py-16">
        <ul className="grid-cards">
          {certifications.map((cert) => (
            <li key={`${cert.name}-${cert.organization}`}>
              <article className="card-surface-interactive flex h-full flex-col p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-accent"
                >
                  <Award className="size-5" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-foreground">{cert.name}</h2>
                <p className="mt-1 text-sm font-medium text-accent">{cert.organization}</p>
                {cert.date ? (
                  <p className="mt-1 text-sm text-muted-foreground">{cert.date}</p>
                ) : null}
                <div className="mt-4 flex-1" />
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    <ExternalLink aria-hidden="true" className="size-4" />
                    View {cert.name} certificate
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Certificate link to be added.
                  </p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
