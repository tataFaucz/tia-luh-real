import { createFileRoute } from "@tanstack/react-router";
import mirror from "@/assets/luh-6218.jpg";
import { BoltScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/numeros")({
  head: () => ({
    meta: [
      { title: "Números — Tia Luh" },
      { name: "description", content: "+1M no TikTok, +180k no Instagram, 29M views/mês. Audiência 70%+ entre 18 e 34 anos." },
      { property: "og:title", content: "Os números da Tia Luh" },
      { property: "og:description", content: "Audiência, alcance e engajamento." },
    ],
  }),
  component: NumerosPage,
});

const tiktokAges = [
  { range: "18-24", pct: 42.3 },
  { range: "25-34", pct: 30.9 },
  { range: "35-44", pct: 13.4 },
  { range: "55+", pct: 7.2 },
  { range: "45-54", pct: 6.2 },
];
const igAges = [
  { range: "18-24", pct: 36.4 },
  { range: "25-34", pct: 30.7 },
  { range: "35-44", pct: 17 },
  { range: "13-17", pct: 15.9 },
];

function NumerosPage() {
  return (
    <>
      <section className="bg-ink-grain py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h1 className="font-display text-paper text-6xl md:text-8xl leading-none">
              OS <span className="text-blood">NÚMEROS</span><br/>NÃO MENTEM
            </h1>
            <span className="stamp animate-stamp">SE EU APROVO, EU INDICO</span>
          </div>

          {/* Big numbers */}
          <div className="grid md:grid-cols-3 gap-5">
            <BigStat n="+1M" label="Seguidores TikTok" sub="Foco em Reels · alto engajamento" />
            <BigStat n="+180K" label="Seguidores Instagram" sub="Reels autênticos e virais" />
            <BigStat n="70%+" label="Audiência 18–34" sub="Mulheres jovens, mães e adolescentes" />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
          <AudienceChart title="TIKTOK" data={tiktokAges} />
          <AudienceChart title="INSTAGRAM" data={igAges} />
        </div>
      </section>

      <section className="bg-ink-grain py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="tape -top-3 left-10 rotate-[-4deg]" />
            <img src={mirror} alt="Luh selfie" width={500} height={700} loading="lazy"
              className="xerox-photo w-full max-w-md mx-auto border-[6px] border-paper shadow-[10px_10px_0_var(--blood)]" />
          </div>
          <div>
            <span className="stamp">CLIPPING</span>
            <h2 className="mt-4 font-display text-paper text-5xl leading-none">
              JÁ SAIU EM:
            </h2>
            <ul className="mt-6 space-y-4 text-paper font-mono">
              <Press name="PÁGINA FEMININA" quote="Reportagem em página feminina sobre vida real, lifestyle e maternidade leve." />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function BigStat({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div className="zine-box p-6 relative">
      <BoltScribble className="absolute -top-5 -left-3 w-5 h-12 text-blood" />
      <div className="font-display text-blood text-7xl leading-none">{n}</div>
      <div className="font-display text-2xl text-ink mt-2">{label}</div>
      <div className="font-mono text-xs text-ink/70 mt-2">{sub}</div>
    </div>
  );
}

function AudienceChart({ title, data }: { title: string; data: { range: string; pct: number }[] }) {
  return (
    <div className="border-[4px] border-ink bg-paper p-6 relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-3xl text-ink">{title}</h3>
        <span className="stamp stamp-ink text-xs">QUEM ME SEGUE</span>
      </div>
      <ul className="space-y-3">
        {data.map((d) => (
          <li key={d.range} className="font-mono">
            <div className="flex justify-between text-sm text-ink mb-1">
              <span className="font-display tracking-widest text-lg">{d.range}</span>
              <span className="font-display text-lg">{d.pct}%</span>
            </div>
            <div className="h-4 border-2 border-ink bg-ink/5">
              <div className="h-full bg-blood" style={{ width: `${d.pct * 2}%`, maxWidth: "100%" }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Press({ name, quote }: { name: string; quote: string }) {
  return (
    <li className="border-l-4 border-blood pl-4">
      <div className="font-display tracking-widest text-paper">{name}</div>
      <div className="text-paper/70 text-sm">{quote}</div>
    </li>
  );
}
