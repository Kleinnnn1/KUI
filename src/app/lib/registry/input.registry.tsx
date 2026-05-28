import { Input } from "@kennbalino/kui";
import { Search } from "lucide-react";
import type { ComponentEntry } from "./types";

export const inputRegistry: ComponentEntry = {
  props: [
    {
      prop: "variant",
      type: "default | success | error",
      default: "default",
      description: "Controls the visual state of the input.",
    },
    {
      prop: "size",
      type: "sm | md | lg",
      default: "md",
      description: "Controls the size of the input.",
    },
    {
      prop: "label",
      type: "string",
      description: "Label text displayed above the input.",
    },
    {
      prop: "hint",
      type: "string",
      description: "Helper text displayed below the input.",
    },
    {
      prop: "error",
      type: "string",
      description: "Error message — overrides hint and sets error variant.",
    },
    {
      prop: "leftIcon",
      type: "ReactNode",
      description: "Icon displayed on the left side of the input.",
    },
    {
      prop: "rightIcon",
      type: "ReactNode",
      description: "Icon displayed on the right side of the input.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the input and prevents interaction.",
    },
  ],
  name: "Input",
  description:
    "A text input component with label, hint, error, and icon support.",
  preview: (
    <div className="flex flex-col gap-4 w-72">
      <Input placeholder="Default input" />
      <Input
        label="Email"
        hint="We'll never share your email."
        placeholder="you@example.com"
      />
      <Input
        label="Search"
        placeholder="Search components..."
        leftIcon={<Search size={14} />}
      />
      <Input
        label="Username"
        placeholder="Enter username"
        error="Username is already taken."
      />
      <Input variant="success" label="Email" placeholder="you@example.com" />
      <Input
        placeholder="Disabled input"
        disabled
        className="disabled:opacity-100 disabled:bg-background-muted disabled:text-foreground-subtle disabled:border-border disabled:placeholder:text-foreground-subtle/50 disabled:cursor-not-allowed"
      />
    </div>
  ),
  code: `import { Input } from "@kennbalino/kui";
import { Search } from "lucide-react";

// Default
<Input placeholder="Default input" />

// With label and hint
<Input
  label="Email"
  hint="We'll never share your email."
  placeholder="you@example.com"
/>

// With icon
<Input
  label="Search"
  placeholder="Search components..."
  leftIcon={<Search size={14} />}
/>

// Error state
<Input
  label="Username"
  placeholder="Enter username"
  error="Username is already taken."
/>

// Success state
<Input variant="success" label="Email" placeholder="you@example.com" />

// Disabled
<Input placeholder="Disabled input" disabled />`,
};
