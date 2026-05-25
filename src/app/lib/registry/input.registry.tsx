import { Input } from "@/kui/Input";
import { Search } from "lucide-react";
import type { ComponentEntry } from "./types";

export const inputRegistry: ComponentEntry = {
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
      <Input placeholder="Disabled input" disabled />
    </div>
  ),
  code: `import { Input } from "@/kui/Input";
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
