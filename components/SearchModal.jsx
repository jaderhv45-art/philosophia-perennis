"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { posts } from "@/lib/posts";

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    ref.current?.focus();
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? posts.filter((p) => (p.title + p.excerpt + p.category).toLowerCase().includes(s)) : [];
  }, [q]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-bg/90 backdrop-blur-md px-6 pt-[15vh]" onClick={onClose} role="dialog" aria-modal="true" aria-label="Pesquisar">
      <div className="mx-auto max-w-prose" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-line pb-3">
          <Search size={20} className="text-accent" />
          <input ref={ref} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Pesquisar ensaios…" className="flex-1 bg-transparent font-display text-2xl outline-none placeholder:text-muted" />
          <button onClick={onClose} aria-label="Fechar" className="text-muted hover:text-fg"><X size={20} /></button>
        </div>
        <ul className="mt-6 space-y-5">
          {results.map((p) => (
            <li key={p.slug}>
              <Link href={`/posts/${p.slug}`} onClick={onClose} className="group block">
                <span className="eyebrow">{p.category}</span>
                <span className="block font-display text-2xl group-hover:text-accent transition-colors">{p.title}</span>
              </Link>
            </li>
          ))}
          {q && !results.length && <li className="text-muted">Nenhum resultado para “{q}”.</li>}
        </ul>
      </div>
    </div>
  );
}
