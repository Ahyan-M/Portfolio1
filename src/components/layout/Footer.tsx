import { siteConfig, navLinks } from "@/data/site";
import { UnderlineLink } from "@/components/ui/UnderlineLink";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface section-padding">
      <div className="mx-auto flex max-w-content flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-ink">{siteConfig.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
            {siteConfig.role}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <UnderlineLink
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-wider text-muted"
                >
                  {link.label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
