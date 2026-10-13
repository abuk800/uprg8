import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  role: string;
  color: string;
  /** Schwarzweiß-Foto: Standardzustand, blendet beim Hover auf Farbe */
  bw?: string;
  credential?: string;
  href?: string;
  /** Button-Stil: auf dunklem Grund weiß statt schwarz */
  onDark?: boolean;
  priority?: boolean;
  /** Erwartete Darstellungsbreite für next/image, damit die passende Auflösung geladen wird */
  sizes?: string;
  className?: string;
};

export function TeamCard({ name, role, color, bw, credential, href = "#kontakt", onDark, className, sizes = "(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 76vw" }: Props) {
  return (
    <article className={cn("group", className)}>
      <div className="relative aspect-[4/5]">
        <div className="notch absolute inset-0 overflow-hidden rounded-2xl bg-portrait">
          {bw && (
            <Image
              src={bw}
              alt={`${name}, ${role}, Schwarzweiß-Porträt`}
              fill
              sizes={sizes}
              className="object-cover object-top"
            />
          )}
          <Image
            src={color}
            alt={bw ? `${name}, ${role}, Farbporträt` : `${name}, ${role}`}
            fill
            sizes={sizes}
            quality={90}
            className={cn("object-cover object-top transition-opacity duration-500", bw && "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100")}
          />
        </div>
        <a
          href={href}
          aria-label={`Erstgespräch mit ${name.split(" ")[0]} anfragen`}
          className={cn(
            "absolute bottom-0 right-0 grid size-11 place-items-center rounded-full transition-colors",
            onDark ? "bg-white text-foreground" : "bg-foreground text-white",
          )}
        >
          <ArrowUpRight className="size-[18px] transition-transform duration-300 group-hover:rotate-45" aria-hidden />
        </a>
      </div>
      <p className={cn("mt-4 text-[14px] leading-snug", onDark ? "text-white/70" : "text-muted-foreground")}>
        <span className={cn("text-[18px]", onDark ? "text-white" : "text-foreground")}>{name}</span> – {role}
      </p>
      {credential && <p className="mt-1 text-[14px] text-foreground">{credential}</p>}
    </article>
  );
}
