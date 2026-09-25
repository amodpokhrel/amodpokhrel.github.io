import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "@/components/ExternalLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  manuscriptArchiveNote,
  policyReportsNote,
  publicationCategories,
  publicationTopics,
  publicationYears,
  publications,
  type PublicationCategory,
} from "@/content/publications";
import { approvedLinks } from "@/content/site";

const title = "Publications — Amod K. Pokhrel";
const description =
  "Peer-reviewed articles, a conference paper, policy briefs and technical reports, and CV-listed manuscripts on air pollution, household energy, and health.";

const PER_PAGE = 8;

type Search = {
  category?: string;
  year?: number;
  topic?: string;
  q?: string;
  page?: number;
};

export const Route = createFileRoute("/publications")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category: typeof search.category === "string" ? search.category : undefined,
    year: Number.isFinite(Number(search.year)) && search.year ? Number(search.year) : undefined,
    topic: typeof search.topic === "string" ? search.topic : undefined,
    q: typeof search.q === "string" && search.q ? search.q : undefined,
    page: Number(search.page) > 1 ? Number(search.page) : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/publications" });

  const activeCategory = publicationCategories.includes(search.category as PublicationCategory)
    ? (search.category as PublicationCategory)
    : undefined;

  const filtered = useMemo(() => {
    const q = (search.q ?? "").trim().toLowerCase();
    return publications
      .filter((p) => (activeCategory ? p.category === activeCategory : true))
      .filter((p) => (search.year ? p.year === search.year : true))
      .filter((p) => (search.topic ? p.topics.includes(search.topic) : true))
      .filter((p) =>
        q ? `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(q) : true,
      )
      .sort((a, b) => b.sortYear - a.sortYear || a.title.localeCompare(b.title));
  }, [activeCategory, search.year, search.topic, search.q]);

  const page = search.page ?? 1;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const update = (next: Partial<Search>) => {
    void navigate({
      search: (prev) => {
        const merged = { ...prev, ...next, page: undefined } as Search;
        return Object.fromEntries(
          Object.entries(merged).filter(([, v]) => v !== undefined && v !== ""),
        ) as Search;
      },
    });
  };

  const goPage = (n: number) => {
    void navigate({ search: (prev) => ({ ...prev, page: n > 1 ? n : undefined }) });
  };

  const reset = () => void navigate({ search: {} });

  const hasFilters = Boolean(
    activeCategory || search.year || search.topic || search.q,
  );

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Bibliography"
        lead="Peer-reviewed research, a conference paper, contributions to policy briefs and technical reports, and manuscripts listed in the July 2025 CV."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <FilterButton active={!activeCategory} onClick={() => update({ category: undefined })}>
              All
            </FilterButton>
            {publicationCategories.map((c) => (
              <FilterButton
                key={c}
                active={activeCategory === c}
                onClick={() => update({ category: c })}
              >
                {c}
              </FilterButton>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-end gap-4">
            <div className="min-w-56 flex-1">
              <label htmlFor="pub-search" className="block text-xs font-medium text-muted-foreground">
                Search title, author, or journal
              </label>
              <input
                id="pub-search"
                type="search"
                defaultValue={search.q ?? ""}
                onChange={(e) => update({ q: e.target.value || undefined })}
                placeholder="e.g. cataract, Bhaktapur, Atmosphere"
                className="mt-1 h-11 w-full rounded-sm border border-input bg-card px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="pub-year" className="block text-xs font-medium text-muted-foreground">
                Year
              </label>
              <select
                id="pub-year"
                value={search.year ?? ""}
                onChange={(e) => update({ year: e.target.value ? Number(e.target.value) : undefined })}
                className="mt-1 h-11 rounded-sm border border-input bg-card px-3 text-sm"
              >
                <option value="">All years</option>
                {publicationYears.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pub-topic" className="block text-xs font-medium text-muted-foreground">
                Topic
              </label>
              <select
                id="pub-topic"
                value={search.topic ?? ""}
                onChange={(e) => update({ topic: e.target.value || undefined })}
                className="mt-1 h-11 rounded-sm border border-input bg-card px-3 text-sm"
              >
                <option value="">All topics</option>
                {publicationTopics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            {hasFilters && (
              <button type="button" onClick={reset} className="link-underline h-11 text-sm">
                Reset filters
              </button>
            )}
          </div>

          <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "record" : "records"}
            {totalPages > 1 ? ` · page ${current} of ${totalPages}` : ""}
          </p>

          {activeCategory === "Policy & Reports" && (
            <p className="mt-3 text-sm text-muted-foreground">{policyReportsNote}</p>
          )}
          {activeCategory === "Manuscript Archive" && (
            <p className="mt-3 text-sm text-muted-foreground">
              Manuscripts listed in the July 2025 CV. {manuscriptArchiveNote}
            </p>
          )}

          {pageItems.length === 0 ? (
            <div className="mt-8 rounded-sm border border-border bg-card p-8 text-center">
              <p>No publications match these filters.</p>
              <button type="button" onClick={reset} className="link-underline mt-3 text-sm">
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {pageItems.map((p) => (
                <li key={p.id} className="py-6">
                  <h2 className="prose-measure font-serif text-lg leading-snug">{p.title}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {p.authors} · {p.venue}
                    {p.year ? ` · ${p.year}` : ""}
                  </p>
                  {p.status && (
                    <p className="mt-1.5 inline-block rounded-sm border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                      {p.status}
                    </p>
                  )}
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    {p.url && (
                      <ExternalLink href={p.url}>{p.urlLabel ?? "Read article"}</ExternalLink>
                    )}
                    <Accordion type="single" collapsible className="w-full border-none">
                      <AccordionItem value={p.id} className="border-none">
                        <AccordionTrigger className="justify-start gap-2 py-1 text-sm text-muted-foreground hover:no-underline">
                          Details
                        </AccordionTrigger>
                        <AccordionContent className="pb-1">
                          <dl className="space-y-1 text-sm text-muted-foreground">
                            <div>
                              <dt className="inline font-medium">Category: </dt>
                              <dd className="inline">{p.category}</dd>
                            </div>
                            <div>
                              <dt className="inline font-medium">Topics: </dt>
                              <dd className="inline">{p.topics.join(", ")}</dd>
                            </div>
                            {p.detail && <p>{p.detail}</p>}
                            {p.note && <p>{p.note}</p>}
                            <p className="text-xs">
                              Author labels follow the CV and may be abbreviated; they are not
                              complete author lists.
                            </p>
                          </dl>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => goPage(current - 1)}
                disabled={current === 1}
                className="min-h-11 rounded-sm border border-border px-4 text-sm disabled:opacity-40"
              >
                Previous
              </button>
              <ul className="flex flex-wrap gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <li key={n}>
                    <button
                      type="button"
                      onClick={() => goPage(n)}
                      aria-current={n === current ? "page" : undefined}
                      className={`size-11 rounded-sm border text-sm ${
                        n === current
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card"
                      }`}
                    >
                      {n}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => goPage(current + 1)}
                disabled={current === totalPages}
                className="min-h-11 rounded-sm border border-border px-4 text-sm disabled:opacity-40"
              >
                Next
              </button>
            </nav>
          )}

          <div className="mt-12 rounded-sm border border-border bg-card p-6">
            <h2 className="text-base">Search elsewhere</h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <ExternalLink href={approvedLinks.googleScholarSearch}>
                  Google Scholar publications search
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={approvedLinks.pubmedSearch}>PubMed author search</ExternalLink>
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              These are search links, not a curated profile.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-11 rounded-sm border px-4 text-sm transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-gold"
      }`}
    >
      {children}
    </button>
  );
}
