import { createFileRoute, Link } from "@tanstack/react-router";
import luhHero from "@/assets/luh-hero.jpg";
import { StarScribble, BoltScribble, ArrowScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tia Luh — Sem Papas Na Língua | Media Kit" },
      { name: "description", content: "Mãe de 3, 16 anos no primeiro, independente e real oficial. +1M no TikTok. Baixe o media kit." },
      { property: "og:title", content: "Tia Luh — Sem Papas Na Língua" },
      { property: "og:description", content: "Mãe de 3, real desde os 16. Media Kit oficial." },
    ],
  }),
  component: HomePage,
});

const marqueePhrases = [
  "SEM ROMANTIZAR",
  "EU DISSE E REPITO",
  "MÃE DE 3",
  "REAL OFICIAL",
  "SEM PAPAS NA LÍNGUA",
  "VAMO DE VERDADE?",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-grain">
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 grid lg:grid-cols-12 gap-8 items-center">
          {/* Texto */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="stamp animate-stamp">REAL OFICIAL</span>
              <BoltScribble className="w-6 h-10 text-paper" />
            </div>

            <h1 className="font-display text-paper text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] tracking-tight">
              TIA LUH
              <span className="block text-blood">SEM PAPAS</span>
              <span className="block outline-text">NA LÍNGUA</span>
            </h1>

            <p className="mt-6 max-w-xl text-paper/85 text-lg font-mono leading-relaxed">
              Mãe de 3, <span className="bg-blood text-paper px-1">16 anos no primeiro</span>, independente e real oficial. Joinville, alt, humor ácido e zero coach.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/midia-kit-tia-luh.pdf" download className="btn-blood">
                ↓ BAIXAR MEDIA KIT
              </a>
              <Link to="/contato" className="btn-paper">
                FECHAR PARCERIA →
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-paper font-mono text-sm">
              <Stat label="TIKTOK" value="+1M" />
              <Stat label="INSTAGRAM" value="+180K" />
              <Stat label="VIEWS/MÊS" value="29M" />
            </div>
          </div>

          {/* Foto */}
          <div className="lg:col-span-5 relative">
            <div className="relative inline-block w-full max-w-md mx-auto">
              <div className="tape -top-3 left-8 rotate-[-6deg]" />
              <div className="tape -top-2 right-6 rotate-[8deg]" />
              <img
                src={luhHero}
                alt="Tia Luh — selfie no espelho"
                width={600}
                height={800}
                className="xerox-photo w-full border-[6px] border-paper shadow-[10px_10px_0_var(--blood)]"
              />
              <div className="absolute -bottom-6 -left-4 zine-box px-4 py-2 rotate-[-4deg]">
                <span className="font-hand text-lg">tô aqui na real, viu?</span>
              </div>
              <StarScribble className="absolute -top-10 -right-6 w-16 h-16 text-blood animate-shake" />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y-[3px] border-paper/20 bg-blood overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueePhrases, ...marqueePhrases, ...marqueePhrases].map((p, i) => (
              <span key={i} className="font-display text-paper text-2xl mx-6 tracking-widest">
                {p} <span className="text-paper/40">★</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TEASER QUEM SOU */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="stamp stamp-ink">QUEM EU SOU</span>
            <h2 className="mt-4 font-display text-ink text-6xl md:text-7xl leading-none">
              LUANA, 29.<br/>
              <span className="text-blood">3 FILHOS.</span><br/>
              ZERO FILTRO.
            </h2>
            <p className="mt-6 text-ink/80 max-w-md font-mono">
              Engravidei aos 16. Hoje moro em Joinville, sou mãe de 3 e divido a real da rotina, da maternidade adolescente, dos perrengues e das risadas. Sem coach, sem romantizar.
            </p>
            <Link to="/quem-sou" className="mt-6 inline-flex items-center gap-2 font-display text-ink text-xl border-b-4 border-blood pb-1">
              LER A HISTÓRIA <ArrowScribble className="w-12 h-5 text-blood" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Topic icon="⚡" title="MATERNIDADE" />
            <Topic icon="★" title="ADOLESCÊNCIA" />
            <Topic icon="✗" title="ROTINA" />
            <Topic icon="♥" title="DESABAFO" />
            <Topic icon="!" title="HUMOR ÁCIDO" />
            <Topic icon="●" title="REAL" />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <BoltScribble className="w-3 h-6 text-blood" />
      <div>
        <div className="font-display text-3xl leading-none text-paper">{value}</div>
        <div className="text-steel text-[10px] tracking-widest uppercase">{label}</div>
      </div>
    </div>
  );
}

function Topic({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="zine-box p-4 text-center hover:rotate-[-2deg] transition-transform">
      <div className="font-display text-3xl text-blood">{icon}</div>
      <div className="font-display text-sm tracking-widest mt-1">{title}</div>
    </div>
  );
}
