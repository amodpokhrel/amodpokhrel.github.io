import { createFileRoute } from "@tanstack/react-router";
import headshot from "@/assets/amod-pokhrel.jpg.asset.json";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  appointments,
  appointmentsNote,
  biography,
  education,
  expertise,
  fellowships,
  service,
} from "@/content/about";
import { profile } from "@/content/site";

const title = "About — Amod K. Pokhrel, PhD";
const description =
  "Biography, education, academic appointments, expertise, fellowships, and professional service of environmental health scientist Amod K. Pokhrel.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Biography and professional record" />

      <section className="section-y border-b border-border">
        <div className="container-page grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
          <div>
            <img
              src={headshot.url}
              alt={`Portrait of ${profile.shortName}`}
              width={220}
              height={220}
              className="w-40 rounded-sm border border-border object-cover md:w-full"
            />
            <p className="mt-3 text-xs text-muted-foreground">{profile.affiliation}</p>
          </div>
          <div className="prose-measure space-y-5">
            {biography.map((para) => (
              <p key={para.slice(0, 30)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Education</h2>
          <ul className="mt-6 space-y-6">
            {education.map((item) => (
              <li key={item.id} className="border-l-2 border-gold pl-5">
                <p className="font-serif text-lg text-primary">{item.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {item.institution} · {item.year}
                </p>
                <p className="prose-measure mt-2 text-[0.975rem]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Appointments and experience</h2>
          <ol className="mt-6 space-y-0 border-l border-border">
            {appointments.map((item) => (
              <li key={item.id} className="relative py-5 pl-6">
                <span
                  aria-hidden="true"
                  className="absolute top-7 -left-[4.5px] size-2 rounded-full bg-gold"
                />
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {item.dates}
                </p>
                <p className="mt-1 font-serif text-base text-primary">{item.institution}</p>
                <p className="text-[0.975rem]">{item.role}</p>
                {item.note && (
                  <p className="prose-measure mt-1 text-sm text-muted-foreground">{item.note}</p>
                )}
              </li>
            ))}
          </ol>
          <p className="prose-measure mt-6 text-sm text-muted-foreground">{appointmentsNote}</p>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <h2 className="text-2xl">Expertise</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {expertise.map((group) => (
              <div key={group.id}>
                <h3 className="text-base">{group.group}</h3>
                <ul className="mt-2 space-y-1 text-[0.975rem] text-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="text-gold">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl">Fellowships and research support</h2>
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="fellowships">
                <AccordionTrigger className="text-base">View the full list</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3">
                    {fellowships.map((f) => (
                      <li key={f.id} className="text-[0.975rem]">
                        <span className="font-medium text-primary">{f.years}</span> — {f.text}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h2 className="text-2xl">Professional service</h2>
            <ul className="mt-4 space-y-2 text-[0.975rem]">
              {service.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden="true" className="text-gold">
                    —
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Service entries are drawn from the July 2025 CV.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
