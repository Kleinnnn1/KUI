import { notFound } from "next/navigation";
import { registry } from "@/app/lib/registry";
import { Preview } from "@/components/Preview";
import { CodeBlock } from "@/components/CodeBlock";
import type { Metadata } from "next";

const installCode = `npm install class-variance-authority clsx tailwind-merge`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ component: string }>;
}): Promise<Metadata> {
  const { component } = await params;
  const entry = registry[component];

  if (!entry) return { title: "Not Found" };

  return {
    title: entry.name,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;
  const entry = registry[component];

  if (!entry) return notFound();

  return (
    <div className="flex flex-col gap-10 relative z-0">
      {" "}
      <div className="flex flex-col gap-3 relative z-10">
        {" "}
        <h2 className="text-white text-sm tracking-widest font-medium">
          PREVIEW
        </h2>
        <Preview>{entry.preview}</Preview>
      </div>
      <div className="flex flex-col gap-3 relative z-0">
        {" "}
        <h2 className="text-white text-sm tracking-widest font-medium">
          INSTALLATION
        </h2>
        <CodeBlock code={installCode} language="bash" />
      </div>

      <div className="flex flex-col gap-3 relative z-0">
        {" "}
        <h2 className="text-white text-sm tracking-widest font-medium">
          USAGE
        </h2>
        <CodeBlock code={entry.code} language="tsx" />
      </div>
    </div>
  );
}
