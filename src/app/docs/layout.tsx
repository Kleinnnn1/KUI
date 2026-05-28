import { Sidebar } from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - KUI",
    default: "KUI - Minimal Dark Component Library",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 min-w-0 md:ml-64 p-6 md:p-10 pt-16 md:pt-10">
        {children}
      </main>
    </div>
  );
}
