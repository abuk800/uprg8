import { Container } from "@/components/ui/section";
import { IMG } from "@/lib/images";

const NAV = [
  { href: "#situation", label: "Ihre Situation" },
  { href: "#vorgehen", label: "Unser Vorgehen" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

const MORE = [
  { href: "https://www.linkedin.com/company/upgr8-gmbh/", label: "LinkedIn", external: true },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

const linkClass =
  "block py-1 text-[12px] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:text-[#8C8B89]";

/** Aufgeteilter Footer: Navigation links, Kontakt rechts, darunter die Wortmarke über die volle Breite. */
export function Footer() {
  return (
    <footer className="bg-black pb-24 pt-16 text-white md:pb-0 md:pt-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <nav aria-label="Footer">
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6">
              {MORE.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass} {...(l.external ? { rel: "noopener" } : {})}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="max-w-[300px] text-[12px] uppercase leading-relaxed tracking-[0.12em] text-white">
              Gemeinsam von der Innensicht zum Handeln.
            </p>
            <a href="tel:+436641441492" className={`${linkClass} mt-6`}>
              Erstgespräch buchen
            </a>
            <address className="mt-6 space-y-1 text-[12px] uppercase not-italic leading-relaxed tracking-[0.12em] text-[#A8A7A5]">
              <p>Upgr8 GmbH</p>
              <p>Aschergasse 25/2 · 1130 Wien</p>
              <p>
                <a href="tel:+436641441492" className="transition-colors hover:text-white">+43 664 144 1492</a>
              </p>
              <p>
                <a href="mailto:getyour@upgr8.org" className="break-all transition-colors hover:text-white">getyour@upgr8.org</a>
              </p>
            </address>
          </div>
        </div>

        {/* Wortmarke über die volle Breite */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.logo}
          alt="upgr8"
          width={750}
          height={273}
          loading="lazy"
          className="mt-16 h-auto w-full invert md:mt-24"
        />

        <div className="mt-8 flex items-center justify-between border-t border-white/15 py-5 text-[11px] uppercase tracking-[0.14em] text-[#A8A7A5]">
          <p>© 2026 Upgr8 GmbH</p>
        </div>
      </Container>
    </footer>
  );
}
