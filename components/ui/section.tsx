import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)} {...props} />;
}

export function Section({
  className,
  innerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & { innerClassName?: string }) {
  return (
    <section className={cn("py-20 md:py-32", className)} {...props}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}
