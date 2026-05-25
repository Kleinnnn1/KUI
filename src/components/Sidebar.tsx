"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const components = [
  { name: "Button", slug: "button" },
  { name: "Badge", slug: "badge" },
  { name: "Card", slug: "card" },
  { name: "Input", slug: "input" },
  { name: "Toast", slug: "toast" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          <p className="text-gray-600 text-xs tracking-widest px-2 mb-3">
            COMPONENTS
          </p>

          {components.map((component) => {
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
          <p className="text-gray-600 text-xs tracking-widest">BY KLEIN</p>
        </div>
      </aside>
    </>
  );
};
