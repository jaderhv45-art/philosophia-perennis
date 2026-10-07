"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";
import { categories } from "@/lib/posts";

export default function Header() {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Philosophia Perennis — início">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-accent font-display text-lg text-accent">Φ</span>
          <span className="hidden font-display text-xl tracking-wide sm:block">Philosophia Perennis</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Categorias">
          {categories.map((c) => (
            <Link key={c} href={`/?cat=${encodeURIComponent(c)}#ensaios`} className="font-sans text-[13px] text-muted transition-colors hover:text-accent">{c}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button onClick={() => setSearch(true)} aria-label="Pesquisar" className="p-2 text-muted hover:text-accent transition-colors"><Search size={18} /></button>
          <ThemeToggle />
          <button onClick={() => setMenu(!menu)} aria-label="Menu" className="p-2 text-muted lg:hidden">{menu ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {menu && (
        <nav className="border-t border-line px-6 py-4 lg:hidden" aria-label="Categorias (mobile)">
          {categories.map((c) => (
            <Link key={c} href={`/?cat=${encodeURIComponent(c)}#ensaios`} onClick={() => setMenu(false)} className="block py-2 font-display text-xl">{c}</Link>
          ))}
        </nav>
      )}
      <SearchModal open={search} onClose={() => setSearch(false)} />
    </header>
  );
}
