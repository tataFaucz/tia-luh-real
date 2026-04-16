import { createFileRoute, Link } from "@tanstack/react-router";
import { StarScribble, BoltScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/parcerias")({
  head: () => ({
    meta: [
      { title: "Parcerias — Tia Luh" },
      { name: "description", content: "Marcas que confiaram: Salon Line, Dig For Fashion, Lobits, Blake's Brownie e mais. Vamo de verdade?" },
      { property: "og:title", content: "Parcerias da Tia Luh" },
      { property: "og:description", content: "Marcas reais, conteúdo real." },
    ],
  }),
  component: ParceriasPage,
});

const brands = [
  { name: "SALON LINE", reach: "+97M", color: "bg-blood" },
  { name: "DIG FOR FASHION", reach: "21,3 mil", color: "bg-paper text-ink" },
  { name: "LOBITS", reach: "6,9 mil", color: "bg-ink border-paper" },
  { name: "BLAKE'S BROWNIE", reach: "35 mil", color: "bg-paper text-ink" },
  { name: "CRIS NAILS", reach: "8 mil", color: "bg-blood" },
  { name: "CANUTO BARBEARIA", reach: "135,5 mil", color: "bg-ink border-paper" },
];

const slogans = [
  "SEM ROMANTIZAR.",
  "VAMO DE VERDADE?",
  "EU DISSE E REPITO.",
  "REAL OFICIAL.",
];

function ParceriasPage() {
  return (
    <>
      <section className="bg-ink-grain py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <span className="stamp animate-stamp">DEU MATCH?</span>
            <h1 className="mt-4 font-display text-paper text-6xl md:text-8xl leading-none">
              QUEM JÁ <span className="text-blood">VEIO COMIGO</span>
            </h1>
            <p className="mt-4 text-steel font-mono uppercase tracking-widest text-xs">Parcerias TikTok + Instagram</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((b) => (
              <div key={b.name} className={`border-[4px] border-paper p-6 relative ${b.color}`}>
                <BoltScribble className="absolute -top-4 -right-3 w-4 h-10 text-paper" />
                <div className="font-display text-3xl leading-none">{b.name}</div>
                <div className="mt-3 font-mono text-xs uppercase tracking-widest opacity-80">Alcance · {b.reach}</div>
              </div>
            ))}
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
