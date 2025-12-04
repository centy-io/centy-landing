import Image from "next/image";
import Link from "next/link";
import logoColor from "@centy-io/assets/logos/logo-color.svg";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--secondary)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoColor}
              alt="Centy Logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Centy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="https://docs.centy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/tupe12334/centy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
            >
              GitHub
            </Link>
          </div>

          <Link
            href="#cta"
            className="px-4 py-2 text-sm font-medium text-white bg-[var(--primary)] rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
