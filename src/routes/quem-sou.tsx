import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/luh-6293.jpg";
import photoDaviLuh from "@/assets/foto_daviluh.jpeg";
import photoAnaLuh from "@/assets/foto_analuh.jpeg";
import photoDavi from "@/assets/foto_davi.jpeg";
import photoAna from "@/assets/foto_ana.jpeg";
import vaselina from "@/assets/pet-vaselina.jpg";
import { ArrowScribble, BoltScribble, StarScribble, HeartScribble } from "@/components/Scribbles";

export const Route = createFileRoute("/quem-sou")({
  head: () => ({
    meta: [
      { title: "Quem Sou — Tia Luh" },
      { name: "description", content: "Luana Pessoa, 30 anos, mãe solo da Ana e do Davi, adotei o Ewerton aos 14. Mãe de 3 pets resgatados." },
      { property: "og:title", content: "Quem é a Tia Luh" },
      { property: "og:description", content: "Vida real, lifestyle, maternidade, guia pra pais de teens e dicas leves." },
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
              luana, 30
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="stamp">EU DISSE</span>
            <h1 className="mt-4 text-paper font-display text-6xl md:text-7xl leading-none">
              VIDA REAL.<br/>
              MATERNIDADE LEVE.<br/>
              <span className="text-blood">SEM ROMANTIZAR.</span>
            </h1>

            <div className="mt-8 space-y-5 text-paper/90 font-mono leading-relaxed text-lg">
              <p>
                <strong className="bg-blood text-paper px-1">Luana Pessoa, 30 anos</strong>, mãe solo da Ana e do Davi. Adotei o Ewerton aos 14 (hoje ele tem 18).
              </p>
              <p>
                Mãe de 3 pets resgatados — entre eles, a Vaselina. Influencer digital há 2 anos: vida real, lifestyle, maternidade na adolescência, guia pra pais de teens, dicas de rotina e o que eu consumo.
              </p>
              <p className="font-display text-2xl text-paper border-l-4 border-blood pl-4">
                "BEM HUMORADO E LEVE — PRA TODAS AS IDADES."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Bullet icon={<BoltScribble className="w-4 h-8 text-blood"/>} k="30" v="ANOS" />
              <Bullet icon={<StarScribble className="w-7 h-7 text-blood"/>} k="2A" v="INFLUENCER" />
              <Bullet icon={<HeartScribble className="w-7 h-7 text-blood"/>} k="3" v="PETS RESGATADOS" />
              <Bullet icon={<BoltScribble className="w-4 h-8 text-blood"/>} k="JLLE" v="JOINVILLE/SC" />
            </div>
          </div>
        </div>
      </section>

      {/* FAMÍLIA — quem é quem */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="font-display text-ink text-5xl md:text-6xl leading-none">
              QUEM É <span className="text-blood">QUEM</span>
            </h2>
            <span className="stamp stamp-ink">FAMÍLIA</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 relative">
              <div className="tape top-[-14px] left-12 rotate-[-3deg]" />
              <div className="tape top-[-12px] right-16 rotate-[6deg]" />
              <div className="grid grid-cols-2 gap-4">
                <PhotoPanel
                  src={photoDaviLuh}
                  alt="Luh com o Davi"
                  caption="Luh e o Davi"
                  tapeClass="-top-4 left-6 rotate-[-4deg]"
                />
                <PhotoPanel
                  src={photoAnaLuh}
                  alt="Luh com a Ana"
                  caption="Luh e a Ana"
                  tapeClass="-top-4 right-6 rotate-[4deg]"
                />
                <PhotoPanel
                  src={photoDavi}
                  alt="Davi sozinho"
                  caption="Esse é o Davi"
                  tapeClass="top-1 left-8 rotate-[2deg]"
                  withArrow
                />
                <PhotoPanel
                  src={photoAna}
                  alt="Ana sozinha"
                  caption="Essa é a Ana"
                  tapeClass="top-1 right-8 rotate-[-2deg]"
                  withArrow
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="zine-box p-4 relative">
                <img src={vaselina} alt="Vaselina, gata resgatada" width={1024} height={1024} loading="lazy"
                  className="xerox-photo w-full border-[3px] border-ink" />
                <div className="absolute -top-3 -right-3 stamp">VASELINA</div>
              </div>
              <p className="mt-4 font-mono text-ink">
                Mãe de pet também é mãe — e na minha casa entra todo mundo que precisa de teto.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              "Vida real, lifestyle e o que eu consumo",
              "Maternidade na adolescência, sem peso",
              "Guia pra pais de adolescentes",
              "Dicas de rotina, leveza e humor",
            ].map((t, i) => (
              <div key={i} className="zine-box p-5 flex items-start gap-3">
                <BoltScribble className="w-4 h-9 text-blood shrink-0 mt-1" />
                <p className="font-mono text-ink text-lg">{t}</p>
              </div>
            ))}
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

function PhotoPanel({
  src,
  alt,
  caption,
  tapeClass,
  withArrow,
}: {
  src: string;
  alt: string;
  caption: string;
  tapeClass: string;
  withArrow?: boolean;
}) {
  return (
    <div className="relative overflow-hidden border-[5px] border-ink shadow-[8px_8px_0_var(--blood)] bg-ink-grain">
      <div className={`tape absolute ${tapeClass}`} />
      <img src={src} alt={alt} width={640} height={640} loading="lazy"
        className="xerox-photo w-full h-full object-cover" />
      <div className="absolute bottom-3 left-3 right-3 bg-paper/80 border-2 border-ink p-3">
        <div className="font-display text-sm text-ink uppercase tracking-[0.2em]">
          {caption}
        </div>
      </div>
      {withArrow ? (
        <div className="absolute top-3 right-3 flex items-center gap-2 text-blood font-display text-sm uppercase tracking-[0.2em]">
          <ArrowScribble className="w-12 h-4" />
          <span>{caption}</span>
        </div>
      ) : null}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-2 border-ink bg-paper px-3 py-1 font-display tracking-widest text-ink text-xs">
      {children}
    </span>
  );
}
