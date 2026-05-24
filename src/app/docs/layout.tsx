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
    <div className="min-h-screen bg-black flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-10 max-w-4xl">{children}</main>
    </div>
  );
}
