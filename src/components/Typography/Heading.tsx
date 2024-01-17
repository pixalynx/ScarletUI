import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const headingVariants = cva("text-base");

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, ...props }, ref) => {
    return <h4 className={cn(headingVariants({}))} {...props} ref={ref} />;
  }
);

Heading.displayName = "Heading";

export { Heading };
