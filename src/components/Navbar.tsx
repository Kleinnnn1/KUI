"use client";

import Link from "next/link";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@kennbalino/kui";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  const toggle = () => {
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

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md text-foreground-muted hover:text-foreground hover:bg-background-muted transition-all duration-200"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
};

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-border bg-background/60 backdrop-blur-md">
    <Link
      href="/"
      className="text-foreground font-bold text-xl tracking-widest"
    >
      K<span className="text-foreground-muted">UI</span>
    </Link>

    <div className="flex items-center gap-3">
      <Link
        href="https://github.com/Kleinnnn1/KUI-v1"
        target="_blank"
        className="flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm tracking-wide transition-colors duration-200"
      >
        <GithubIcon size={16} />
        GitHub
      </Link>

      <Link href="/docs/button">
        <Button variant="ghost" size="sm">
          Docs
        </Button>
      </Link>
      <ThemeToggle />
    </div>
  </nav>
);
