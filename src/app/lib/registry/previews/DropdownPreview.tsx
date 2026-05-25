"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from "@/kui/Dropdown";
import { Button } from "@/kui/Button";
import { User, Settings, Bell, LogOut } from "lucide-react";

export const DropdownPreview = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-500 text-sm tracking-wide">
        Click the buttons below to trigger a dropdown.
      </p>

      <div className="flex flex-wrap gap-6 items-start justify-center">

        <Dropdown>
          <DropdownTrigger>
            <Button variant="ghost">Open Menu ▾</Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem icon={<User size={14} />}>Profile</DropdownItem>
            <DropdownItem icon={<Settings size={14} />}>Settings</DropdownItem>
            <DropdownItem icon={<Bell size={14} />}>Notifications</DropdownItem>
            <DropdownSeparator />
            <DropdownItem icon={<LogOut size={14} />} variant="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <Button variant="solid">Actions ▾</Button>
          </DropdownTrigger>
          <DropdownMenu align="end">
            <DropdownLabel>Account</DropdownLabel>
            <DropdownItem icon={<User size={14} />}>Profile</DropdownItem>
            <DropdownItem icon={<Settings size={14} />}>Settings</DropdownItem>
            <DropdownSeparator />
            <DropdownLabel>Danger Zone</DropdownLabel>
            <DropdownItem variant="danger" icon={<LogOut size={14} />}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
