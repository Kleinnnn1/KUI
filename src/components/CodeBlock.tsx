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
    theme: "dark-plus",
  });

  return (
    <div
      className={cn(
        "relative rounded-md border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-gray-600 tracking-widest uppercase">
          {language}
        </span>
        <CopyButton code={code} />
      </div>

      <div
        className="p-4 text-sm leading-relaxed overflow-x-auto [&>pre]:bg-transparent! [&>pre]:p-0! whitespace-pre-wrap break-all"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
