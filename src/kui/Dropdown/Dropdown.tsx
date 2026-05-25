"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import { type VariantProps } from "class-variance-authority";
import {
  dropdownMenuVariants,
  dropdownItemVariants,
} from "./dropdown.variants";
import { cn } from "@/app/lib/utils";

type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("useDropdown must be used inside Dropdown");
  return ctx;
};

type DropdownProps = {
  children: ReactNode;
  className?: string;
};

export const Dropdown = ({ children, className }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={cn("relative inline-block", className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

type DropdownTriggerProps = {
  children: ReactNode;
  className?: string;
};

export const DropdownTrigger = ({
  children,
  className,
}: DropdownTriggerProps) => {
  const { open, setOpen } = useDropdown();

  return (
    <div
      onClick={() => setOpen(!open)}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </div>
  );
};

type DropdownMenuProps = VariantProps<typeof dropdownMenuVariants> & {
  children: ReactNode;
  className?: string;
};

export const DropdownMenu = ({
  children,
  align,
  side,
  className,
}: DropdownMenuProps) => {
  const { open } = useDropdown();

  if (!open) return null;

  return (
    <div
      className={cn(
        dropdownMenuVariants({ align, side }),
        "animate-in fade-in-0 zoom-in-95 duration-150",
        className,
      )}
    >
      {children}
    </div>
  );
};

type DropdownItemProps = VariantProps<typeof dropdownItemVariants> & {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const DropdownItem = ({
  children,
  icon,
  variant,
  onClick,
  className,
}: DropdownItemProps) => {
  const { setOpen } = useDropdown();

  const handleClick = () => {
    onClick?.();
    setOpen(false);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(dropdownItemVariants({ variant }), className)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export const DropdownSeparator = ({ className }: { className?: string }) => (
  <div className={cn("my-1 h-px bg-white/10", className)} />
);

export const DropdownLabel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "px-3 py-1.5 text-xs text-gray-600 tracking-widest uppercase",
      className,
    )}
  >
    {children}
  </div>
);
