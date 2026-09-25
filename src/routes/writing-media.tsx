import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "@/components/ExternalLink";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mediaCategories, mediaIntro, mediaItems } from "@/content/media";

const title = "Writing & Media — Amod K. Pokhrel";
const description =
  "Op-eds on climate justice and diaspora policy, a PBS Energy Switch interview, documentary participation, and coverage of research on household energy and child health.";

export const Route = createFileRoute("/writing-media")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WritingMediaPage,
});

function WritingMediaPage() {
  return (
    <>
      <PageHeader eyebrow="Writing & Media" title="Public writing and appearances" lead={mediaIntro} />

      <section className="section-y">
        <div className="container-page">
          <Tabs defaultValue="Op-eds">
            <TabsList className="h-auto flex-wrap bg-secondary">
              {mediaCategories.map((c) => (
                <TabsTrigger key={c} value={c} className="min-h-10 px-4 text-sm">
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>

            {mediaCategories.map((c) => {
              const items = mediaItems.filter((m) => m.category === c);
              return (
                <TabsContent key={c} value={c} className="mt-6">
                  <ul className="divide-y divide-border border-y border-border">
                    {items.map((item) => (
                      <li key={item.id} className="py-7">
                        <h2 className="prose-measure font-serif text-xl leading-snug">
                          {item.title}
                        </h2>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                          {item.byline ? `${item.byline} · ` : ""}
                          {item.publisher}
                          {item.date ? ` · ${item.date}` : ""}
                        </p>
                        {item.detail && (
                          <p className="text-sm text-muted-foreground">{item.detail}</p>
                        )}
                        <p className="prose-measure mt-3">{item.summary}</p>
                        {item.tags && (
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((t) => (
                              <li
                                key={t}
                                className="rounded-sm border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <ExternalLink href={item.url}>{item.urlLabel}</ExternalLink>
                          {item.secondaryUrl && item.secondaryLabel && (
                            <ExternalLink href={item.secondaryUrl}>
                              {item.secondaryLabel}
                            </ExternalLink>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </>
  );
}
