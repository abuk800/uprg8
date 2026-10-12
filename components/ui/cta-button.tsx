import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"a"> & {
  /** dark: schwarze Pille mit Coral-Kreis. light: weiße Pille mit schwarzem Kreis. */
  variant?: "dark" | "light";
  size?: "md" | "sm";
};

export function CtaButton({ variant = "dark", size = "md", className, children, ...props }: Props) {
  const small = size === "sm";
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-4 rounded-full py-2 pl-5 pr-2 text-[15px] font-medium leading-tight",
        variant === "dark" ? "bg-foreground text-white" : "bg-white text-foreground",
        small && "gap-3 pl-4 text-[14px]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full",
          small ? "size-8" : "size-8",
          variant === "dark" ? "bg-accent text-foreground" : "bg-foreground text-white",
        )}
      >
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden />
      </span>
    </a>
  );
}
