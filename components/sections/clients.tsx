import Image from "next/image";
import { Container } from "@/components/ui/section";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const BASE = "https://upgr8.org/wp-content/uploads/2025/05/";

/*
 * Die Logo-Dateien liegen auf quadratischen Flächen mit viel Rand.
 * size/left/top schneiden das Logo in einer 120×44-Box passend zu.
 * opaque: Dateien mit weißem Hintergrund (Agrana, Raps).
 */
const LOGOS = [
  { name: "Raiffeisen", file: "Giebelkreuz_-RGB-2c-1.png", size: 115, left: 3, top: -36 },
  { name: "Agrana", file: "Agrana-Logo.png", size: 44, left: 40, top: 0, opaque: true },
  { name: "Airbus", file: "Airbus-logo.png", size: 127, left: -4, top: -42 },
  { name: "Daimler", file: "Daimler_AG-logo.png", size: 127, left: -4, top: -42 },
  { name: "Mercedes-Benz", file: "Mercedes-Logo-1.png", size: 91, left: 14, top: -23 },
  { name: "Beneo", file: "beneo.png", size: 126, left: -3, top: -37 },
  { name: "Blue Tomato", file: "Blue-Tomato.-logo-1.png", size: 118, left: 1, top: -33 },
  { name: "Raps", file: "Raps-logo.jpg", size: 91, left: 14, top: -24, opaque: true },
];

export function Clients() {
  return (
    <section aria-label="Kunden" className="py-10">
      <Container>
        <p className="text-center text-[14px] text-muted-foreground">Erfahrung unserer Partner aus Projekten mit</p>
      </Container>
      <Marquee className="mt-6" duration={35} pauseOnHover fadeAmount={12}>
        {LOGOS.map((l) => (
          <div
            key={l.name}
            className={cn(
              "relative mx-8 h-11 w-[120px] shrink-0 overflow-hidden opacity-60 mix-blend-multiply transition-opacity hover:opacity-100 md:mx-10",
              l.opaque ? "grayscale contrast-150 hover:filter-none" : "grayscale brightness-[.55] hover:filter-none",
            )}
          >
            <Image
              src={BASE + l.file}
              alt={`Logo ${l.name}`}
              width={l.size}
              height={l.size}
              sizes="130px"
              className="absolute max-w-none"
              style={{ left: l.left, top: l.top }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
