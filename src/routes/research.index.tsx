import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import {
  methodsNote,
  researchIntro,
  researchProjects,
  researchTopics,
  type ResearchTopic,
} from "@/content/research";

const title = "Research — Amod K. Pokhrel";
const description =
  "Research projects on air pollution, clean cooking and household energy, child health, lead exposure, and environmental monitoring in Nepal.";

type Search = { topic?: string | undefined };

export const Route = createFileRoute("/research/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    topic: typeof search["topic"] === "string" ? search["topic"] : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const { topic } = Route.useSearch();
  const navigate = useNavigate({ from: "/research/" });

  const active = researchTopics.includes(topic as ResearchTopic)
    ? (topic as ResearchTopic)
    : undefined;
  const filtered = active
    ? researchProjects.filter((p) => p.topics.includes(active))
    : researchProjects;

  const setTopic = (next?: string) => {
    void navigate({ search: (): Search => (next ? { topic: next } : {}) });
  };

  return (
    <>
      <PageHeader eyebrow="Research" title="Research projects" lead={researchIntro} />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by topic">
            <button
              type="button"
              onClick={() => setTopic(undefined)}
              aria-pressed={!active}
              className={`min-h-11 rounded-sm border px-4 text-sm transition-colors ${
                !active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-gold"
              }`}
            >
              All topics
            </button>
            {researchTopics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                aria-pressed={active === t}
                className={`min-h-11 rounded-sm border px-4 text-sm transition-colors ${
                  active === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-gold"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
            Showing {filtered.length} of {researchProjects.length} projects
            {active ? ` in ${active}` : ""}.
          </p>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-sm border border-border bg-card p-8 text-center">
              <p>No projects match this filter.</p>
              <button
                type="button"
                onClick={() => setTopic(undefined)}
                className="link-underline mt-3 text-sm"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {filtered.map((project) => (
                <li key={project.id} className="py-7">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <Link
                      to="/research/$slug"
                      params={{ slug: project.slug }}
                      className="font-serif text-xl text-primary hover:underline"
                    >
                      {project.displayTitle}
                    </Link>
                    <span className="text-sm text-muted-foreground">{project.displayDates}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.rolePeriods.map((r) => r.role).join(" · ")}
                    {project.location ? ` · ${project.location}` : ""}
                  </p>
                  <p className="prose-measure mt-3">{project.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.topics.map((t) => (
                      <li
                        key={t}
                        className="rounded-sm border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="section-y border-t border-border bg-card">
        <div className="container-page">
          <h2 className="text-2xl">{methodsNote.heading}</h2>
          <p className="prose-measure mt-3 text-sm text-muted-foreground">{methodsNote.intro}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {methodsNote.items.map((item) => (
              <li key={item} className="flex gap-2 text-[0.975rem]">
                <span aria-hidden="true" className="text-gold">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
