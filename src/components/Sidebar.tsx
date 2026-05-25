"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

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
  const [search, setSearch] = useState(""); // ← add

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <button
        className={cn(
          "md:hidden fixed top-4 left-4 z-50 p-2 rounded border border-white/10 bg-black/80 backdrop-blur text-white",
          isOpen && "hidden",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <Menu size={18} />
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-64 flex flex-col border-r border-white/10 bg-black/80 backdrop-blur-md z-40 transition-transform duration-300",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="px-6 py-6 border-b border-white/10">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-white font-bold text-xl tracking-widest hover:opacity-80 transition-opacity duration-200">
              K<span className="text-gray-500">UI</span>
            </span>
          </Link>
          <p className="text-gray-600 text-xs tracking-widest mt-1">
            COMPONENT LIBRARY
          </p>
        </div>

        <div className="px-4 pt-4">
          <div className="relative flex items-center">
            <Search
              size={13}
              className="absolute left-3 text-gray-600 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded text-sm text-white placeholder:text-gray-600 px-3 py-2 pl-8 outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all duration-200"
            />
            {/* Clear button */}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 text-gray-600 hover:text-white transition-colors duration-200"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto">
          <p className="text-gray-600 text-xs tracking-widest uppercase px-2 mb-3">
            COMPONENTS
          </p>

          {filtered.length === 0 && (
            <p className="text-gray-600 text-xs px-2 py-2">
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
                    ? "bg-white/10 text-white border border-white/15"
                    : "text-gray-500 hover:text-white hover:bg-white/5",
                )}
              >
                {component.name}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-white/10">
          <p className="text-gray-600 text-xs tracking-widests uppercase">
            BY KENNETH JHUN BALINO
          </p>
        </div>
      </aside>
    </>
  );
};
