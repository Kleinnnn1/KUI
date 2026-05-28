import { Badge } from "@kennbalino/kui";
import type { ComponentEntry } from "./types";
import { CheckCircle, XCircle, Clock, Star, Lock, Bell } from "lucide-react";

export const badgeRegistry: ComponentEntry = {
  props: [
    {
      prop: "variant",
      type: "default | solid | success | warning | danger | muted",
      default: "default",
      description: "Controls the visual style of the badge.",
    },
    {
      prop: "size",
      type: "sm | md | lg",
      default: "md",
      description: "Controls the size of the badge.",
    },
    {
      prop: "className",
      type: "string",
      description: "Additional CSS classes to apply.",
    },
    {
      prop: "children",
      type: "ReactNode",
      required: true,
      description: "Content rendered inside the badge.",
    },
  ],
  name: "Badge",
  description: "A small label component for status, tags, and categories.",
  preview: (
    <div className="flex flex-col gap-6 items-center justify-center w-full">
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Badge variant="solid" className="rounded-full border-0">
          Solid
        </Badge>
        <Badge
          variant="success"
          className="rounded-full border-0 bg-green-500/20 text-green-600 flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          Online
        </Badge>
        <Badge
          variant="danger"
          className="rounded-full border-0 bg-red-500/20 text-red-600 flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
          Offline
        </Badge>
        <Badge
          variant="warning"
          className="rounded-full border-0 bg-yellow-500/20 text-yellow-600 flex items-center gap-1.5"
        >
          <Clock size={11} />
          Pending
        </Badge>
        <Badge
          variant="default"
          className="rounded-full border-0 bg-purple-500/20 text-purple-600 flex items-center gap-1.5"
        >
          <Star size={11} />
          Featured
        </Badge>
        <Badge
          variant="default"
          className="rounded-full border-0 bg-blue-500/20 text-blue-600 flex items-center gap-1.5"
        >
          <Bell size={11} />
          Notification
        </Badge>
      </div>
    </div>
  ),
  code: `import { Badge } from "@kennbalino/kui";

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="solid">Solid</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="muted">Muted</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`,
};
