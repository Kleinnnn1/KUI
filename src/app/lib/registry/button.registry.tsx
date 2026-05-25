import { Button } from "@/kui/Button";
import type { ComponentEntry } from "./types";

export const buttonRegistry: ComponentEntry = {
  name: "Button",
  description: "A flexible button component with multiple variants and sizes.",
  preview: (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="muted">Muted</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
  code: `import { Button } from "@/kui/Button";

// Variants
<Button variant="solid">Solid</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="muted">Muted</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled
<Button disabled>Disabled</Button>`,
};
