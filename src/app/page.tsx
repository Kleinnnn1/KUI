import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@kennbalino/kui";
import { Badge } from "@kennbalino/kui";
import { Card } from "@kennbalino/kui";
import { Input } from "@kennbalino/kui";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimal Dark Component Library",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full opacity-10 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #3b5bdb, transparent)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-125 h-125 rounded-full opacity-10 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #6741d9, transparent)",
          }}
        />
      </div>

      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 pb-16">
        <div className="mb-6 px-4 py-1.5 rounded-full border border-border bg-background-muted backdrop-blur text-xs text-foreground-muted tracking-widest">
          REACT · TYPESCRIPT · TAILWIND
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight leading-none mb-6">
          K<span className="text-foreground-muted">UI</span>
        </h1>

        <p className="text-foreground-muted text-lg sm:text-xl max-w-lg leading-relaxed mb-10">
          A minimal dark/light component library built with React, TypeScript, and
          Tailwind. Copy. Paste. Ship.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link href="/docs/button">
            <Button variant="solid" size="lg">
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          <Link href="https://github.com/Kleinnnn1/KUI-v1" target="_blank">
            <Button variant="ghost" size="lg">
              <GithubIcon size={16} />
              <span className="ml-2">GitHub</span>
            </Button>
          </Link>
        </div>

        <div className="relative mt-24 w-full max-w-5xl mx-auto">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(59,91,219,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <Card variant="elevated" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-semibold text-lg mt-2">
                  Button
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Multiple variants and sizes with smooth hover transitions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Button variant="solid" size="sm">
                  Solid
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost
                </Button>
                <Button variant="danger" size="sm">
                  Danger
                </Button>
              </div>
              <Link href="/docs/button" className="w-full mt-2">
                <Button variant="ghost" size="sm" className="w-full">
                  View Docs <ArrowRight size={12} className="ml-1" />
                </Button>
              </Link>
            </Card>

            <Card variant="elevated" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-semibold text-lg mt-2">
                  Badge
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Status labels with semantic color variants for any context.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="muted">Muted</Badge>
              </div>
              <Link href="/docs/badge" className="w-full mt-2">
                <Button variant="ghost" size="sm" className="w-full">
                  View Docs <ArrowRight size={12} className="ml-1" />
                </Button>
              </Link>
            </Card>

            <Card variant="elevated" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-semibold text-lg mt-2">
                  Input
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Text inputs with label, hint, error, and icon support.
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <Input
                  placeholder="Search components..."
                  leftIcon={<Search size={13} />}
                  size="sm"
                />
                <Input
                  placeholder="you@example.com"
                  size="sm"
                  error="Invalid email address."
                />
              </div>
              <Link href="/docs/input" className="w-full mt-2">
                <Button variant="ghost" size="sm" className="w-full">
                  View Docs <ArrowRight size={12} className="ml-1" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center">
        <p className="text-foreground-subtle text-xs tracking-widest">
          BUILT BY{" "}
          <Link
            href="https://github.com/Kleinnnn1"
            target="_blank"
            className="text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            KENNETH JHUN BALINO
          </Link>
        </p>
      </footer>
    </div>
  );
}
