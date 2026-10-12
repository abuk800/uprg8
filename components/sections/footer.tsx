import { Container } from "@/components/ui/section";
import { IMG } from "@/lib/images";

const LINKS = [
  { href: "#situation", label: "Ihre Situation" },
  { href: "#vorgehen", label: "Unser Vorgehen" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="bg-black pb-24 pt-20 text-white md:pb-0">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.logo} alt="upgr8 Logo" width={110} height={34} className="h-[34px] w-auto invert" loading="lazy" />
            <p className="mt-5 max-w-[260px] text-[#A8A7A5]">Gemeinsam von der Innensicht zum Handeln.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="space-y-2.5 text-[15px]">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="space-y-1 text-[14px] not-italic leading-relaxed text-[#A8A7A5]">
            <p>Upgr8 GmbH</p>
            <p>Aschergasse 25/2 · 1130 Wien</p>
            <p>
              <a href="tel:+436641441492" className="hover:text-white">+43 664 144 1492</a>
            </p>
            <p>
              <a href="mailto:getyour@upgr8.org" className="hover:text-white">getyour@upgr8.org</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/company/upgr8-gmbh/" rel="noopener" className="hover:text-white">LinkedIn</a>
            </p>
          </address>
        </div>
        <div className="mt-16 border-t border-white/15 py-6 text-center text-[14px] text-[#A8A7A5]">© 2026 Upgr8 GmbH</div>
      </Container>
    </footer>
  );
}
