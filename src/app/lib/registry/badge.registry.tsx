import { Badge } from "@/kui/Badge";
import type { ComponentEntry } from "./types";

export const badgeRegistry: ComponentEntry = {
  name: "Badge",
  description: "A small label component for status, tags, and categories.",
  preview: (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="muted">Muted</Badge>
    </div>
  ),
  code: `import { Badge } from "@/kui/Badge";

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
