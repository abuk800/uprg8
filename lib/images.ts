const BASE = "https://upgr8.org/wp-content/uploads/";

export const IMG = {
  team: BASE + "2025/09/Team1.jpeg",
  logo: BASE + "2025/05/Upgr8-Logo_Schwarz_Ohne_Rand.svg",
  ariane: BASE + "2025/05/Ariane_Pfleger2025_058_c_lupi_spuma-650x433.jpg",
} as const;

export type Partner = {
  slug: string;
  name: string;
  role: string;
  credential: string;
  color: string;
  bw: string;
};

export const PARTNERS: Partner[] = [
  { slug: "armin", name: "Armin Blassnig", role: "Geschäftsführer", credential: "[Station]", color: BASE + "2025/09/Armin-1.jpg", bw: BASE + "2025/09/Armin-1-1.jpg" },
  { slug: "max", name: "Maximilian Kammerer", role: "Senior Advisor", credential: "[Station]", color: BASE + "2025/09/Max-2.jpg", bw: BASE + "2025/09/Max-1.jpg" },
  { slug: "davidr", name: "David Rohrmann", role: "Managing Partner", credential: "[Station]", color: BASE + "2025/09/David-R-2.jpg", bw: BASE + "2025/09/David-R-1.jpg" },
  { slug: "daniel", name: "Daniel Deuring", role: "Managing Partner", credential: "[Station]", color: BASE + "2025/09/Daniel-2.jpg", bw: BASE + "2025/09/Daniel-1.jpg" },
  { slug: "davidk", name: "David Kreiner", role: "Managing Partner", credential: "[Station]", color: BASE + "2025/09/David-K-2.jpg", bw: BASE + "2025/09/David-K-1.jpg" },
];
