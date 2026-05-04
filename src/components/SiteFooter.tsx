import { StarScribble } from "./Scribbles";

export function SiteFooter() {
  return (
    <footer className="bg-ink-grain border-t-[3px] border-paper/20 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3 items-start">
        <div className="flex items-center gap-3">
          <StarScribble className="w-10 h-10 text-blood" />
          <div>
            <div className="font-display text-2xl text-paper tracking-wider">TIA LUH</div>
            <div className="text-steel text-xs uppercase tracking-widest font-mono">Sem papas, sem pose</div>
          </div>
        </div>

        <div className="flex justify-start md:justify-center">
          <span className="stamp animate-stamp">VAMO DE VERDADE?</span>
        </div>

        <div className="md:text-right text-paper/80 text-sm font-mono space-y-1">
          <div><a className="hover:text-blood" href="https://instagram.com/universoluh.oficial" target="_blank" rel="noreferrer">@universoluh.oficial</a></div>
          <div className="break-all"><a className="hover:text-blood" href="mailto:Universodaluh.contato@gmail.com">Universodaluh.contato@gmail.com</a></div>
          <div>Joinville/SC</div>
        </div>
      </div>
      <div className="border-t border-paper/10 py-3 text-center text-[11px] uppercase tracking-widest text-steel font-mono">
        © {new Date().getFullYear()} Luana Pessoa · Tia Luh
      </div>
    </footer>
  );
}
