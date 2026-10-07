"use client";
import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton({ title }) {
  const [ok, setOk] = useState(false);
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title, url }); return; } catch {} }
    await navigator.clipboard.writeText(url);
    setOk(true); setTimeout(() => setOk(false), 2000);
  };
  return (
    <button onClick={share} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
      {ok ? <Check size={15} /> : <Share2 size={15} />} {ok ? "Link copiado" : "Compartilhar"}
    </button>
  );
}
