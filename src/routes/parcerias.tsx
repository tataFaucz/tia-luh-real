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
  { name: "208 STUDIO", reach: "Tatuagens, piercings e cafés", color: "bg-blood", href: "https://www.instagram.com/reel/DXjxNQ6hZgl/?igsh=MTN1OWVtOXpxNW81YQ==" },
  { name: "GEOVANI SILVA", reach: "Beleza & cabelo", color: "bg-paper text-ink", href: "https://www.instagram.com/reel/DQPmT31komI/?igsh=MWhzamR4c2lhbWFqNA==" },
  { name: "META", reach: "Empresa de tecnologia controladora de redes sociais globais", color: "bg-paper text-ink", href: "https://www.instagram.com/reel/DZ8HGS3s_-y/?igsh=ZXNwbHJqa2plNnpn" },
  { name: "SHEIN", reach: "global de varejo online de moda, beleza e estilo de vida", color: "bg-blood", href: "https://www.instagram.com/reel/DaL3630p8XT/?igsh=MWppOG95YjF6dmo4aA==" },
  { name: "DRA. DIRLEIA", reach: "Estética", color: "bg-blood", href: "https://www.instagram.com/reel/DYQWnSnNyrn/?igsh=dTBuc3IyMGNodWl5" },
  { name: "LUNAUME", reach: "Sushis a pronta entrega em Joinville", color: "bg-paper text-ink", href: "https://www.instagram.com/reel/DY8Am9XTIJW/?igsh=OWN1YjYxY2N6Mnp1" },
  { name: "MANEKI NEKO", reach: "Comidas orientais e lámen em Joinville", color: "bg-paper text-ink", href: "https://www.instagram.com/reel/DXfTqKKD7Sg/?igsh=czR3dHlkM2JicGo5" },
  { name: "SALON LINE", reach: "Shampoo, condicionador e tratamentos", color: "bg-blood", href: "https://vt.tiktok.com/ZSC3SgMLW/" },
  { name: "CRIS NAILS", reach: "Nail Art", color: "bg-blood", href: "https://www.instagram.com/reel/DY2LEXGOEMb/?igsh=MWY4dHBqY3BueGdhcQ==" },
  { name: "AQUI É R$5,00", reach: "Todos os produtos por R$5,00 em Joinville", color: "bg-paper text-ink", href: "https://vt.tiktok.com/ZSC3DFfJ6/" }
];

const slogans = [
  "SE EU APROVO, EU INDICO.",
  "VAMO DE DESABAFO?",
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
              b.href ? (
                <a
                  key={b.name}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-[4px] border-paper p-6 relative ${b.color} block`}
                >
                  <BoltScribble className="absolute -top-4 -right-3 w-4 h-10 text-paper" />
                  <div className="font-display text-3xl leading-none">{b.name}</div>
                  <div className="mt-3 font-mono text-xs uppercase tracking-widest opacity-80">{b.reach}</div>
                </a>
              ) : (
                <div key={b.name} className={`border-[4px] border-paper p-6 relative ${b.color}`}>
                  <BoltScribble className="absolute -top-4 -right-3 w-4 h-10 text-paper" />
                  <div className="font-display text-3xl leading-none">{b.name}</div>
                  <div className="mt-3 font-mono text-xs uppercase tracking-widest opacity-80">{b.reach}</div>
                </div>
              )
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
              REPORTAGENS:
            </h2>
          </div>
          <div className="max-w-3xl mx-auto zine-box p-6">
            <div className="font-mono text-ink/80 text-xs uppercase tracking-widest"></div>
            <div className="mt-2 font-display text-2xl text-ink">Reportagem em SBT - A Tarde é Nossa!</div>
            <p className="mt-3 font-mono text-ink/80 text-sm">
              Entrevista leve e descontraída sobre a primeira menstruação, com a participação da minha filha Ana, de 12 anos.
            </p>
            <a href="https://www.youtube-nocookie.com/embed/BbYTxVHtkLc?playlist=BbYTxVHtkLc&autoplay=1&iv_load_policy=3&loop=1&start=" className="mt-4 inline-block btn-paper" target="_blank" rel="noopener noreferrer">
              VER REPORTAGEM →
            </a>
          </div>
          <div className="max-w-3xl mx-auto zine-box p-6">
            <div className="font-mono text-ink/80 text-xs uppercase tracking-widest"></div>
            <div className="mt-2 font-display text-2xl text-ink">Reportagem em NSC TOTAL</div>
            <p className="mt-3 font-mono text-ink/80 text-sm">
              "Dei a volta por cima": influencer de Joinville soma 11 milhões de curtidas em rede social.
            </p>
            <a href="https://www.nsctotal.com.br/noticias/dei-a-volta-por-cima-influencer-de-joinville-soma-11-milhoes-de-curtidas-em-rede-social?utm_source=WhatsApp&utm_medium=link&utm_campaign=WhatsApp" className="mt-4 inline-block btn-paper" target="_blank" rel="noopener noreferrer">
              VER REPORTAGEM →
            </a>
          </div>
          <div className="max-w-3xl mx-auto zine-box p-6">
            <div className="font-mono text-ink/80 text-xs uppercase tracking-widest"></div>
            <div className="mt-2 font-display text-2xl text-ink">Revista Crescer</div>
            <p className="mt-3 font-mono text-ink/80 text-sm">
              
            </p>
            <a href="https://revistacrescer.globo.com/maes-e-pais/historias/noticia/2024/07/ela-e-trans-corte-de-cabelo-leva-pessoas-a-questionarem-sexualidade-de-menina-de-11-anos.ghtml?utm_source=Whatsapp&utm_medium=Social&utm_campaign=compartilhar" className="mt-4 inline-block btn-paper" target="_blank" rel="noopener noreferrer">
              VER REPORTAGEM →
            </a>
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
