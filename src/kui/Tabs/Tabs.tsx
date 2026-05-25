"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import {
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
} from "./tabs.variants";
import { cn } from "@/app/lib/utils";

type TabsContextType = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabs must be used inside Tabs");
  return ctx;
};

type TabsProps = {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
};

export const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const controlled = value !== undefined;

  const currentValue = controlled ? value! : internalValue;

  const handleChange = (val: string) => {
    if (!controlled) setInternalValue(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider
      value={{ value: currentValue, setValue: handleChange }}
    >
      <div className={cn("flex flex-col gap-4", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

type TabsListProps = VariantProps<typeof tabsListVariants> & {
  children: ReactNode;
  className?: string;
};

export const TabsList = ({ children, variant, className }: TabsListProps) => (
  <div
    className={cn(
      tabsListVariants({ variant }),
      "flex w-full overflow-x-auto scrollbar-none",
      className,
    )}
  >
    {children}
  </div>
);

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
};

export const TabsTrigger = ({
  value,
  children,
  className,
  disabled,
  icon,
}: TabsTriggerProps) => {
  const { value: currentValue, setValue } = useTabs();
  const isActive = currentValue === value;

  return (
    <button
      onClick={() => !disabled && setValue(value)}
      disabled={disabled}
      className={cn(
        tabsTriggerVariants({ state: isActive ? "active" : "inactive" }),
        "flex-1 shrink-0 whitespace-nowrap",
        className,
      )}
    >
      {icon && <span className="mr-1.5 shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

type TabsContentProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export const TabsContent = ({
  value,
  children,
  className,
}: TabsContentProps) => {
  const { value: currentValue } = useTabs();
  const isActive = currentValue === value;

  return (
    <div
      className={cn(
        tabsContentVariants({ state: isActive ? "active" : "inactive" }),
        className,
      )}
    >
      {children}
    </div>
  );
};
