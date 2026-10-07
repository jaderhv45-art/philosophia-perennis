import Link from "next/link";
import { Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-wide gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">Philosophia Perennis</p>
          <p className="mt-3 max-w-sm font-display text-lg italic text-muted">“Há uma sabedoria que não nasceu hoje e que não morrerá amanhã.”</p>
        </div>
        <nav aria-label="Institucional" className="space-y-2 text-sm text-muted">
          <Link href="/#sobre" className="block hover:text-accent">Sobre</Link>
          <Link href="/#ensaios" className="block hover:text-accent">Ensaios</Link>
          <Link href="/#newsletter" className="block hover:text-accent">Newsletter</Link>
        </nav>
        <div className="flex gap-4 text-muted">
          <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter size={18} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram size={18} /></a>
          <a href="mailto:contato@exemplo.com" aria-label="E-mail" className="hover:text-accent"><Mail size={18} /></a>
        </div>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-muted">© {new Date().getFullYear()} Philosophia Perennis. Todos os direitos reservados.</p>
    </footer>
  );
}
