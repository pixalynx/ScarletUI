import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import LoadingDots from "./icons/loading-dots";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-gray-400 bg-black text-white hover:bg-white hover:text-black border",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        fancy:
          "border-none combined-shadow text-white bg-[#375dfb] bg-gradient-to-b from-[rgba(255,255,255,0.09)] to-[rgba(255,255,255,0)] hover:from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, disabled, loading, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        <Comp
          disabled={disabled || loading}
          className={cn(
            buttonVariants({ variant, size, className }),
            `${
              disabled ||
              (loading &&
                "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400")
            }`
          )}
          ref={ref}
          {...props}
        >
          {!loading ? props.children : <LoadingDots color="#808080" />}
        </Comp>
      </>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
