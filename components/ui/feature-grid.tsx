import * as React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eyebrow, H2, H3 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  /** Karte als dunkle Auflösungskarte hervorheben */
  highlight?: boolean;
  /** Ganze Karte klickbar */
  href?: string;
  /** Beschriftung des Links (Standard: „Mehr erfahren“) */
  ctaLabel?: string;
  /** Link-Beschriftung dauerhaft zeigen statt nur beim Hover */
  ctaVisible?: boolean;
  /** Zusätzliche Attribute, z. B. data-situation */
  linkProps?: Record<string, string>;
  /** Optionaler Textlink unter dem Text */
  footer?: React.ReactNode;
};

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  items: FeatureItem[];
  columns?: 3 | 4;
  /** Abschnittskopf: zentriert oder linksbündig */
  align?: "center" | "left";
  /** Karten werden beim Hover schwarz */
  hoverInvert?: boolean;
  className?: string;
};

const CardDecorator = ({ children, dark, hoverInvert }: { children: React.ReactNode; dark?: boolean; hoverInvert?: boolean }) => (
  <div aria-hidden className="relative size-16 shrink-0 max-md:row-span-2 md:mx-auto md:size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div
      className={cn(
        "absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:12px_12px] opacity-10 md:bg-[size:24px_24px]",
        dark ? "[--border:white]" : "[--border:black]",
        hoverInvert && !dark && "transition-opacity group-hover:[--border:white]",
      )}
    />
    <div
      className={cn(
        "absolute inset-0 m-auto flex size-9 items-center justify-center border-t border-l transition-colors md:size-12",
        dark
          ? "bg-foreground border-white/40 text-white"
          : hoverInvert
            ? "bg-background group-hover:border-white/40 group-hover:bg-foreground group-hover:text-white"
            : "bg-background group-hover:border-foreground",
      )}
    >
      {children}
    </div>
  </div>
);

function FeatureCard({ item, hoverInvert }: { item: FeatureItem; hoverInvert?: boolean }) {
  const Icon = item.icon;
  const body = (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border-0 shadow-none transition-colors duration-300 max-md:grid max-md:grid-cols-[4rem_1fr] max-md:items-start max-md:gap-x-4 max-md:gap-y-1 max-md:p-5",
        item.highlight
          ? "nenner-glow bg-foreground text-white hover:bg-[#2a2929]"
          : hoverInvert
            ? "bg-muted hover:bg-foreground hover:text-white"
            : "bg-muted",
      )}
    >
      {item.highlight && (
        <>
          <Sparkle aria-hidden className="nenner-twinkle absolute right-6 top-6 size-4 fill-accent text-accent [animation-delay:0s]" />
          <Sparkle aria-hidden className="nenner-twinkle absolute left-7 top-1/2 size-3 max-md:hidden fill-white text-white [animation-delay:1.1s]" />
          <Sparkle aria-hidden className="nenner-twinkle absolute bottom-7 right-9 size-3.5 fill-accent text-accent [animation-delay:2s]" />
        </>
      )}
      <CardHeader className="pb-3 max-md:contents">
        <CardDecorator dark={item.highlight} hoverInvert={hoverInvert}>
          <Icon className="size-5 md:size-6" aria-hidden strokeWidth={1} />
        </CardDecorator>
        <H3 className="mt-6 text-center max-md:col-start-2 max-md:mt-0 max-md:text-left">{item.title}</H3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col text-center max-md:contents">
        <p
          className={cn(
            "text-[15px] transition-colors duration-300 max-md:col-start-2 max-md:text-left",
            item.highlight ? "text-white/80" : cn("text-muted-foreground", hoverInvert && "group-hover:text-white/80"),
          )}
        >
          {item.text}
        </p>
        {item.footer}
        {item.href && (
          <span
            className={cn(
              "mt-auto inline-flex items-center gap-1 self-center pt-4 max-md:col-start-2 max-md:self-start text-[14px] font-medium transition-opacity",
              item.ctaVisible ? "underline underline-offset-4" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
            )}
          >
            {item.ctaLabel ?? "Mehr erfahren"} <ArrowUpRight className="size-4" aria-hidden />
          </span>
        )}
      </CardContent>
    </Card>
  );
  if (item.href) {
    return (
      <Link href={item.href} className="block h-full rounded-lg" {...item.linkProps}>
        {body}
      </Link>
    );
  }
  return body;
}

export function FeatureGrid({ eyebrow, title, intro, items, columns = 3, align = "center", hoverInvert = false, className }: Props) {
  return (
    <div className={className}>
      {(eyebrow || title || intro) && (
        <Reveal className={cn("mb-12 flex max-w-2xl flex-col gap-4 md:mb-16", align === "center" ? "mx-auto items-center text-center" : "items-start text-left")}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <H2>{title}</H2>}
          {intro && <p className="text-[17px] text-muted-foreground">{intro}</p>}
        </Reveal>
      )}
      <div className="@container">
        <div
          className={cn(
            "grid grid-cols-1 gap-4 @min-2xl:grid-cols-2",
            columns === 3 ? "@min-4xl:grid-cols-3" : "@min-4xl:grid-cols-4",
          )}
        >
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="h-full">
              <FeatureCard item={item} hoverInvert={hoverInvert} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
