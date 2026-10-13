"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  url: string;
  title: string;
  description: string;
  alt?: string;
  href?: string;
  /** Kleines Coral-Badge über dem Namen */
  badge?: string;
};

/**
 * Bild-Akkordeon: Beim Hover (oder Fokus) weitet sich ein Bild auf, die anderen schrumpfen und werden unscharf.
 * Mobil stehen die Bilder untereinander, Text ist dort immer sichtbar.
 */
function TailwindImageAccordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  return (
    <div className={cn("group flex max-md:flex-col justify-center gap-2 w-full mx-auto", className)}>
      {items.map((item) => {
        return (
          <article
            key={item.id}
            className="group/article relative w-full rounded-xl overflow-hidden md:not-[&:hover]:group-hover:w-[20%] md:[&:not(:focus-within):not(:hover)]:group-focus-within:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:z-[1] before:bg-linear-to-t before:from-black/60 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:not-[&:hover]:group-hover:after:opacity-100 md:[&:not(:focus-within):not(:hover)]:group-focus-within:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur-sm after:rounded-lg after:transition-all focus-within:ring-3 focus-within:ring-accent"
          >
            <a
              className="absolute inset-0 text-white z-10 p-4 flex flex-col justify-end"
              href={item.href ?? "#kontakt"}
              aria-label={`${item.title}, ${item.description}`}
            >
              {item.badge && (
                <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-foreground md:whitespace-nowrap">
                  {item.badge}
                </span>
              )}
              <span className="block text-xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                {item.title}
              </span>
              <span className="block text-2xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                {item.description}
              </span>
            </a>
            <Image
              className="object-cover object-[center_15%] h-80 md:h-[460px] w-full bg-portrait"
              src={item.url}
              width={960}
              height={960}
              sizes="(min-width: 768px) 60vw, 100vw"
              alt={item.alt ?? item.title}
            />
          </article>
        );
      })}
    </div>
  );
}

export default TailwindImageAccordion;
