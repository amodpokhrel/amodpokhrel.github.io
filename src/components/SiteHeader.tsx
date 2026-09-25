import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-serif text-lg font-semibold tracking-tight text-primary"
        >
          {profile.shortName}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{
                    className:
                      "text-primary after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-gold",
                  }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="relative inline-flex items-center rounded-sm px-3 py-2 text-sm transition-colors hover:text-primary hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-sm border border-primary px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main (mobile)"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="container-page py-2">
            {[...navItems, { label: "Contact", to: "/contact" as const }].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary border-l-2 border-gold" }}
                  inactiveProps={{ className: "text-foreground border-l-2 border-transparent" }}
                  className="flex min-h-11 items-center px-3 py-2.5 text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
