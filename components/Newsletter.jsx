"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    // TODO: integrar com Buttondown / Resend / Mailchimp (ex.: POST em /api/subscribe)
    setDone(true);
  };
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-prose px-6 py-20 text-center">
        <p className="eyebrow mb-3">Newsletter</p>
        <h2 className="font-display text-4xl">Um ensaio por semana, sem ruído.</h2>
        <p className="mt-4 font-body text-muted">Cadastre-se para receber ensaios semanais sobre a sabedoria perene.</p>
        {done ? (
          <p className="mt-8 font-display text-2xl text-accent">Obrigado. Até o próximo ensaio.</p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md border-b border-fg/30 focus-within:border-accent">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" aria-label="E-mail" className="flex-1 bg-transparent py-3 outline-none placeholder:text-muted" />
            <button className="flex items-center gap-2 text-sm text-accent" aria-label="Inscrever-se">Inscrever <ArrowRight size={16} /></button>
          </form>
        )}
      </div>
    </section>
  );
}
