import Link from "next/link";
import { Bot, Building2, GraduationCap, ScanEye, User, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/ui/feature-grid";

export function SearchEnd() {
  return (
    <Section id="suche" className="bg-section">
      <FeatureGrid
        eyebrow="Die Suche hat ein Ende"
        title="Sie haben schon einiges versucht?"
        intro="Und trotzdem ist im Alltag wenig davon geblieben."
        items={[
          { icon: Building2, title: "Große Strategieberatung", text: "Das Konzept entsteht ohne Ihr Team. Danach sind die Berater weg." },
          { icon: Users, title: "Klausur mit Moderator", text: "Nur die Spitze war dabei. Ab Montag gewinnt das Tagesgeschäft." },
          { icon: GraduationCap, title: "Führungskräfte-Training", text: "Gelernt wird an Fallbeispielen, nicht an Ihren echten Herausforderungen." },
          { icon: Bot, title: "KI-Tool oder Agentur", text: "Ein Einzelprojekt ohne Strategie. Die Leute nutzen es nicht." },
          { icon: User, title: "Selbst machen", text: "Es läuft wieder über Ihren Tisch. Genau das, was entlasten sollte." },
          {
            icon: ScanEye,
            title: "Das liegt nicht an Ihnen.",
            text: "Alle fünf Wege haben denselben blinden Fleck.",
            highlight: true,
            footer: (
              <Link href="#blinder-fleck" className="mt-4 inline-block text-[14px] font-medium underline underline-offset-4">
                Welcher das ist ↓
              </Link>
            ),
          },
        ]}
      />
    </Section>
  );
}
