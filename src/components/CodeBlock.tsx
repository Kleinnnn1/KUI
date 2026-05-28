import { codeToHtml } from "shiki";
import { cn } from "@/app/lib/utils";
import { CopyButton } from "@/components/CopyButton";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export const CodeBlock = async ({
  code,
  language = "tsx",
  className,
}: CodeBlockProps) => {
  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      dark: "dark-plus",
      light: "github-light",
    },
    defaultColor: false,
  });

  return (
    <div
      className={cn(
        "relative rounded-md border border-border bg-background-muted backdrop-blur-md overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs text-foreground-subtle tracking-widest uppercase">
          {language}
        </span>
        <CopyButton code={code} />
      </div>

      <div
        className="p-4 text-sm leading-relaxed overflow-x-auto [&>pre]:bg-transparent! [&>pre]:p-0! whitespace-pre-wrap break-all dark:[&_.shiki]:text-[var(--shiki-dark)] dark:[&_.shiki_span]:text-[var(--shiki-dark)] light:[&_.shiki]:text-[var(--shiki-light)] light:[&_.shiki_span]:text-[var(--shiki-light)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
