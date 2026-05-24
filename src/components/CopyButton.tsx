"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-200"
    >
      {copied ? (
        <>
          <Check size={12} className="text-green-400" />
          <span className="text-green-400">Copied</span>
        </>
      ) : (
        <>
          <Copy size={12} />
          <span>Copy</span>
        </>
      )}
    </button>
  );
};
