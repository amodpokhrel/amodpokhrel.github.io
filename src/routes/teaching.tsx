import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  courses,
  coursesNote,
  mentoring,
  mentoringPeriod,
  presentations,
  presentationsNote,
  teachingIntro,
} from "@/content/teaching";
import { profile } from "@/content/site";

const title = "Teaching — Amod K. Pokhrel";
const description =
  "Courses in environmental health, exposure assessment, and GIS for public health using R, plus mentoring and conference contributions.";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TeachingPage,
});

function TeachingPage() {
  return (
    <>
      <PageHeader eyebrow="Teaching" title="Courses and mentoring" lead={teachingIntro} />

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Courses</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {courses.map((course) => (
              <li key={course.id} className="py-6">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-sm text-gold">{course.code}</span>
                  <h3 className="font-serif text-lg">{course.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {course.institution} · {course.dates} · {course.role}
                </p>
                <p className="prose-measure mt-2 text-[0.975rem]">{course.description}</p>
                {course.cvTitle && course.cvTitle !== course.title && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    CV title: {course.cvTitle}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <p className="prose-measure mt-5 text-sm text-muted-foreground">{coursesNote}</p>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Mentoring</h2>
          <p className="mt-2 text-sm text-muted-foreground">{mentoringPeriod}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {mentoring.map((m) => (
              <li key={m} className="flex gap-2 text-[0.975rem]">
                <span aria-hidden="true" className="text-gold">
                  —
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.975rem]">
            Teaching and mentoring inquiries:{" "}
            <a href={`mailto:${profile.email}`} className="link-underline">
              {profile.email}
            </a>
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="text-2xl">Selected presentations and conference contributions</h2>
          <p className="prose-measure mt-3 text-sm text-muted-foreground">{presentationsNote}</p>
          <Accordion type="single" collapsible className="mt-5">
            <AccordionItem value="presentations">
              <AccordionTrigger className="text-base">
                View all {presentations.length} contributions
              </AccordionTrigger>
              <AccordionContent>
                <ol className="space-y-5">
                  {presentations.map((p) => (
                    <li key={p.id} className="border-l-2 border-border pl-4">
                      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {p.year}
                      </p>
                      <p className="prose-measure mt-1 text-[0.975rem]">{p.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{p.venue}</p>
                      {p.detail && <p className="text-sm text-muted-foreground">{p.detail}</p>}
                      {p.note && <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>}
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
