"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Toast, type ToastItem, type ToastVariant } from "./Toast";

type ToastContextType = {
  toast: {
    show: (message: string, duration?: number) => void;
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
  };
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [mounted, setMounted] = useState(false); // ← fix
  const counterRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addToast = useCallback(
    (message: string, variant: ToastVariant, duration?: number) => {
      const id = `toast-${++counterRef.current}`;
      setToasts((prev) => [...prev, { id, message, variant, duration }]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = {
    show: (msg: string, dur?: number) => addToast(msg, "default", dur),
    success: (msg: string, dur?: number) => addToast(msg, "success", dur),
    error: (msg: string, dur?: number) => addToast(msg, "error", dur),
    warning: (msg: string, dur?: number) => addToast(msg, "warning", dur),
    info: (msg: string, dur?: number) => addToast(msg, "info", dur),
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {mounted &&
        createPortal(
          <div className="fixed bottom-6 right-6 z-9999 flex flex-col gap-2">
            {toasts.map((t) => (
              <Toast key={t.id} toast={t} onRemove={removeToast} />
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
};
