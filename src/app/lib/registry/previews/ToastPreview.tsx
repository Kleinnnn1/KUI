"use client";

import { Button } from "@kennbalino/kui";
import { useToast } from "@kennbalino/kui";

export const ToastPreview = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-foreground-muted text-sm tracking-wide">
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
          className="border-warning/40 text-warning-foreground hover:bg-warning-muted hover:border-warning/60"
        >
          Warning
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toast.info("New update available.")}
          className="border-primary/30 text-foreground-muted hover:bg-background-muted hover:border-primary/50"
        >
          Info
        </Button>
      </div>
    </div>
  );
};
