import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/luh-portrait.jpg";
import collage from "@/assets/luh-collage.jpg";
import { BoltScribble, StarScribble, HeartScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/quem-sou")({
  head: () => ({
    meta: [
      { title: "Quem Sou — Tia Luh" },
      { name: "description", content: "Luana Cristina, 29 anos, mãe de 3, moro em Joinville. Engravidei aos 16 e falo o que penso." },
      { property: "og:title", content: "Quem é a Tia Luh" },
      { property: "og:description", content: "Mãe na adolescência, 3 filhos, alt, sem coach." },
    ],
  }),
  component: QuemSouPage,
});

function QuemSouPage() {
  return (
    <>
      <section className="bg-ink-grain py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 relative">
            <div className="tape -top-3 left-10 rotate-[-5deg]" />
            <img src={portrait} alt="Luana, a Tia Luh" width={500} height={700} loading="lazy"
              className="xerox-photo w-full border-[6px] border-paper shadow-[10px_10px_0_var(--blood)]" />
            <div className="absolute -bottom-4 -right-3 zine-box px-3 py-1 rotate-[4deg] font-hand text-lg">
              luana, 29
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="stamp">EU DISSE</span>
            <h1 className="mt-4 text-paper font-display text-6xl md:text-7xl leading-none">
              MÃE NA<br/>
              ADOLESCÊNCIA.<br/>
              <span className="text-blood">SEM ROMANTIZAR.</span>
            </h1>

            <div className="mt-8 space-y-5 text-paper/90 font-mono leading-relaxed text-lg">
              <p>
                Engravidei aos <strong className="bg-blood text-paper px-1">16 anos</strong>. Hoje tenho 29, moro em Joinville (SC) e sou mãe de 3.
              </p>
              <p>
                Crio conteúdo real sobre maternidade, adolescência, rotina e tudo que ninguém fala. Humor ácido, desabafo de verdade, zero coach de Instagram.
              </p>
              <p className="font-display text-2xl text-paper border-l-4 border-blood pl-4">
                "FALO O QUE PENSO. SE INCOMODA, ROLA PRA CIMA."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Bullet icon={<BoltScribble className="w-4 h-8 text-blood"/>} k="3" v="FILHOS" />
              <Bullet icon={<StarScribble className="w-7 h-7 text-blood"/>} k="29" v="ANOS" />
              <Bullet icon={<HeartScribble className="w-7 h-7 text-blood"/>} k="JLLE" v="JOINVILLE/SC" />
              <Bullet icon={<BoltScribble className="w-4 h-8 text-blood"/>} k="ALT" v="ESTILO PRÓPRIO" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE O QUE FALO */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="font-display text-ink text-5xl md:text-6xl leading-none">
              NO MEU PERFIL,<br/>
              <span className="text-blood">EU FALO SOBRE...</span>
            </h2>
            <span className="stamp stamp-ink">SEM ROMANTIZAR</span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Maternidade real (chorar no banheiro também conta)",
              "Adolescência, juventude e papo de menstruação",
              "História de família que ninguém posta",
              "Rotina leve, divertida e meio caótica",
            ].map((t, i) => (
              <div key={i} className="zine-box p-5 flex items-start gap-3">
                <BoltScribble className="w-4 h-9 text-blood shrink-0 mt-1" />
                <p className="font-mono text-ink text-lg">{t}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 relative">
            <div className="tape top-[-14px] left-12 rotate-[-3deg]" />
            <div className="tape top-[-12px] right-16 rotate-[6deg]" />
            <img src={collage} alt="Luh com a família" width={1200} height={500} loading="lazy"
              className="w-full border-[5px] border-ink shadow-[8px_8px_0_var(--blood)]" />
          </div>
        </div>
      </section>
    </>
  );
}

function Bullet({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div className="border-2 border-paper p-3 flex items-center gap-3">
      <div className="shrink-0">{icon}</div>
      <div>
        <div className="font-display text-2xl text-paper leading-none">{k}</div>
        <div className="text-steel text-[10px] tracking-widest uppercase">{v}</div>
      </div>
    </div>
  );
}
