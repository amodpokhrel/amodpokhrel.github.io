import { Link } from "@tanstack/react-router";
import { ExternalLink } from "@/components/ExternalLink";
import { approvedLinks, campusPhoto, navItems, profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-base font-semibold text-primary">{profile.shortName}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Personal professional website. Not an official University of California publication.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">Pages</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
            {[...navItems, { label: "Contact", to: "/contact" as const }].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">Connect</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline">
                {profile.email}
              </a>
            </li>
            <li>
              <ExternalLink href={approvedLinks.linkedin}>LinkedIn</ExternalLink>
            </li>
            <li>
              <ExternalLink href={approvedLinks.berkeleyProfile}>
                UC Berkeley faculty profile
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            Campus photograph by {campusPhoto.photographer},{" "}
            <ExternalLink href={campusPhoto.licenseUrl}>{campusPhoto.rights}</ExternalLink>.{" "}
            <ExternalLink href={campusPhoto.sourcePage}>Source</ExternalLink>
          </p>
          <p>© {new Date().getFullYear()} Amod K. Pokhrel</p>
        </div>
      </div>
    </footer>
  );
}
