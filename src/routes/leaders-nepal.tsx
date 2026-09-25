import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "@/components/ExternalLink";
import {
  documentedWork,
  leaders,
  myCollaboration,
  upcomingEmptyState,
  upcomingProjects,
  workAreas,
} from "@/content/leaders";

const title = "LEADERS Nepal — Amod K. Pokhrel";
const description =
  "An overview of LEADERS Nepal, its documented environmental health and community work, and Amod K. Pokhrel's collaborations with the organization.";

export const Route = createFileRoute("/leaders-nepal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: LeadersPage,
});

function LeadersPage() {
  return (
    <>
      <PageHeader eyebrow="LEADERS Nepal" title={leaders.name} lead={leaders.intro}>
        <p className="mt-4 text-sm text-muted-foreground">{leaders.expandedName}</p>
      </PageHeader>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Work summary</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workAreas.map((area) => (
              <li
                key={area.id}
                className="rounded-sm border border-border bg-card p-5 border-t-2 border-t-leaders"
              >
                <h3 className="text-base">{area.title}</h3>
                <p className="mt-2 text-[0.975rem] text-muted-foreground">{area.text}</p>
              </li>
            ))}
          </ul>
          <p className="prose-measure mt-6 text-sm text-muted-foreground">
            This is an organizational overview. Not every LEADERS Nepal project was conducted or
            led by me.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {leaders.links.map((l) => (
              <li key={l.url}>
                <ExternalLink href={l.url}>{l.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">My work with LEADERS Nepal</h2>
          <ul className="mt-6 space-y-5">
            {myCollaboration.map((c) => (
              <li key={c.id} className="border-l-2 border-leaders pl-5">
                <p className="prose-measure">{c.text}</p>
                {c.projectSlug && (
                  <Link
                    to="/research/$slug"
                    params={{ slug: c.projectSlug }}
                    className="link-underline mt-1.5 inline-block text-sm"
                  >
                    View project record
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Documented work</h2>
          <p className="prose-measure mt-3 text-sm text-muted-foreground">
            The official site's “ongoing” category contains legacy material without reliable
            current dates, so these are presented as documented work rather than current projects.
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {documentedWork.map((w) => (
              <li key={w.id} className="py-5">
                <h3 className="font-serif text-lg">{w.title}</h3>
                <p className="prose-measure mt-1.5 text-[0.975rem]">{w.text}</p>
                <ExternalLink href={w.url} className="mt-2 inline-block text-sm">
                  Source at LEADERS Nepal
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="text-2xl">Upcoming projects</h2>
          {upcomingProjects.length === 0 ? (
            <div className="mt-5 rounded-sm border border-dashed border-border bg-card p-8">
              <p className="text-muted-foreground">{upcomingEmptyState}</p>
            </div>
          ) : (
            <ul className="mt-6 space-y-5">
              {upcomingProjects.map((p) => (
                <li key={p.id} className="rounded-sm border border-border bg-card p-5">
                  <h3 className="font-serif text-lg">{p.title}</h3>
                  <p className="mt-1.5 text-[0.975rem]">{p.summary}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <ExternalLink href={leaders.links[0]!.url}>Visit LEADERS Nepal</ExternalLink>
            <a href={`mailto:${leaders.email}`} className="link-underline">
              Organizational inquiries: {leaders.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
