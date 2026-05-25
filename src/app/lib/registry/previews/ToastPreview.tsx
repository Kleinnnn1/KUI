"use client";

import { Button } from "@/kui/Button";
import { useToast } from "@/kui/Toast";

export const ToastPreview = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-500 text-sm tracking-wide">
        Click the buttons below to trigger a toast notification.
      </p>

      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Button
          variant="solid"
          size="sm"
          onClick={() => toast.success("Note saved successfully!")}
        >
          Success
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => toast.error("Something went wrong.")}
        >
          Error
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toast.warning("You are offline.")}
          className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/60"
        >
          Warning
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toast.info("New update available.")}
          className="border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/60"
        >
          Info
        </Button>
      </div>
    </div>
  );
};
