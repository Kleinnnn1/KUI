import { cn } from "@/app/lib/utils";

type PreviewProps = {
  children: React.ReactNode;
  className?: string;
};

export const Preview = ({ children, className }: PreviewProps) => (
  <div
    className={cn(
      "w-full rounded-md border border-white/10 bg-white/5 backdrop-blur-md p-10 flex flex-wrap items-center justify-center gap-4",
      "relative overflow-visible",
      className
    )}
  >
    {children}
  </div>
);