import { Briefcase, Factory, Handshake, Landmark } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/ui/feature-grid";

export function Audiences() {
  return (
    <Section id="zielgruppen" className="border-t border-border">
      <FeatureGrid
        eyebrow="Für wen wir arbeiten"
        title="Wo stehen Sie gerade?"
        columns={4}
        items={[
          {
            icon: Briefcase,
            title: "Inhaber & Geschäftsführung",
            text: "Ihr Unternehmen ist gewachsen, aber jede wichtige Entscheidung landet noch auf Ihrem Tisch. Wir machen Ihr Führungsteam zum Motor, Sie behalten das letzte Wort.",
            href: "/inhaber",
            ctaLabel: "Für Inhaber",
            ctaVisible: true,
            linkProps: { "data-router": "inhaber" },
          },
          {
            icon: Handshake,
            title: "Private Equity",
            text: "Der Value-Creation-Plan steht, jetzt muss das Management ihn tragen. Wir bringen Ihre Beteiligung vom Plan in die Umsetzung, in Ihrem Zeitfenster.",
            href: "/private-equity",
            ctaLabel: "Für Private Equity",
            ctaVisible: true,
            linkProps: { "data-router": "pe" },
          },
          {
            icon: Landmark,
            title: "Banken & Finanzinstitute",
            text: "Fusion beschlossen, Strategie verabschiedet. Jetzt muss das ganze Haus sie leben, so wie bei der Raiffeisen-Bankengruppe Steiermark.",
            href: "/banken",
            ctaLabel: "Für Banken",
            ctaVisible: true,
            linkProps: { "data-router": "banken" },
          },
          {
            icon: Factory,
            title: "Konzerne & Industrie",
            text: "Ihr Geschäftsmodell verändert sich schneller als Ihre Organisation. Wir machen Transformation zur Sache Ihrer Leute.",
            href: "/konzerne",
            ctaLabel: "Für Konzerne",
            ctaVisible: true,
            linkProps: { "data-router": "konzerne" },
          },
        ]}
      />
    </Section>
  );
}
