import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { PageHeader } from "@/components/page-header";
import { profile } from "@/data/portfolio";

const title = "Contact J Anagha Bhat | CSE Student Portfolio";
const description =
  "Contact J Anagha Bhat for internships, projects, or technical opportunities by email, GitHub, or LinkedIn, or through the accessible contact form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name (at least 2 characters)." })
    .max(100, { message: "Name must be less than 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address, for example name@example.com." })
    .max(255, { message: "Email must be less than 255 characters." }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Please enter a subject (at least 3 characters)." })
    .max(150, { message: "Subject must be less than 150 characters." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please enter a message of at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

type FieldName = keyof z.infer<typeof contactSchema>;
type Errors = Partial<Record<FieldName, string>>;

const fieldClass =
  "mt-2 block w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground";

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const nextErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      setSubmitted(false);
      const first = Object.keys(nextErrors)[0];
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
    toast.success("Message ready to send", {
      description: `Thanks, ${result.data.name}. Please also reach me directly at ${profile.email}.`,
    });
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="I am open to internships, project collaborations, and technical opportunities. Send a message or reach me directly."
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <section aria-labelledby="form-heading">
          <h2 id="form-heading" className="text-2xl font-semibold text-foreground">
            Send a message
          </h2>

          <p aria-live="polite" className="mt-3 text-sm text-accent">
            {submitted ? "Your message details were validated successfully." : ""}
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Full name <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                maxLength={100}
                className={fieldClass}
                aria-describedby={errors.name ? "name-error" : "name-hint"}
                aria-invalid={errors.name ? true : undefined}
              />
              <p id="name-hint" className="mt-1 text-xs text-muted-foreground">
                Your first and last name.
              </p>
              {errors.name ? (
                <p id="name-error" role="alert" className="mt-1 text-sm font-medium text-destructive">
                  Error: {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email address <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                maxLength={255}
                className={fieldClass}
                aria-describedby={errors.email ? "email-error" : "email-hint"}
                aria-invalid={errors.email ? true : undefined}
              />
              <p id="email-hint" className="mt-1 text-xs text-muted-foreground">
                I will use this address to reply to you.
              </p>
              {errors.email ? (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-1 text-sm font-medium text-destructive"
                >
                  Error: {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                autoComplete="off"
                maxLength={150}
                className={fieldClass}
                aria-describedby={errors.subject ? "subject-error" : "subject-hint"}
                aria-invalid={errors.subject ? true : undefined}
              />
              <p id="subject-hint" className="mt-1 text-xs text-muted-foreground">
                A short summary, for example "Internship opportunity".
              </p>
              {errors.subject ? (
                <p
                  id="subject-error"
                  role="alert"
                  className="mt-1 text-sm font-medium text-destructive"
                >
                  Error: {errors.subject}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                maxLength={1000}
                className={fieldClass}
                aria-describedby={errors.message ? "message-error" : "message-hint"}
                aria-invalid={errors.message ? true : undefined}
              />
              <p id="message-hint" className="mt-1 text-xs text-muted-foreground">
                Up to 1000 characters.
              </p>
              {errors.message ? (
                <p
                  id="message-error"
                  role="alert"
                  className="mt-1 text-sm font-medium text-destructive"
                >
                  Error: {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Submit message
            </button>
          </form>
        </section>

        <section aria-labelledby="details-heading" className="card-surface h-fit p-6">
          <h2 id="details-heading" className="text-lg font-semibold text-foreground">
            Contact details
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 font-medium text-foreground underline-offset-4 hover:underline"
              >
                <Mail aria-hidden="true" className="size-4 text-accent" />
                Email: {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+91${profile.phone}`}
                className="inline-flex items-center gap-3 font-medium text-foreground underline-offset-4 hover:underline"
              >
                <Phone aria-hidden="true" className="size-4 text-accent" />
                Phone: {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 font-medium text-foreground underline-offset-4 hover:underline"
              >
                <Github aria-hidden="true" className="size-4 text-accent" />
                GitHub: Anaghabhat28
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 font-medium text-foreground underline-offset-4 hover:underline"
              >
                <Linkedin aria-hidden="true" className="size-4 text-accent" />
                LinkedIn: J Anagha Bhat
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Based in {profile.location}.
          </p>
        </section>
      </div>
    </>
  );
}
