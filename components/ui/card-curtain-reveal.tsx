"use client"

import * as React from "react"
import { HTMLMotionProps, Variants, motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

const curtainVariants: Variants = {
  visible: {
    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    transition: {
      duration: 0.4,
      ease: ["easeOut", [0.25, 1.5, 0.5, 1]],
    },
  },

  hidden: {
    clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
    transition: {
      duration: 0.3,
      ease: ["easeOut", [0.25, 1.5, 0.5, 1]],
    },
  },
}

interface CardCurtainRevealContextValue {
  isMouseIn: boolean
  /** Touch-Geräte und reduzierte Bewegung: Inhalt ist immer sichtbar, vorne bleibt die dunkle Karte stehen */
  isStatic: boolean
}
const CardCurtainRevealContext = React.createContext<
  CardCurtainRevealContextValue | undefined
>(undefined)
function useCardCurtainRevealContext() {
  const context = React.useContext(CardCurtainRevealContext)
  if (!context) {
    throw new Error(
      "useCardCurtainRevealContext must be used within a CardCurtainReveal Component"
    )
  }
  return context
}

const CardCurtainReveal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const [isMouseIn, setIsMouseIn] = React.useState(false)
  const [noHover, setNoHover] = React.useState(false)
  const reduced = useReducedMotion()
  const handleMouseEnter = React.useCallback(() => setIsMouseIn(true), [])
  const handleMouseLeave = React.useCallback(() => setIsMouseIn(false), [])

  React.useEffect(() => {
    const mq = window.matchMedia("(hover: none)")
    const update = () => setNoHover(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const isStatic = noHover || !!reduced

  return (
    <CardCurtainRevealContext.Provider
      value={{ isMouseIn: isMouseIn || isStatic, isStatic }}
    >
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col gap-2 overflow-hidden",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    </CardCurtainRevealContext.Provider>
  )
})
CardCurtainReveal.displayName = "CardCurtainReveal"

const CardCurtainRevealFooter = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={curtainVariants}
      initial={false}
      animate={isMouseIn ? "visible" : "hidden"}
      {...props}
    />
  )
})
CardCurtainRevealFooter.displayName = "CardCurtainRevealFooter"

const CardCurtainRevealBody = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex-1 p-6", className)} {...props} />
})
CardCurtainRevealBody.displayName = "CardCurtainRevealBody"

const CardCurtainRevealTitle = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<"h2"> & { restY?: number }
>(({ className, restY = 170, ...props }, ref) => {
  const { isMouseIn, isStatic } = useCardCurtainRevealContext()

  return (
    <motion.h2
      ref={ref}
      className={className}
      initial={false}
      animate={isMouseIn || isStatic ? { y: 0 } : { y: restY }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    />
  )
})
CardCurtainRevealTitle.displayName = "CardCurtainRevealTitle"

const CardCurtain = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => {
    const { isMouseIn, isStatic } = useCardCurtainRevealContext()

    return (
      <motion.div
        ref={ref}
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 size-full mix-blend-difference",
          isStatic && "hidden",
          className
        )}
        variants={curtainVariants}
        initial={false}
        animate={isMouseIn ? "visible" : "hidden"}
        {...props}
      />
    )
  }
)
CardCurtain.displayName = "CardCurtain"

const CardCurtainRevealDescription = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={curtainVariants}
      initial={false}
      animate={isMouseIn ? "visible" : "hidden"}
      {...props}
    />
  )
})
CardCurtainRevealDescription.displayName = "CardCurtainRevealDescription"

export {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealFooter,
  CardCurtainRevealDescription,
  CardCurtainRevealTitle,
  CardCurtain,
}
