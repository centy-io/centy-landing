import Image from "next/image";
import Link from "next/link";
import logoColor from "@centy-io/assets/logos/logo-color.svg";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b-2 border-[var(--foreground)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoColor}
              alt="Centy Logo"
              width={28}
              height={28}
              priority
            />
            <span className="font-mono text-xl font-bold tracking-tight text-[var(--foreground)]">
              centy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] hover:underline"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] hover:underline"
            >
              How It Works
            </Link>
            <Link
              href="https://docs.centy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] hover:underline"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/centy-io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[var(--foreground)] hover:underline"
            >
              GitHub
            </Link>
          </div>

          <Link
            href="https://app.centy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest bg-[var(--foreground)] text-[var(--background)] border-2 border-[var(--foreground)] hover:bg-transparent hover:text-[var(--foreground)] transition-all duration-100"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
