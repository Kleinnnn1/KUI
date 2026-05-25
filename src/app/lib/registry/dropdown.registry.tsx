import { DropdownPreview } from "./previews/DropdownPreview";
import type { ComponentEntry } from "./types";

export const dropdownRegistry: ComponentEntry = {
  name: "Dropdown",
  description:
    "A dropdown menu component with trigger, items, labels, separators, and keyboard support.",
  preview: <DropdownPreview />,
  code: `"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from "@/kui/Dropdown";
import { Button } from "@/kui/Button";
import { User, Settings, LogOut } from "lucide-react";

export default function MyComponent() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost">Open Menu ▾</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownLabel>Account</DropdownLabel>
        <DropdownItem icon={<User size={14} />}>Profile</DropdownItem>
        <DropdownItem icon={<Settings size={14} />}>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<LogOut size={14} />} variant="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

// Align options
<DropdownMenu align="start">Item 1</DropdownMenu>  // default
<DropdownMenu align="center">Item 2</DropdownMenu>
<DropdownMenu align="end">Item 3</DropdownMenu>

// Side options
<DropdownMenu side="bottom">Item 4</DropdownMenu>  // default
<DropdownMenu side="top">Item 5</DropdownMenu>

// Item variants
<DropdownItem variant="default">Default</DropdownItem>
<DropdownItem variant="danger">Danger</DropdownItem>
<DropdownItem variant="disabled">Disabled</DropdownItem>`,
};
