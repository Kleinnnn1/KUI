import { buttonRegistry } from "./button.registry";
import { badgeRegistry } from "./badge.registry";
import { cardRegistry } from "./card.registry";
import { inputRegistry } from "./input.registry";
import { toastRegistry } from "./toast.registry";
import type { ComponentEntry } from "./types";

export const registry: Record<string, ComponentEntry> = {
  button: buttonRegistry,
  badge:  badgeRegistry,
  card:   cardRegistry,
  input:  inputRegistry,
  toast:  toastRegistry,
};

export type { ComponentEntry };
