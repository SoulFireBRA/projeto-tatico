"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/missao", label: "MISSÃO" },
  { href: "/operacoes", label: "OPERAÇÕES" },
  { href: "/recrutar", label: "RECRUTAR" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-pt-green/40 bg-black/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold tracking-widest text-pt-green text-glow"
        >
          <span className="border border-pt-green px-2 py-0.5">P.T.</span>
          <span className="hidden sm:inline">PROJETO TÁTICO</span>
        </Link>

        <ul className="flex flex-wrap gap-1 text-xs sm:gap-2 sm:text-sm">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-block border px-2 py-1 tracking-wider transition-colors ${
                    active
                      ? "border-pt-green bg-pt-green/10 text-pt-green text-glow"
                      : "border-transparent text-pt-green/60 hover:border-pt-green/40 hover:text-pt-green"
                  }`}
                >
                  [{link.label}]
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
