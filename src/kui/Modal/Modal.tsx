// src/kui/Modal/Modal.tsx
"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { type VariantProps } from "class-variance-authority";
import { modalVariants } from "./modal.variants";
import { cn } from "@/app/lib/utils";

type ModalProps = VariantProps<typeof modalVariants> & {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  closeOnBackdrop?: boolean;
};

type ModalHeaderProps = {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

type ModalSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Modal = ({
  open,
  onClose,
  size,
  children,
  className,
  closeOnBackdrop = true,
}: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-9998 flex items-center justify-center p-4",
        "animate-in fade-in duration-200",
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeOnBackdrop ? onClose : undefined}
      />

      <div
        className={cn(
          modalVariants({ size }),
          "relative z-10 animate-in fade-in-0 zoom-in-95 duration-200",
          className,
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export const ModalHeader = ({
  children,
  onClose,
  className,
}: ModalHeaderProps) => (
  <div
    className={cn(
      "flex items-start justify-between px-6 py-4 border-b border-white/10",
      className,
    )}
  >
    <div className="flex flex-col gap-1">{children}</div>
    {onClose && (
      <button
        onClick={onClose}
        className="text-gray-600 hover:text-white transition-colors duration-200 mt-0.5 shrink-0"
      >
        <X size={16} />
      </button>
    )}
  </div>
);

export const ModalTitle = ({ children, className }: ModalSectionProps) => (
  <h2
    className={cn("text-white font-semibold text-lg leading-snug", className)}
  >
    {children}
  </h2>
);

export const ModalDescription = ({
  children,
  className,
}: ModalSectionProps) => (
  <p className={cn("text-gray-500 text-sm leading-relaxed", className)}>
    {children}
  </p>
);

export const ModalContent = ({ children, className }: ModalSectionProps) => (
  <div
    className={cn("px-6 py-5 text-gray-400 text-sm leading-relaxed", className)}
  >
    {children}
  </div>
);

export const ModalFooter = ({ children, className }: ModalSectionProps) => (
  <div
    className={cn(
      "flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10",
      className,
    )}
  >
    {children}
  </div>
);
