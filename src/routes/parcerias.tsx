import { createFileRoute, Link } from "@tanstack/react-router";
import { StarScribble, BoltScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/parcerias")({
  head: () => ({
    meta: [
      { title: "Parcerias & Mídia — Tia Luh" },
      { name: "description", content: "Parcerias: 208 Studio e Giovanni Cabeleireiro. Se eu aprovo, eu indico." },
      { property: "og:title", content: "Parcerias da Tia Luh" },
      { property: "og:description", content: "Se eu aprovo, eu indico." },
    ],
  }),
  component: ParceriasPage,
});

const brands = [
  { name: "208 STUDIO", reach: "Parceria fixa", color: "bg-blood" },
  { name: "GIOVANNI CABELEIREIRO", reach: "Beleza & cabelo", color: "bg-paper text-ink" },
];

const slogans = [
  "SE EU APROVO, EU INDICO.",
  "VAMO DE VERDADE?",
  "SEM ROMANTIZAR.",
  "VIDA REAL.",
];

function ParceriasPage() {
  return (
    <>
      <section className="bg-ink-grain py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="stamp animate-stamp">SE EU APROVO, EU INDICO</span>
            <h1 className="mt-4 font-display text-paper text-6xl md:text-8xl leading-none">
              QUEM JÁ <span className="text-blood">VEIO COMIGO</span>
            </h1>
            <p className="mt-4 text-steel font-mono uppercase tracking-widest text-xs">Parcerias atuais</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {brands.map((b) => (
              <div key={b.name} className={`border-[4px] border-paper p-6 relative ${b.color}`}>
                <BoltScribble className="absolute -top-4 -right-3 w-4 h-10 text-paper" />
                <div className="font-display text-3xl leading-none">{b.name}</div>
                <div className="mt-3 font-mono text-xs uppercase tracking-widest opacity-80">{b.reach}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mídia / Reportagem */}
      <section className="bg-ink-grain py-16 border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <span className="stamp">NA MÍDIA</span>
            <h2 className="mt-4 font-display text-paper text-5xl md:text-6xl leading-none">
              REPORTAGEM EM <span className="text-blood">PÁGINA FEMININA</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto zine-box p-6">
            <div className="font-mono text-ink/80 text-xs uppercase tracking-widest">Embed / link</div>
            <div className="mt-2 font-display text-2xl text-ink">Reportagem em página feminina</div>
            <p className="mt-3 font-mono text-ink/80 text-sm">
              Espaço reservado pra reportagem em veículo de página feminina. (link em breve)
            </p>
            <a href="#" className="mt-4 inline-block btn-paper">VER REPORTAGEM →</a>
          </div>
        </div>
      </section>

      {/* Slogans */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {slogans.map((s, i) => (
              <div key={s} className="relative zine-box px-6 py-10 text-center" style={{ rotate: `${(i % 2 === 0 ? -1 : 1)}deg` }}>
                <StarScribble className="absolute -top-6 -left-4 w-12 h-12 text-blood" />
                <div className="font-display text-4xl md:text-5xl text-ink leading-none">{s}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/contato" className="btn-blood">FECHAR PARCERIA →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
