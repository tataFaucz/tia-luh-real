import { Link } from "@tanstack/react-router";
import { StarScribble } from "./Scribbles";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/quem-sou", label: "Quem Sou?" },
  { to: "/conteudo", label: "Reels" },
  { to: "/numeros", label: "Números" },
  { to: "/parcerias", label: "Parcerias" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ink-grain border-b-[3px] border-paper/20 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <StarScribble className="w-7 h-7 text-blood group-hover:animate-shake" />
          <span className="font-display text-2xl tracking-wider text-paper">TIA LUH</span>
          <span className="hidden sm:inline text-[10px] font-mono text-steel uppercase tracking-widest">@universoluh.oficial</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 font-display text-sm tracking-wider uppercase text-paper/80 hover:text-paper hover:bg-blood/20 transition"
              activeProps={{ className: "text-paper bg-blood !text-paper" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-paper border-2 border-paper px-3 py-1.5 font-display tracking-wider"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? "X" : "≡ MENU"}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-ink border-t-2 border-paper/20 px-4 py-3 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-xl tracking-wider uppercase text-paper border-b border-paper/10"
              activeProps={{ className: "text-blood" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
