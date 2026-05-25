import { cva } from "class-variance-authority";

export const toastVariants = cva(
  "flex items-start gap-3 w-80 rounded-md border px-4 py-3 text-sm shadow-xl backdrop-blur-md transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-black/80 border-white/10 text-white",
        success: "bg-black/80 border-green-500/30 text-white",
        error: "bg-black/80 border-red-500/30 text-white",
        warning: "bg-black/80 border-yellow-500/30 text-white",
        info: "bg-black/80 border-blue-500/30 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
