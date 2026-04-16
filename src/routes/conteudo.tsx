import { createFileRoute } from "@tanstack/react-router";
import { BoltScribble, StarScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/conteudo")({
  head: () => ({
    meta: [
      { title: "Conteúdo — Tia Luh" },
      { name: "description", content: "5 formatos de conteúdo: Desabafo Real Oficial, Storytime, Sem Romantizar, Humor do Dia e Verdade Que Ninguém Fala." },
      { property: "og:title", content: "Os formatos da Tia Luh" },
      { property: "og:description", content: "Templates de conteúdo: desabafo, storytime, humor ácido e mais." },
    ],
  }),
  component: ConteudoPage,
});

function ConteudoPage() {
  return (
    <section className="bg-ink-grain py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <span className="stamp">EU DISSE</span>
          <h1 className="mt-4 font-display text-paper text-6xl md:text-8xl leading-none">
            5 JEITOS<br/>
            <span className="text-blood">DE FALAR A REAL</span>
          </h1>
          <p className="mt-4 text-steel font-mono uppercase tracking-widest text-sm">Formatos · Templates · Tom</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* DESABAFO */}
          <Template
            tag="01"
            title="DESABAFO REAL OFICIAL"
            stamp="REAL OFICIAL"
            description="Câmera na mão, luz dura, eu falando o que ninguém quer ouvir."
            bg="bg-paper"
            text="text-ink"
          >
            <div className="text-center py-8">
              <div className="font-display text-4xl text-ink leading-none">"NÃO É FASE.<br/>É CANSAÇO MESMO."</div>
              <div className="mt-4 inline-block stamp animate-stamp">REAL OFICIAL</div>
            </div>
          </Template>

          {/* STORYTIME */}
          <Template
            tag="02"
            title="STORYTIME"
            stamp="EU DISSE"
            description="Gancho > caos > punchline. Três quadros, sem enrolação."
            bg="bg-ink"
            text="text-paper"
          >
            <div className="grid grid-cols-3 gap-2">
              {["GANCHO", "CAOS", "PUNCH"].map((s, i) => (
                <div key={s} className="border-[3px] border-paper p-3 aspect-square flex items-center justify-center font-display text-paper text-xl rotate-[-1deg]" style={{ rotate: `${(i-1)*2}deg` }}>
                  {s}
                </div>
              ))}
            </div>
          </Template>

          {/* SEM ROMANTIZAR */}
          <Template
            tag="03"
            title="SEM ROMANTIZAR"
            stamp="SEM ROMANTIZAR"
            description="Preto, bege e UMA palavra vermelha. Direto no peito."
            bg="bg-paper"
            text="text-ink"
          >
            <div className="text-center py-8 font-display text-4xl text-ink leading-tight">
              MATERNIDADE<br/>
              NÃO É <span className="text-blood">MÁGICA</span><br/>
              É TRABALHO
            </div>
          </Template>

          {/* HUMOR DO DIA */}
          <Template
            tag="04"
            title="HUMOR DO DIA"
            stamp="HOJE TEM"
            description="Meme caseiro, frase curta e um rabisco torto."
            bg="bg-ink"
            text="text-paper"
          >
            <div className="zine-box p-5 rotate-[-2deg] relative">
              <div className="font-hand text-2xl">"se eu chorar mais uma vez<br/>no banho, vai virar piscina"</div>
              <StarScribble className="absolute -top-4 -right-4 w-10 h-10 text-blood" />
            </div>
          </Template>

          {/* VERDADE QUE NINGUÉM FALA */}
          <Template
            tag="05"
            title="VERDADE QUE NINGUÉM FALA"
            stamp="POLÊMICO"
            description="Título condensado + 3 bullets afiados com raio."
            bg="bg-paper"
            text="text-ink"
            className="md:col-span-2"
          >
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Maternidade adolescente NÃO é fim.",
                "Você pode amar e querer espaço.",
                "Coach de mãe não paga sua conta.",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2">
                  <BoltScribble className="w-3 h-7 text-blood shrink-0 mt-1" />
                  <p className="font-mono text-ink">{t}</p>
                </div>
              ))}
            </div>
          </Template>
        </div>
      </div>
    </section>
  );
}

function Template({
  tag, title, stamp, description, bg, text, className = "", children,
}: {
  tag: string; title: string; stamp: string; description: string;
  bg: string; text: string; className?: string; children: React.ReactNode;
}) {
  return (
    <article className={`relative border-[4px] border-paper ${bg} ${text} p-6 ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="font-mono text-xs tracking-widest opacity-60">FORMATO {tag}</div>
          <h3 className="font-display text-2xl md:text-3xl leading-none mt-1">{title}</h3>
        </div>
        <span className="stamp animate-stamp text-xs whitespace-nowrap">{stamp}</span>
      </div>
      <div className="my-6">{children}</div>
      <p className="text-sm font-mono opacity-80 border-t border-current/20 pt-3">{description}</p>
    </article>
  );
}
