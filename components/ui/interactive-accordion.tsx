"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

export interface InteractiveAccordionItem {
  id: string
  title: string
  content: string
}

/**
 * Akkordeon mit nummeriertem Kreis, Plus-Icon und gezeichneter Linie.
 * Es ist immer höchstens ein Eintrag offen, ein offener lässt sich wieder schließen.
 */
export function UniqueAccordion({
  items,
  defaultOpenId = null,
  className,
}: {
  items: InteractiveAccordionItem[]
  defaultOpenId?: string | null
  className?: string
}) {
  const [activeId, setActiveId] = React.useState<string | null>(defaultOpenId)
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)
  const reduced = useReducedMotion()
  const uid = React.useId()

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => {
        const isActive = activeId === item.id
        const isHovered = hoveredId === item.id
        const number = String(index + 1).padStart(2, "0")
        const panelId = `${uid}-panel-${item.id}`
        const buttonId = `${uid}-button-${item.id}`

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isActive}
                aria-controls={panelId}
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                className="group relative w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex items-center gap-4 py-5 px-1 md:gap-6">
                  {/* Nummer mit animiertem Kreis */}
                  <div className="relative flex size-10 shrink-0 items-center justify-center">
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-foreground"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                    <motion.span
                      className="relative z-10 text-sm font-medium tracking-wide tabular-nums"
                      initial={false}
                      animate={{ color: isActive ? "var(--background)" : "var(--muted-foreground)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {number}
                    </motion.span>
                  </div>

                  {/* Frage */}
                  <motion.span
                    className="block text-[18px] font-medium leading-snug tracking-tight md:text-[22px]"
                    initial={false}
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color: isActive || isHovered ? "var(--foreground)" : "var(--muted-foreground)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {item.title}
                  </motion.span>

                  {/* Plus, dreht sich beim Öffnen zum Kreuz */}
                  <motion.div
                    aria-hidden
                    className="ml-auto flex size-8 shrink-0 items-center justify-center"
                    initial={false}
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-foreground"
                      initial={false}
                      animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Linie: Grundlinie und gezeichneter Teil */}
                <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                <motion.div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-foreground"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </button>
            </h3>

            {/* Antwort */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: reduced
                      ? { duration: 0 }
                      : {
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: reduced
                      ? { duration: 0 }
                      : {
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.1 },
                        },
                  }}
                  className="overflow-hidden"
                >
                  <p className="py-6 pr-4 text-[16px] leading-relaxed text-muted-foreground md:pl-16 md:pr-12 pl-1">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
