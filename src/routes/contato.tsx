import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { StarScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Tia Luh" },
      { name: "description", content: "Vamo fechar parceria? Email, WhatsApp e formulário direto. Sem coach, só real." },
      { property: "og:title", content: "Contato Tia Luh" },
      { property: "og:description", content: "Email e WhatsApp para parcerias." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-ink-grain py-16">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="stamp animate-stamp">DEU MATCH?</span>
          <h1 className="mt-4 font-display text-paper text-6xl md:text-7xl leading-none">
            VAMO DE<br/><span className="text-blood">VERDADE?</span>
          </h1>
          <p className="mt-6 text-paper/85 font-mono max-w-md">
            Manda direto. Sem brief de 40 páginas, sem coach, sem "vamos alinhar a sinergia". Fala o que precisa, eu te respondo.
          </p>

          <div className="mt-8 space-y-4 font-mono">
            <ContactLine label="EMAIL" value="Universomaternodaluh@gmail.com" href="mailto:Universomaternodaluh@gmail.com" />
            <ContactLine label="WHATSAPP" value="(47) 99687-5732" href="https://wa.me/5547996875732" />
            <ContactLine label="INSTAGRAM" value="@universoluh.oficial" href="https://instagram.com/universoluh.oficial" />
            <ContactLine label="TIKTOK" value="@tialuh" href="https://tiktok.com/@tialuh" />
          </div>

          <div className="mt-10">
            <a href="/midia-kit-tia-luh.pdf" download className="btn-paper">
              ↓ BAIXAR MEDIA KIT (PDF)
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="zine-box p-6 md:p-8 space-y-4 relative"
        >
          <StarScribble className="absolute -top-6 -right-4 w-14 h-14 text-blood animate-shake" />
          <h2 className="font-display text-3xl text-ink">CONTA AÍ</h2>
          <Field label="SEU NOME" name="nome" />
          <Field label="MARCA / EMPRESA" name="marca" />
          <Field label="EMAIL" name="email" type="email" />
          <div>
            <label className="block font-display tracking-widest text-sm text-ink mb-1">A PROPOSTA</label>
            <textarea required rows={5} name="msg"
              className="w-full bg-transparent border-2 border-ink p-3 font-mono text-ink focus:outline-none focus:border-blood" />
          </div>
          <button type="submit" className="btn-blood w-full justify-center">
            {sent ? "RECEBIDO ✓" : "MANDAR BALA"}
          </button>
          {sent && (
            <p className="text-center text-ink font-mono text-sm">
              Beleza! Te respondo no email em até 48h. Sem enrolação.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactLine({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-baseline gap-3 group">
      <span className="font-display tracking-widest text-blood text-sm w-24 shrink-0">{label}</span>
      <span className="text-paper group-hover:underline decoration-blood decoration-4 underline-offset-4">{value}</span>
    </a>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block font-display tracking-widest text-sm text-ink mb-1">{label}</label>
      <input required type={type} name={name}
        className="w-full bg-transparent border-2 border-ink p-3 font-mono text-ink focus:outline-none focus:border-blood" />
    </div>
  );
}
