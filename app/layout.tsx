import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  title: "upgr8 – Strategie, die nicht in der Schublade landet",
  description:
    "upgr8 ist die Strategieberatung für den Mittelstand. Strategie gemeinsam mit den Menschen entwickeln, die sie umsetzen. Buchen Sie ein Erstgespräch mit Armin Blassnig.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
