import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  "flex items-center gap-1 rounded-md border border-white/10 bg-white/5 p-1 overflow-x-auto scrollbar-none w-full",
  {
    variants: {
      variant: {
        default: "bg-white/5 border-white/10",
        ghost: "bg-transparent border-transparent",
        outline: "bg-transparent border-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium tracking-wide rounded transition-all duration-200 cursor-pointer select-none outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      state: {
        active: "bg-white/10 text-white border border-white/15 shadow-sm",
        inactive: "text-gray-500 hover:text-white hover:bg-white/5",
      },
    },
    defaultVariants: {
      state: "inactive",
    },
  },
);

export const tabsContentVariants = cva(
  "text-gray-400 text-sm leading-relaxed transition-all duration-200",
  {
    variants: {
      state: {
        active: "block animate-in fade-in-0 duration-200",
        inactive: "hidden",
      },
    },
    defaultVariants: {
      state: "inactive",
    },
  },
);
