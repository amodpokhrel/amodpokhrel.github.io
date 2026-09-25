import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug } from "@/content/research";

export const Route = createFileRoute("/research/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Amod K. Pokhrel" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.project.displayTitle} — Research — Amod K. Pokhrel`;
    const d = loaderData.project.summary;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="container-page py-20">
      <h1 className="text-2xl">Project not found</h1>
      <p className="mt-3 text-muted-foreground">This research record doesn't exist.</p>
      <Link to="/research" className="link-underline mt-5 inline-block">
        Back to all research
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <article>
      <header className="border-b border-border bg-card">
        <div className="container-page py-12 md:py-16">
          <Link to="/research" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-4" /> All research
          </Link>
          <h1 className="mt-5 text-3xl md:text-4xl">{project.displayTitle}</h1>
          <span className="rule-gold mt-5" />
          <p className="prose-measure mt-5 text-muted-foreground">{project.fullTitle}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.topics.map((t) => (
              <li
                key={t}
                className="rounded-sm border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="container-page grid gap-12 py-12 md:grid-cols-[1fr_320px]">
        <div className="prose-measure space-y-6">
          <p className="text-lg">{project.summary}</p>
          {project.design && (
            <div>
              <h2 className="text-lg">Design</h2>
              <p className="mt-1">{project.design}</p>
            </div>
          )}
          {project.relatedOutputs && project.relatedOutputs.length > 0 && (
            <div>
              <h2 className="text-lg">Related outputs</h2>
              <ul className="mt-2 space-y-1">
                {project.relatedOutputs.map((o) => (
                  <li key={o} className="flex gap-2">
                    <span aria-hidden="true" className="text-gold">
                      —
                    </span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">
                See the{" "}
                <Link to="/publications" className="link-underline">
                  Publications page
                </Link>{" "}
                for full citations.
              </p>
            </div>
          )}
          {project.datesNote && (
            <p className="text-sm text-muted-foreground">{project.datesNote}</p>
          )}
        </div>

        <aside className="space-y-6 rounded-sm border border-border bg-card p-6 text-sm">
          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Dates
            </h2>
            <p className="mt-1.5">{project.displayDates}</p>
            {project.ongoingNote && (
              <p className="mt-1 text-muted-foreground">{project.ongoingNote}</p>
            )}
          </div>
          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Role
            </h2>
            <ul className="mt-1.5 space-y-1">
              {project.rolePeriods.map((r) => (
                <li key={r.role}>
                  {r.role} <span className="text-muted-foreground">· {r.dates}</span>
                </li>
              ))}
            </ul>
          </div>
          {project.location && (
            <div>
              <h2 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                Location
              </h2>
              <p className="mt-1.5">{project.location}</p>
            </div>
          )}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
              Funding and partners
            </h2>
            <ul className="mt-1.5 space-y-2">
              {project.institutions.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <ul className="mt-3 space-y-2">
              {project.funding.map((f) => (
                <li key={f.source}>
                  <span>{f.source}</span>
                  {f.grant && (
                    <span className="block text-muted-foreground">Grant {f.grant}</span>
                  )}
                  {f.total && <span className="block text-muted-foreground">{f.total}</span>}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Amounts are total project costs reported in the July 2025 CV, not personal awards.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
