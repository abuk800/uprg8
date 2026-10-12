import * as React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
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
  className?: string;
};

const CardDecorator = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div
      className={cn(
        "absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10",
        dark ? "[--border:white]" : "[--border:black]",
      )}
    />
    <div
      className={cn(
        "absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l transition-colors",
        dark ? "bg-foreground border-white/40 text-white" : "bg-background group-hover:border-foreground",
      )}
    >
      {children}
    </div>
  </div>
);

function FeatureCard({ item }: { item: FeatureItem }) {
  const Icon = item.icon;
  const body = (
    <Card className={cn("group flex h-full flex-col border-0 shadow-none", item.highlight ? "bg-foreground text-white" : "bg-muted")}>
      <CardHeader className="pb-3">
        <CardDecorator dark={item.highlight}>
          <Icon className="size-6" aria-hidden strokeWidth={1} />
        </CardDecorator>
        <H3 className="mt-6 text-center">{item.title}</H3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col text-center">
        <p className={cn("text-[15px]", item.highlight ? "text-white/80" : "text-muted-foreground")}>{item.text}</p>
        {item.footer}
        {item.href && (
          <span
            className={cn(
              "mt-auto inline-flex items-center gap-1 self-center pt-4 text-[14px] font-medium transition-opacity",
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

export function FeatureGrid({ eyebrow, title, intro, items, columns = 3, align = "center", className }: Props) {
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
              <FeatureCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
