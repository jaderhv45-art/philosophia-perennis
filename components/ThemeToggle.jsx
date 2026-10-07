"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("pp-theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <button onClick={toggle} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"} className="p-2 rounded-full text-muted hover:text-accent transition-colors">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
