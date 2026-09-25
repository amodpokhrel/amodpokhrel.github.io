import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "@/components/ExternalLink";
import { approvedLinks, profile } from "@/content/site";

const title = "Contact — Amod K. Pokhrel";
const description =
  "Contact Amod K. Pokhrel by email or LinkedIn for research collaboration, teaching, or speaking inquiries, and find his professional profiles.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" lead={profile.contactCopy} />

      <section className="section-y">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl">Direct contact</h2>
            <ul className="mt-4 space-y-3 text-[0.975rem]">
              <li>
                <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                  Email
                </span>
                <a href={`mailto:${profile.email}`} className="link-underline">
                  {profile.email}
                </a>
              </li>
              <li>
                <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                  LinkedIn
                </span>
                <ExternalLink href={approvedLinks.linkedin}>
                  linkedin.com/in/amodpokhrel
                </ExternalLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl">Professional profiles</h2>
            <ul className="mt-4 space-y-3 text-[0.975rem]">
              <li>
                <ExternalLink href={approvedLinks.berkeleyProfile}>
                  UC Berkeley faculty profile
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={approvedLinks.googleScholarSearch}>
                  Google Scholar publications search
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={approvedLinks.pubmedSearch}>PubMed author search</ExternalLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
