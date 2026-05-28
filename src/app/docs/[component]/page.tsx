import { notFound } from "next/navigation";
import { registry } from "@/app/lib/registry";
import { Preview } from "@/components/Preview";
import { CodeBlock } from "@/components/CodeBlock";
import { PropsTable } from "@/components/PropsTable";
import type { Metadata } from "next";

const installCode = `# Required
npm install @kennbalino/kui

# Optional — only if you want to use CVA, cn(), or lucide icons directly
npm install class-variance-authority clsx tailwind-merge lucide-react`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ component: string }>;
}): Promise<Metadata> {
  const { component } = await params;
  const entry = registry[component];
  if (!entry) return { title: "Not Found" };
  return { title: entry.name };
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
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <h1 className="text-foreground text-3xl font-semibold tracking-wide">
          {entry.name}
        </h1>
        <p className="text-foreground-muted text-sm leading-relaxed">
          {entry.description}
        </p>
      </div>

      <div className="flex flex-col gap-3 relative z-10">
        <h2 className="text-foreground text-sm tracking-widest font-medium">
          PREVIEW
        </h2>
        <Preview>{entry.preview}</Preview>
      </div>

      <div className="flex flex-col gap-3 relative z-0">
        <h2 className="text-foreground text-sm tracking-widest font-medium">
          INSTALLATION
        </h2>
        <CodeBlock code={installCode} language="bash" />
      </div>

      <div className="flex flex-col gap-3 relative z-0">
        <h2 className="text-foreground text-sm tracking-widest font-medium">
          USAGE
        </h2>
        <CodeBlock code={entry.code} language="tsx" />
      </div>

      {entry.props.length > 0 && (
        <div className="flex flex-col gap-3 relative z-0">
          <h2 className="text-foreground text-sm tracking-widests font-medium">
            PROPS
          </h2>
          <PropsTable props={entry.props} />
        </div>
      )}
    </div>
  );
}
