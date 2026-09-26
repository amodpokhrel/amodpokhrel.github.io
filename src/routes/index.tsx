import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";
import { approvedLinks, campusPhoto, profile } from "@/content/site";
import { researchProjects } from "@/content/research";
import { mediaItems } from "@/content/media";

const title = "Amod K. Pokhrel, PhD | Environmental Health Scientist";
const description =
  "Environmental health scientist and educator at UC Berkeley studying air pollution, household energy, and population health, with a focus on Nepal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const areasOfWork = [
  { label: "Air pollution and exposure science", topic: "Air Pollution" },
  { label: "Clean household energy", topic: "Clean Cooking & Energy" },
  { label: "Environmental epidemiology", topic: "Child Health" },
  { label: "Environmental justice and community health", topic: "Lead & Toxic Exposures" },
];

const selectedSlugs = [
  "clean-cooking-urban-nepal",
  "biogas-program-child-respiratory-infection",
  "air-pollution-school-children",
];

function Index() {
  const selected = selectedSlugs
    .map((slug) => researchProjects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const opEds = mediaItems.filter((m) => m.category === "Op-eds");
  const pbs = mediaItems.find((m) => m.id === "M01");

  return (
    <>
      <img
        src="/images/uc-berkeley-campus.jpg"
        alt={campusPhoto.alt}
        width={1920}
        height={1082}
        fetchPriority="high"
        className="h-[180px] w-full object-cover object-center sm:h-[240px] md:h-[340px]"
      />

      <section className="border-b border-border bg-card">
        <div className="container-page py-12 md:py-16">
          <h1 className="text-3xl md:text-[2.6rem]">{profile.name}</h1>
          <p className="mt-3 font-serif text-lg text-foreground">{profile.descriptor}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.affiliation}</p>
          <span className="rule-gold mt-6" />
          <p className="prose-measure mt-6 text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/research"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Research <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/publications"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-primary px-5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              Read Publications
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/leaders-nepal" className="link-underline">
              LEADERS Nepal
            </Link>
            <Link to="/writing-media" className="link-underline">
              Writing &amp; Media
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Areas of work</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areasOfWork.map((area) => (
              <li key={area.label}>
                <Link
                  to="/research"
                  search={{ topic: area.topic }}
                  className="flex h-full min-h-24 flex-col justify-between rounded-sm border border-border bg-card p-4 transition-colors hover:border-gold"
                >
                  <span className="font-serif text-base text-primary">{area.label}</span>
                  <span className="mt-3 text-xs text-muted-foreground">View projects →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Selected research</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {selected.map((project) => (
              <li key={project.id} className="py-6">
                <Link
                  to="/research/$slug"
                  params={{ slug: project.slug }}
                  className="font-serif text-lg text-primary hover:underline"
                >
                  {project.displayTitle}
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.rolePeriods.map((r) => r.role).join(" · ")} — {project.displayDates}
                </p>
                <p className="prose-measure mt-3 text-[0.975rem]">{project.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Public writing and conversation</h2>
          <ul className="mt-6 space-y-6">
            {opEds.map((item) => (
              <li key={item.id}>
                <ExternalLink href={item.url} className="font-serif text-lg">
                  {item.title}
                </ExternalLink>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.byline} · {item.publisher} · {item.date}
                </p>
                <p className="prose-measure mt-2 text-[0.975rem]">{item.summary}</p>
              </li>
            ))}
          </ul>
          {pbs && (
            <p className="mt-6 text-sm">
              Interview: <ExternalLink href={pbs.url}>{pbs.title}</ExternalLink> —{" "}
              <span className="text-muted-foreground">{pbs.publisher}</span>
            </p>
          )}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="text-2xl">Connect</h2>
          <p className="prose-measure mt-4">{profile.contactCopy}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${profile.email}`} className="link-underline">
              {profile.email}
            </a>
            <ExternalLink href={approvedLinks.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>
      </section>
    </>
  );
}
