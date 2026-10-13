import Footer01 from "@/components/ui/footer-01";
import { IMG } from "@/lib/images";

export function Footer() {
  return (
    <Footer01
      logoSrc={IMG.logo}
      logoAlt="upgr8 Logo"
      tagline="Gemeinsam von der Innensicht zum Handeln."
      sections={[
        {
          title: "Navigation",
          links: [
            { title: "Ihre Situation", href: "#situation" },
            { title: "Unser Vorgehen", href: "#vorgehen" },
            { title: "Team", href: "#team" },
            { title: "FAQ", href: "#faq" },
          ],
        },
        {
          title: "Rechtliches",
          links: [
            { title: "Impressum", href: "/impressum" },
            { title: "Datenschutz", href: "/datenschutz" },
          ],
        },
      ]}
      contactTitle="Kontakt"
      address={["Upgr8 GmbH", "Aschergasse 25/2", "1130 Wien"]}
      email="getyour@upgr8.org"
      phone={{ label: "+43 664 144 1492", href: "tel:+436641441492" }}
      linkedin="https://www.linkedin.com/company/upgr8-gmbh/"
      copyright="© 2026 Upgr8 GmbH"
    />
  );
}
