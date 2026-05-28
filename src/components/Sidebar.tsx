"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Search, Sun, Moon } from "lucide-react";

const components = [
  { name: "Button", slug: "button" },
  { name: "Badge", slug: "badge" },
  { name: "Card", slug: "card" },
  { name: "Input", slug: "input" },
  { name: "Toast", slug: "toast" },
  { name: "Modal", slug: "modal" },
  { name: "Avatar", slug: "avatar" },
  { name: "Dropdown", slug: "dropdown" },
  { name: "Tabs", slug: "tabs" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isLight) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <button
        className={cn(
          "md:hidden fixed top-4 left-4 z-50 p-2 rounded border border-border bg-background/80 backdrop-blur text-foreground",
          isOpen && "hidden",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <Menu size={18} />
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-background/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-64 flex flex-col border-r border-border bg-background/80 backdrop-blur-md z-40 transition-transform duration-300",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="px-6 py-6 border-b border-border flex items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-foreground font-bold text-xl tracking-widest hover:opacity-80 transition-opacity duration-200">
              K<span className="text-foreground-muted">UI</span>
            </span>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-foreground-muted hover:text-foreground hover:bg-background-muted transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </div>

        <div className="px-6 pt-1 pb-0">
          <p className="text-foreground-subtle text-xs tracking-widest">
            COMPONENT LIBRARY
          </p>
        </div>

        <div className="px-4 pt-4">
          <div className="relative flex items-center">
            <Search
              size={13}
              className="absolute left-3 text-foreground-subtle pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-background-muted border border-border rounded text-sm text-foreground placeholder:text-foreground-subtle px-3 py-2 pl-8 outline-none focus:border-border-strong focus:ring-1 focus:ring-ring transition-all duration-200"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 text-foreground-subtle hover:text-foreground transition-colors duration-200"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto">
          <p className="text-foreground-subtle text-xs tracking-widest uppercase px-2 mb-3">
            COMPONENTS
          </p>

          {filtered.length === 0 && (
            <p className="text-foreground-subtle text-xs px-2 py-2">
              No components found.
            </p>
          )}

          {filtered.map((component) => {
            const isActive = pathname === `/docs/${component.slug}`;
            return (
              <Link
                key={component.slug}
                href={`/docs/${component.slug}`}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-3 py-2 rounded text-sm tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-background-muted text-foreground border border-border-strong"
                    : "text-foreground-muted hover:text-foreground hover:bg-background-muted",
                )}
              >
                {component.name}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-border">
          <p className="text-foreground-subtle text-xs tracking-widest uppercase">
            BY KENNETH JHUN BALINO
          </p>
        </div>
      </aside>
    </>
  );
};
