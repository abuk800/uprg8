import { Bot, Building2, GraduationCap, ScanEye, User, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/ui/feature-grid";

export function SearchEnd() {
  return (
    <Section id="suche" className="border-t border-border">
      <FeatureGrid
        eyebrow="Die Suche hat ein Ende"
        title="Warum nicht einfach eine Klausur?"
        intro="Wenn bisherige Versuche verpufft sind, liegt das nicht an Ihnen. Alle haben denselben blinden Fleck."
        align="left"
        hoverInvert
        items={[
          { icon: Building2, title: "Große Strategieberatung", text: "Das Konzept entsteht ohne Ihr Team. Danach sind die Berater weg." },
          { icon: Users, title: "Klausur mit Moderator", text: "Nur die Spitze war dabei. Ab Montag gewinnt das Tagesgeschäft." },
          { icon: GraduationCap, title: "Führungskräfte-Training", text: "Gelernt wird an Fallbeispielen, nicht an Ihren echten Herausforderungen." },
          { icon: Bot, title: "KI-Tool oder Agentur", text: "Ein Einzelprojekt ohne Strategie. Die Leute nutzen es nicht." },
          { icon: User, title: "Selbst machen", text: "Es läuft wieder über Ihren Tisch. Genau das, was entlasten sollte." },
          {
            icon: ScanEye,
            title: "Der gemeinsame Nenner",
            text: "Die Menschen, die umsetzen sollen, waren nicht dabei. Genau das lösen wir.",
            highlight: true,
          },
        ]}
      />
    </Section>
  );
}
