import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const pageContainerStyles = cva(
  "lg:p-4 md:p-10 mx-auto max-w-7xl flex flex-col gap-8"
);

export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageContainerStyles> {}

const PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, ...props }, ref) => {
    return <div className={pageContainerStyles({})} {...props} ref={ref} />;
  }
);

export { PageContainer };
