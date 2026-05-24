import Link from "next/link";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/kui/Button";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/10 bg-black/60 backdrop-blur-md">
    <Link
      href="/"
      className="text-white font-bold text-xl tracking-widest"
    >
      K<span className="text-gray-500">UI</span>
    </Link>

    <div className="flex items-center gap-3">
      <Link
        href="https://github.com/Kleinnnn1/KUI-v1"
        target="_blank"
        className="flex items-center gap-2 text-gray-500 hover:text-white text-sm tracking-wide transition-colors duration-200"
      >
        <GithubIcon size={16} />
        GitHub
      </Link>
      <Link href="/docs/button">
        <Button variant="ghost" size="sm">
          Docs
        </Button>
      </Link>
    </div>
  </nav>
);
