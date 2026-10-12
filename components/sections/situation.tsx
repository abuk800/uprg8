import { Compass, KeyRound, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/ui/feature-grid";

export function Situation() {
  return (
    <Section id="situation">
      <FeatureGrid
        eyebrow="Ihre Situation"
        title="Wann Unternehmen uns holen."
        items={[
          { icon: TrendingUp, title: "Wachstum", text: "Ihr Unternehmen ist gewachsen, aber alles hängt noch an der Spitze. Wir machen Ihr Führungsteam zum Motor.", href: "/wachstum", linkProps: { "data-situation": "wachstum" } },
          { icon: KeyRound, title: "Nachfolge & Führungswechsel", text: "Eine neue Generation oder Geschäftsführung übernimmt. Wir sorgen dafür, dass die Organisation mitgeht.", href: "/nachfolge", linkProps: { "data-situation": "nachfolge" } },
          { icon: Compass, title: "Wandel im Markt", text: "KI, Fachkräfte, neue Wettbewerber. Wir machen aus Veränderung einen Plan, den Ihre Leute tragen.", href: "/wandel", linkProps: { "data-situation": "wandel" } },
        ]}
      />
      <p className="mt-10 text-center text-[16px] text-muted-foreground">
        Ihre Situation ist eine andere?{" "}
        <a href="#kontakt" className="font-medium text-foreground underline underline-offset-4">
          Erzählen Sie sie uns im Erstgespräch →
        </a>
      </p>
    </Section>
  );
}
