import { cva } from "class-variance-authority";

export const modalVariants = cva(
  "relative bg-black/90 border border-white/10 rounded-md backdrop-blur-md shadow-2xl w-full transition-all duration-300",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-full mx-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
